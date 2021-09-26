function demo(input) {
    let tripprice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
 
    let sum = (puzzlesCount * 2.60) + (dollsCount * 3) + (teddyBearsCount * 4.10) + (minionsCount * 8.20) + (trucksCount * 2);
 
    let toysCounter = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;
 
    if (toysCounter >= 50) {
        sum = sum * 0.75;
 
    }
 
    let sumAfterRent = sum * 0.9;
 
    if (sumAfterRent >= tripprice) {
        console.log(`Yes! ${(sumAfterRent - tripprice.(toFixed(2)} lv left.`)
 
    else {
        console.log(`Not enough money! ${(tripprice - sumAfterRent.toFixed(2))} lv needed.`)
    }
    demo (["40.8","20","25","30","50","10"]);