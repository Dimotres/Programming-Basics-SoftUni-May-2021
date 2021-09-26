function ermo(input){

let DepositSum = Number(input[0])
let time = Number(input[1])
let percent = Number(input[2])
let lihva = DepositSum * (percent / 100)
let forOneYear = lihva / 12
let sum =DepositSum + time * forOneYear
console.log(sum);

}
ermo(["200","3","5.7"])
