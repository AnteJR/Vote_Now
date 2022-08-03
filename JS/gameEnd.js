function endScreen(scenarioPlayed, votesTotal) {
    let victoryFailure;
    let isWin = false;

    if (votesTotal > 50) isWin = true;

    // add end screen UI
    const endBG = add([
        pos(0, 0),
        sprite("ui_end"),
        area()
    ]);

    // destroy everything
    destroyAll("event");
    destroyAll("texts_game");
    destroyAll("UI");
    endBG.onHover(() => {
        destroyAll("score");
    });

    // add end screen text based on the scenario played
    const endTxt = add([
        origin("center"),
        pos(width() / 2, (height() / 2) + 5),
        text("", {
            size: 4,
            width: 100,
            font: "sinko",
        }),
    ]);

    if (isWin) {
        victoryFailure = add([
            pos(width() / 2, (height() / 2)-5),
            origin("center"),
            sprite("victory", { anim: "animated_BG" })
        ]);
    }
    else {
        victoryFailure = add([
            pos(width() / 2, (height() / 2)-5),
            origin("center"),
            sprite("victory", { anim: "animated_BG" })
        ]);
    }
    

    // add button to go back to the main menu
}