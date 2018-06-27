var minutes = 0.01
var the_interval = minutes * 60 * 1000;
const fs = require('fs');

fs.readFile('test.json', (err, data) => {
  if (err) throw err;
  var test = JSON.parse(data);
  console.log(test);
  var result = [];
  for (var t in test) {
    result.push(t);
    console.log(t);
  }
  result.push({"name":"t", "version":"1"});
  var txt = JSON.stringify(result);
  console.log(txt);
})

setInterval(function() {
  var currentdate = new Date().toLocaleString();
  console.log(currentdate);

  // Fetch Json files using powershell

  // Create JSON file or append {"time":t, "env1":env1, "version1":version1, "env2":env2, "version2":version2}
}, the_interval);
