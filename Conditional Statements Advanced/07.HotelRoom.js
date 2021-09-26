function hotelRoom(input) {

    let month = input[0];
    let countNight = Number(input[1]);

    let priceApartment = 0;
    let priceStudio = 0;
    //let discount = 0;
    // let place1 = Apartment;
    // let place2 = Studio;

    switch (month) {
        case "May":
        case "October":
            priceApartment = countNight * 65;
            priceStudio = countNight * 50;
            if (countNight > 7 && countNight <= 14) {
                priceStudio = priceStudio * 0.95;
            } else if (countNight > 14) {
                priceApartment = priceApartment * 0.90;
                priceStudio = priceStudio * 0.70;
            }
            break;
        case "June":
        case "September":
            priceApartment = countNight * 68.70;
            priceStudio = countNight * 75.20;
            if (countNight > 14) {
                priceApartment = priceApartment * 0.90;
                priceStudio = priceStudio * 0.80;
            }
            break;
        case "July":
        case "August":
            priceApartment = countNight * 77;
            priceStudio = countNight * 76;
            if (countNight > 14) {
                priceApartment = priceApartment * 0.90;
            }
            break;

    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom 