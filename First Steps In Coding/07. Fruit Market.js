function ermo(input){

let StrawberryPrice = Number(input[0])
let bananaQuantity= Number(input[1])
let orangeQuantity = Number(input[2])
let maliniQuantity = Number(input[3])
let  StrawberryQuantity= Number(input[4])

let maliniPrice = StrawberryPrice / 2
let orangePrice = maliniPrice - (maliniPrice * 0.4)
let bananaPrice = maliniPrice - (maliniPrice * 0.8)

let maliniSum = maliniPrice * maliniQuantity
let orangeSum = orangePrice * orangeQuantity
let bananaSum = bananaPrice * bananaQuantity
let strawberrySum = StrawberryPrice * StrawberryQuantity
let result = maliniSum + orangeSum + bananaSum + strawberrySum
console.log(result);
}
ermo (["48","10","3.3","6.5","1.7"])
