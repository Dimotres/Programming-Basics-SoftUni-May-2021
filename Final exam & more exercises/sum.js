function sumOfNum(input) {
    let num = input[0];
    let lastElementOfN = Number(num[num.length-1]);


    for (let a = 1; a < 9; a++) {
        for (let b = 9; b > a; b--) {
            for (let c = 0; c < 9; c++) {
                for (let d = 9; d > c; d--) {
                    let sum = a + b + c + d;
                    let multiply = a * b * c * d;

                    if (sum === multiply && n ) {

                    }

                }

            }

        }

    }
    console.log(lastElementOfN);
}