/* Function to play the game */

scene("game", ({ idScenario, startTurn, intialVotes, initialMoney, initialOptics, dayOfVote, mustGain }) => {
    let topCanBeHovered = true,
        bottomCanBeHovered = true,
        top = scenarios[idScenario][startTurn][0],
        bottom = scenarios[idScenario][startTurn][1],
        txtColor = 255 / (startTurn / (10 / startTurn)),
        eventNbrTopFinder = Math.random(),
        eventNbrBottomFinder = Math.random(),
        eventNbrTop = 2,
        eventNbrBottom = 2;
    
    if (eventNbrTopFinder < 0.015) eventNbrTop = 0; // 1.5 %
    else if (eventNbrTopFinder < 0.15) eventNbrTop = 1; // 13.5 %
    else if (eventNbrTopFinder < 0.83) eventNbrTop = 2; // 68 %
    else if (eventNbrTopFinder < 0.98) eventNbrTop = 3; // 15 %
    else eventNbrTop = 4; // 2 %

    if (eventNbrBottomFinder < 0.015) eventNbrBottom = 0; // 1.5 %
    else if (eventNbrBottomFinder < 0.15) eventNbrBottom = 1; // 13.5 %
    else if (eventNbrBottomFinder < 0.83) eventNbrBottom = 2; // 68 %
    else if (eventNbrBottomFinder < 0.98) eventNbrBottom = 3; // 15 %
    else eventNbrBottom = 4; // 2 %

    layers([
        "ui",
        "ui_txt",
        "game_elements",
        "hover_elements",
        "grey_squares",
    ]);

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
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1))
        }),
        { value: intialVotes },
        layer("ui_txt")
    ]);

    const moneyCount = add([
        pos(Math.floor(width() / 3), Math.floor(height() / 100)),
        text("Money:" + initialMoney, {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1))
        }),
        { value: initialMoney },
        layer("ui_txt")
    ]);

    const opticsCount = add([
        pos(Math.floor((width() / 60) * 41), Math.floor(height() / 100)),
        text("Optics:" + initialOptics, {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1))
        }),
        { value: initialOptics },
        layer("ui_txt")
    ]);

    /* EVENTS CHOICE */
    const elemTop = add([
        scale(multiplyer),
        pos(0, (ui_top.height * multiplyer)),
        sprite("event_" + eventNames[top] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        layer("game_elements"),
        eventNames[top],
        "event",
        "event_top"
    ]);
    elemTop.onClick(() => {
        if ((moneyCount.value < scores[top][eventNbrTop][2] && scores[top][eventNbrTop][4] == false) && (moneyCount.value < scores[bottom][eventNbrTop][2] && scores[bottom][eventNbrTop][4] == false) && ((votesCount.value < 50 && mustGain == true) || (votesCount.value >= 50 && mustGain == false))) goToEndScene(false, idScenario, votesCount.value, mustGain);
        else if ((moneyCount.value < scores[top][eventNbrTop][2] && scores[top][eventNbrTop][4] == false) && (moneyCount.value < scores[bottom][eventNbrTop][2] && scores[bottom][eventNbrTop][4] == false) && ((votesCount.value >= 50 && mustGain == true) || (votesCount.value < 50 && mustGain == false))) goToEndScene(true, idScenario, votesCount.value, mustGain);
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
        if ((moneyCount.value < scores[top][eventNbrBottom][2] && scores[top][eventNbrBottom][4] == false) && (moneyCount.value < scores[bottom][eventNbrBottom][2] && scores[bottom][eventNbrBottom][4] == false) && ((votesCount.value < 50 && mustGain == true) || (votesCount.value >= 50 && mustGain == false))) goToEndScene(false, idScenario, votesCount.value, mustGain);
        else if ((moneyCount.value < scores[top][eventNbrBottom][2] && scores[top][eventNbrBottom][4] == false) && (moneyCount.value < scores[bottom][eventNbrBottom][2] && scores[bottom][eventNbrBottom][4] == false) && ((votesCount.value >= 50 && mustGain == true) || (votesCount.value < 50 && mustGain == false))) goToEndScene(true, idScenario, votesCount.value, mustGain);
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

    const dateOfTheVote = add([
        pos(Math.floor(width() / 100), height() - Math.floor(height() / 17)),
        text("Vote day: " + dayOfVote, {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1))
        }),
        layer("ui_txt")
    ]);

    const daysUntilVote = add([
        pos(Math.floor(width() / 120) * 77, height() - Math.floor(height() / 17)),
        color(255, txtColor, txtColor),
        text(startTurn < 10 ? (11 - startTurn) + " days left" : (11 - startTurn) + " day left", {
            size: multiplyer % 2 == 0 ? Math.floor(5 * (multiplyer) - 10) : Math.floor(5 * (multiplyer - 1))
        }),
        layer("ui_txt")
    ]);

    /* CLICK FUNCTION */

    function checkClick(nbr, isTop, scn, currentTurn) {
        if ((isTop && moneyCount.value < scores[nbr][eventNbrTop][2] && scores[nbr][eventNbrTop][4] == false) || (!isTop && moneyCount.value < scores[nbr][eventNbrBottom][2] && scores[nbr][eventNbrBottom][4] == false)) {
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
            
            if (isTop) {
                moneyCount.value = scores[nbr][eventNbrTop][4] == false ? moneyCount.value - scores[nbr][eventNbrTop][2] : moneyCount.value + scores[nbr][eventNbrTop][2];
                votesCount.value = mustGain == true ? parseFloat((votesCount.value + (scores[nbr][eventNbrTop][1] * opticsCount.value)).toFixed(2)) : parseFloat((votesCount.value - (scores[nbr][eventNbrTop][1] * opticsCount.value)).toFixed(2));
                opticsCount.value = parseFloat((opticsCount.value + (scores[nbr][eventNbrTop][3] / 100)).toFixed(2));
            }
            else {
                moneyCount.value = scores[nbr][eventNbrBottom][4] == false ? moneyCount.value - scores[nbr][eventNbrBottom][2] : moneyCount.value + scores[nbr][eventNbrBottom][2];
                votesCount.value = mustGain == true ? parseFloat((votesCount.value + (scores[nbr][eventNbrBottom][1] * opticsCount.value)).toFixed(2)) : parseFloat((votesCount.value - (scores[nbr][eventNbrBottom][1] * opticsCount.value)).toFixed(2));
                opticsCount.value = parseFloat((opticsCount.value + (scores[nbr][eventNbrBottom][3] / 100)).toFixed(2));
            }

            votesCount.value >= 100 ? votesCount.value = 100 : votesCount.value = votesCount.value;


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
                    votesCount.value >= 50 ? goToEndScene(true, scn, votesCount.value, mustGain) : goToEndScene(false, scn, votesCount.value, mustGain);
                }
                else {
                     votesCount.value < 50 ? goToEndScene(true, scn, votesCount.value, mustGain) : goToEndScene(false, scn, votesCount.value, mustGain);
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
                    sprite(mustGain ? "score_" + eventNames[x] + "_" + scoreModifier[eventNbrTop] : "score_" + eventNames[x] + "_reverse" + "_" + scoreModifier[eventNbrTop]),
                    area(),
                    layer("hover_elements")
                ]);

                if (scores[x][eventNbrTop][4] == true) {
                    readd(moneyCount);
                    moneyCount.color = rgb(121, 207, 118);
                }
                else {
                    readd(moneyCount);
                    moneyCount.color = rgb(219, 118, 118);
                }

                if (scores[x][eventNbrTop][1] >= 1) {
                    readd(votesCount);
                    votesCount.color = rgb(121, 207, 118);
                }
                else {
                    readd(votesCount);
                    votesCount.color = rgb(255, 255, 255);
                }

                if (scores[x][eventNbrTop][3] >= 1) {
                    readd(opticsCount);
                    opticsCount.color = rgb(121, 207, 118);
                }
                else if (scores[x][eventNbrTop][3] == 0) {
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
                    sprite(mustGain ? "score_" + eventNames[x] + "_" + scoreModifier[eventNbrBottom] : "score_" + eventNames[x] + "_reverse" + "_" + scoreModifier[eventNbrBottom]),
                    area(),
                    layer("hover_elements")
                ]);

                if (scores[x][eventNbrBottom][4] == true) {
                    readd(moneyCount);
                    moneyCount.color = rgb(121, 207, 118);
                }
                else {
                    readd(moneyCount);
                    moneyCount.color = rgb(219, 118, 118);
                }

                if (scores[x][eventNbrBottom][1] >= 1) {
                    readd(votesCount);
                    votesCount.color = rgb(121, 207, 118);
                }
                else {
                    readd(votesCount);
                    votesCount.color = rgb(255, 255, 255);
                }

                if (scores[x][eventNbrBottom][3] >= 1) {
                    readd(opticsCount);
                    opticsCount.color = rgb(121, 207, 118);
                }
                else if (scores[x][eventNbrBottom][3] == 0) {
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