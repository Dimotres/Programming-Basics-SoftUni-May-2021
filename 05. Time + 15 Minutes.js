function ermo(input) {

    let incomeH = Number(input[0])
    let incomeM = Number(input[1])


    let totaltime = incomeH * 60 + incomeM;
    totaltime = totaltime + 15;


    let h = Math.floor(totaltime / 60)
    let m = totaltime % 60

    if (h > 23) {
        h = 0;
    }
    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }

}
ermo(["0", "01"])

