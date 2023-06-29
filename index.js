const express = require("express");
const body = require("body-parser");
const path = require("path");
const app = express();
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
const data = require("./data.json");
const { nextTick } = require("process");
app.use(express.static(__dirname));
app.set("views", path.join(__dirname));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index", { popup: "" });
});
//
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });
app.post("/submit", async function (req, res) {
  const email = data.email;
  const pass = data.pass;
  const e_eamil = req.body.mail;
  const p_pass = req.body.pass;

  if (email === e_eamil && pass === p_pass) {
    // res.sendFile(__dirname + "/welcom.html");
    // res.jsonp({ success: true });
    res.redirect("home");
  } else {
    // console.log("hi");
    res.render("index", { popup: "Error:- Invalid email or password" });
    //
  }
  // res.redirect("home");
});

app.get("/home", function (req, res) {
  res.send("Welocme" + data.user);
});

app.listen(8080);
