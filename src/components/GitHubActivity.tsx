"use client";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { GitHubIcon } from "./icons";

export function GitHubActivity() {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<{ publicRepositories: number } | null>(
    null,
  );
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github", { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Profile unavailable");
        const data = await response.json();
        if (typeof data.publicRepositories !== "number")
          throw new Error("Invalid response");
        if (!controller.signal.aborted) {
          setResult(data);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus("error");
      });
    return () => controller.abort();
  }, [attempt]);
  return (
    <aside className="github-activity" aria-labelledby="github-activity-title">
      <GitHubIcon />
      <div>
        <h2 id="github-activity-title">A little more of my code.</h2>
        <p role="status">
          {status === "loading"
            ? "Checking my public GitHub profile…"
            : status === "ready"
              ? `${result?.publicRepositories} public repositories on GitHub. Explore the code behind my learning and projects.`
              : "My GitHub profile is still a click away. Live details are temporarily unavailable."}
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Visit my GitHub <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        {status === "error" && (
          <button
            type="button"
            className="text-link github-retry"
            onClick={() => {
              setStatus("loading");
              setAttempt((value) => value + 1);
            }}
          >
            Try again
          </button>
        )}
      </div>
    </aside>
  );
}
