function endScreen(scenarioPlayed, votesTotal) {
    // add end screen UI
    const endBG = add([
        pos(0, 0),
        sprite("ui_end"),
        area()
    ]);

    // add end screen text based on the scenario played
    const endTxt = add([
        origin("center"),
        pos(width() / 2, (height() / 2) - 10),
        text("", {
            size: 4,
            width: 110,
            font: "sinko",
        }),
        "text_end"
    ]);

    let victoryFailure;
    let isWin = false;

    if (votesTotal > 50) isWin = true;

    //display the correct animation
    if (isWin) {
        victoryFailure = add([
            pos(width() / 2, (height() / 2) - 7),
            origin("center"),
            sprite("victory", { anim: "animated_BG" })
        ]);
    }
    else {
        victoryFailure = add([
            pos(width() / 2, (height() / 2) - 10),
            origin("center"),
            sprite("failure", { anim: "animated_BG" })
        ]);
    }

    // destroy everything
    destroyAll("event");
    destroyAll("texts_game");
    destroyAll("UI");
    endBG.onHover(() => {
        destroyAll("score");
    });

    // text to skip
    const skipTxt = add([
        scale(0.5),
        pos(38, 75),
        sprite("continue"),
        area(),
        "continue",
        "text_end"
    ]);

    skipTxt.onClick(() => {
        console.log("clicked")
        victoryFailure.destroy();
        skipTxt.destroy();

        if (isWin) endTxt.text = scenarios[scenarioPlayed][15] + "\n \nYour score was: " + votesTotal + "%! Congrats!";
        else endTxt.text = scenarios[scenarioPlayed][16] + "\n \nYour score was: " + votesTotal + "%! Better luck next time!";
        let btnToMenu = add([
            scale(0.5),
            pos(41, 80),
            sprite("to_menu"),
            area()
        ]);
        btnToMenu.onClick(() => {
            alert("go to menu here !") //go to menu once it's done
        })
    });

    // add button to go back to the main menu

}