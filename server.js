// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var userRoute = require('./route/user.route.js')
var bookRoute = require('./route/book.route.js')
var transactionRoute = require("./route/transaction.route");
var count = require('./validate/countcookie.validate.js')
const cookieParser = require('cookie-parser');

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());
app.get("/",function(req, res) {
  var count =0;
  res.cookie('hieu', 'hehe')
  res.render("index.pug");
});
app.use('/users',count.countCookie,userRoute);
app.use('/books',count.countCookie,bookRoute);
app.use("/transactions",count.countCookie, transactionRoute);

// https://expressjs.com/en/starter/basic-routing.html
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
