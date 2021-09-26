function ermo(input) {

    let target = Number(input[0]);
    let sum = 0
    let index = 1

    while (sum < target) {
        sum += Number(input[index])
        index++;
    }
console.log(sum);
}
ermo(["100", "10", "20", "30", "40"])
