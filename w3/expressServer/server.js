import fs from "fs/promises";
import express from "express";
import { createJson, loadUsers, writeUsers } from "./fsServices.js";
import {validNewUser} from "./validateUser.js";

await createJson(process.cwd());

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("hello from server!"));

app.get("/users", async (req, res) => {
    const users = await loadUsers();
    res.status(200).json({ data: users });
});

app.get("/users/search", async (req, res) => {
    const { name } = req.query;
    const users = await loadUsers();
    const user = users.find((u) => u.name === name);
    if (!user) return res.status(404).send(`user ${name} not found`);
    res.json({ data: user });
});

app.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    const users = await loadUsers();
    const user = users.find((u) => u.id === +id);
    if (!user) return res.status(404).send(`user ${id} not found`);
    res.json({ data: user });
});

app.post("/users", async (req, res) => {
    try {
        const { name, age, password } = req.body;

        if (!validNewUser(name, age, password)) {
            return res.status(400).send("invalid details");
        }
        const users = await loadUsers();
        const id = Math.max(0, ...users.map((u) => u.id)) + 1;
        users.push({ id, name, age, password });
        await writeUsers(users);

        res.status(201).send("user created");
    } catch (error) {
        console.log(error);
        res.status(500).send("server internal error");
    }
});

app.put("/users", async(req, res) => {
    try {
        const users = await loadUsers();
        const { id } = req.query;
        const user = users.find((u) => u.id === +id);

        const { name, age, password } = req.body;
        Object.assign(user, {name, age, password})
        await writeUsers(users)
        res.send("updated")
        
    } catch (error) {
        console.log(error);
        res.status(500).send("server internal error");
    }
});

app.listen(3000, () => console.log("app is running and listening..."));
