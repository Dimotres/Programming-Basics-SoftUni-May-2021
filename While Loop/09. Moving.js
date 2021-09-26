function demo(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let volume = w * 1 * h;
    let index = 3;
    let sum = 0;
    let command = input[index]

    while (command !== "Done") {
        sum += Number(input[index]);
        index++;

        if (sum > volume){
            break;
        }
        command= input[index];
    }
    if(sum>volume){
        console.log(`No more free space! You need ${sum-volume} Cubic meters more.`);
    }else{
        console.log(`${volume-sum} Cubic meters left.`);
    }

}
demo(["10", "10", "2", "20", "20", "20", "20", "122"])
