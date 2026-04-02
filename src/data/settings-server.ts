import fs from "fs";
import path from "path";
import type { ProjectSettings } from "./projects";

const SETTINGS_PATH = path.join(process.cwd(), "src/data/project-settings.json");

export function loadProjectSettings(): ProjectSettings {
  try {
    const data = fs.readFileSync(SETTINGS_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return {};
  }
}
