function ermo(input){

let percentFat = Number(input[0])
let percentProtein = Number(input[1])
let percentVugle= Number(input[2])
let Calorees = Number(input[3])
let percentWater = Number(input[4])

let FatGram = (Calorees * (percentFat/100))/9
let ProteinGram = (Calorees * (percentProtein/100))/4
let VugleGram =(Calorees * (percentVugle/100))/4
let foodWeight = FatGram + ProteinGram + VugleGram
let CaloreeFor1Gram = Calorees / foodWeight
let percent = 100 - percentWater
let finalresult = CaloreeFor1Gram * (percent/100)

console.log(finalresult.toFixed(4));



}
ermo(["40",
"40",
"20",
"3000",
"40"])

