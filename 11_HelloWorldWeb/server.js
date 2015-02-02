var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/html"});

    response.write("<h1>Hello World</h1>");

    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
