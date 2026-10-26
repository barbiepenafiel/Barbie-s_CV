import { NextResponse } from "next/server";

export async function GET() {
  const username = process.env.GITHUB_PROFILE_USERNAME;
  if (!username || !/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username)) {
    console.error("GitHub profile configuration is missing or invalid.");
    return NextResponse.json(
      { error: "Profile information is unavailable." },
      { status: 503 },
    );
  }
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const data: unknown = await response.json();
    if (
      !data ||
      typeof data !== "object" ||
      !("public_repos" in data) ||
      typeof data.public_repos !== "number" ||
      !("login" in data) ||
      typeof data.login !== "string" ||
      data.login.toLowerCase() !== username.toLowerCase()
    )
      throw new Error("Unexpected GitHub response");
    return NextResponse.json({
      username: data.login,
      publicRepositories: data.public_repos,
    });
  } catch (error) {
    console.error(
      "GitHub profile request failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return NextResponse.json(
      { error: "Profile information is temporarily unavailable." },
      { status: 503 },
    );
  }
}
