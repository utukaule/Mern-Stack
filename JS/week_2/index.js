var express = require("express");
var app = express();
var port = 3000;

function sum(counter) {
  let sumTotla = 0;
  for (let i = 0; i < counter; i++) {
    sumTotla = sumTotla + i;
  }
  return sumTotla;
}

app.get("/", (req, res) => {
  let counter = req.query.counter
  let total = sum(counter);
  // console.log(total);
  res.send("The sum is " + total);
});

app.get('/about',(req, res)=>{
  res.send('this is about page');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
