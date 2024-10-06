const fs = require('fs');
const path = require('path');

const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data.json'), "utf8"))


// get all users
const getUsers = (req, res) => {
    res.json(jsonData)
}


// get user by id
const getUser = (req, res) => {
    // req.params always string type we have to convert into number
    const id = +req.params.id;
    const user = jsonData.find(p => p.id === id)
    if (user) {
        res.send(user)
    } else {
        res.end("user not found")
    }
}

// create a new user 
const createUser = (req, res) => {
    jsonData.push(req.body);
    res.send("create successfully")
}

// delete user by id
const deleteUser = (req, res) => {
    const index = jsonData.findIndex((user) => user.id === +req.params.id)
    jsonData.splice(index, 1);
    res.send("delete successfully")
}

// update user by id
const updateUser = (req, res) => {
    console.log(req.body)
    const index = jsonData.findIndex((user) => user.id === +req.params.id)
    const oldData = jsonData[index];
    jsonData.splice(index, 1, { ...jsonData[index], ...req.body });
    res.send([oldData, jsonData[index]])
}

module.exports = { getUsers, getUser, createUser, deleteUser, updateUser };