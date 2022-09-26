/* Function to play the game */

scene("game", ({ idScenario, startTurn, intialVotes, initialMoney, initialOptics, dayOfVote, mustGain }) => {
    layers([
        "ui",
        "ui_txt",
        "game_elements",
        "hover_elements",
        "grey_squares",
    ]);

    let topCanBeHovered = true,
        bottomCanBeHovered = true;

    /* TOP UI */

    const ui_top = add([
        scale(multiplyer),
        pos(0, 0),
        sprite("ui_top"),
        area(),
        layer("ui")
    ]);

    const votesCount = add([
        pos(Math.floor(width() / 100), Math.floor(height() / 100)),
        text("Votes:" + Math.round(((intialVotes) + Number.EPSILON) * 10) / 10 + "%", {
            size: Math.floor(5 * (multiplyer - 1)),
            font: "sinko",
        }),
        { value: intialVotes },
        layer("ui_txt")
    ]);

    const moneyCount = add([
        pos(Math.floor(width() / 3), Math.floor(height() / 100)),
        text("Money:" + initialMoney + ".-", {
            size: Math.floor(5 * (multiplyer - 1)),
            font: "sinko",
        }),
        { value: initialMoney },
        layer("ui_txt")
    ]);

    const opticsCount = add([
        pos(Math.floor((width() / 60) * 41), Math.floor(height() / 100)),
        text("Optics:" + initialOptics, {
            size: Math.floor(5 * (multiplyer - 1)),
            font: "sinko",
        }),
        { value: initialOptics },
        layer("ui_txt")
    ]);

    /* EVENTS CHOICE */

    const top = scenarios[idScenario][startTurn][0];
    const bottom = scenarios[idScenario][startTurn][1];

    const elemTop = add([
        scale(multiplyer),
        pos(0, (ui_top.height * multiplyer)),
        sprite("event_" + eventNames[top] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        layer("game_elements"),
        eventNames[top],
        "event",
        "event_top"
    ])

    elemTop.onClick(() => {
        if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && ((votesCount.value < 50 && mustGain == true) || (votesCount.value >= 50 && mustGain == false))) goToEndScene(false, idScenario, votesCount.value, mustGain);
        else if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && ((votesCount.value >= 50 && mustGain == true) || (votesCount.value < 50 && mustGain == false))) goToEndScene(true, idScenario, votesCount.value, mustGain);
        else checkClick(top, true, idScenario, startTurn);
    });

    elemTop.onHover(() => {
        checkHover(top, true, startTurn);
    });

    const elemBottom = add([
        scale(multiplyer),
        pos(0, ((ui_top.height * multiplyer) + (elemTop.height * multiplyer))),
        sprite("event_" + eventNames[bottom] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        layer("game_elements"),
        eventNames[top],
        "event",
        "event_bottom"
    ]);

    elemBottom.onClick(() => {
        if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && ((votesCount.value < 50 && mustGain == true) || (votesCount.value >= 50 && mustGain == false))) goToEndScene(false, idScenario, votesCount.value, mustGain);
        else if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && ((votesCount.value >= 50 && mustGain == true) || (votesCount.value < 50 && mustGain == false))) goToEndScene(true, idScenario, votesCount.value, mustGain);
        else checkClick(bottom, false, idScenario, startTurn);
    });

    elemBottom.onHover(() => {
        checkHover(bottom, false, startTurn);
    });

    /* BOTTOM UI */

    const ui_bottom = add([
        scale(multiplyer),
        pos(0, ((ui_top.height * multiplyer) + (elemTop.height * multiplyer) + (elemBottom.height * multiplyer))),
        sprite("ui_bottom"),
        area(),
        layer("ui")
    ]);

    add([
        pos(Math.floor(width() / 100), height() - Math.floor(height() / 17)),
        text("Vote day: " + dayOfVote, {
            size: Math.floor(5 * (multiplyer - 1)),
            font: "sinko",
        }),
        layer("ui_txt")
    ]);

    let txtColor = 255 / (startTurn / (10 / startTurn))

    const daysUntilVote = add([
        pos(Math.floor(width() / 120) * 77, height() - Math.floor(height() / 17)),
        color(255, txtColor, txtColor),
        text((11 - startTurn) + " days left", {
            size: Math.floor(5 * (multiplyer - 1)),
            font: "sinko",
        }),
        layer("ui_txt")
    ]);

    /* CLICK FUNCTION */

    function checkClick(nbr, isTop, scn, currentTurn) {
        if (moneyCount.value < scores[nbr][2] && scores[nbr][4] == false) {
            destroyAll("greySquare");
            play("on_click_4");
            if (isTop) {
                add([
                    rect(width(), (elemTop.height * multiplyer)),
                    pos(0, (ui_top.height * multiplyer)),
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
                    rect(width(), (elemBottom.height * multiplyer)),
                    pos(0, ((ui_top.height * multiplyer) + (elemTop.height * multiplyer))),
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

            if (mustGain == true) votesCount.value = parseFloat((votesCount.value + (scores[nbr][1] * opticsCount.value)).toFixed(2));
            else votesCount.value = parseFloat((votesCount.value - (scores[nbr][1] * opticsCount.value)).toFixed(2));
            opticsCount.value = parseFloat((opticsCount.value + (scores[nbr][3] / 100)).toFixed(2));

            currentTurn++;

            if (currentTurn <= 10) {
                go("game", ({
                    idScenario: idScenario,
                    startTurn: currentTurn,
                    intialVotes: votesCount.value,
                    initialMoney: moneyCount.value,
                    initialOptics: opticsCount.value,
                    dayOfVote: dayOfVote,
                    mustGain: mustGain
                }));
            }
            else {
                if(mustGain) {
                    if ((scenarios[idScenario][18] >= 50 && votesCount.value >= 50) || ((scenarios[idScenario][18] < 50 && votesCount.value > scenarios[idScenario][18]))) goToEndScene(true, scn, votesCount.value, mustGain);
                    else goToEndScene(false, scn, votesCount.value, mustGain);
                }
                else {
                    if ((scenarios[idScenario][18] >= 50 && votesCount.value < scenarios[idScenario][18]) || ((scenarios[idScenario][18] < 50 && votesCount.value < 50))) goToEndScene(true, scn, votesCount.value, mustGain);
                    else goToEndScene(false, scn, votesCount.value, mustGain);
                }
            }
        }
    }

    /* HOVER FUNCTION */

    function checkHover(x, isTop, currentTurn) {
        if (elemTopStats) elemTopStats.destroy();
        if (elemBottomStats) elemBottomStats.destroy();
        if (currentTurn <= 10) {
            if (isTop && topCanBeHovered) {
                elemTopStats = add([
                    scale(multiplyer),
                    pos(0, (ui_top.height * multiplyer)),
                    sprite(mustGain ? "score_" + eventNames[x] : "score_" + eventNames[x] + "_reverse"),
                    area(),
                    layer("hover_elements")
                ]);

                if (scores[x][4] == true) {
                    readd(moneyCount);
                    moneyCount.color = rgb(121, 207, 118);
                }
                else {
                    readd(moneyCount);
                    moneyCount.color = rgb(219, 118, 118);
                }

                if (scores[x][1] >= 1) {
                    readd(votesCount);
                    votesCount.color = rgb(121, 207, 118);
                }
                else {
                    readd(votesCount);
                    votesCount.color = rgb(255, 255, 255);
                }

                if (scores[x][3] >= 1) {
                    readd(opticsCount);
                    opticsCount.color = rgb(121, 207, 118);
                }
                else if (scores[x][3] == 0) {
                    readd(opticsCount);
                    opticsCount.color = rgb(255, 255, 255);
                }
                else {
                    readd(opticsCount);
                    opticsCount.color = rgb(219, 118, 118);
                }
            }
            else if (!isTop && bottomCanBeHovered) {
                elemBottomStats = add([
                    scale(multiplyer),
                    pos(0, (ui_top.height * multiplyer) + (elemTop.height * multiplyer)),
                    sprite(mustGain ? "score_" + eventNames[x] : "score_" + eventNames[x] + "_reverse"),
                    area(),
                    layer("hover_elements")
                ]);

                if (scores[x][4] == true) {
                    readd(moneyCount);
                    moneyCount.color = rgb(121, 207, 118);
                }
                else {
                    readd(moneyCount);
                    moneyCount.color = rgb(219, 118, 118);
                }

                if (scores[x][1] >= 1) {
                    readd(votesCount);
                    votesCount.color = rgb(121, 207, 118);
                }
                else {
                    readd(votesCount);
                    votesCount.color = rgb(255, 255, 255);
                }

                if (scores[x][3] >= 1) {
                    readd(opticsCount);
                    opticsCount.color = rgb(121, 207, 118);
                }
                else if (scores[x][3] == 0) {
                    readd(opticsCount);
                    opticsCount.color = rgb(255, 255, 255);
                }
                else {
                    readd(opticsCount);
                    opticsCount.color = rgb(219, 118, 118);
                }
            }
        }
    }
});

function goToEndScene(has50Plus, scn, myVotes, gainTrue) {
    go("victoryPage", ({
        isWin: has50Plus,
        playedScene: scn,
        votes: myVotes,
        winIfMoreThan50: gainTrue
    }));
}