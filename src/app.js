import express from "express";
import { router as wiki } from "./wiki.js";
import logger from "morgan";
import { auth } from "./middleware.js";

const app = express();
app.use(logger("dev"));
app.use("/wiki", auth);

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use("/wiki", wiki);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
