const express = require("express");
const hbs = require("hbs");
const app=express();
const port = process.env.PORT || 1000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb://localhost/crypto-user",
  { useNewUrlParser: "true" }
);

const user = require("./model/user.js");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res)
{
  res.render('home.hbs');
});

app.get('/info',function(req,res)
{
  res.render('info.hbs');
});
app.get('/vote',function(req,res)
{
  res.render('login.hbs');
});

app.post("/vote",function(req,res)
{
  console.log(req.body.adhar);
user.user.find({"adhar":req.body.adhar},function(err,log){
  if(log.length === 0)
  {
    console.log('not in db');
    res.render('login.hbs');
  }
  else {
      console.log(log);
      console.log('in db');
      //Here is where your link goes Sahil Bhaiya
  }
})
});

app.listen(port, () => {
  console.log(`The server is on at ${port} port`);
});
