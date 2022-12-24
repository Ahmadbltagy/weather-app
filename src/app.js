const express = require("express");
const path = require("path");

const router = require("./routes/routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(router);

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
