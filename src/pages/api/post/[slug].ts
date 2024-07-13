import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const { slug } = params;

  const post = await getEntry("blog", slug as string);

  if (!post) {
    return new Response(
      JSON.stringify({
        msg: `Post ${slug} not found`,
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new Response(JSON.stringify(post), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(JSON.stringify(body), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const PUT: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(JSON.stringify(body), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const PATCH: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(JSON.stringify(body), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const DELETE: APIRoute = async ({ params, request }) => {
  const { slug } = params;

  return new Response(JSON.stringify({slug}), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

