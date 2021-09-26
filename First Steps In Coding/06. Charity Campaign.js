function ermo(input){

let days = Number(input[0])
let sladkari = Number(input[1])
let cakes = Number(input[2])
let gofreti = Number(input[3])
let pancakes = Number(input[4])

let cakePrice = cakes * 45
let gofretiPrice = gofreti * 5.80
let pancakesPirce = pancakes * 3.20
let sum = (cakePrice + gofretiPrice + pancakesPirce) * sladkari
let Suma = sum * days
let aftersum = Suma - (Suma / 8)
console.log(aftersum);
}
ermo (["23","8","14","30","16"])
