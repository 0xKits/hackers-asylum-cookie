import type { APIRoute } from "astro";

const robots = `
Hello, World!
You've found my secret lair
Here's one of my favorite posts! \`/posts/cookies/\`
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
