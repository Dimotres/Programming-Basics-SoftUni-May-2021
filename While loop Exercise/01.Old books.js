function ermo(input) {


    let index = 0
    let favoriteBook = input[index]
    index++;
    let command = input[index]
    index++;
    let counter = 0;
    while (command !== "No More Books") {
        let book = command
        if (favoriteBook === book) {
            console.log(`You checked ${counter} books and found it.`);
        }
    }
counter++;
command = input[index];
index++;


}
ermo(["Troy","Stronger","Life Style","Troy"])
