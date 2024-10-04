const http = require('http');
const fs = require('fs');

const index = fs.readFileSync("./index.html", "utf8");
const jsonData = fs.readFileSync("./data.json", "utf8");

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.setHeader("content-type", "text/html");
            res.end(index);
            break;
        case "/users":
            res.setHeader("content-type", "application/json")
            res.end(jsonData)
            break;
        default:
            res.writeHeader(404)
            res.end("page not found");
    }

})

server.listen(8000, () => { console.log("server listening on port 8000") })