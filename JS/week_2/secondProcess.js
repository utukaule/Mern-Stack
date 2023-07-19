function logResponseBody(jsonBody){
    console.log(jsonBody)
}

function callbackFun(result){
    // we are saying 
    // Please extract JSON body from this (result.json) then send body
    // to another fucntion logResponseBody
    // cleaning happens here
    result.json().then(logResponseBody)
}

let sendObj ={
    method:'GET'
};

fetch("http://localhost:3000/counter?counter=10",sendObj).then(callbackFun)