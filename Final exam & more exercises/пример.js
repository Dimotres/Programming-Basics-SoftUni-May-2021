function trip(input) {

    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let priceForAllNight = 0;

    if (roomType === "room for one person") {
        priceForAllNight = nights * 18;

    } else if (roomType === "apartment") {
        if (nights < 10) {
            priceForAllNight = (nights * 25) * 0.7;
        } else if (nights >= 10 && nights <= 15) {
            priceForAllNight = (nights * 25) * 0.65;
        } else if (nights > 15) {
            priceForAllNight = (nights * 25) * 0.50;
        }

    } else if (roomType === "president apartment") {
        if (nights < 10) {
            priceForAllNight = (nights * 35) * 0.9;
        } else if (nights >= 10 && nights <= 15) {
            priceForAllNight = (nights * 35) * 0.85;
        } else if (nights > 15) {
            priceForAllNight = (nights * 35) * 0.80;
        }

    }
    
    if(feedback ==="positive"){
priceForAllNight = priceForAllNight *1.25;
    }else if(feedback === "negative"){
priceForAllNight = priceForAllNight *0.9;
    }
console.log(`${priceForAllNight.toFixed(2)}`);

}
trip(["14", "apartment", "positive"]);
