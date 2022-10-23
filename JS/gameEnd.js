/* Function for the game's end to work */

scene("victoryPage", ({ isWin, playedScene, votes, winIfMoreThan50 }) => {
    music_game.pause();
    music_menu.play();

    let monScore = parseFloat(localStorage.getItem("scenario_" + playedScene + "_score")),
        realResults = scenarios[playedScene][18],
        wasPerfectBefore = localStorage.getItem("scenario_" + playedScene + "_perfected") == "true" ? true : false;

    /* localStorage management */
    localStorage.setItem("scenario_" + playedScene + "_played", true);

    localStorage.setItem("scenario_" + playedScene + "_score", winIfMoreThan50 ? (isNaN(monScore) ? votes : (monScore < votes ? votes : monScore)) : (isNaN(monScore) ? votes : (monScore > votes ? votes : monScore)));
    localStorage.setItem("scenario_" + playedScene + "_perfected", wasPerfectBefore ? true : (winIfMoreThan50 ? ((realResults > 50 && votes >= realResults) || (realResults < 50 && votes > 50) ? true : null) : ((realResults >= 50 && votes < 50) || (realResults < 50 && votes <= realResults) ? true : null)));

    let isNewlyPerfect = localStorage.getItem("scenario_" + playedScene + "_perfected") == "true" && wasPerfectBefore == false ? true : false;

    layers([
        "bg",
        "victoryState"
    ]);

    const victoryScreen_BG = add([
        sprite("ui_end"),
        scale(multiplyer),
        pos(0, 0),
        layer("bg")
    ]);

    const victoryScreen_VictoryState = add([
        scale(multiplyer),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 1.5)),
        origin("top"),
        layer("victoryState"),
        sprite(winIfMoreThan50 ? (isWin ? (realResults > 50 ? (votes < realResults ? "passed" : "victory") : "victory") : (realResults < 50 ? (votes > realResults ? "not_passed" : "failure") : "failure")) : (votes > 50 ? (votes > realResults ? "failure" : "passed") : "victory"), { anim: "animated_BG" })
    ]);

    const victoryScreen_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 5.25)),
        text(winIfMoreThan50 ? (isWin ? (realResults > 50 ? (votes < realResults ? "the bill passed, but you didn't reach the historical score" : "you reached and went beyond the historical score!") : "the bill passed despite failing in real life!") : (realResults < 50 ? (votes > realResults ? "you did better than the historical score, but the bill still failed" : "you didn't reach the historical score") : "the bill was blocked by the vote")) : (votes > 50 ? (votes > realResults ? "the bill passed with more votes than in real life..." : "you did better than the historical vote, but the bill still passed") : "the bill failed! congratulations!"), {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / 10))
        }),
        layer("victoryState")
    ]);

    const victoryScreen_NextButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 7.5)),
        sprite("continue"),
        area(),
        layer("victoryState")
    ]).onClick(() => {
        play("on_click_1");
        go("endExplaination", ({ isVictory: isWin, sceneTxtToShow: playedScene, votesTotal: votes, isNewPerf: isNewlyPerfect, realVote: realResults, gainWin: winIfMoreThan50 }));
    })
});

scene("endExplaination", ({ isVictory, sceneTxtToShow, votesTotal, isNewPerf, realVote, gainWin }) => {
    layers([
        "bg",
        "txt"
    ]);

    const finalScreen_BG = add([
        sprite("ui_end"),
        scale(multiplyer),
        pos(0, 0),
        layer("bg")
    ]);

    let explainationText = (realVote < 50 && votesTotal < 50 && gainWin) || (realVote >= 50 && votesTotal >= 50 && votesTotal < realVote && !gainWin) ? scenarios[sceneTxtToShow][16] + " You still managed to do better than what really happend, and for that, we congratulate you!" : (isVictory ? scenarios[sceneTxtToShow][15] : scenarios[sceneTxtToShow][16]);

    const finalScreen_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 0.5)),
        text(explainationText + "\n\nYour score was: " + votesTotal + "%", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer))
        }),
        layer("txt")
    ]);

    const finalScreen_BackToMenuButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - height() / 10)),
        sprite("to_menu"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        isNewPerf == true ? go("new_achievement", { scenarioToDisplay: sceneTxtToShow }) : go("levelSelect", { scenarioNumber: sceneTxtToShow });
    });
});

scene("new_achievement", ({ scenarioToDisplay }) => {
    layers([
        "bg",
        "txt"
    ]);

    const newAchivement_BG = add([
        sprite("ui_end"),
        scale(multiplyer),
        pos(0, 0),
        layer("bg")
    ]);

    const newAchivement_Title = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 0.5)),
        text("Before you go back...!", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) + 10) : Math.floor(5 * (multiplyer - 1) + 10),
            width: Math.floor(width() - (width() / 10))
        }),
        layer("txt")
    ]);

    const newAchivement_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 1.25)),
        text("You had a perfect victory! As such, you won a pixel art reproduction of one of the propaganda materials of the time. Congratulations!", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 10),
            width: Math.floor(width() - (width() / 10))
        }),
        layer("txt")
    ]);

    const newAchivement_posterWon = add([
        sprite("Affiche" + scenarioToDisplay),
        scale(scenarioToDisplay == 0 ? multiplyer / 3.25 : multiplyer / 3.75),
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 1.35) + newAchivement_Text.height),
        layer("bg"),
    ]);

    const newAchivement_BackToMenuButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - height() / 10)),
        sprite("to_menu"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("levelSelect", { scenarioNumber: scenarioToDisplay });
    });
});