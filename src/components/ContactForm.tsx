"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

type Field = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [fields, setFields] = useState<Field>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const subject = encodeURIComponent(`Message from ${fields.name} — via CV`);
    const body = encodeURIComponent(
      `Hi Barbie,\n\nMy name is ${fields.name} (${fields.email}).\n\n${fields.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
      setFields({ name: "", email: "", message: "" });
    }, 600);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-sm border border-accent/30 bg-accent/5 px-8 py-16 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-cream text-xl font-bold">
          ✓
        </span>
        <p className="text-lg font-semibold text-ink">Message ready to send!</p>
        <p className="text-sm text-ink/60">
          Your email client opened with the message pre-filled. Just hit send.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent underline-offset-4 hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="Your name"
            className="rounded-sm border border-line bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-accent"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="rounded-sm border border-line bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity…"
          className="resize-none rounded-sm border border-line bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group flex items-center justify-between gap-4 bg-forest px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-accent disabled:opacity-60"
      >
        <span>{status === "sending" ? "Opening email…" : "Send Message"}</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      </button>
    </form>
  );
}
