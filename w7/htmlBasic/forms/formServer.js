import express from "express"

const app = express()

app.use(express.urlencoded())

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.post("/register", (req, res) => {
    console.log(req.body);
    if (!req.body.name || !req.body.email){
        return res.status(400).send("name and email are required")
    }
    res.status(201).send({message: "registered"})
})
app.listen(3000, () => console.log("listening..."))