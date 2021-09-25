const fs = require('fs');
var user = "kiwichang2017";
fetch(`https://scratchdb.lefty.one/v2/user/info/${user}`).then(res => res.json()).then(data => {
  fs.writeFile('followers/scratch', `data["followers"].toString()`, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > followers/scratch');
});
    console.log(`${user} has ` + data["followers"].toString() + " followers");
}
