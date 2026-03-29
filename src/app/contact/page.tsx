"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up form submission (API route, email service, etc.)
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-purple to-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in <span className="text-magenta">Touch</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Ready to start a project or have questions about how we can help?
              Drop us a message and we&apos;ll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-purple/40 border border-purple-light/20 rounded-xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-cyan text-5xl mb-4">&#10003;</div>
                  <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-white/60">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-purple-dark border border-purple-light/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-purple-dark border border-purple-light/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      What are you interested in?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-purple-dark border border-purple-light/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design & Development</option>
                      <option value="ai-integration">AI Integration</option>
                      <option value="marketing">Marketing & Branding</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="automation">Business Automation</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-purple-dark border border-purple-light/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-magenta hover:bg-magenta-light text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Let&apos;s Build Something <span className="text-cyan">Great</span>
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Whether you&apos;re a small business looking to establish your online
                  presence, or an established company ready to integrate AI into your
                  operations — we&apos;re here to help you take the next step.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple/60 border border-purple-light/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-white/60 text-sm">Southwest Florida</p>
                    <p className="text-white/40 text-sm">Originally from Soho, NYC</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple/60 border border-purple-light/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-white/60 text-sm">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple/60 border border-purple-light/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Model</h3>
                    <p className="text-white/60 text-sm">
                      Remote-first — serving clients across SWFL and beyond
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
