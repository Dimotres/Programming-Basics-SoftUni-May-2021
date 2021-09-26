function ermo(input) {

    let num = Number(input[0]);

    if (num <= 10) {
        console.log("slow");
    } else if (num <= 50) {
        console.log("average");
    } else if (num <= 150) {
        console.log("fast");
    } else if (num <= 1000) {
        console.log("ultra fast");
    }else{
        console.log("extremely fast");
    }






}
ermo(["160"])