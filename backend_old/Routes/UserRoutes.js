const express = require("express");
const router = express.Router();


// insert Model
const User = require("../Model/UserModel");

// Insert User Controllers
const UserController = require("../Controllers/UserController");


router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getByID);
router.put("/:id",UserController.updateUser);
router.delete("/:id",UserController.deleteUser);


// Export
module.exports = router;



