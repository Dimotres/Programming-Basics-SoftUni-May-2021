function ermo(input){

let BroiStranici = Number(input[0])
let Stranici = Number(input[1])
let BroiDni = Number(input[2])

let obshtoVreme = BroiStranici / Stranici
let result = obshtoVreme / BroiDni

console.log(result);
}
ermo(["432",
"15",
"4"])

