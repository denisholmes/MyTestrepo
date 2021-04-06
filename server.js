/*jshint esversion: 6 */
const express = require("express");
const app = express();
const fetch = require("node-fetch");


app.get("/", function(req, res){

  let url = "https://reqres.in/api/users?page=2";
  let data = "";

  fetch(url)
  .then(res => res.json())
  .then((out) => {
    res.send(out);
  })
  .catch(err => { throw err; });
})

app.get("/contact", function(req, res){
  res.send("comtact me  luv");
})

app.get("/about", function(req, res){
  res.send("about me luv");
})

app.get("/hobbies", function(req, res){
  res.send("what are hobbies luv");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
