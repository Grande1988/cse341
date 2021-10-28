const path = require("path");
const express = require("express");
const mongoose = require('mongoose');
const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);
const errorController = require("./controllers/error");
const User = require("./models/user");
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://reddgl:LeGrindie1988@cluster0.sll31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const bodyParser = require('body-parser');
const cors = require('cors');




const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "https://obscure-spire-89504.herokuapp.com",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options ={
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { mongoConnect } = require("./util/database");


mongoConnect(() => {
  app.listen(3000);
});