function ermo(input) {

    let budget = Number(input[0])
    let season = input[1]
    let destination = "";
    let type = "";
    let money = 0
    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer": money = budget * 0.30;
                type = "Camp"
                break;
            case "winter": money = budget * 0.70;
                type = "Hotel"
                break;

        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
case "summer" :
    money = budget * 0.40;
    type = "Camp"
    break;
    case "winter":
    money = budget * 0.80;
type = "Hotel"



        }
    } else {
money = budget * 0.90;
destination = "Europe"
type = "Hotel"
    }


    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${money.toFixed(2)}`);
}
ermo(["1500", "summer"])