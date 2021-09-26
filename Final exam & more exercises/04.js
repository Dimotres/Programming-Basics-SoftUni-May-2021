function ermo (input){



let days =Number(input[0])
let QuantityRakia = Number(input[1])
let Gradus = Number(input[2])
let GradusForSecondDay = Number(input[3])
let BonusGradus = Number(input[4])
let BonusRakia = Number(input[5])
let Slivi = Number(input[6])





let sumGradusForFirstDay = QuantityRakia * Gradus;
let sumQualityForSecondDay = QuantityRakia + GradusForSecondDay;
let sumGradusForSecondDay = sumGradusForFirstDay + BonusGradus * GradusForSecondDay
let sumQualityForThirdDay = sumQualityForSecondDay + BonusRakia
let sumGradusForThirdDay = sumGradusForSecondDay + BonusRakia * Slivi 
let AverageGradus = (sumGradusForThirdDay / sumQualityForThirdDay)

console.log(`Liter: ${sumQualityForThirdDay.toFixed(2)}`);
console.log(`Degrees: ${AverageGradus}`);
if(AverageGradus < 38 ){
    console.log("Not good, you should baking!" );
}else if(AverageGradus < 42 || AverageGradus > 38){
    console.log("Super!" );
}else{
    console.log("Dilution with distilled water!" );
}


console.log(AverageGradus);


}
ermo (["2",
"200",
"43",
"200",
"40"])



