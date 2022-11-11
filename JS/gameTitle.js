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
        sprite("play_now" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.getItem("hasReadIntro") == "true" ? go("levelSelect", { scenarioNumber: 0 }) : go("introTxtGeneral");
    });

    const menu_TutorialButton = add([
        origin("botleft"),
        scale(Math.floor(multiplyer * 1.15)),
        pos(Math.floor(width() / 10 * 0.25), Math.floor((height() / 10) * 7.55)),
        sprite("tutorial" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("tutorial", { fromMenu: true, i: 0 });
    });

    const menu_CreditsPageButton = add([
        origin("botleft"),
        scale(Math.floor(multiplyer * 1.15)),
        pos(Math.floor(width() / 10 * 0.25), Math.floor((height() / 10) * 8.65)),
        sprite("credits" + langSprites[LANG]),
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
        sprite("achievements" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("achievements_scene", { idVote: 0 });
    });

    const menu_LanguageButton = add([
        origin("botright"),
        scale(Math.floor(multiplyer * 0.75)),
        pos(Math.floor(width() - (width() / 10 * 0.1)), Math.floor((height() / 10) * 9.9)),
        sprite("language"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("languageSelection");
    });
});

scene("introTxtGeneral", () => {
    let txtIntro = {
        english: "Vote Now! is a minimalist strategy game that plays kind of like Reigns, as in you have a choice of 2 actions that you can pick from at a time.\n\nYou will play as a non-specific, left-leaning political party aiming to pass bills in Switzerland by propagandizing to influence voters' opinions. You will have to manage your money, the opinions of the voter base on your campaign, and the votes you are predicted to get.",
        french: "Vote Now! est un jeu de stratégie minimaliste similaire à Reigns: vous avez une succession de choix de 2 options.\n\nVous jouez un parti de gauche non-spécifié dont le but est de faire passer des loi en Suisse à coup de propagande pour changer les opinions de la population...!"
    };

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
        text(txtIntro[LANG], {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / (multiplyer + 1)))
        }),
        layer("txt")
    ]);

    const intro_PlayButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - (height() / 10))),
        sprite("play" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.setItem("hasReadIntro", true);
        go("tutorial", { fromMenu: false, i: 0 });
    });
});

