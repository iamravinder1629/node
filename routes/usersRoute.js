const express = require("express");
const { getUsers, getUser, createUser, deleteUser, updateUser} = require("../controllers/userControllers")
const router = express.Router();

// get all users from json file
router.get('/users', getUsers);

// Read GET request /users/:id
router.get("/users/:id", getUser)

// Create a new user 
router.post("/users", createUser)

// Delete user by id
router.delete("/users/:id", deleteUser)

// Delete user by id
router.put("/users/:id", updateUser)

module.exports = router;