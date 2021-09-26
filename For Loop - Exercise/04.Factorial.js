function demo(input) {
    n = Number(input[0])
let res = 1;
    for (let i = 1; i <= n; i++) {
        res = res * i
    }
console.log(res);


}
demo([4])