function ermo(input) {

    let numberPeople = Number(input[0]);
    let season = input[1];
    let price = 0;
    let sum = 0;
    let Discount =0;
    switch (season) {

        case "spring":
if (numberPeople <= 5){
    price = 50 * numberPeople
sum = price
}else{
    price = 48 * numberPeople
    sum = price
}
            break;
        case "summer":
            if (numberPeople <= 5){

                price = 48.50 *numberPeople
                Discount = price * 0.85
                sum = Discount
            }else{
                price = 45 * numberPeople
                Discount = price * 0.85
                sum = Discount
            }
            break;
        case "autumn":
            if (numberPeople <= 5){
                price = 60 * numberPeople
                sum = price
            }else{
                price = 49.50 * numberPeople
                sum = price
            }
            break;
        case "winter":
            if (numberPeople <= 5){
                price = 86 * numberPeople
                ExtraPrice = price * 1.08
                sum = ExtraPrice
            }else{
                price = 85 * numberPeople
                ExtraPrice = price * 1.08
                sum = ExtraPrice
            }
            break;

    }
console.log(`${sum.toFixed(2)} leva.`);
}
ermo(["10",
"summer"])

