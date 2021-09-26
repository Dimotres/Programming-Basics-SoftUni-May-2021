function ermo(input) {

    let budget = Number(input[0])
    let season = input[1]
    let fisherman = Number(input[2])

    let naem = 0;


    switch (season) {
        case "Spring":
            naem = 3000
            if (fisherman <= 6) {
                naem = naem * 0.90;
            } else if (fisherman >= 7 && fisherman <= 11) {
                naem = naem * 0.85
            } else {
                naem = naem * 0.75;
            }
            break;
        case "Summer":
        case "Autumn":
            naem = 4200
            if (fisherman <= 6) {
                naem = naem * 0.90;
            } else if (fisherman >= 7 && fisherman <= 11) {
                naem = naem * 0.85
            } else {
                naem = naem * 0.75;
            }
            break;
        case "Winter":
            naem = 2600
            if (fisherman <= 6) {
                naem = naem * 0.90;
            } else if (fisherman >= 7 && fisherman <= 11) {
                naem = naem * 0.85
            } else {
                naem = naem * 0.75;
            }
            break;

    }
    if (fisherman % 2 == 0 && season !== "Autumn") {
        naem = naem * 0.95;
    }
    let diff = Math.abs(budget - naem);
    if (budget >= naem) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
ermo(["3600",
"Autumn",
"6"])

