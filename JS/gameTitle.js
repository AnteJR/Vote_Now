/* All the scenes necessary to make the title screen work */

scene("titleScreen", () => {
    layers([
        "bg",
        "txt"
    ]);

    const menu_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    const menu_Title = add([
        scale(multiplyer),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 - height() / 2.8)),
        sprite("title", { anim: "animated_BG" }),
        layer("txt")
    ]);

    const menu_PlayNowButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        pos(Math.floor(width() / 35), Math.floor(height() / 2)),
        sprite("play_now"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.getItem("hasReadIntro") == "true" ? go("levelSelect", { scenarioNumber: 0 }) : go("introTxtGeneral");
    });

    const menu_CreditsPageButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        pos(Math.floor(width() / 35), Math.floor(height() - (height() / 3))),
        sprite("credits"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("creditsPage");
    });

    const menu_AchievementsButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        pos(Math.floor(width() / 35), Math.floor(height() - (height() / 6))),
        sprite("achievements"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("achievements_scene", { idVote: 0 });
    });
});

scene("introTxtGeneral", () => {
    layers([
        "bg",
        "txt",
    ]);

    const intro_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    const intro_GreyOutSquare = add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.25),
        layer("grey_squares"),
        layer("bg")
    ]);

    const intro_Text = add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(((height() / 2) - (height() / 10)))),
        text("Vote Now! is a minimalist strategy game that plays kind of like Reigns, as in you have a choice of 2 actions that you can pick from at a time.\n\nYou will play as a non-specific, left-leaning political party aiming to pass bills in Switzerland by propagandizing to influence voters' opinions. You will have to manage your money, the opinions of the voter base on your campaign, and the votes you are predicted to get.", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / (multiplyer + 1)))
        }),
        layer("txt")
    ]);

    const intro_PlayButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - (height() / 10))),
        sprite("play"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.setItem("hasReadIntro", true);
        go("levelSelect", { scenarioNumber: 0 });
    });
});

scene("levelSelect", ({ scenarioNumber }) => {
    let currentScenarioDisplayed = scenarioNumber,
        monScore = parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")),
        hasNotBeenPlayed = localStorage.getItem("scenario_" + currentScenarioDisplayed + "_played") == null ? true : false,
        isPerfectScore = localStorage.getItem("scenario_" + currentScenarioDisplayed + "_perfected") == "true" ? true : false,
        historicalScore = scenarios[currentScenarioDisplayed][18],
        needsGain = scenarios[currentScenarioDisplayed][19],
        logoName = hasNotBeenPlayed == false ? (isPerfectScore ? "perfect" : (needsGain ? (historicalScore >= 50 ? (monScore < 50 ? "fail" : "bravo") : (monScore < historicalScore ? "fail" : "bravo")) : (historicalScore >= 50 ? (monScore > historicalScore ? "fail" : "bravo") : (monScore > 50 ? "fail" : "bravo")))) : "new";

    layers([
        "bg",
        "txt",
        "btns"
    ]);

    const levelSelect_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_Mission_" + currentScenarioDisplayed),
        layer("bg")
    ]);

    const levelSelect_GreyOutSquare = add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.25),
        layer("grey_squares"),
        layer("bg")
    ]);

    const levelSelect_ScenarioName = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 - height() / 6)),
        text(scenarios[currentScenarioDisplayed][0], {
            size: multiplyer % 2 == 0 ? Math.floor(10 * (multiplyer) - (5 * (multiplyer / 2))) : Math.floor(10 * (multiplyer - 1) - (5 * ((multiplyer - 1) / 2))),
            width: Math.floor(width() / 10 * 7)
        }),
        area(),
        layer("txt")
    ]);

    const levelSelect_ScenarioYear = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 - height() / 6.5 + levelSelect_ScenarioName.height)),
        text(scenarios[currentScenarioDisplayed][14].split(".").pop(), {
            size: multiplyer % 2 == 0 ? 5 * multiplyer : 5 * (multiplyer - 1) + 10
        }),
        area(),
        layer("txt")
    ]);

    const levelSelect_LogoStamps = add([
        origin("center"),
        scale(Math.floor(multiplyer / 2)),
        pos(hasNotBeenPlayed == true ? [Math.floor(width() / 6), Math.floor(height() / 2 - height() / 6)] : [Math.floor(width() / 2 - width() / 7), Math.floor(height() / 2 - height() / 4.5)]),
        sprite(logoName + "_logo"),
        rotate(-45),
        layer("bg")
    ]);

    const levelSelect_ScorePlayed = add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 - height() / 5)),
        text(isNaN(monScore) ? "" : monScore + "%", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer)) : Math.floor(5 * (multiplyer - 1) + 10),
        }),
        color(logoName == "perfect" ? rgb(245, 196, 34) : (logoName == "bravo" ? rgb(74, 222, 58) : rgb(199, 20, 20))),
        layer("txt")
    ]);

    const levelSelect_PreviousButton = add([
        pos(Math.floor(width() / 20), Math.floor(height() / 2 - height() / 10)),
        text("<", {
            size: Math.floor(10 * multiplyer)
        }),
        layer("btns"),
        area()
    ]).onClick(() => {
        play("on_click_3");
        currentScenarioDisplayed == 0 ? currentScenarioDisplayed = scenarios.length - 1 : currentScenarioDisplayed--;
        go("levelSelect", ({ scenarioNumber: currentScenarioDisplayed }));
    });

    const levelSelect_NextButton = add([
        origin("topright"),
        pos(Math.floor(width() - width() / 20), Math.floor(height() / 2 - height() / 10)),
        text(">", {
            size: Math.floor(10 * multiplyer)
        }),
        layer("btns"),
        area()
    ]).onClick(() => {
        play("on_click_3");
        currentScenarioDisplayed == scenarios.length - 1 ? currentScenarioDisplayed = 0 : currentScenarioDisplayed++;
        go("levelSelect", ({ scenarioNumber: currentScenarioDisplayed }));
    });

    const levelSelect_PlayButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("right"),
        pos(Math.floor(width() - width() / 5), Math.floor(height() - (height() / 10))),
        sprite("play"),
        area(),
        layer("btns")
    ]).onClick(() => {
        play("on_click_1");
        go("introTxtScenario", ({ idVote: currentScenarioDisplayed }));
    });

    const levelSelect_BackButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("left"),
        pos(Math.floor(width() / 5), Math.floor(height() - (height() / 10))),
        sprite("back"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("titleScreen");
    });
});

