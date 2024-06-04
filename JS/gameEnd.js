/* Function for the game's end to work */

scene("victoryPage", ({ isWin, playedScene, votes, winIfMoreThan50 }) => {
    music_game.pause();
    music_menu.play();

    let monScore = parseFloat(localStorage.getItem("scenario_" + playedScene + "_score")),
        realResults = scenarios[LANG][playedScene][18],
        wasPerfectBefore = localStorage.getItem("scenario_" + playedScene + "_perfected") == "true" ? true : false,
        victoryTxt = {
            english: [
                "The bill passed, but you didn't reach the historical score.",
                "You reached and went beyond the historical score!",
                "The bill passed despite failing in real life!",
                "You did better than the historical score, but the bill still failed",
                "You didn't reach the historical score",
                "The bill was blocked by the vote",
                "The bill passed with more votes than in real life...",
                "You did better than the historical vote, but the bill still passed",
                "The bill failed! Congratulations!"
            ],
            french: [
                "La loi est passee, mais le score historique n'a pas ete atteint!",
                "Le score historique a ete depasse!",
                "La loi est passee, malgre qu'elle ait echoue en realite!",
                "Le score historique a ete depasse, mais la loi a quand meme echoue!",
                "Le score historique n'a pas ete atteint!",
                "La loi a ete rejetee...",
                "La loi est passee avec plus de voix qu'en realite...",
                "Le score historique a ete depasse, mais la loi est passee.",
                "La loi a echoue! Felicitations!"
            ]
        },
        textToDisplay = (winIfMoreThan50 ? (isWin ? (realResults > 50 ? (votes < realResults ? "passed" : "victory") : "victory") : (realResults < 50 ? (votes > realResults ? "not_passed" : "failure") : "failure")) : (votes > 50 ? (votes > realResults ? "failure" : "passed") : "victory")) + langSprites[LANG];

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
        pos(Math.floor(width() / 2), textToDisplay == "failure_FR" ? Math.floor((height() / 40)) : Math.floor(height() / 10)),
        origin("top"),
        layer("victoryState"),
        sprite(textToDisplay, { anim: "animated_BG" })
    ]);

    const victoryScreen_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2),  textToDisplay == "failure_FR" ? Math.floor((height() / 10 * 5.5)) : Math.floor((height() / 10) * 5)),
        text(winIfMoreThan50 ? (isWin ? (realResults > 50 ? (votes < realResults ? victoryTxt[LANG][0] : victoryTxt[LANG][1]) : victoryTxt[LANG][2]) : (realResults < 50 ? (votes > realResults ? victoryTxt[LANG][3] : victoryTxt[LANG][4]) : victoryTxt[LANG][5])) : (votes > 50 ? (votes > realResults ? victoryTxt[LANG][6] : victoryTxt[LANG][7]) : victoryTxt[LANG][8]), {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / 10))
        }),
        layer("victoryState")
    ]);

    const victoryScreen_NextButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 7.5)),
        sprite("continue" + langSprites[LANG]),
        area(),
        layer("victoryState")
    ]).onClick(() => {
        play("on_click_1");
        go("endExplaination", ({ isVictory: isWin, sceneTxtToShow: playedScene, votesTotal: votes, isNewPerf: isNewlyPerfect, realVote: realResults, gainWin: winIfMoreThan50 }));
    })
});

scene("endExplaination", ({ isVictory, sceneTxtToShow, votesTotal, isNewPerf, realVote, gainWin }) => {
    let victoryInFailure = {
        english: " Still, you did better than the historical score, congratulations!",
        french: " Vous avez quand meme fait mieux que le score historique, felicitations!"
    }, yourScoreWas = {
        english: "Your score was",
        french: "Votre score etait"
    }

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

    let explainationText = (realVote < 50 && votesTotal < 50 && gainWin) || (realVote >= 50 && votesTotal >= 50 && votesTotal < realVote && !gainWin) ? scenarios[LANG][sceneTxtToShow][16] + victoryInFailure[LANG] : (isVictory ? scenarios[LANG][sceneTxtToShow][15] : scenarios[LANG][sceneTxtToShow][16]);

    const finalScreen_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 0.5)),
        text(explainationText + "\n\n " + yourScoreWas[LANG] + " " + votesTotal + "%", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer))
        }),
        layer("txt")
    ]);

    const finalScreen_BackToMenuButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - height() / 10)),
        sprite("to_menu" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        isNewPerf == true ? go("new_achievement", { scenarioToDisplay: sceneTxtToShow }) : go("levelSelect", { scenarioNumber: sceneTxtToShow });
    });
});

scene("new_achievement", ({ scenarioToDisplay }) => {
    let achievementsTxt = {
        english: {
            title: "Before you go",
            text: "You got a perfect victory! You earned a pixel art reproduction of a historical propaganda poster. Congratulations!"
        },
        french: {
            title: "Avant de partir",
            text: "C'etait une partie parfaite! Vous avez gagne une reproduction d'une affiche de propagande de l'epoque. Felicitations!"
        }
    };

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
        text(achievementsTxt[LANG].title + "...!", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) + 10) : Math.floor(5 * (multiplyer - 1) + 10),
            width: Math.floor(width() - (width() / 10))
        }),
        layer("txt")
    ]);

    const newAchivement_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 1.25)),
        text(achievementsTxt[LANG].text, {
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
        sprite("to_menu" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("levelSelect", { scenarioNumber: scenarioToDisplay });
    });
});