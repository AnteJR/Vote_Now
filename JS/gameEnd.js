/* Function for the game's end to work */

scene("victoryPage", ({ isWin, playedScene, votes }) => {
    music_game.pause();
    music_menu.play();

    localStorage.setItem("scenario_" + playedScene + "_played", true);
    if (localStorage.getItem("scenario_" + playedScene + "_score") != null) {
        if (parseFloat(localStorage.getItem("scenario_" + playedScene + "_score")) < votes) localStorage.setItem("scenario_" + playedScene + "_score", votes);
    }
    else localStorage.setItem("scenario_" + playedScene + "_score", votes);

    layers([
        "bg",
        "victoryState"
    ]);

    const endBG = add([
        sprite("ui_end"),
        scale(multiplyer),
        pos(0, 0),
        layer("bg")
    ]);

    const victoryOrFailure = isWin == true ? "victory" : "failure";

    const victoryFailure = add([
        scale(multiplyer),
        pos(Math.floor(width() / 2), Math.floor((height() / 2) - (height() / (multiplyer + 3)))),
        origin("center"),
        layer("victoryState"),
        sprite(victoryOrFailure, { anim: "animated_BG" })
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

    const victFail = isVictory == true ? 15 : 16;

    const endTxt = add([
        origin("center"),
        pos(width() / 2, (height() / 2) - 70),
        text(scenarios[sceneTxtToShow][victFail] + "\n\nYour score was: " + votesTotal + "%", {
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