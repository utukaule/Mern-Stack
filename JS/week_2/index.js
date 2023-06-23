// var express = require("express");
// var app = express();
// var port = 3000;

// function sum(counter) {
//   let sumTotla = 0;
//   for (let i = 0; i <= counter; i++) {
//     sumTotla = sumTotla + i;
//   }
//   return sumTotla;
// }

// app.get("/", (req, res) => {
//   let counter = req.query.counter
//   let total = sum(counter);
//   // console.log(total);
//   res.send("The sum is " + total);
// });

// app.get('/about',(req, res)=>{
//   res.send('this is about page');
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });
let express = require("express");
let app = express();
let port = 3000;

function add(counter) {
  let total = 0;
  for (let i = 0; i <= counter; i++) {
    total = total + i;
  }
  return total;
}

function handleFirstRequest(req, res) {
  // let num = req.query.num; //query parameter
  let num = req.headers.num;
  let result = add(num);
  res.send("This is total:- " + result);
}

app.get("/", handleFirstRequest);

app.listen(port, () => {
  console.log(`connection created at http://localhost:${port}`);
});
