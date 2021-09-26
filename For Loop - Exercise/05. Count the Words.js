function demo(input) {

    let text = 10
    let counter = 1;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            counter++;
        }
    }
    if (counter > 10){
        console.log(The message is too long to be send! Has ${counter} words.);
    }else {
        console.log(The message was sent successfully!);
    }
}
demo(["This message has ten words and you can send it!"])