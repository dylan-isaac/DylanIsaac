import type { APIRoute } from "astro";
import { createRouteHandler } from "uploadthing/server";
import { uploadRouter } from "../../../server/uploadthing";

export const prerender = false;

const handlers = createRouteHandler({
  router: uploadRouter,
  config: {
    token: import.meta.env.UPLOADTHING_TOKEN,
    logLevel: "debug", // Enable debug logging
  },
});

export const GET: APIRoute = async ({ request }) => {
  console.log("GET request to uploadthing API");
  return handlers.GET(request);
};

export const POST: APIRoute = async ({ request }) => {
  console.log("POST request to uploadthing API");
  try {
    const response = await handlers.POST(request);
    console.log("Response status:", response.status);
    return response;
  } catch (error) {
    console.error("UploadThing API error:", error);
    return new Response(JSON.stringify({ error: "Upload failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};