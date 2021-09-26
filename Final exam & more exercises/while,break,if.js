function ermo() {

    let i =1;
    while (i <= 10 ) {
        if (i === 5) {
            continue;
        } else {
            console.log(i);
            i++;
        }
    }

    console.log("After the loop");

}
ermo()