const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello from APP-1\n`);
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