scene("levelSelect", ({ scenarioNumber }) => {
    let currentScenarioDisplayed = scenarioNumber,
        monScore = parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")),
        hasNotBeenPlayed = localStorage.getItem("scenario_" + currentScenarioDisplayed + "_played") == null ? true : false,
        isPerfectScore = localStorage.getItem("scenario_" + currentScenarioDisplayed + "_perfected") == "true" ? true : false,
        historicalScore = scenarios[LANG][currentScenarioDisplayed][18],
        needsGain = scenarios[LANG][currentScenarioDisplayed][19],
        logoName = hasNotBeenPlayed == false ? (isPerfectScore ? "perfect" : (needsGain ? (historicalScore >= 50 ? (monScore < 50 ? "fail" : "bravo") : (monScore < historicalScore ? "fail" : "bravo")) : (historicalScore >= 50 ? (monScore > historicalScore ? "fail" : "bravo") : (monScore > 50 ? "fail" : "bravo")))) : "new",
        langSprites = {
            english: "_ENG",
            french: "_FR"
        };;

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
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 3)),
        text(scenarios[LANG][currentScenarioDisplayed][0], {
            size: multiplyer % 2 == 0 ? Math.floor(10 * (multiplyer) - (5 * (multiplyer / 2))) : Math.floor(10 * (multiplyer - 1) - (5 * ((multiplyer - 1) / 2))),
            width: Math.floor(width() / 10 * 7)
        }),
        area(),
        layer("txt")
    ]);

    const levelSelect_ScenarioYear = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 3.05 + levelSelect_ScenarioName.height)),
        text(scenarios[LANG][currentScenarioDisplayed][14].split(".").pop(), {
            size: multiplyer % 2 == 0 ? 5 * multiplyer : 5 * (multiplyer - 1) + 10
        }),
        area(),
        layer("txt")
    ]);

    const levelSelect_LogoStamps = add([
        origin("top"),
        scale(Math.floor(multiplyer / 2)),
        pos(hasNotBeenPlayed == true ? [Math.floor(width() / 6), Math.floor(height() / 10 * 2)] : [Math.floor(width() / 10 * 3), Math.floor(height() / 10 * 1.75)]),
        sprite(logoName + "_logo" + langSprites[LANG]),
        rotate(-45),
        layer("bg")
    ]);

    const levelSelect_ScorePlayed = add([
        origin("bot"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 2.95)),
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
        currentScenarioDisplayed == 0 ? currentScenarioDisplayed = scenarios[LANG].length - 1 : currentScenarioDisplayed--;
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
        currentScenarioDisplayed == scenarios[LANG].length - 1 ? currentScenarioDisplayed = 0 : currentScenarioDisplayed++;
        go("levelSelect", ({ scenarioNumber: currentScenarioDisplayed }));
    });

    const levelSelect_PlayButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("botleft"),
        pos(Math.floor(width() / 2 + width() / 40), Math.floor(height() - (height() / 10))),
        sprite("play" + langSprites[LANG]),
        area(),
        layer("btns")
    ]).onClick(() => {
        play("on_click_1");
        go("introTxtScenario", ({ idVote: currentScenarioDisplayed }));
    });

    const levelSelect_BackButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("botright"),
        pos(Math.floor(width() / 2 - width() / 40), Math.floor(height() - (height() / 10))),
        sprite("back" + langSprites[LANG]),
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
        text(scenarios[LANG][idVote][17], {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer))
        }),
        layer("txt")
    ]);

    const introMission_PlayButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("botleft"),
        pos(Math.floor(width() / 2 + width() / 40), Math.floor(height() - (height() / 10))),
        sprite("play" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        scenarios[LANG][idVote][19] == true ? goToGame(idVote, true) : go("showDisclaimer", ({ monScenario: idVote }));
    });

    const introMission_BackButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("botright"),
        pos(Math.floor(width() / 2 - width() / 40), Math.floor(height() - (height() / 10))),
        sprite("back" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("levelSelect", { scenarioNumber: idVote });
    });
});

scene("showDisclaimer", ({ monScenario }) => {
    let disclaimerTxt = {
        english: {
            title: "! This scenario is different from the rest !",
            text: "Here, the goal is not to make the law pass; it's to make it fail. Thus, you will start at an above 50% approval ratings, and must campaign to make that number diminish.\n\nDon't worry if the votes are in the negative, then: it's normal!"
        },
        french: {
            title: "! Ce scénario est différent du reste !",
            text: "Ici, le but n'est pas de faire passer la loi; c'est de la faire échouer. Dès lors, vous commencerez avec des votes supérieurs à 50%, et devrez faire campagne pour faire descendre ce score\n\nPas d'inquiétudes si les votes sont inférieurs à 50% à la fin de la partie, c'est normal!"
        }
    }

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
        text(disclaimerTxt[LANG].title, {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer))
        }),
        color(rgb(255, 0, 0)),
        layer("txt")
    ]);

    const disclaimer_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 5)),
        text(disclaimerTxt[LANG].text, {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer))
        }),
        layer("txt")
    ])

    const disclaimer_PlayButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("botleft"),
        pos(Math.floor(width() / 2 + width() / 40), Math.floor(height() - (height() / 10))),
        sprite("play" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        goToGame(monScenario, false)
    });

    const disclaimer_BackButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("botright"),
        pos(Math.floor(width() / 2 - width() / 40), Math.floor(height() - (height() / 10))),
        sprite("back" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("introTxtScenario", { idVote: monScenario });
    });
});

