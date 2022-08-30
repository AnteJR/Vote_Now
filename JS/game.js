/* Function to play the game */

scene("game", ({ idScenario, startTurn, intialVotes, initialMoney, initialOptics, dayOfVote }) => {
    let topCanBeHovered = true,
        bottomCanBeHovered = true;

    layers([
        "ui",
        "ui_txt",
        "game_elements",
        "hover_elements",
        "grey_squares",
    ]);

    add([
        scale(7),
        pos(0, 0),
        sprite("ui_top"),
        area(),
        layer("ui")
    ]);

    add([
        scale(7),
        pos(0, 637),
        sprite("ui_bottom"),
        area(),
        layer("ui")
    ]);

    const votesCount = add([
        pos(Math.floor(width() / 100), Math.floor(height() / 100)),
        text("Votes:" + Math.round(((intialVotes) + Number.EPSILON) * 10) / 10 + "%", {
            size: 30,
            font: "sinko",
        }),
        { value: intialVotes },
        layer("ui_txt")
    ]);

    const moneyCount = add([
        pos(Math.floor(width() / 3), Math.floor(height() / 100)),
        text("Money:" + initialMoney + ".-", {
            size: 30,
            font: "sinko",
        }),
        { value: initialMoney },
        layer("ui_txt")
    ]);

    const opticsCount = add([
        pos(Math.floor(width() / 120) * 85, Math.floor(height() / 100)),
        text("Optics:" + initialOptics, {
            size: 30,
            font: "sinko",
        }),
        { value: initialOptics },
        layer("ui_txt")
    ]);

    add([
        pos(Math.floor(width() / 100), height() - Math.floor(height() / 17)),
        text("Vote day: " + dayOfVote, {
            size: 30,
            font: "sinko",
        }),
        layer("ui_txt")
    ]);

    const daysUntilVote = add([
        pos(Math.floor(width() / 120) * 77, height() - Math.floor(height() / 17)),
        text((11 - startTurn) + " days left", {
            size: 30,
            font: "sinko",
        }),
        layer("ui_txt")
    ]);

    const top = scenarios[idScenario][startTurn][0];
    const bottom = scenarios[idScenario][startTurn][1];

    const elemTop = add([
        scale(7),
        pos(0, 49),
        sprite("event_" + eventNames[top] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        layer("game_elements"),
        eventNames[top],
        "event",
        "event_top"
    ])

    elemTop.onClick(() => {
        if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && votesCount.value < 50) go("victoryPage", ({ isWin: false, playedScene: idScenario, votes: votesCount.value }));
        else if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && votesCount.value > 50) go("victoryPage", ({ isWin: true, playedScene: idScenario, votes: votesCount.value }));
        else checkClick(top, true, idScenario, startTurn);
    });

    elemTop.onHover(() => {
        checkHover(top, true, startTurn);
    });

    const elemBottom = add([
        scale(7),
        pos(0, 343),
        sprite("event_" + eventNames[bottom] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        layer("game_elements"),
        eventNames[top],
        "event",
        "event_bottom"
    ]);

    elemBottom.onClick(() => {
        if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && votesCount.value < 50) go("victoryPage", ({ isWin: false, playedScene: idScenario, votes: votesCount.value }));
        else if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && votesCount.value > 50) go("victoryPage", ({ isWin: true, playedScene: idScenario, votes: votesCount.value }));
        else checkClick(bottom, false, idScenario, startTurn);
    });

    elemBottom.onHover(() => {
        checkHover(bottom, false, startTurn);
    });

    function checkClick(nbr, isTop, scn, currentTurn) {
        if (moneyCount.value < scores[nbr][2] && scores[nbr][4] == false) {
            destroyAll("greySquare");
            play("on_click_4");
            if (isTop) {
                add([
                    rect(width(), 294),
                    pos(0, 49),
                    outline(4),
                    color(1, 1, 1),
                    area(),
                    opacity(0.5),
                    layer("grey_squares"),
                    "greySquare"
                ]).onHover(() => {
                    topCanBeHovered = false;
                })
            }
            else {
                add([
                    rect(width(), 294),
                    pos(0, 343),
                    outline(4),
                    color(1, 1, 1),
                    area(),
                    opacity(0.5),
                    layer("grey_squares"),
                    "greySquare"
                ]).onHover(() => {
                    bottomCanBeHovered = false;
                });
            }
        }
        else {
            play("on_click_3");
            if (scores[nbr][4] == false) {
                moneyCount.value = moneyCount.value - scores[nbr][2];
            }
            else {
                moneyCount.value = moneyCount.value + scores[nbr][2];
            }

            votesCount.value = parseFloat((votesCount.value + (scores[nbr][1] * opticsCount.value)).toFixed(2));
            opticsCount.value = parseFloat((opticsCount.value + (scores[nbr][3] / 100)).toFixed(2));

            currentTurn++;

            if (currentTurn <= 10) {
                go("game", ({
                    idScenario: idScenario,
                    startTurn: currentTurn,
                    intialVotes: votesCount.value,
                    initialMoney: moneyCount.value,
                    initialOptics: opticsCount.value,
                    dayOfVote: dayOfVote
                }));
            }
            else {
                if (votesCount.value > 50) go("victoryPage", ({ isWin: true, playedScene: scn, votes: votesCount.value }));
                else go("victoryPage", ({ isWin: false, playedScene: scn, votes: votesCount.value }));
            }
        }
    }

    function checkHover(x, isTop, currentTurn) {
        if (elemTopStats) elemTopStats.destroy();
        if (elemBottomStats) elemBottomStats.destroy();
        if (currentTurn <= 10) {
            if (isTop && topCanBeHovered) {
                elemTopStats = add([
                    scale(2),
                    pos(0, 49),
                    sprite("score_" + eventNames[x]),
                    area(),
                    layer("hover_elements"),
                    "score"
                ]);
            }
            else if (!isTop && bottomCanBeHovered) {
                elemBottomStats = add([
                    scale(2),
                    pos(0, 343),
                    sprite("score_" + eventNames[x]),
                    area(),
                    layer("hover_elements"),
                    "score"
                ]);
            }
        }
    }
});