function whileDemo(input) {
 
    let gamesCount = Number(input[0]);
 
    let hearthstoneCounter = 0;
    let fortniteCounter = 0;
    let overwatchCounter = 0;
    let othersCounter = 0;
 
    let inputL = input.length;
 
    for (let index = 1; index < inputL; index++) {
        let currentGame = input[index];
 
        switch (currentGame) {
            case "Hearthstone": hearthstoneCounter++; break;
            case "Fornite": fortniteCounter++; break;
            case "Overwatch": overwatchCounter++; break;
            default: othersCounter++; break;
        }
    }
    console.log(`Hearthstone - ${(hearthstoneCounter / gamesCount * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fortniteCounter / gamesCount * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCounter / gamesCount * 100).toFixed(2)}%`);
    console.log(`Others - ${(othersCounter / gamesCount * 100).toFixed(2)}%`);
}
whileDemo(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"]);