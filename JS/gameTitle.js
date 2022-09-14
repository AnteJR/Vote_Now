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

        if (localStorage.getItem("hasReadIntro") == "true") go("levelSelect", { scenarioNumber: 0 });
        else go("introTxtGeneral");
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
        go("achievements_scene");
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
        console.log(localStorage.getItem("hasReadIntro"))
        go("levelSelect", { scenarioNumber: 0 });
    });
});

scene("levelSelect", ({ scenarioNumber }) => {
    let currentScenarioDisplayed = scenarioNumber;

    layers([
        "bg",
        "txt",
        "btns"
    ]);

    const backGroundMissionPic = add([
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

    let logoName = "";

    if (localStorage.getItem("scenario_" + currentScenarioDisplayed + "_played") == "true") {
        if (localStorage.getItem("scenario_" + currentScenarioDisplayed + "_perfected") == "true") logoName = "perfect";
        else {
            if (parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")) < 50) logoName = "fail";
            else if (parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")) >= 50) logoName = "bravo";
        }
    }
    else logoName = "new";

    const logoStamps = add([
        origin("center"),
        scale(Math.floor(multiplyer / 2)),
        pos(Math.floor(width() / 2 - width() / 7), Math.floor(height() / 2 - height() / 4.5)),
        sprite(logoName + "_logo"),
        rotate(-45),
        layer("bg")
    ]);

    if (localStorage.getItem("scenario_" + currentScenarioDisplayed + "_played") == null) logoStamps.pos = [Math.floor(width() / 6), Math.floor(height() / 2 - height() / 6)];

    const scorePlayed = add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 - height() / 5)),
        text("", {
            font: "sinko",
            size: Math.floor((6 * multiplyer) - 2),
        }),
        layer("txt")
    ]);

    scorePlayed.text = localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score") != null ? localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score") + "%" : "";

    if (localStorage.getItem("scenario_" + currentScenarioDisplayed + "_perfected") != null) {
        scorePlayed.color = rgb(245, 196, 34);
    }
    else {
        if (parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")) >= 50) scorePlayed.color = rgb(74, 222, 58);
        else scorePlayed.color = rgb(199, 20, 20)
    }

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

        if (currentScenarioDisplayed == 0) currentScenarioDisplayed = scenarios.length - 1;
        else currentScenarioDisplayed--;

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

        if (currentScenarioDisplayed == scenarios.length - 1) currentScenarioDisplayed = 0;
        else currentScenarioDisplayed++;

        go("levelSelect", ({ scenarioNumber: currentScenarioDisplayed }));
    });

    add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - (height() / 7))),
        sprite("play"),
        area(),
        layer("btns")
    ]).onClick(() => {
        play("on_click_1");

        scenarios.forEach((e, i) => {
            if (e[0] == scenarioName.text) {
                scenarID = i;
                go("introTxtScenario", ({ idVote: scenarID }));
            }
        });
    });
});

scene("creditsPage", () => {
    localStorage.clear(); // for now localStorage is cleared when looking at the credits

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
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / (multiplyer + 1))),
        text(`Vote Now!`, {
            size: Math.floor(10 * (multiplyer + 1)),
            font: "sinko",
        }),
        layer("txt")
    ]);

    add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2)),
        text(`A game thought, designed, and developped by Joel Rimaz\n\nUnder the supervision of Isaac Pante\n\nFor the spring 2022 course "2D Video Games"\n\nUniversity of Lausanne\n\nAugust 2022`, {
            size: Math.floor(5 * (multiplyer - 1)),
            width: Math.floor(width() - width() / 10),
            font: "sinko",
        }),
        layer("txt")
    ]);

    add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 1.15)),
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

    const backGroundMissionPic = add([
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
        opacity(0.25),
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
        origin("center"),
        pos(Math.floor((width() / 40) * 27), Math.floor(height() - (height() / 7))),
        sprite("play"),
        area(),
        layer("txt")
    ]).onClick(() => {
        music_menu.pause();
        if (!music_game) playGameMusic();
        else music_game.play();

        play("on_click_1");
        go("game", ({
            idScenario: idVote,
            startTurn: 1,
            intialVotes: scenarios[idVote][11],
            initialMoney: scenarios[idVote][12],
            initialOptics: scenarios[idVote][13],
            dayOfVote: scenarios[idVote][14]
        }));
    });

    add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor((width() / 30) * 9), Math.floor(height() - (height() / 7))),
        sprite("back"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("levelSelect", { scenarioNumber: idVote });
    });
});

scene("achievements_scene", () => {
    layers([
        "bg",
        "txt",
        "img"
    ]);

    add([
        scale(multiplyer),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    add([
        scale(Math.floor(multiplyer * 1.5)),
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() / 1.15)),
        sprite("back"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("titleScreen");
    });
});

function initFunction() {
    playMenuMusic();
    go("titleScreen");
}

initFunction();