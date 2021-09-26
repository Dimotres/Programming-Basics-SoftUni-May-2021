function ermo(input) {

    let sum = 0
    let text = input[0]
    for (let i = 0; i < text.length; ++) {
        switch (text.charAt(i)) {
            case "a": sum += 1; break
            case "e": sum += 2; break
        }
    }
console.log("Vowels sym =");


}
ermo(["hello"])