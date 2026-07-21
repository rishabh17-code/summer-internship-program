const http = require("http");

const server = http.createServer((req, res) => {

    // Home Page
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to Home Page</h1>");
    }

    // Login Page
    else if (req.url === "/login" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Login Page</h1>");
    }

    // Product Page
    else if (req.url === "/product" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Product Page</h1>");
    }

    // Filter Page
    else if (req.url === "/filter" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Filter Products</h1>");
    }

    // Details Page
    else if (req.url === "/details" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Product Details Page</h1>");
    }

    // 404 Page
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }

});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});