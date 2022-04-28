const http = require("http");
const host = "localhost";
const port = 3000;

const requestListener = function (req, res) {
  const net1 = req.url.split("?");
  const net2 = net1[1].split("&");
  const dico = {};
  console.log(net2);
  for (let i = 0; i < net2.length; i++) {
    let part = net2[i].split("=");
    dico[part[0]] = part[1];
  }

  console.log(dico);

  res.writeHead(200);
  res.end(`Hello mister ${dico[0]}`);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
