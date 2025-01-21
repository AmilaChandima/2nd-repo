const User = require("../Model/UserModel");

const getAllUsers = async( req, res, next) =>{

  let Users;

  try{
    Users = await User.find();
  }
  catch (err) {
    console.log(err);
  }

  // Users not found
  if(!Users){
    return res.status(404).json({message:"User not found!"});
  }

  // Display all users

  return res.status(200).json({Users})

}

// Data Insert

const addUsers = async (req, res, next) => {

  const {name, email, age, address, phoneNumber} = req.body;

  let Users;

  try {
    Users = new User( {name, email, age, address, phoneNumber});
    await Users.save();
  }
  catch (err){
    console.log(err);
  }

  // Not insert users

  if (!Users){
    return res.status(404).send({message: "Unable to add users"});
  }
  return res.status(200).send({ Users})

};


// Get by Id

const getByID = async (req, res, next) => {

 const id = req.params.id;

 let user;

try {
  user = await User.findById(id);
}
catch(err){
  console.log(err);
}

 // Not available user

 if (!user){
  return res.status(404).send({message: "User not found!"});
}
  return res.status(200).send({ user})
 
}

// Update user details

const updateUser = async (req, res, next) => {

  const id = req.params.id;
  const {name, email, age, address, phoneNumber} = req.body;

  let users;

  try{
    users = await User.findByIdAndUpdate(id,{
      name: name,
      email: email,
      age: age,
      address: address,
      phoneNumber: phoneNumber
    });
    users = await users.save();
  }
  catch(err){
    console.log(err);
  }
  // user not availabe
  if (!users){
    return res.status(404).send({message: "Unable to Update User Detail"});
  }
    return res.status(200).send({ users})
  
}

// Delete User Details

const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  
  let user;

  try{
    user = await User.findByIdAndDelete(id)
  }catch (err) {
    console.log(err)
  }

    // user not availabe
    if (!user){
      return res.status(404).send({message: "Unable to Delete User"});
    }
      return res.status(200).send({ user})

}


exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getByID = getByID;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

