/* Main JS file for the game */

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
        else endScreen(scn, votesCount.value);
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