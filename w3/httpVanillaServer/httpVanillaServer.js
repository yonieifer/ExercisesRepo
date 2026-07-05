import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    } else if (req.url === "/about") {
        res.end("About Page");
    } else if (req.url === "contact") {
        res.end("Contact Page");
    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});
// server.listen(3000, () => console.log("running..."));


const server2 = http.createServer((req ,res) => {
    if (req.url === "/users") {
        if (req.method === "GET") {
            res.end("Users list")
        } else if (req.method === "POST") {
            res.end("User created")
        } else {
            res.end("Method Not Allowed")
        }
    } else {
        res.statusCode = 404
    }
})
server.listen(3001, () => console.log("running..."));
