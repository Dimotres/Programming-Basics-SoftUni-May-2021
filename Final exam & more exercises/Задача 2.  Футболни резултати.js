function ermo(input){

let result = input[0]
let result2 = input[1]
let result3 = input[2]

let wins = 0;
let loses = 0;
let draws = 0;

let leftNumberFirstResult = Number(result[0])
let rightNumberFirstResult = Number(result2[2])


if(leftNumberFirstResult > rightNumberFirstResult){
    wins++;
}else if(rightNumberFirstResult > leftNumberFirstResult){
    loses ++;
}else{
    draws++
}

let leftNumberSecondResult = Number(result2[0])
let rightNumberSecondResult =Number(result2[2])

if(leftNumberSecondResult > rightNumberSecondResult){
    wins++;
}else if(rightNumberSecondResult > leftNumberSecondResult){
    loses ++;
}else{
    draws++
}
let leftNumberThirdResult = Number(result3[0])
let rightNumberThirdResult = Number(result3[2])
if(leftNumberThirdResult > rightNumberThirdResult){
    wins++;
}else if(rightNumberThirdResult > leftNumberThirdResult){
    loses ++;
}else{
    draws++
}
console.log(
    log
);

}
ermo(["3:1","0:2","0:0"])
