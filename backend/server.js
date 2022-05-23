const express = require("express");
const cors = require("cors");
const mongodb = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongodb.connect(uri, { useNewUrlParser: true });
const connection = mongodb.connection;
connection.once("open", () => {
  console.log("Connect data success");
});

const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/user");

app.use("/exercises", exerciseRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
