import path from "path";
import webpack from "webpack";
import express from "express";
import configDev from "./webpack.config";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const compiler = webpack(configDev);
const isProd = process.env.NODE_ENV === "production";

app.use(
  express.static("build", {

  })
);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Listening at http://localhost:3000/");
});
