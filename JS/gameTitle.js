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
        origin("botleft"),
        scale(Math.floor(multiplyer * 1.5)),
        pos(Math.floor(width() / 10 * 0.25), Math.floor((height() / 10) * 6)),
        sprite("play_now"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.getItem("hasReadIntro") == "true" ? go("levelSelect", { scenarioNumber: 0 }) : go("introTxtGeneral");
    });

    const menu_TutorialButton = add([
        origin("botleft"),
        scale(Math.floor(multiplyer * 1.15)),
        pos(Math.floor(width() / 10 * 0.25), Math.floor((height() / 10) * 7.65)),
        sprite("tutorial"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("tutorial", { fromMenu: true, i:0 });
    });

    const menu_CreditsPageButton = add([
        origin("botleft"),
        scale(Math.floor(multiplyer * 1.15)),
        pos(Math.floor(width() / 10 * 0.25), Math.floor((height() / 10) * 8.7)),
        sprite("credits"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("creditsPage");
    });

    const menu_AchievementsButton = add([
        origin("botleft"),
        scale(Math.floor(multiplyer * 1.15)),
        pos(Math.floor(width() / 10 * 0.25), Math.floor((height() / 10) * 9.75)),
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
        go("tutorial", { fromMenu: false, i:0 });
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
        origin("bot"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 8.5)),
        sprite("back"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("titleScreen");
    });

    const credits_DeleteCache = add([
        scale(Math.floor(multiplyer)),
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 8.75)),
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

scene("tutorial", ( { fromMenu, i } ) => {
    let slideNumber = i;
    let mesTxt = [
        "In Vote Now!, you will have to choose between two options at a time. You will have 10 turns to obtain more than 50% of the votes.",
        "The events you can choose from:",
        "",
        "There are 3 variables to take into consideration. You can follow your progress for each on the top of the screen. You can also check how many turns are left at the bottom.",
        "Votes: the percentages of votes in favor of the bill\n\nMoney: the money you have, which is used to buy ads, or organize events\n\nOptics: optics are how favorably the people see your campaign. It's a multiplier for the votes you get. IE. if your optics are at 0.8 and you select an event who earns you 10% votes, you will actually gain 10x0.8 = 8%.",
        "Balance those 3 variables to maximize your score! Depending on how well you succeed, you will have a varying degree of victory, going from failure (the bill didn't pass) to perfect (you reached or went beyond the original score of the vote).",
        "If you manage to get a perfect victory, you will unlock a pixel art reproduction of one piece of propaganda material of the time in the achievements section. Go to the main menu to check them out!\n\nOnce you get all the achievements, the game is pretty much finished. You can still reset your saved data at the credits page to start anew."
    ]

    layers([
        "bg",
        "txt"
    ]);

    const tutorial_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "idle" }),
        layer("bg")
    ]);

    const tutorial_GreyOutSquare = add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.9),
        layer("grey_squares"),
        layer("bg")
    ]);

    const tutorial_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 0.5)),
        text(mesTxt[slideNumber], {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / (multiplyer + 1)))
        }),
        layer("txt")
    ]);

    if (slideNumber == 0) {
        // example event
        add([
            scale(multiplyer / 1.5),
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 3.25)),
            sprite("event_journal_dawn_nice", { anim: "animated_BG" }),
            layer("txt")
        ]);

        add([
            scale(multiplyer / 1.5),
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 3.25)),
            sprite("score_journal"),
            layer("txt")
        ]);

        // text description
        add([
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 6.25)),
            text("^ a typical event with what it costs/earns you ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 15),
                width: Math.floor(width() - (width() / (multiplyer + 1)))
            }),
            layer("txt")
        ]);
    }
    else if (slideNumber == 1) {
        // train ad
        add([
            scale(multiplyer / 2.25),
            origin("top"),
            pos(Math.floor(width() / 4), Math.floor((height() / 10) * 2)),
            sprite("event_train_dawn_nice", { anim: "animated_BG" }),
            layer("txt")
        ]);

        add([
            origin("top"),
            pos(Math.floor(width() / 4), Math.floor((height() / 10) * 4)),
            text("^ train station ads ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 20)
            }),
            layer("txt")
        ]);

        // market ads
        add([
            scale(multiplyer / 2.25),
            origin("top"),
            pos(Math.floor((width() / 4) * 3), Math.floor((height() / 10) * 2)),
            sprite("event_marche_dawn_nice", { anim: "animated_BG" }),
            layer("txt")
        ]);

        add([
            origin("top"),
            pos(Math.floor((width() / 4) * 3), Math.floor((height() / 10) * 4)),
            text("^ market flyer distribution ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 20)
            }),
            layer("txt")
        ]);
        
        // AG ad
        add([
            scale(multiplyer / 2.25),
            origin("top"),
            pos(Math.floor(width() / 4), Math.floor((height() / 10) * 5)),
            sprite("event_ag_dawn_nice", { anim: "animated_BG" }),
            layer("txt")
        ]);

        add([
            origin("top"),
            pos(Math.floor(width() / 4), Math.floor((height() / 10) * 7)),
            text("^ ask sponsors for funds ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 20)
            }),
            layer("txt")
        ]);

        // journal ads
        add([
            scale(multiplyer / 2.25),
            origin("top"),
            pos(Math.floor((width() / 4) * 3), Math.floor((height() / 10) * 5)),
            sprite("event_journal_dawn_nice", { anim: "animated_BG" }),
            layer("txt")
        ]);

        add([
            origin("top"),
            pos(Math.floor((width() / 4) * 3), Math.floor((height() / 10) * 7)),
            text("^ newspaper ads ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 20)
            }),
            layer("txt")
        ]);
    }
    else if (slideNumber == 2) {
        // poste
        add([
            scale(multiplyer / 2.25),
            origin("top"),
            pos(Math.floor(width() / 4), Math.floor((height() / 10) * 0.5)),
            sprite("event_poste_dawn_nice", { anim: "animated_BG" }),
            layer("txt")
        ]);

        add([
            origin("top"),
            pos(Math.floor(width() / 4), Math.floor((height() / 10) * 2.5)),
            text("^ ask donors for funds ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 20)
            }),
            layer("txt")
        ]);

        // coupole
        add([
            scale(multiplyer / 2.25),
            origin("top"),
            pos(Math.floor((width() / 4) * 3), Math.floor((height() / 10) * 0.5)),
            sprite("event_coupole_dawn_nice", { anim: "animated_BG" }),
            layer("txt")
        ]);

        add([
            origin("top"),
            pos(Math.floor((width() / 4) * 3), Math.floor((height() / 10) * 2.5)),
            text("^ protest in Bern ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 20)
            }),
            layer("txt")
        ]);

        // affiche
        add([
            scale(multiplyer / 2.25),
            origin("top"),
            pos(Math.floor(width() / 4), Math.floor((height() / 10) * 3.25)),
            sprite("event_affiche_dawn_nice", { anim: "animated_BG" }),
            layer("txt")
        ]);

        add([
            origin("top"),
            pos(Math.floor(width() / 4), Math.floor((height() / 10) * 5.25)),
            text("^ poster campaign ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 20)
            }),
            layer("txt")
        ]);

        // radio
        add([
            scale(multiplyer / 2.25),
            origin("top"),
            pos(Math.floor((width() / 4) * 3), Math.floor((height() / 10) * 3.25)),
            sprite("event_radio_dawn_nice", { anim: "animated_BG" }),
            layer("txt")
        ]);

        add([
            origin("top"),
            pos(Math.floor((width() / 4) * 3), Math.floor((height() / 10) * 5.25)),
            text("^ radio ads (from 1922) ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 20)
            }),
            layer("txt")
        ]);

        // socials
        add([
            scale(multiplyer / 2.25),
            origin("top"),
            pos(Math.floor((width() / 4) * 2), Math.floor((height() / 10) * 6)),
            sprite("event_socials_dawn_nice", { anim: "animated_BG" }),
            layer("txt")
        ]);

        add([
            origin("top"),
            pos(Math.floor((width() / 4) * 2), Math.floor((height() / 10) * 8)),
            text("^ social media ads (from 2008) ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 20)
            }),
            layer("txt")
        ]);
    }
    else if (slideNumber == 3) {
        // ui_top's text description
        add([
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 5)),
            text("^ top UI ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
                width: Math.floor(width() - (width() / (multiplyer + 1)))
            }),
            layer("txt")
        ]);

        add ([
            scale(Math.floor(multiplyer / 2) - 0.5),
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 4)),
            sprite("top_ui_tuto"),
            layer("txt")
        ]);

        // ui_bottom's text description
        add([
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 7)),
            text("^ bottom UI ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
                width: Math.floor(width() - (width() / (multiplyer + 1)))
            }),
            layer("txt")
        ]);

        add ([
            scale(Math.floor(multiplyer / 2) - 0.5),
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 6)),
            sprite("bot_ui_tuto"),
            layer("txt")
        ]);
    }
    else if (slideNumber == 5) {
        //failure badge + text
        add([
            origin("top"),
            pos(Math.floor((width() / 10) * 1.25), Math.floor((height() / 10) * 7)),
            text("failure", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
                width: Math.floor(width() - (width() / (multiplyer + 1)))
            }),
            color(rgb(199, 20, 20)),
            layer("txt")
        ]);

        add([
            origin("center"),
            scale(Math.floor(multiplyer / 2)),
            pos(Math.floor((width() / 10) * 1.25), Math.floor((height() / 10) * 6)),
            sprite("fail_logo"),
            layer("bg")
        ]);

        //victory badge + text
        add([
            origin("top"),
            pos(Math.floor((width() / 10) * 5), Math.floor((height() / 10) * 7)),
            text("victory", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
                width: Math.floor(width() - (width() / (multiplyer + 1)))
            }),
            color(rgb(74, 222, 58)),
            layer("txt")
        ]);

        add([
            origin("center"),
            scale(Math.floor(multiplyer / 2)),
            pos(Math.floor((width() / 10) * 5), Math.floor((height() / 10) * 6)),
            sprite("bravo_logo"),
            layer("bg")
        ]);

        //perfect badge + text
        add([
            origin("top"),
            pos(Math.floor((width() / 10) * 8.75), Math.floor((height() / 10) * 7)),
            text("perfect", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
                width: Math.floor(width() - (width() / (multiplyer + 1)))
            }),
            color(rgb(245, 196, 34)),
            layer("txt")
        ]);

        add([
            origin("center"),
            scale(Math.floor(multiplyer / 2)),
            pos(Math.floor((width() / 10) * 8.75), Math.floor((height() / 10) * 6)),
            sprite("perfect_logo"),
            layer("bg")
        ]);
    }
    
    const tutorial_NextButton = slideNumber < mesTxt.length - 1 ? 
            add([
                scale(Math.floor(multiplyer * 1.25)),
                origin("right"),
                pos(Math.floor((width() / 10) * 9.75), Math.floor(height() - (height() / 10))),
                sprite("next"),
                area(),
                layer("txt")
            ]).onClick(() => {
                play("on_click_1");
                slideNumber++;
                go("tutorial", { fromMenu: fromMenu, i: slideNumber });
            })
        :
            add([
                scale(Math.floor(multiplyer * 1.5)),
                origin("right"),
                pos(Math.floor((width() / 10) * 9.5), Math.floor(height() - (height() / 10))),
                sprite("play"),
                area(),
                layer("txt")
            ]).onClick(() => {
                play("on_click_1");
                go("levelSelect", { scenarioNumber: 0 });
            });

    const tutorial_BackButton = fromMenu == true ? 
        (slideNumber == 0 ? 
            add([
                scale(Math.floor(multiplyer * 1.125)),
                origin("bot"),
                pos(Math.floor(width() / 2), Math.floor((height() / 10) * 9.75)),
                sprite("back"),
                area(),
                layer("txt")
            ]).onClick(() => {
                play("on_click_2");
                go("titleScreen");
            }) 
            : 
            add([
                scale(Math.floor(multiplyer * 1.25)),
                origin("left"),
                pos(Math.floor(width() / 10 * 0.25), Math.floor(height() - (height() / 10))),
                sprite("previous"),
                area(),
                layer("txt")
            ]).onClick(() => {
                play("on_click_2");
                slideNumber--
                go("tutorial", { fromMenu: fromMenu, i: slideNumber});
            })) 
        : 
        (slideNumber == 0 ? 
            null 
        : 
            add([
                scale(Math.floor(multiplyer * 1.25)),
                origin("left"),
                pos(Math.floor(width() / 10 * 0.25), Math.floor(height() - (height() / 10))),
                sprite("previous"),
                area(),
                layer("txt")
            ]).onClick(() => {
                play("on_click_2");
                slideNumber--
                go("tutorial", { fromMenu: fromMenu, i: slideNumber});
            }));
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