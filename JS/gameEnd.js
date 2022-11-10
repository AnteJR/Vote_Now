/* Function for the game's end to work */

scene("victoryPage", ({ isWin, playedScene, votes, winIfMoreThan50 }) => {
    music_game.pause();
    music_menu.play();

    let monScore = parseFloat(localStorage.getItem("scenario_" + playedScene + "_score")),
        realResults = scenarios[LANG][playedScene][18],
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
        text(winIfMoreThan50 ? (isWin ? (realResults > 50 ? (votes < realResults ? "La loi est passée, mais le score historique n'a pas été atteint!" : "Le score historique a été dépassé!") : "La loi est passée, malgré qu'elle ait échoué en réalité!") : (realResults < 50 ? (votes > realResults ? "Le score historique a été dépassé, mais la loi a quand même échoué!" : "Le score historique n'a pas été atteint!") : "La loi a été rejettée...")) : (votes > 50 ? (votes > realResults ? "La loi est passée avec plus de voix qu'en réalité..." : "Le score historique a été dépassé, mais la loi est passée.") : "La loi a échoué! Félicitations!"), {
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

    let explainationText = (realVote < 50 && votesTotal < 50 && gainWin) || (realVote >= 50 && votesTotal >= 50 && votesTotal < realVote && !gainWin) ? scenarios[LANG][sceneTxtToShow][16] + " Vous avez quand même fait mieux que le score historique, félicitations!" : (isVictory ? scenarios[LANG][sceneTxtToShow][15] : scenarios[LANG][sceneTxtToShow][16]);

    const finalScreen_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 0.5)),
        text(explainationText + "\n\nVotre score était: " + votesTotal + "%", {
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
        text("Avant de partir...!", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) + 10) : Math.floor(5 * (multiplyer - 1) + 10),
            width: Math.floor(width() - (width() / 10))
        }),
        layer("txt")
    ]);

    const newAchivement_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 1.25)),
        text("C'était une partie parfaite! Vous avez gagnée une reproduction d'une affiche de propagande de l'époque. Félicitations!", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 10),
            width: Math.floor(width() - (width() / 10))
        }),
        layer("txt")
    ]);

    const newAchivement_posterWon = add([
        sprite("Affiche" + scenarioToDisplay),
        scale(scenarioToDisplay == 0 ? multiplyer / 3.25 : multiplyer / 3.75),
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 2.5)),
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