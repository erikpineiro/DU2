
async function handler (request) {

  const html = "<h1>Hello Web!</h1>";
  const options = {
  status: 200,
  statusText: "OK",
  headers: { "Content-Type": "text/html" }
  };
  const response = new Response(html, options);
  return response;
}


Deno.serve(handler);