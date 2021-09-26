function demo (input) {

let tripPrice= Number(input[0]);
let puzzleCount= Number(input[1]);
let dollsCount= Number(input[2]);
let teddybearsCounter = Number(input[3]);
let minionsCount= Number(input[4]);
let truckCount=Number(input[5]);

let sum= (puzzleCount*2.60) + (dollsCount*3) + (teddybearsCounter*4.10)
+ (minionsCount*8.20) + (truckCount*2);

let toysCounter = puzzleCount+ teddybearsCounter+minionsCount+truckCount
if (toysCounter>=50){
    sum=sum*0.75
}
let sumAfterRent = sum *0.9;
if (sumAfterRent >= tripPirce){
console.log(`Yes!`  ${sumAfterRent-tripPrice.(toFixed(2)} lv left`



}
demo (["40.8","20","25","30","50","10"]);