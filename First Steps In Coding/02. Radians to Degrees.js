function ermo (input){

let radians = Number(input[0])
let gradus = radians * 180 / Math.PI
console.log(gradus.toFixed(0));

}
ermo (["3.1416"])