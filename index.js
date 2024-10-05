const fs = require('fs');
const express = require('express')

const index = fs.readFileSync("./index.html", "utf8");
const jsonData = fs.readFileSync("./data.json", "utf8");

const app = express();
app.get("/:id", (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send("<h1>hell from server</h1>")
})

app.listen(8000, () => { console.log("server listening on port 8000") })