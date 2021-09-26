function everest(input) {
    let index = 0;
    let totalDays = 1;
    let startAtitude = 5364;
    let totalAtitude = 8848;
    let command = input[index++];
 
    while (command !== 'END') {
        let currentCommand = command;
        let nextStep = Number(input[index++]);
        if (currentCommand === 'Yes') {
            totalDays++;
            startAtitude += nextStep;
        } else {
            startAtitude += nextStep;
        }
        if (startAtitude >= totalAtitude) {
            console.log(`Goal reached for ${totalDays} days!`);
            break;
        }
        command=input[index++];
        if (totalDays >= 5) {
            break;
        }
    }
    if (startAtitude < totalAtitude) {
        console.log("Failed!");
        console.log(`${startAtitude }`);
    }
}