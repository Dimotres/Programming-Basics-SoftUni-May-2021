function barcodeGeneretor (input){
 
    let first = input[0];
    let second = input[1];
    let result = "";
 
    for(let i = first[0]; i <= second[0]; i++){
        for(let j = first[1]; j <= second[1]; j++){
            for(let k = first[2]; k <= second[2]; k++){
                for(let l = first[3]; l <= second[3]; l++){
                    if(i % 2 !== 0 && k % 2 !== 0 && j % 2 !== 0 && l % 2 !== 0){
                        result += i + "" + j + "" + k + "" + l + " ";
                    }
                }
            }
        }
    }
    console.log(result);
barcodeGeneretor