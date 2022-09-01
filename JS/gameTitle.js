/* All the function necessary to make the title screen work */

scene("titleScreen", () => {
    layers([
        "bg",
        "txt"
    ]);

    add([
        scale(7),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    add([
        scale(7),
        origin("center"),
        pos(width() / 2, 98),
        sprite("title", { anim: "animated_BG" }),
        layer("txt")
    ]);

    add([
        scale(5),
        pos(width() / 35, 300),
        sprite("play_now"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        console.log(localStorage.getItem("hasReadIntro"))

        if (localStorage.getItem("hasReadIntro") == "true") go("levelSelect", { scenarioNumber: 0 });
        else go("introTxtGeneral");
    });

    add([
        scale(5),
        pos(width() / 35, 425),
        sprite("credits"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("creditsPage");
    });
});

scene("introTxtGeneral", () => {
    layers([
        "bg",
        "txt",
    ]);

    add([
        scale(7),
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
        pos(width() / 2, (height() / 2) - 75),
        text("Vote Now! is a minimalist strategy game that plays kind of like Reigns, as in you have a choice of 2 actions that you can pick from at a time.\n\nYou will play as a non-specific, left-leaning political party aiming to pass bills in Switzerland by propagandizing to influence voters' opinions. You will have to manage your money, the opinions of the voter base on your campaign, and the votes you are predicted to get.", {
            size: 30,
            width: 800,
            font: "sinko",
        }),
        layer("txt")
    ]);

    add([
        scale(5),
        origin("center"),
        pos(width() / 2, height() - (height() / 7)),
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
        scale(7),
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
        origin("bot"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 + height() / 16)),
        text(scenarios[currentScenarioDisplayed][0], {
            font: "sinko",
            size: 50,
            width: Math.floor(width() / 10 * 7)
        }),
        area(),
        layer("txt")
    ]);

    const scenarioYear = add([
        origin("top"),
        pos(Math.floor(width() / 2), Math.floor(height() / 2 + height() / 14)),
        text(scenarios[currentScenarioDisplayed][14].split(".").pop(), {
            font: "sinko",
            size: 40,
        }),
        area(),
        layer("txt")
    ]);

    const isNew = add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - height() / 3)),
        text("", {
            font: "sinko",
            size: 40,
        }),
        color(222, 192, 58),
        layer("txt")
    ]);

    if (localStorage.getItem("scenario_" + currentScenarioDisplayed + "_played") != "true") isNew.text = "new!";
    else isNew.text = "";

    const scorePlayed = add([
        origin("center"),
        pos(Math.floor(width() / 2), Math.floor(height() - height() / 3)),
        text("", {
            font: "sinko",
            size: 40,
        }),
        layer("txt")
    ]);

    if (localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score") != null) scorePlayed.text = localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score") + "%";
    else scorePlayed.text = ""
    if (parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")) >= 50) scorePlayed.color = rgb(74, 222, 58);
    else if (parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")) < 50) scorePlayed.color = rgb(199, 20, 20);

    add([
        pos(Math.floor(width() / 20), Math.floor(height() / 2 - height() / 10)),
        text("<", {
            size: 90,
            font: "sinko",
        }),
        layer("btns"),
        area()
    ]).onClick(() => {
        play("on_click_3");
        if (currentScenarioDisplayed == 0) currentScenarioDisplayed = 9;
        else currentScenarioDisplayed--;

        scenarioName.text = scenarios[currentScenarioDisplayed][0];
        scenarioYear.text = scenarios[currentScenarioDisplayed][14].split(".").pop();
        if (localStorage.getItem("scenario_" + currentScenarioDisplayed + "_played") != "true") isNew.text = "new!"
        else isNew.text = "";

        if (localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score") != null) scorePlayed.text = localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score") + "%";
        else scorePlayed.text = ""
        if (parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")) >= 50) scorePlayed.color = rgb(74, 222, 58);
        else if (parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")) < 50) scorePlayed.color = rgb(199, 20, 20);

        backGroundMissionPic.use(sprite("BG_Mission_" + currentScenarioDisplayed));
    });

    add([
        origin("topright"),
        pos(Math.floor(width() - width() / 20), Math.floor(height() / 2 - height() / 10)),
        text(">", {
            size: 90,
            font: "sinko",
        }),
        layer("btns"),
        area()
    ]).onClick(() => {
        play("on_click_3");
        if (currentScenarioDisplayed == 9) currentScenarioDisplayed = 0;
        else currentScenarioDisplayed++;

        scenarioName.text = scenarios[currentScenarioDisplayed][0];
        scenarioYear.text = scenarios[currentScenarioDisplayed][14].split(".").pop();
        if (localStorage.getItem("scenario_" + currentScenarioDisplayed + "_played") != "true") isNew.text = "new!"
        else isNew.text = "";

        if (localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score") != null) scorePlayed.text = localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score") + "%";
        else scorePlayed.text = ""
        if (parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")) >= 50) scorePlayed.color = rgb(74, 222, 58);
        else if (parseFloat(localStorage.getItem("scenario_" + currentScenarioDisplayed + "_score")) < 50) scorePlayed.color = rgb(199, 20, 20);

        backGroundMissionPic.use(sprite("BG_Mission_" + currentScenarioDisplayed));
    });

    add([
        scale(5),
        origin("center"),
        pos(width() / 2, height() - (height() / 7)),
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
        scale(7),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        layer("bg")
    ]);

    add([
        origin("center"),
        pos(width() / 2, 75),
        text(`Vote Now!`, {
            size: 80,
            width: 800,
            font: "sinko",
        }),
        layer("txt")
    ]);

    add([
        origin("center"),
        pos(width() / 2, 320),
        text(`A game thought, designed, and developped by Joel Rimaz\n\nUnder the supervision of Isaac Pante\n\nFor the spring 2022 course "2D Video Games"\n\nUniversity of Lausanne\n\nAugust 2022`, {
            size: 30,
            width: 800,
            font: "sinko",
        }),
        layer("txt")
    ]);

    add([
        scale(5),
        origin("center"),
        pos(width() / 2, 600),
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
        scale(7),
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
        pos(width() / 2, (height() / 2) - 75),
        text(scenarios[idVote][17], {
            size: 30,
            width: 800,
            font: "sinko",
        }),
        layer("txt")
    ]);

    add([
        scale(5),
        origin("center"),
        pos((width() / 40) * 27, height() - (height() / 7)),
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
        scale(5),
        origin("center"),
        pos((width() / 30) * 9, height() - (height() / 7)),
        sprite("back"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_2");
        go("levelSelect", { scenarioNumber: idVote });
    });
})

function initFunction() {
    playMenuMusic();
    go("titleScreen");
}

initFunction();