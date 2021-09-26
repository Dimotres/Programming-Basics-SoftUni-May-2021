function ermo (input){

let countPeopleGroup = Number(input[0])
let countNights = Number(input[1])
let countCardTravel = Number(input[2])
let countTicketMuseum = Number(input[3])

let overnight = countNights * 20;
let transportTickets = countCardTravel * 1.60;
let museumtickets = countTicketMuseum * 6;
let SumForOnePerson = overnight + transportTickets + museumtickets;
let sumForWholeGroup = SumForOnePerson * countPeopleGroup;
let totalsum = sumForWholeGroup *1.25
console.log(totalsum.toFixed(2));




}
ermo (["131",
"9",
"33",
"46"])
