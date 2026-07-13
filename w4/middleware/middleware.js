import express from "express"

// // 6
// function logger(req, res, next) {
//     console.log(req.method, req.url);
// }

// // 7
// const app = express();

// app.use(express.json())

// app.post('/users', (req, res) => {
//   console.log(req.body); // צריך להדפיס אובייקט ולא undefined
//   res.json({ received: req.body });
// });

// // 8


// // 11
// const requestTimer = (erq, res, next) => {
//     req.startTime  = new Date().now()
// }

// 12

const logger = (req, res, next) => {
    console.log(`${req.method}| ${req.url}`);
    next()
    }

const authMiddleware = (req, res, next) => {
    if (req.headers.authorization === "ok") next()
    res.status(400).send({message: "Not Authorized"})
}
const server = express()

server.use(express.json())

server.use(logger)

server.get("/public", (req, res) => {
    res.send({message: "Public"})
})

server.get("/private", authMiddleware, (req, res) => {
    res.send({message:"Secret"})
})

server.listen(3000, console.log("server listening..."))

// 13
const validateBody = (arr) => {
    
}