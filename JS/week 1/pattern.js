// for (let i = 0; i < 5; i++) {
//   let start = "";
//   for (let j = 0; j < i + 1; j++) {
//     start = start + " * ";
//   }
//   console.log(start);
// }

function pattern(numofRows){
    for(let i = 0 ; i < numofRows ; i++){
        var str = ""
        for( let j = 0 ; j < i+1 ; j++){
            str += " * ";
        }
        console.log(str);

    }
}
console.log(pattern(7))
