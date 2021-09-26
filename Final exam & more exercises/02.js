function solve(input) {
    let priceOfBacheloretteParty = Number(input[0]);
    let countLoveMessages = Number(input[1]);
    let countWaxRoses = Number(input[2]);
    let countKeychains = Number(input[3]);
    let countCartoons = Number(input[4]);
    let countLuckySurprise = Number(input[5]);

    let sum = countLoveMessages * 0.60 + countWaxRoses * 7.20 + countKeychains * 3.60 + countCartoons * 18.20 + countLuckySurprise * 22;
    let countArticles = countLoveMessages + countWaxRoses + countKeychains + countCartoons + countLuckySurprise;
    
    let discount = sum * 0.35;
    if (countArticles > 25) {
        let sum = sum 
        let finalPrice = sum - discount;
        let costHosting = finalPrice * 0.10

        Profit = finalPrice - costHosting;


    } if (Profit > priceOfBacheloretteParty) {
        let result = Profit - priceOfBacheloretteParty;
        console.log(`Yes! ${result.toFixed(2)} lv left.`);
    } else if (countArticles < 25){
        sum = 150.20;
        countArticles = 21

        costHosting = sum * 0.10;


        Profit = sum - costHosting;
        let diff = priceOfBacheloretteParty - Profit;
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}
solve(["40.8",
"20",
"25",
"30",
"50",
"10"])