scene("creditsPage", () => {
    let creditsTxt = {
        english: `A game created, written, designed, and developped by Joel Rimaz\n\nUnder the supervision of Isaac Pante\n\nAugust 2022`,
        french: `Un jeu créé, écrit, designé et développé par Joël Rimaz\n\nSous la supervision d'Isaac Pante\n\nAoût 2022`
    }, langSprites = {
        english: "_ENG",
        french: "_FR"
    };

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
        text(creditsTxt[LANG], {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - width() / 10)
        }),
        layer("txt")
    ]);

    const credits_BackButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("bot"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 8.5)),
        sprite("back" + langSprites[LANG]),
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
        sprite("delete_game" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("areYouSure");
    });
});

scene("areYouSure", () => {
    let warningTxts = {
        english: [
            "BEWARE!",
            `You are about to delete ALL the progress saved on your browser. This includes your progression, scores, and achievements.\n\nAre you SURE you want to proceed?`
        ],
        french: [
            "ATTENTION!",
            `Vous êtes sur le point d'effacer TOUTE votre progression. Cela comprend votre progression, vos scores, et vos succès.\n\nVoulez-vous VRAIMENT continuer?`
        ]
    };

    layers([
        "bg",
        "txt"
    ]);

    const sure_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    const sure_GreyOutSquare = add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.9),
        layer("grey_squares"),
        layer("bg")
    ]);

    const sure_Title = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10)),
        text(warningTxts[LANG][0], {
            size: Math.floor(10 * multiplyer)
        }),
        color(255, 0, 0),
        layer("txt")
    ]);

    const sure_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 2)),
        text(warningTxts[LANG][1], {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - width() / 10)
        }),
        layer("txt")
    ]);

    const sure_ProceedBtn = add([
        origin("bot"),
        scale(Math.floor(multiplyer * 1.25)),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 8)),
        sprite("continue" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.clear();
        go("titleScreen");
    });

    const sure_BackBtn = add([
        origin("bot"),
        scale(Math.floor(multiplyer * 1.5)),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 9.5)),
        sprite("back" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("creditsPage");
    });
});

scene("achievements_scene", ({ idVote }) => {
    let voteNbr = idVote,
        canGoBack = true,
        langSprites = {
            english: "_ENG",
            french: "_FR"
        };

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
        text(scenarios[LANG][idVote][0], {
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
        voteNbr == 0 ? voteNbr = scenarios[LANG].length - 1 : voteNbr--;
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
        voteNbr == scenarios[LANG].length - 1 ? voteNbr = 0 : voteNbr++;
        go("achievements_scene", ({ idVote: voteNbr }));
    });

    const achievements_BackButton = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - height() / 15)),
        sprite("back" + langSprites[LANG]),
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
        achievements_Poster.scale = Math.floor(multiplyer / 3.5);

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
                achievements_Poster.scale = Math.floor(multiplyer / 3.5);
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

