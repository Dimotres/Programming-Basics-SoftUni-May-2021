function sumOfNum(input) {
    let num = input[0];
    let lastElementOfN = Number(num[num.length - 1]);
    let isFound = false;
    for (let a = 1; a < 9; a++) {
        for (let b = 9; b > a; b--) {
            for (let c = 1; c < 9; c++) {
                for (let d = 8; d > c; d--) {
                    let sum = a + b + c + d;
                    let multiply = a * b * c * d;
                    let devide = Math.floor(multiply / sum);
 
                    if (sum === multiply && lastElementOfN === 5) {
                        console.log(`${a}${b}${c}${d}`);
                        isFound = true;
                        return;
                    }
                    if (devide === 3 && num % 3 === 0) {
                        console.log(`${d}${c}${b}${a}`);
                        isFound = true;
                        return;
                    }
                }
 
            }
 
        }
 
    }
    if (!isFound) {
        console.log("Nothing found");
        return;
    }
}
sumOfNum(["123"])