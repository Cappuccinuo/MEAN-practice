var minutes = 0.01
var the_interval = minutes * 60 * 1000;
const fs = require('fs');

fs.readFile('assets/cointcore_from_coint_ignore_upgrade.json', (err, data) => {
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

  // Fetch Json files using powershell every one hour
  // Read file to get the version
  // "env1" : coint, "env2" : zeint, map to corresponding files
  // Create JSON file or append {"time":t, "version1":version1, "version2":version2}
}, the_interval);
