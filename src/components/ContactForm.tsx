"use client";
import { useState } from "react";
import { profile } from "@/lib/content";
import { ArrowUpRightIcon } from "./icons";
export function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Hi ${profile.firstName},\n\n${data.get("message")}\n\nFrom: ${data.get("name")}\nReply to: ${data.get("email")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setPrepared(true);
  }
  return (
    <form
      onSubmit={handleSubmit}
      action={`mailto:${profile.email}`}
      method="post"
      encType="text/plain"
      className="space-y-5"
    >
      <p id="email-help" className="text-xs leading-6 text-muted">
        This form prepares a draft in your email app. Review and send it there;
        no message is sent by this website.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block">
            Your name
          </label>
          <input
            className="field"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Full name"
            required
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow mb-2 block">
            Your email
          </label>
          <input
            className="field"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="eyebrow mb-2 block">
          What’s on your mind?
        </label>
        <textarea
          className="field min-h-36 resize-y"
          id="message"
          name="message"
          placeholder="Tell me about your project or opportunity…"
          required
          rows={4}
          maxLength={3000}
        />
      </div>
      <button
        className="button button-primary w-full"
        type="submit"
        aria-describedby="email-help"
      >
        Prepare Email
        <ArrowUpRightIcon />
      </button>
      <div role="status" className="text-xs leading-6 text-muted">
        {prepared && (
          <>
            Email draft requested. If your email app didn’t open,{" "}
            <a
              className="underline underline-offset-4"
              href={`mailto:${profile.email}`}
            >
              email me directly
            </a>
            . Your text is kept here so you can copy it.
          </>
        )}
      </div>
    </form>
  );
}
