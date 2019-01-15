const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

mongoose
  .connect(
    'mongodb+srv://cappuccinuo:kAZ6i2bSUfmAI8nD@mean-course-uanj9.mongodb.net/node-angular?retryWrites=true'
  )
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS")
  next();
});

app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);
module.exports = app;
