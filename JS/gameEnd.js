/* Function for the game's end to work */

scene("victoryPage", ({ isWin, playedScene, votes, winIfMoreThan50 }) => {
    music_game.pause();
    music_menu.play();

    localStorage.setItem("scenario_" + playedScene + "_played", true);

    let monScore = parseFloat(localStorage.getItem("scenario_" + playedScene + "_score")),
        realResults = scenarios[playedScene][18];

    if (winIfMoreThan50) {
        if (isNaN(monScore)) localStorage.setItem("scenario_" + playedScene + "_score", votes);
        else if (monScore < votes) localStorage.setItem("scenario_" + playedScene + "_score", votes);

        if ((realResults > 50 && votes >= realResults) || (realResults < 50 && votes > 50)) localStorage.setItem("scenario_" + playedScene + "_perfected", true);
    }
    else {
        if (isNaN(monScore)) localStorage.setItem("scenario_" + playedScene + "_score", votes);
        else if (monScore > votes) localStorage.setItem("scenario_" + playedScene + "_score", votes);

        if ((realResults >= 50 && votes < 50) || (realResults < 50 && votes <= realResults)) localStorage.setItem("scenario_" + playedScene + "_perfected", true);
    }

    layers([
        "bg",
        "victoryState"
    ]);

    add([
        sprite("ui_end"),
        scale(multiplyer),
        pos(0, 0),
        layer("bg")
    ]);

    add([
        scale(multiplyer),
        pos(Math.floor(width() / 2), Math.floor((height() / 2) - (height() / (multiplyer + 3)))),
        origin("center"),
        layer("victoryState"),
        sprite(isWin ? "victory" : "failure", { anim: "animated_BG" })
    ]);

    const skipTxt = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor((height() / 2) + (height() / multiplyer))),
        sprite("continue"),
        area(),
        layer("victoryState")
    ]);

    skipTxt.onClick(() => {
        play("on_click_1");
        go("endExplaination", ({ isVictory: isWin, sceneTxtToShow: playedScene, votesTotal: votes }));
    })
});

scene("endExplaination", ({ isVictory, sceneTxtToShow, votesTotal }) => {
    layers([
        "bg",
        "txt"
    ]);

    const endBG = add([
        sprite("ui_end"),
        scale(multiplyer),
        pos(0, 0),
        layer("bg")
    ]);

    let explainationText = isVictory ? scenarios[sceneTxtToShow][15] : scenarios[sceneTxtToShow][16];

    if ((isVictory && scenarios[sceneTxtToShow][18] < 50 && votesTotal < 50 && scenarios[sceneTxtToShow][19] == true) || (isVictory && scenarios[sceneTxtToShow][18] >= 50 && votesTotal >= 50 && votesTotal < scenarios[sceneTxtToShow][18] && scenarios[sceneTxtToShow][19] == false)) explainationText = scenarios[sceneTxtToShow][16] + " You still managed to do better than what really happend, and for that, we congratulate you!"

    add([
        origin("center"),
        pos(width() / 2, (height() / 2) - 70),
        text(explainationText + "\n\nYour score was: " + votesTotal + "%", {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer)),
            font: "sinko",
        }),
        layer("txt")
    ]);

    const btnToMenu = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor((height() / 2) + (height() / 2.8))),
        sprite("to_menu"),
        area(),
        layer("txt")
    ]);

    btnToMenu.onClick(() => {
        play("on_click_2");
        go("levelSelect", { scenarioNumber: sceneTxtToShow });
    })
});