const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: {
    type: String, 
    required: true, // Validation
  },
  email: { // Updated from 'gmail' to 'email'
    type: String, 
    required: true, // Validation
    unique: true, 
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "UserModel", // fileName
  userSchema  // Function Name
)
