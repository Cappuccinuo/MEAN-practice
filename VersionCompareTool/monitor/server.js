const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const fs = require('fs');
  var test = "";
  fs.readFile('test.json', (err, data) => {
    if (err) throw err;
    test = JSON.parse(data);
    console.log(test);
  })
  res.render('index', test);
})

app.listen(3000, function () {
  console.log("App listening on port 3000!")
})
