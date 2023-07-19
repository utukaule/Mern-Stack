// // var express = require("express");
// // var app = express();
// // var port = 3000;

// // function sum(counter) {
// //   let sumTotla = 0;
// //   for (let i = 0; i <= counter; i++) {
// //     sumTotla = sumTotla + i;
// //   }
// //   return sumTotla;
// // }

// // app.get("/", (req, res) => {
// //   let counter = req.query.counter
// //   let total = sum(counter);
// //   // console.log(total);
// //   res.send("The sum is " + total);
// // });

// // app.get('/about',(req, res)=>{
// //   res.send('this is about page');
// // })

// // app.listen(port, () => {
// //   console.log(`Example app listening on port http://localhost:${port}`);
// // });



// let express = require("express");
// let bodyParser = require("body-parser");
// let app = express();
// let port = 3000;

// app.use(bodyParser.json()); //This is used to extract json data

// // function middleware1(req, res, next){
// //   // console.log('form inside middleware '+ req.headers.num)
// //   next();
// // }
// // app.use(middleware1)

// function add(num) {
//   let total = 0;
//   for (let i = 0; i <= num; i++) {
//     total = total + i;
//   }
//   return total;
// }

// function calculateMul (){
  
// }

// function handleFirstRequest(req, res) {
//   // let num = req.query.num; //query parameter
//   // console.log(req.body)
//   let num = req.body.num;
//   let result = add(num);
//   let obj = {
//     sum: result
//   }
//   let answer = "this is answer " + result
//   res.send("This is total:- " + obj);

// }

// app.post("/", handleFirstRequest);

// app.listen(port, () => {
//   console.log(`connection created at http://localhost:${port}`);
// });










// trying to establish connection.....

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port =3000;


// function middleware(req,res,next){
//   console.log("middleware is active" + req.headers.counter)
//   next();
// }
// app.use(middleware)

app.use(bodyParser.json())

function operationAdd(num){
  let sum = 0 ;
  for(let i = 0 ; i<= num ; i++){
    sum = sum + i;
  }
  return sum;
}

function operationMul(num){
  let mul = 1 ;
  for(let i = 1 ; i<= num ; i++){
    mul = mul * i;
  }
  return mul;
}


// app.get('/',getHtml)
app.get('/counter',(req,res)=>{
  let counter = req.query.counter;
  let calculateAll = operationAdd(counter);
  let ansObj = {
    sum:calculateAll
  }
  // let result = "total is " + ansObj
  res.status(200).send(ansObj)
})

app.listen(port,(req,res)=>{
  console.log(`http://localhost:${port}`)
});