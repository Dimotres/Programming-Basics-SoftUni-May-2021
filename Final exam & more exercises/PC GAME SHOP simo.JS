function ermo(input) {

    let gamesCount = Number(input[0]);

    let HearthstoneCounter = 0;
    let FortniteCounter = 0;
    let OverwatchCounter = 0;
    let othersCounter = 0;

    let inputL = input.length

    for (let index = 1; index < inputL; index++) {
        let currentGame = input[index]

        switch (currentGame) {
            case "Hearthstone": HearthstoneCounter++; break;
            case "Fortnite": FortniteCounter++; break;
            case "Overwatch": OverwatchCounter++; break;
            default: othersCounter++; break;

        }
    }
    console.log(`Hearthstone - ${HearthstoneCounter/gamesCount*100).toFixed(2)}%`);
    console.log(`Fortnite - ${FortniteCounter/gamesCount*100).toFixed(2)}%`);
    console.log(`Overwatch - ${OverwatchCounter/gamesCount*100).toFixed(2)}%`);
    console.log(`Others - ${othersCounte/gamesCount*100).toFixed(2)}%`);

}
ermo(["4", "Hearthstone", "Fortnite", "Overwatch", "Counter-Strike"])