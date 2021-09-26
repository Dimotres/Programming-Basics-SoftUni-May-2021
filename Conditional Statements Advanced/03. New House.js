function ermo(input) {

    let typeflowers = input[0]
    let countFlowers = Number(input[1])
    let budget = Number(input[2])
    let money = 0;

    switch (typeflowers) {
        case "Roses":
            money = countFlowers * 5;
            if (countFlowers > 80) {
                money = money * 0.90;
            }
            break;
        case "Dahlias":
            money = countFlowers * 3.80;
            if (countFlowers > 90) {
                money = money * 0.85;
            }
            break;
        case "Tulips":
            money = countFlowers * 2.80
            if (countFlowers > 80) {
                money = money * 0.85;
            }
            break;
        case "Narcissus":
            money = countFlowers * 3;
            if (countFlowers < 120) {
                money = money * 1.15;
            }
            break;
        case "Gladiolus":
            money = countFlowers * 2.50;
            if (countFlowers < 80) {
                money = money * 1.20;
            }
            break;
    }

    let diff = Math.abs(budget - money)
    if (budget >= money) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeflowers} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
ermo(["Roses", "55", "250"])
