const express = require("express");
const next = require("next");

const PORT = process.env.NODE_ENV === "dev" ? 8080 : 3000;
const dev = process.env.NODE_ENV !== "prod";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  console.log(process.env.NODE_ENV)

  server.get('/articles/:alias', (req, res) => {
    return app.render(req, res, '/articles', { alias: req.params.alias })
  })

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
