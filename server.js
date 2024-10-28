import http from "node:http"

const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("Hello brother")
})

server.listen(9090, () => {
        console.log("Server running on http://localhost:9090")
})