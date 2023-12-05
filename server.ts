import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT ?? 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.all("*", (req, res) => handle(req, res));
  server.listen(port);
});