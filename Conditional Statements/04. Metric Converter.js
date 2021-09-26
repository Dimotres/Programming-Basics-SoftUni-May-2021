function ermo(input) {

    let num = Number(input[0])
    let from = input[1]
    let to = input[2]
    let resultInMM
    let result = 0;

    if(from === "cm"){
        resultInMM = num * 10
    }else if (from === "m"){
        resultInMM = num * 1000
    }else {
        resultInMM = num
    }
if (to === "cm"){
    result = resultInMM / 10
}else if (to === "m"){
    result = resultInMM / 1000
}else {
    result = resultInMM
}
console.log(result.toFixed(3));
}
ermo(["12", "mm", "m"])