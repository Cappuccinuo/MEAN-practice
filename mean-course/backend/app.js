const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Post = require('./models/post');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cappuccinuo:kAZ6i2bSUfmAI8nD@mean-course-uanj9.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS")
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "First",
      title: "First post",
      content: "Go up"
    },
    {
      id: "Second",
      title: "Second post",
      content: "Go down"
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
