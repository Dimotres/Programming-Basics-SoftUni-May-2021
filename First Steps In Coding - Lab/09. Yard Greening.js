function ermo(input){

let cubicMeter = Number(input[0]);
let priceForCubicMeter = cubicMeter * 7.61
let discount = priceForCubicMeter *0.18
let finalPrice = priceForCubicMeter - discount




console.log(`The final price is: ${finalPrice} lv.  
     The discount is: ${discount} lv.`);





}
ermo (["550"])