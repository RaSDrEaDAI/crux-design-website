"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects, type ProjectSettings } from "@/data/projects";

interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  image: string;
  visible: boolean;
  order: number;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [items, setItems] = useState<ProjectItem[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  // Check auth on mount
  useEffect(() => {
    fetch("/api/admin/auth")
      .then((r) => {
        if (r.ok) setAuthenticated(true);
      })
      .finally(() => setChecking(false));
  }, []);

  // Load settings when authenticated
  useEffect(() => {
    if (!authenticated) return;
    fetch("/api/admin/projects")
      .then((r) => r.json())
      .then((settings: ProjectSettings) => {
        const merged = projects.map((p, i) => ({
          slug: p.slug,
          title: p.title,
          category: p.category,
          image: p.image,
          visible: settings[p.slug]?.visible ?? true,
          order: settings[p.slug]?.order ?? i,
        }));
        merged.sort((a, b) => a.order - b.order);
        setItems(merged);
      });
  }, [authenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
    } else {
      setError("Invalid password");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setAuthenticated(false);
    setItems([]);
  };

  const toggleVisibility = (slug: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.slug === slug ? { ...item, visible: !item.visible } : item
      )
    );
    setSaved(false);
  };

  const handleDragStart = (index: number) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index: number) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    if (dragItem.current === null || dragOverItem.current === null) return;
    const reordered = [...items];
    const [dragged] = reordered.splice(dragItem.current, 1);
    reordered.splice(dragOverItem.current, 0, dragged);
    const updated = reordered.map((item, i) => ({ ...item, order: i }));
    setItems(updated);
    dragItem.current = null;
    dragOverItem.current = null;
    setSaved(false);
  };

  const handleSave = useCallback(async () => {
    setSaving(true);
    const settings: ProjectSettings = {};
    items.forEach((item) => {
      settings[item.slug] = { visible: item.visible, order: item.order };
    });
    await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    setSaved(true);
  }, [items]);

  if (checking) {
    return (
      <div className="min-h-screen bg-purple-dark flex items-center justify-center">
        <p className="text-white/60">Loading...</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-purple-dark flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-purple/60 border border-purple-light/30 rounded-xl p-8 w-full max-w-sm"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full px-4 py-3 rounded-lg bg-purple-dark border border-purple-light/30 text-white placeholder-white/40 focus:outline-none focus:border-cyan mb-4"
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-cyan text-purple-dark font-semibold py-3 rounded-lg hover:bg-cyan/80 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-dark">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">
            Portfolio <span className="text-cyan">Admin</span>
          </h1>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              disabled={saving || saved}
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                saved
                  ? "bg-green-600 text-white cursor-default"
                  : saving
                  ? "bg-cyan/50 text-purple-dark cursor-wait"
                  : "bg-cyan text-purple-dark hover:bg-cyan/80"
              }`}
            >
              {saved ? "Saved" : saving ? "Saving..." : "Save Changes"}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-purple/40 border border-purple-light/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-cyan">{items.length}</div>
            <div className="text-white/50 text-sm">Total Projects</div>
          </div>
          <div className="bg-purple/40 border border-purple-light/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">
              {items.filter((i) => i.visible).length}
            </div>
            <div className="text-white/50 text-sm">Visible</div>
          </div>
          <div className="bg-purple/40 border border-purple-light/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-400">
              {items.filter((i) => !i.visible).length}
            </div>
            <div className="text-white/50 text-sm">Hidden</div>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-white/40 text-sm mb-4">
          Drag rows to reorder. Toggle visibility with the switch. Click
          &quot;Save Changes&quot; to persist.
        </p>

        {/* Project List */}
        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={item.slug}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
              className={`flex items-center gap-4 p-4 rounded-lg border transition-colors cursor-grab active:cursor-grabbing ${
                item.visible
                  ? "bg-purple/40 border-purple-light/20 hover:border-cyan/30"
                  : "bg-purple/20 border-purple-light/10 opacity-60"
              }`}
            >
              {/* Drag handle */}
              <div className="text-white/30 select-none flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle cx="5" cy="3" r="1.5" />
                  <circle cx="11" cy="3" r="1.5" />
                  <circle cx="5" cy="8" r="1.5" />
                  <circle cx="11" cy="8" r="1.5" />
                  <circle cx="5" cy="13" r="1.5" />
                  <circle cx="11" cy="13" r="1.5" />
                </svg>
              </div>

              {/* Order number */}
              <span className="text-white/30 text-sm font-mono w-8 text-right flex-shrink-0">
                {index + 1}
              </span>

              {/* Thumbnail */}
              <div className="w-12 h-9 rounded overflow-hidden flex-shrink-0 bg-purple-light/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{item.title}</div>
                <div className="text-white/40 text-xs truncate">
                  {item.category}
                </div>
              </div>

              {/* Toggle */}
              <button
                onClick={() => toggleVisibility(item.slug)}
                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${
                  item.visible ? "bg-cyan" : "bg-white/20"
                }`}
                title={item.visible ? "Visible — click to hide" : "Hidden — click to show"}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    item.visible ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
