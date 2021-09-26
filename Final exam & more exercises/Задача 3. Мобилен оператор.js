function ermo(input){

let QuantityOfContract = input[0]
let TypeOfContract = input[1]
let ExtraInternet = input[2]
let MonthsForPayment = Number(input[3])
let price = 0;
let extraPrice = 0;
switch(TypeOfContract){

case "Small":
    if(QuantityOfContract === "one"){
        price = 9.98
    }else{
        price = 8.58
    }
    break;
   
case "Middle":
    if(QuantityOfContract === "one"){
        price = 18.99
    }else{
        price =17.09
    }
break;

case "Large":
    if(QuantityOfContract === "one"){
        price = 25.98
    }else{
        price =23.59
    }
break;
case "ExtraLarge":
    if(QuantityOfContract === "one"){
        price = 35.99
    }else{
        price =31.79
    }
break;
}
if(ExtraInternet === "yes"){
    if(price  <= 10){
extraPrice = 5.50
    }else if(price <= 30){
        extraPrice = 4.35
    }else if(price >30){
        extraPrice = 3.85
    }
}
let sum = (price + extraPrice) * MonthsForPayment
if(QuantityOfContract === "two"){
    sum = sum * 0.9625
}
console.log(`${sum.toFixed(2)} lv.`);
}
ermo(["two",
"Small",
"yes",
"20"])







