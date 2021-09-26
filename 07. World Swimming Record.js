function ermo(input) {

    let recordInSec = Number(input[0])
    let distInM = Number(input[1])
    let timeInSForOneM = Number(input[2])

    let slow = Math.floor(distInM / 15);

    let result = distInM  * timeInSForOneM;
    result = result + slow * 12.5;

if(result < recordInSec){
    console.log(`Yes, he succeeded! The new world record is ${result.toFixed(2)} seconds.`);
}else {
    let diff = Math.abs(result - recordInSec)
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
}
}
ermo(["55555.67",
"3017",
"5.03"])

