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
        //go("levelSelect");
        go("introTxtGeneral");
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
        pos((width() / 40) * 27, height() - (height() / 7)),
        sprite("play"),
        area(),
        layer("txt")
    ]).onClick(() => {
        play("on_click_1");
        go("levelSelect");
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
        go("titleScreen");
    });
});

scene("levelSelect", () => {
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

    let dist = 0;

    for (let i = 0; i < scenarios.length; i++) {
        add([
            color(255, 255, 255, 1),
            origin("center"),
            pos(width() / 2, 50 + dist),
            text(scenarios[i][0], {
                size: 20,
                width: 800,
                font: "sinko",
            }),
            area(),
            layer("txt"),
            "lvl" + i
        ])

        onClick("lvl" + i, (x) => {
            play("on_click_1");

            music_menu.pause();
            if (!music_game) playGameMusic();
            else music_game.play();

            scenarios.forEach((e, i) => {
                if (e[0] == x.text) {
                    scenarID = i;
                    go("introTxtScenario", ({ idVote: scenarID }));
                }
            });
        });

        dist += 50;
    }

    add([
        scale(5),
        origin("center"),
        pos(width() / 2, 600),
        sprite("back"),
        area(),
        layer("txt"),
    ]).onClick(() => {
        play("on_click_2");
        go("titleScreen");
    });
});

scene("creditsPage", () => {
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
        go("levelSelect");
    });
})

function initFunction() {
    playMenuMusic();
    go("titleScreen");
}

initFunction();