scene("introTxtScenario", ({ idVote }) => {
    layers([
        "bg",
        "txt",
    ]);

    const introMission_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_Mission_" + idVote),
        layer("bg")
    ]);

    const introMission_GreyOutSquare = add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.5),
        layer("grey_squares"),
        layer("bg")
    ]);

    const introMission_Text = add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor((height() / 2) - (height() / (multiplyer + 3)))),
        text(scenarios[idVote][17], {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer))
        }),
        layer("txt")
    ]);

    const introMission_PlayButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("right"),
        pos(Math.floor(width() - width() / 5), Math.floor(height() - (height() / 10))),
        sprite("play"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        scenarios[idVote][19] == true ? goToGame(idVote, true) : go("showDisclaimer", ({ monScenario: idVote }));
    });

    const introMission_BackButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("left"),
        pos(Math.floor(width() / 5), Math.floor(height() - (height() / 10))),
        sprite("back"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("levelSelect", { scenarioNumber: idVote });
    });
});

scene("showDisclaimer", ({ monScenario }) => {
    layers([
        "bg",
        "txt",
    ]);

    const disclaimer_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_Mission_" + monScenario),
        layer("bg")
    ]);

    const disclaimer_GreyOutSquare = add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.75),
        layer("grey_squares"),
        layer("bg")
    ]);

    const disclaimer_Title = add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10)),
        text("This scenario is different from the rest!", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer))
        }),
        color(rgb(255, 0, 0)),
        layer("txt")
    ]);

    const disclaimer_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 5)),
        text("Here, the goal is not to make the law pass; it's to make it fail. Thus, you will start at an above 50% approval ratings, and must campaign to make that number diminish.\n\nDon't worry if the votes are in the negative, then: it's normal!", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer))
        }),
        layer("txt")
    ])

    const disclaimer_PlayButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("right"),
        pos(Math.floor(width() - width() / 5), Math.floor(height() - (height() / 7))),
        sprite("play"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        goToGame(monScenario, false)
    });

    const disclaimer_BackButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("left"),
        pos(Math.floor(width() / 5), Math.floor(height() - (height() / 7))),
        sprite("back"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("introTxtScenario", { idVote: monScenario });
    });
});

