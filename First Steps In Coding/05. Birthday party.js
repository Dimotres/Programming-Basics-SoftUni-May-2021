function ermo(input){

let naem = Number(input[0])

let torta = naem * 0.20
let napitki = torta * 0.55
let animator = naem / 3
let sum = naem + torta + napitki + animator


console.log(sum);



}
ermo(["2250"])