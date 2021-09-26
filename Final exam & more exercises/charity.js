function charity(input){
    let days = Number(input[0]);
    let confectioner = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);
    let cakesADay = cakes * 45;
    let wafflesADay = waffles * 5.80;
    let pancakesADay = pancakes * 3.20;
    let totalSumForDay = (cakesADay + wafflesADay + pancakesADay) * 8 ;
    let totalFullCharity = totalSumForDay * days;
    let finalSum = totalFullCharity - (totalFullCharity/8);
    console.log(finalSum)
    }