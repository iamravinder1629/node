const fs = require('fs');
const express = require('express')

const app = express();

app.use(express.json());

const jsonData = JSON.parse(fs.readFileSync("./data.json", "utf8"));

// Read GET request /users
app.get("/users", (req, res) => {
    res.json(jsonData)
})

// Read GET request /users/:id
app.get("/users/:id", (req, res) => {
    // req.params always string type we have to convert into number

    const id = +req.params.id;
    const user = jsonData.find(p => p.id === id)
    if (user) {
        res.send(user)
    } else {
        res.end("user not found")
    }
})

// Create new user POST request /users
app.post("/users", (req, res) => {
    const newUser = req.body;
    console.log(newUser)
    jsonData.push(newUser);
    res.send(newUser)
});



app.listen(8000, () => { console.log("server listening on port 8000") })