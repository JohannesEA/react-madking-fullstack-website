const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const contentRoute = require("./routes/content");

// const path = require('path');

const app = express();

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.04tn4.mongodb.net/Madking_Shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connection successfull"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/contents", contentRoute);

// Have Node serve the files for our built React app
// app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/", (req, res) => {
  res.send("Server is running..");
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './client/build'));
// });

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running..");
});
