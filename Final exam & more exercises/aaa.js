function toyStore(input) {

    let vacationPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksQCount = Number(input[5]);

    let profit = (puzzlesCount * 0.6) + (dollsCount * 7.2) + (teddyBearsCount * 3.6) + (minionsCount * 18.20) + (trucksQCount * 20)
    let toysCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksQCount

    if (toysCount >= 25) {
      profit = (profit - profit * 0.35)
    } else {
      profit = profit
    }

    let profitAfterRent = profit - profit * 0.10

    if (profitAfterRent >= vacationPrice) {
      let priceDifferrence = profitAfterRent - vacationPrice
      console.log(`Yes! ${priceDifferrence.toFixed(2)} lv left.`)
    } else if (profitAfterRent < vacationPrice) {
      let priceDifferrence = vacationPrice - profitAfterRent
      console.log(`Not enough money! ${priceDifferrence.toFixed(2)} lv needed.`)
    }
  }
toyStore(["40.8",
"20",
"25",
"30",
"50",
"10"])
