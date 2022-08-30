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
        go("levelSelect");
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
                    go("game", ({
                        idScenario: scenarID,
                        startTurn: 1,
                        intialVotes: scenarios[scenarID][11],
                        initialMoney: scenarios[scenarID][12],
                        initialOptics: scenarios[scenarID][13],
                        dayOfVote: scenarios[scenarID][14]
                    }));
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

function initFunction() {                   // Function that is launched once at page load to launch the game the first time
    playMenuMusic();
    go("titleScreen");
}

initFunction();    // calling the initial function to get things started