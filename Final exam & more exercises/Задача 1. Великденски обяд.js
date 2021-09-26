function ermo (input){

let Broikozunak = Number(input[0])
let BroiKoriSQica = Number(input[1])
let kurabiiKg = Number(input[2])

let kozunakPrice = Broikozunak *3.20;
let eggPrice = BroiKoriSQica * 4.35;
let kurabiiPrice = kurabiiKg * 5.40;

let eggdiyprice = BroiKoriSQica * 12 * 0.15
let finalprice = kozunakPrice + eggPrice + kurabiiPrice + eggdiyprice
console.log(finalprice.toFixed(2));

}
ermo(["4",
"4",
"3"])

