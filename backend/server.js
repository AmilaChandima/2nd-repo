import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'





// App config

const app = express();
const port = 4000;

// Middleware

app.use(express.json());
app.use(cors());


// Db connection

connectDB();
app.use("/api/user",userRouter);

app.get("/", (req,res, next) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});




// mongodb+srv://kavindusarathchandraaa:<db_password>@cluster0.531tr.mongodb.net/?



