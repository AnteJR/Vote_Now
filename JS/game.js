/* Main JS file for the game */

function endScreen(scenarioPlayed) {
    // add end screen UI
    const endBG = add([
        pos(0,0),
        sprite("ui_end"),
        area()
    ]);
    
    // destroy everything
    destroyAll("event");
    destroyAll("texts_game");
    destroyAll("UI");
    endBG.onHover(() => {
        destroyAll("score");
    });

    // add end screen text based on the scenario played
    // add button to go back to the main menu
}

function testGame(top, bottom, scene, turn) {
    if (elemTop && elemBottom) {
        elemTop.destroy();
        elemBottom.destroy();
    }

    elemTop = add([
        pos(0, 7),
        sprite("event_" + eventNames[top] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        eventNames[top],
        "event"
    ]);

    elemBottom = add([
        pos(0, 49),
        sprite("event_" + eventNames[bottom] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        eventNames[top],
        "event"
    ]);

    elemTop.onClick(() => {
        checkClick(top, scene, turn);
    });

    elemBottom.onClick(() => {
        checkClick(bottom, scene, turn);
    });

    elemTop.onHover(() => {
        checkHover(top, true, turn);
    });

    elemBottom.onHover(() => {
        checkHover(bottom, false, turn);
    });
}

function checkClick(nbr, scn, currentTurn) {
    if (moneyCount.value < scores[nbr][2] && scores[nbr][4] == false) { //if you can't afford it
        alert("nope");
    }
    else {
        if (scores[nbr][4] == false) { //if it is an event wherein you lose money
            moneyCount.value = moneyCount.value - scores[nbr][2];
        }
        else { // else
            moneyCount.value = moneyCount.value + scores[nbr][2];
        }

        //optics and votes changes
        opticsCount.value = parseFloat((opticsCount.value + (scores[nbr][3] / 100)).toFixed(2));
        votesCount.value = parseFloat((votesCount.value + (scores[nbr][1] * opticsCount.value)).toFixed(2));

        //update texts
        votesCount.text = "Votes:" + votesCount.value + "%";
        moneyCount.text = "Money:" + moneyCount.value + ".-";
        opticsCount.text = "Optics:" + opticsCount.value;

        currentTurn++; //increment and relaunch the gameFunction
        daysUntilVote.text = (11 - currentTurn) + " days left";
        if (currentTurn <= 10) testGame(scenarios[scn][currentTurn][0], scenarios[scn][currentTurn][1], scn, currentTurn);
        else endScreen(scn);
    }
}

function checkHover(x, isTop, currentTurn) {
    if (elemTopStats) elemTopStats.destroy();
    if (elemBottomStats) elemBottomStats.destroy();
    if (currentTurn <= 10) {
        if (isTop) {
            elemTopStats = add([
                pos(0, 7),
                sprite("score_" + eventNames[x]),
                area(),
                "score"
            ]);
        }
        else {
            elemBottomStats = add([
                pos(0, 49),
                sprite("score_" + eventNames[x]),
                area(),
                "score"
            ]);
        }
    }
}

function gameSetup(scenario, initial_tour, initial_votes, initial_money, initial_optics, dayOfVoting) {
    UI = add([
        pos(0, 0),
        sprite("ui_top"),
        area(),
        "UI_top",
        "UI"
    ]);

    UI_bottom = add([
        pos(0, 91),
        sprite("ui_bottom"),
        area(),
        "UI_bottom",
        "UI"
    ]);

    votesCount = add([
        pos(2, 1),
        text("Votes:", {
            size: 4,
            width: 40,
            font: "sink",
        }),
        { value: initial_votes },
        "texts_game"
    ]);

    moneyCount = add([
        pos(42, 1),
        text("Money:", {
            size: 4,
            width: 40,
            font: "sink",
        }),
        { value: initial_money },
        "texts_game"
    ]);

    opticsCount = add([
        pos(82, 1),
        text("Optics:", {
            size: 4,
            width: 40,
            font: "sink",
        }),
        { value: initial_optics },
        "texts_game"
    ]);

    votesCount.text = "Votes:" + votesCount.value + "%";
    moneyCount.text = "Money:" + moneyCount.value + ".-";
    opticsCount.text = "Optics:" + opticsCount.value;

    voteDate = add([
        pos(1, 92),
        text("Vote day: " + dayOfVoting, {
            size: 4,
            width: 85,
            font: "sink",
        }),,
        "texts_game"
    ]);

    daysUntilVote = add([
        pos(88, 92),
        text((11 - initial_tour) + " days left", {
            size: 4,
            width: 40,
            font: "sink",
        }),,
        "texts_game"
    ]);

    testGame(scenarios[scenario][initial_tour][0], scenarios[scenario][initial_tour][1], scenario, initial_tour);
}

gameSetup(scenar, tour, scenarios[scenar][11], scenarios[scenar][12], scenarios[scenar][13], scenarios[scenar][14]);