function grandpaStavri(args) {
    let quantity = 0;
    let liters = 0;
    let currentDegree = 0;
    let total = 0;
 
    for (let i = 1; i < args.length; i++) {
        let currentIndexArgs = Number(args[i]);
 
        if (i % 2 != 0) {
            quantity = currentIndexArgs;
            liters += currentIndexArgs;
        }
        else {
            currentDegree = currentIndexArgs;
            let totalQuantity = quantity * currentDegree;
            total += totalQuantity;
        }
    }
 
    let averageDegree = total / liters;
 
    console.log(`Liter: ${liters.toFixed(2)}`);
    console.log(`Degrees: ${averageDegree.toFixed(2)}`);
 
    if (averageDegree >= 42) {
        console.log("Dilution with distilled water!");
    } else if (averageDegree >= 38) {
        console.log("Super!");
    } else {
        console.log('Not good, you should baking!');
    }
}