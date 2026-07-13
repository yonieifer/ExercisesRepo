import express from "express"

const app = express()

app.use(express.json())
// 1
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})

// 5
function verifyRegister(req, res, next) {    
    if (req.body.password.length < 8) {
        return res.status(400).send({message: "Password must be at least 8 chars."})
    }
    next()
}

app.post("/register", verifyRegister, (req, res) => {
    const newUser = {
        name: req.body.name,
        password: req.body.password
    }
    res.send(newUser)
})


// 10
app.get("/search", (req, res) => {
    if (!req.query.q) {
        return res.status(400).send("no q in search query")
    }
})

// 11
app.use((req, res) => {
    if (req.ip === "123.123.123.123") {
        res.status(403)
        res.send("Your IP is blocked")
    }
})

// 15
app.post("/upload", (req, res) => {
    if (!req.body.fileName) {
        return resstatus(400).send("No file name provided")
    }
})

// 20
const validLength = (req, res, next) => {
    if (req.body.text.length > 200) {
        return res.status(413).send("Payload too large")
    }
    next()
}

// 21
const doubleConditions = (req, res, next) => {
    if (req.query.admin !== true || req.header.x-api-key !== "abc123") {
        return res.status(400).send("nop")
    }
    next()
}
app.get("secure-data", doubleConditions, (req, res) => {
    res.send("all good!")
})



app.listen(3000, () => console.log("listening..."))