scene("tutorial", ({ fromMenu, i }) => {
    let slideNumber = i,
        mesTxt = {
            english: [
                "Welcome to Vote Now! In this game, your aim is to pass bills and have your vote score reach the historical results of the votes.",
                "In Vote Now!, you will have to choose between two options at a time. You will have 10 turns to reach the historical score of the vote (or at least 50%).",
                "The events you can choose from:",
                "",
                "There are 3 variables to take into consideration. You can follow your progress for each on the top of the screen. You can also check how many turns are left at the bottom.",
                "Votes: the percentages of votes in favor of the bill\n\nMoney: the money you have, which is used to buy ads, or organize events\n\nOptics: optics are how favorably the people see your campaign. It's a multiplier for the votes you get. IE: if your optics are at 0.8 and you select an event who earns you 10% votes, you will actually gain 10x0.8 = 8%.",
                "Balance those 3 variables to maximize your score! Depending on how well you succeed, you will have a varying degree of victory, going from failure (the bill didn't pass) to perfect (you reached or went beyond the original score of the vote).",
                "If you manage to get a perfect victory, you will unlock a pixel art reproduction of one piece of propaganda material of the time in the achievements section. Go to the ACHIEVEMENTS section to check them out!\n\nOnce you get all the achievements, the game is pretty much finished. You can still reset your saved data at the CREDITS page to start anew."
            ],
            french: [
                "Bienvenu sur Vote Now! Dans ce jeu, votre but est de faire passer des loi et d'atteindre le score historique des votations proposées.",
                "Dans Vote Now!, vous devrez durant 10 tours faire des choix avec 2 options afin d'obtenir le meilleur score.",
                "Les options à choix sont:",
                "",
                "Il y a 3 variables à considérer. Votre progrès est indiqué en haut de l'écran. Vous pouvez voir vos tours restants au bas de l'écran.",
                "Votes: le pourcentage de votes en faveur de la loi\n\nArgent: l'argent à disposition pour faire propagande\n\nOpinion: l'opinion publique. Cette stat agit commme un multiplicateur des votes que vous obtenez. Par exemple: en choisissant une option qui donne 10% de vote avec une opinion à 0.8, vous obtiendrez en réalité 10x0.8 = 8%.",
                "Gérez ces 3 variables et visez le meilleur score! Selon ce dernier, votre niveau de victoire variera, allant de l'échec (la loi n'est pas passée) à parfait (vous avez dépassé le score historique).",
                "Si vous obtenez une victoire parfaite, vous débloquerez une reproduction en pixel art d'une affiche de l'époque. Elles se trouveront dans l'onglet des SUCCÈS!\n\nUne fois tous les succès obtenus, le jeu est fini. Vous pouvez toujours effacer votre progression et recommencer depuis la page des CRÉDITS."
            ]
        },
        descriptions = {
            english: [
                "a typical event with what it costs/earns you",
                [
                    "train station ad",
                    "flyer distribution",
                    "ask sponsors for funds",
                    "newspaper ads",
                    "ask donors for funds",
                    "protest in Bern",
                    "poster campaign",
                    "radio ads (from 1922)",
                    "social media ads (from 2008)"
                ],
                [
                    "top UI",
                    "bottom UI"
                ],
                [
                    "failure",
                    "victory",
                    "perfect"
                ]
            ],
            french: [
                "un choix typique, ainsi que ses coûts/produits",
                [
                    "affiche en gare",
                    "distribution de flyers",
                    "trouver un sponsor",
                    "pub dans les journaux",
                    "demander des dons",
                    "protester à Berne",
                    "campagne d'affiches",
                    "pubs à la radio (dès 1922)",
                    "pubs sur les réseaux sociaux (dès 2008)"
                ],
                [
                    "interface du haut",
                    "interface du bas"
                ],
                [
                    "échec",
                    "victoire",
                    "parfait"
                ]
            ]
        },
        langSprites = {
            english: "_ENG",
            french: "_FR"
        }

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
        layer("bg")
    ]);

    const tutorial_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 0.5)),
        text(mesTxt[LANG][slideNumber], {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / (multiplyer + 1)))
        }),
        layer("txt")
    ]);

    if (slideNumber == 0) {
        add([
            scale(multiplyer),
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 3)),
            sprite("title", { anim: "animated_BG" }),
            layer("txt")
        ]);

    }
    else if (slideNumber == 1) {
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
            sprite("score_journal_ok" + langSprites[LANG]),
            layer("txt")
        ]);

        // text description
        add([
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 6.25)),
            text(descriptions[LANG][0], {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 20) : Math.floor(5 * (multiplyer - 1) - 15),
                width: Math.floor(width() - (width() / (multiplyer + 1)))
            }),
            layer("txt")
        ]);
    }
    else if (slideNumber == 2) {
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
            text("^ " + descriptions[LANG][1][0] + " ^", {
                size: multiplyer < 10 ? (multiplyer < 8 ? (multiplyer < 6 ? 10 : 17) : 20) : 30
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
            text("^ " + descriptions[LANG][1][1] + " ^", {
                size: multiplyer < 10 ? (multiplyer < 8 ? (multiplyer < 6 ? 10 : 17) : 20) : 30
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
            text("^ " + descriptions[LANG][1][2] + " ^", {
                size: multiplyer < 10 ? (multiplyer < 8 ? (multiplyer < 6 ? 10 : 17) : 20) : 30
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
            text("^ " + descriptions[LANG][1][3] + " ^", {
                size: multiplyer < 10 ? (multiplyer < 8 ? (multiplyer < 6 ? 10 : 17) : 20) : 30
            }),
            layer("txt")
        ]);
    }
    else if (slideNumber == 3) {
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
            text("^ " + descriptions[LANG][1][4] + " ^", {
                size: multiplyer < 10 ? (multiplyer < 8 ? (multiplyer < 6 ? 10 : 17) : 20) : 30
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
            text("^ " + descriptions[LANG][1][5] + " ^", {
                size: multiplyer < 10 ? (multiplyer < 8 ? (multiplyer < 6 ? 10 : 17) : 20) : 30
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
            text("^ " + descriptions[LANG][1][6] + " ^", {
                size: multiplyer < 10 ? (multiplyer < 8 ? (multiplyer < 6 ? 10 : 17) : 20) : 30
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
            text("^ " + descriptions[LANG][1][7] + " ^", {
                size: multiplyer < 10 ? (multiplyer < 8 ? (multiplyer < 6 ? 10 : 17) : 20) : 30
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
            text("^ " + descriptions[LANG][1][8] + " ^", {
                size: multiplyer < 10 ? (multiplyer < 8 ? (multiplyer < 6 ? 10 : 17) : 20) : 30
            }),
            layer("txt")
        ]);
    }
    else if (slideNumber == 4) {
        // ui_top's text description
        add([
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 5)),
            text("^ " + descriptions[LANG][2][0] + " ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
                width: Math.floor(width() - (width() / (multiplyer + 1)))
            }),
            layer("txt")
        ]);

        add([
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
            text("^ " + descriptions[LANG][2][1] + " ^", {
                size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
                width: Math.floor(width() - (width() / (multiplyer + 1)))
            }),
            layer("txt")
        ]);

        add([
            scale(Math.floor(multiplyer / 2) - 0.5),
            origin("top"),
            pos(Math.floor(width() / 2), Math.floor((height() / 10) * 6)),
            sprite("bot_ui_tuto"),
            layer("txt")
        ]);
    }
    else if (slideNumber == 6) {
        //failure badge + text
        add([
            origin("top"),
            pos(Math.floor((width() / 10) * 1.25), Math.floor((height() / 10) * 7)),
            text(descriptions[LANG][3][0], {
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
            sprite("fail_logo" + langSprites[LANG]),
            layer("bg")
        ]);

        //victory badge + text
        add([
            origin("top"),
            pos(Math.floor((width() / 10) * 5), Math.floor((height() / 10) * 7)),
            text(descriptions[LANG][3][1], {
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
            sprite("bravo_logo" + langSprites[LANG]),
            layer("bg")
        ]);

        //perfect badge + text
        add([
            origin("top"),
            pos(Math.floor((width() / 10) * 8.75), Math.floor((height() / 10) * 7)),
            text(descriptions[LANG][3][2], {
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
            sprite("perfect_logo" + langSprites[LANG]),
            layer("bg")
        ]);
    }

    const tutorial_NextButton = slideNumber < mesTxt[LANG].length - 1 ?
        add([
            scale(Math.floor(multiplyer * 1.25)),
            origin("botright"),
            pos(Math.floor((width() / 10) * 9.75), Math.floor(height() - (height() / 40))),
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
            scale(Math.floor(multiplyer * 1.75)),
            origin("bot"),
            pos(Math.floor(width() / 2), Math.floor(height() - (height() / 40))),
            sprite("play" + langSprites[LANG]),
            area(),
            layer("txt")
        ]).onClick(() => {
            play("on_click_1");
            go("levelSelect", { scenarioNumber: 0 });
        });

    const tutorial_BackButton = fromMenu == true ?
        (slideNumber == 0 ?
            add([
                scale(Math.floor(multiplyer * 1.5)),
                origin("bot"),
                pos(Math.floor(width() / 2), Math.floor((height() / 10) * 9.75)),
                sprite("back" + langSprites[LANG]),
                area(),
                layer("txt")
            ]).onClick(() => {
                play("on_click_2");
                go("titleScreen");
            })
            :
            add([
                scale(Math.floor(multiplyer * 1.25)),
                origin("botleft"),
                pos(Math.floor(width() / 10 * 0.25), Math.floor(height() - (height() / 40))),
                sprite("previous"),
                area(),
                layer("txt")
            ]).onClick(() => {
                play("on_click_2");
                slideNumber--
                go("tutorial", { fromMenu: fromMenu, i: slideNumber });
            }))
        :
        (slideNumber == 0 ?
            null
            :
            add([
                scale(Math.floor(multiplyer * 1.25)),
                origin("botleft"),
                pos(Math.floor(width() / 10 * 0.25), Math.floor(height() - (height() / 40))),
                sprite("previous"),
                area(),
                layer("txt")
            ]).onClick(() => {
                play("on_click_2");
                slideNumber--
                go("tutorial", { fromMenu: fromMenu, i: slideNumber });
            }));
});

scene("languageSelection", () => {
    let languages = {
        english: [
            "Select a language",
            "English",
            "French"
        ],
        french: [
            "Sélectionnez une langue",
            "Anglais",
            "Français"
        ]
    }

    layers([
        "bg",
        "txt"
    ]);

    const language_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    const languageTitle = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10)),
        text(languages[LANG][0], {
            size: Math.floor(5 * multiplyer),
            width: Math.floor(width() / 10 * 8)
        }),
        area(),
        layer("txt")
    ]);

    const languageChoice1 = add([
        scale(multiplyer * 1.25),
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 3)),
        sprite("english"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.setItem("language", "english");
        LANG = "english"
        go("languageSelection")
    })

    const languageChoice2 = add([
        scale(multiplyer * 1.25),
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 5)),
        sprite("francais"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.setItem("language", "french");
        LANG = "french"
        go("languageSelection")
    })

    const language_BackButton = add([
        scale(Math.floor(multiplyer * 1.15)),
        origin("bot"),
        pos(Math.floor(width() / 2), Math.floor(height() - height() / 40)),
        sprite("back" + langSprites[LANG]),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("titleScreen");
    });
});

scene("errorLocalStorage", () => {
    let errorMsg = {
        english: "Vote Now requires the use of the local storage of your web browser. For reasons outside of my control, your browser doesn't allow the game access the local storage.\n\nTo fix this problem, please try using a different browser. I know that things should be fine using Firefox. Sorry for the inconvenience.",
        french: "Vote Now a besoin du stockage local de votre navigateur pour fonctionner. Pour des raisons hors de mon contrôle, votre navigateur ne lui donne pas accès à ce stockage.\n\nPour résoudre ce problème, essayez un navigateur différent. Firefox devrait fonctionner sans problème. Navré de la gêne occasionnée."
    }

    layers([
        "bg",
        "txt"
    ]);

    const error_BG = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    const error_Title = add([
        scale(multiplyer),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 - height() / 2.8)),
        sprite("title", { anim: "animated_BG" }),
        layer("txt")
    ]);

    const error_Text = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor((height() / 10) * 3.5)),
        text(errorMsg[LANG], {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / (multiplyer + 1)))
        }),
        layer("txt")
    ]);
});

function goToGame(i, b) {
    music_menu.pause();
    !music_game ? playGameMusic() : music_game.play();

    go("game", ({
        idScenario: i,
        startTurn: 1,
        intialVotes: scenarios[LANG][i][11],
        initialMoney: scenarios[LANG][i][12],
        initialOptics: scenarios[LANG][i][13],
        dayOfVote: scenarios[LANG][i][14],
        mustGain: b
    }));
}

function initFunction() {
    playMenuMusic();
    go("titleScreen");
}

function isLocalStorageAvailable() {
    var test = 'test';
    try {
        localStorage.setItem("testLS", test);
        localStorage.removeItem("testLS");
        return true;
    } catch (e) {
        return false;
    }
}

if (isLocalStorageAvailable()) {
    initFunction();
} else {
    go("errorLocalStorage")
}