function fishTank (input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * height / 1000;
    let water = volume - (volume * percent / 100);

    console.log(water);
}