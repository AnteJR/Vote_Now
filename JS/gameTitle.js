/* All the function necessary to make the title screen work */

scene("titleScreen", () => {
    layers([
        "bg",
        "txt"
    ]);

    add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    add([
        scale(multiplyer),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 - height() / 2.8)),
        sprite("title", { anim: "animated_BG" }),
        layer("txt")
    ]);

    add([
        scale(Math.floor(multiplyer * 1.5)),
        pos(Math.floor(width() / 35), Math.floor(height() / 2)),
        sprite("play_now"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.getItem("hasReadIntro") == "true" ? go("levelSelect", { scenarioNumber: 0 }) : go("introTxtGeneral");
    });

    add([
        scale(Math.floor(multiplyer * 1.5)),
        pos(Math.floor(width() / 35), Math.floor(height() - (height() / 3))),
        sprite("credits"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("creditsPage");
    });

    add([
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

    add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.25),
        layer("grey_squares"),
        layer("bg")
    ]);

    add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(((height() / 2) - (height() / 10)))),
        text("Vote Now! is a minimalist strategy game that plays kind of like Reigns, as in you have a choice of 2 actions that you can pick from at a time.\n\nYou will play as a non-specific, left-leaning political party aiming to pass bills in Switzerland by propagandizing to influence voters' opinions. You will have to manage your money, the opinions of the voter base on your campaign, and the votes you are predicted to get.", {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / (multiplyer + 1))),
            font: "sinko",
        }),
        layer("txt")
    ]);

    add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - (height() / 7))),
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

    add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_Mission_" + currentScenarioDisplayed),
        layer("bg")
    ]);

    add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.25),
        layer("grey_squares"),
        layer("bg")
    ]);

    const scenarioName = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 - height() / 6)),
        text(scenarios[currentScenarioDisplayed][0], {
            font: "sinko",
            size: Math.floor(7.2 * multiplyer),
            width: Math.floor(width() / 10 * 7)
        }),
        area(),
        layer("txt")
    ]);

    const scenarioYear = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 - height() / 6.5 + scenarioName.height)),
        text(scenarios[currentScenarioDisplayed][14].split(".").pop(), {
            font: "sinko",
            size: Math.floor((6 * multiplyer) - 2),
        }),
        area(),
        layer("txt")
    ]);

    const logoStamps = add([
        origin("center"),
        scale(Math.floor(multiplyer / 2)),
        pos(hasNotBeenPlayed == true ? [Math.floor(width() / 6), Math.floor(height() / 2 - height() / 6)] : [Math.floor(width() / 2 - width() / 7), Math.floor(height() / 2 - height() / 4.5)]),
        sprite(logoName + "_logo"),
        rotate(-45),
        layer("bg")
    ]);

    const scorePlayed = add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 - height() / 5)),
        text(isNaN(monScore) ? "" : monScore + "%", {
            font: "sinko",
            size: Math.floor((6 * multiplyer) - 2),
        }),
        color(logoName == "perfect" ? rgb(245, 196, 34) : (logoName == "bravo" ? rgb(74, 222, 58) : rgb(199, 20, 20))),
        layer("txt")
    ]);

    add([
        pos(Math.floor(width() / 20), Math.floor(height() / 2 - height() / 10)),
        text("<", {
            size: Math.floor(12 * multiplyer),
            font: "sinko",
        }),
        layer("btns"),
        area()
    ]).onClick(() => {
        play("on_click_3");
        currentScenarioDisplayed == 0 ? currentScenarioDisplayed = scenarios.length - 1 : currentScenarioDisplayed--;
        go("levelSelect", ({ scenarioNumber: currentScenarioDisplayed }));
    });

    add([
        origin("topright"),
        pos(Math.floor(width() - width() / 20), Math.floor(height() / 2 - height() / 10)),
        text(">", {
            size: Math.floor(12 * multiplyer),
            font: "sinko",
        }),
        layer("btns"),
        area()
    ]).onClick(() => {
        play("on_click_3");
        currentScenarioDisplayed == scenarios.length - 1 ? currentScenarioDisplayed = 0 : currentScenarioDisplayed++;
        go("levelSelect", ({ scenarioNumber: currentScenarioDisplayed }));
    });

    add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("right"),
        pos(Math.floor(width() - width() / 5), Math.floor(height() - (height() / 7))),
        sprite("play"),
        area(),
        layer("btns")
    ]).onClick(() => {
        play("on_click_1");
        go("introTxtScenario", ({ idVote: currentScenarioDisplayed }));
    });

    add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("left"),
        pos(Math.floor(width() / 5), Math.floor(height() - (height() / 7))),
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

    add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_Mission_" + idVote),
        layer("bg")
    ]);

    add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.5),
        layer("grey_squares"),
        layer("bg")
    ]);

    add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor((height() / 2) - (height() / (multiplyer + 3)))),
        text(scenarios[idVote][17], {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer)),
            font: "sinko",
        }),
        layer("txt")
    ]);

    add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("right"),
        pos(Math.floor(width() - width() / 5), Math.floor(height() - (height() / 7))),
        sprite("play"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        if (scenarios[idVote][19] == true) goToGame(idVote, true)
        else go("showDisclaimer", ({ monScenario: idVote }))
    });

    add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("left"),
        pos(Math.floor(width() / 5), Math.floor(height() - (height() / 7))),
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

    add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_Mission_" + monScenario),
        layer("bg")
    ]);

    add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.75),
        layer("grey_squares"),
        layer("bg")
    ]);

    add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10)),
        text("This scenario is different from the rest!", {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer)),
            font: "sinko",
        }),
        color(rgb(255, 0, 0)),
        layer("txt")
    ]);

    add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 5)),
        text("Here, the goal is not to make the law pass; it's to make it fail. Thus, you will start at an above 50% approval ratings, and must campaign to make that number diminish.\n\nDon't worry if the votes are in the negative, then: it's normal!", {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - (width() / multiplyer)),
            font: "sinko",
        }),
        layer("txt")
    ])

    add([
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

    add([
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

    add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10)),
        text(`Vote Now!`, {
            size: Math.floor(10 * (multiplyer + 1)),
            font: "sinko",
        }),
        layer("txt")
    ]);

    add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 3)),
        text(`A game thought, designed, and developped by Joel Rimaz\n\nUnder the supervision of Isaac Pante\n\nAugust 2022`, {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - width() / 10),
            font: "sinko",
        }),
        layer("txt")
    ]);

    add([
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

    add([
        scale(Math.floor(multiplyer)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10 * 9)),
        sprite("delete_game"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        localStorage.clear(); // for now localStorage is cleared when looking at the credits
        go("titleScreen");
    });
});