scene("creditsPage", () => {
    layers([
        "bg",
        "txt"
    ]);

    const credits_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    const credits_Title = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10)),
        text(`Vote Now!`, {
            size: Math.floor(10 * (multiplyer + 1))
        }),
        layer("txt")
    ]);

    const credits_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 3)),
        text(`A game created, written, designed, and developped by Joel Rimaz\n\nUnder the supervision of Isaac Pante\n\nAugust 2022`, {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - width() / 10)
        }),
        layer("txt")
    ]);

    const credits_BackButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 7)),
        sprite("back"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("titleScreen");
    });

    const credits_DeleteCache = add([
        scale(Math.floor(multiplyer)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 9)),
        sprite("delete_game"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.clear();
        go("titleScreen");
    });
});

scene("achievements_scene", ({ idVote }) => {
    let voteNbr = idVote,
        canGoBack = true;
    
    layers([
        "bg",
        "txt",
        "img"
    ]);

    const achievements_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "idle" }),
        layer("bg")
    ]);

    const achievements_GreyOutSquare = add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.25),
        layer("bg")
    ]);

    const achievements_Title = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10)),
        text(scenarios[idVote][0], {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() / 10 * 8)
        }),
        area(),
        layer("txt")
    ]);

    const achievements_Poster = add([
        scale(Math.floor(multiplyer / 2)),
        origin("center"),
        pos(width() / 2, height() / 2),
        sprite("Affiche_UKN"),
        area(),
        layer("img")
    ]);

    const achievements_PreviousButton = add([
        pos(Math.floor(width() / 20), Math.floor(height() / 2 - height() / 10)),
        text("<", {
            size: Math.floor(10 * multiplyer)
        }),
        layer("txt"),
        area()
    ]);
    achievements_PreviousButton.onClick(() => {
        play("on_click_3");
        voteNbr == 0 ? voteNbr = scenarios.length - 1 : voteNbr--;
        go("achievements_scene", ({ idVote: voteNbr }));
    });

    const achievements_NextButton = add([
        origin("topright"),
        pos(Math.floor(width() - width() / 20), Math.floor(height() / 2 - height() / 10)),
        text(">", {
            size: Math.floor(10 * multiplyer)
        }),
        layer("txt"),
        area()
    ]);
    achievements_NextButton.onClick(() => {
        play("on_click_3");
        voteNbr == scenarios.length - 1 ? voteNbr = 0 : voteNbr++;
        go("achievements_scene", ({ idVote: voteNbr }));
    });

    const achievements_BackButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - height() / 15)),
        sprite("back"),
        area(),
        layer("txt")
    ]);
    achievements_BackButton.onClick(() => {
        if (canGoBack == true) {
            play("on_click_2");
            go("titleScreen");
        }
    });

    if (localStorage.getItem("scenario_" + voteNbr + "_perfected") == "true") {
        achievements_Poster.use(sprite("Affiche" + voteNbr));
        achievements_Poster.scale = Math.floor(multiplyer / 4);

        let counter = 0;

        achievements_Poster.onClick(() => {
            if (counter == 0) {
                achievements_Poster.scale = multiplyer / 2.05;
                achievements_GreyOutSquare.opacity = 0.75;
                achievements_PreviousButton.opacity = 0;
                achievements_NextButton.opacity = 0;
                achievements_Title.opacity = 0;
                achievements_BackButton.opacity = 0;
                canGoBack = false;
                counter++;
            } else {
                achievements_Poster.scale = Math.floor(multiplyer / 4);
                achievements_GreyOutSquare.opacity = 0.25;
                achievements_PreviousButton.opacity = 1;
                achievements_NextButton.opacity = 1;
                achievements_Title.opacity = 1;
                achievements_BackButton.opacity = 1;
                setTimeout(() => { canGoBack = true; }, 100)
                counter--;
            }
        });
    }
});

function goToGame(i, b) {
    music_menu.pause();
    !music_game ? playGameMusic() : music_game.play();

    go("game", ({
        idScenario: i,
        startTurn: 1,
        intialVotes: scenarios[i][11],
        initialMoney: scenarios[i][12],
        initialOptics: scenarios[i][13],
        dayOfVote: scenarios[i][14],
        mustGain: b
    }));
}

function initFunction() {
    playMenuMusic();
    go("titleScreen");
}

initFunction();