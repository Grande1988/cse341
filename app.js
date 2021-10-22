const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "https://morning-plateau-13760.herokuapp.com",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options ={
  useUnifiedTopology: true,
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://reddgl:<password>@cluster0.sll31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