scene("achievements_scene", ({ idVote }) => {
    layers([
        "bg",
        "txt",
        "img"
    ]);

    let voteNbr = idVote,
        canGoBack = true;

    add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "idle" }),
        layer("bg")
    ]);

    const greyS = add([
        rect(width(), height()),
        pos(0, 0),
        color(1, 1, 1),
        area(),
        opacity(0.25),
        layer("grey_squares"),
        layer("bg")
    ]);

    const txtVote = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 10)),
        text(scenarios[idVote][0], {
            font: "sinko",
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() / 10 * 8)
        }),
        area(),
        layer("txt")
    ]);

    const poster = add([
        scale(Math.floor(multiplyer / 2)),
        origin("center"),
        pos(width() / 2, height() / 2),
        sprite("Affiche_UKN"),
        area(),
        layer("img")
    ]);

    const nxtIMG = add([
        pos(Math.floor(width() / 20), Math.floor(height() / 2 - height() / 10)),
        text("<", {
            size: Math.floor(10 * multiplyer),
            font: "sinko",
        }),
        layer("txt"),
        area()
    ]);

    nxtIMG.onClick(() => {
        play("on_click_3");

        if (voteNbr == 0) voteNbr = scenarios.length - 1;
        else voteNbr--;

        go("achievements_scene", ({ idVote: voteNbr }));
    });

    const prevIMG = add([
        origin("topright"),
        pos(Math.floor(width() - width() / 20), Math.floor(height() / 2 - height() / 10)),
        text(">", {
            size: Math.floor(10 * multiplyer),
            font: "sinko",
        }),
        layer("txt"),
        area()
    ]);

    const backBtn = add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - height() / 15)),
        sprite("back"),
        area(),
        layer("txt")
    ]);

    backBtn.onClick(() => {
        if (canGoBack == true) {
            play("on_click_2");
            go("titleScreen");
        }
    });

    prevIMG.onClick(() => {
        play("on_click_3");

        if (voteNbr == scenarios.length - 1) voteNbr = 0;
        else voteNbr++;

        go("achievements_scene", ({ idVote: voteNbr }));
    });

    if (localStorage.getItem("scenario_" + voteNbr + "_perfected")) {
        poster.use(sprite("Affiche" + voteNbr));
        poster.scale = Math.floor(multiplyer / 2.5);

        let counter = 0;

        poster.onClick(() => {
            if (counter == 0) {
                poster.scale = multiplyer / 2.05;
                greyS.opacity = 0.75;
                nxtIMG.opacity = 0;
                prevIMG.opacity = 0;
                txtVote.opacity = 0;
                backBtn.opacity = 0;
                canGoBack = false;
                counter++;
            }
            else {
                poster.scale = Math.floor(multiplyer / 2.5);
                greyS.opacity = 0.25;
                nxtIMG.opacity = 1;
                prevIMG.opacity = 1;
                txtVote.opacity = 1;
                backBtn.opacity = 1;
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