// iOFTWcIpRoByMzY9

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");


const app = express();

//Middleware
/* app.use("/",(req, res, next) => {
  res.send("It is Working..................");
})
 */

app.use(express.json());

app.use("/users", router);

mongoose.connect("mongodb+srv://admin:iOFTWcIpRoByMzY9@belmio.nngvh.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(() => {
  app.listen(5000);
})
.catch((err) => console.log(err))






