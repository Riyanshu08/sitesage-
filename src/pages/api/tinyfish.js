export const prerender = false;

export async function POST({ request }) {
  try {
    const body = await request.json();
    const targetUrl = body.url;

    const response = await fetch("https://agent.tinyfish.ai/v1/automation/run-sse", {
      method: "POST",
      headers: {
        "X-API-Key": "sk-tinyfish-wJNtIplXmFqpT5hM5XVyvrvGSdg73PxF",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: targetUrl,
        goal: "Extract key site insights and content"
      })
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}