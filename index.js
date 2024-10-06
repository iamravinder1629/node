const express = require('express')

const router = require("./routes/usersRoute")

const app = express();

app.use(express.json());


app.use("/api", router)


app.listen(8000, () => { console.log("server listening on port 8000") })



