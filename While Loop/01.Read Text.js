function ermo(input) {

    let index = 0;
    let inputL = input.length;
    
    while (index < inputL) {
        if(input[index] === "Stop"){
            break;
        }
        console.log(input[index]);
        index++;

    }



}
ermo(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])
