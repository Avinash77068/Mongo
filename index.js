
import express from "express";
const app = express();
import cors from "cors";
import { default as mongoose } from "mongoose";
import { configDotenv } from "dotenv";
import dbConnection from "./src/database/index.js";
import employee from "./src/routes/employee.js"
import user from "./src/routes/user.js"
import authRouter from "./src/routes/auth.js"
import router from "./src/routes/auth.js";
configDotenv();
// Middleware Connections
app.use(cors());
app.use(express.json());
const api='/api/v1/'
// Mongo DB Connections
app.use(express.urlencoded({extended:true}))
// Routes
app.get("/", async (req, res) => {
  console.log("hi from the server");
  return res.send({ message: "hi from the server" });
});

app.use(`${api}employee`,employee)
app.use(`${api}user`,user)
app.use(`${api}auth`, authRouter)
app.use(`${api}login`,router)
// Connection
const PORT = process.env.PORT || 5000;

dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on: http://127.0.0.1:${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e);
  });


  export default app
