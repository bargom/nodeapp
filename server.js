var http=require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-type":"text/plain"});
    res.end("Hello from nodejs");
}).listen(process.env.PORT, process.env.IP);
console.log("server started");