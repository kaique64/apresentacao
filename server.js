/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use("/", express.static("build"));

app.listen(process.env.PORT || 3334, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running");
});
