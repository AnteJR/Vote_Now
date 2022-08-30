/* Main JS file for the game */

function testGame(top, bottom, scene, turn) {       /* Function that places the main game elements to interact with */
    destroyAll("greySquare");                           // delete the grey squares if they exist

    if (elemTop && elemBottom) {                        // if some game element exist, delete them
        elemTop.destroy();
        elemBottom.destroy();
    }

    elemTop = add([                                     // add the top element
        scale(7),
        pos(0, 49),
        sprite("event_" + eventNames[top] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        eventNames[top],
        "event",
        "event_top"
    ]);

    elemBottom = add([                                  // add the bottom element
        scale(7),
        pos(0, 343),
        sprite("event_" + eventNames[bottom] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        eventNames[top],
        "event",
        "event_bottom"
    ]);

    elemTop.onClick(() => {                             // onClicks and onHover to call functions (if the play can play)
        if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && votesCount.value < 50) go("victoryPage", ({ isWin: false, playedScene: scene, votes: votesCount.value }));
        else if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && votesCount.value > 50) go("victoryPage", ({ isWin: true, playedScene: scene, votes: votesCount.value }));
        else checkClick(top, true, scene, turn);
    });

    elemBottom.onClick(() => {
        if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && votesCount.value < 50) go("victoryPage", ({ isWin: false, playedScene: scene, votes: votesCount.value }));
        else if ((moneyCount.value < scores[top][2] && scores[top][4] == false) && (moneyCount.value < scores[bottom][2] && scores[bottom][4] == false) && votesCount.value > 50) go("victoryPage", ({ isWin: true, playedScene: scene, votes: votesCount.value }));
        else checkClick(bottom, false, scene, turn);
    });

    elemTop.onHover(() => {
        checkHover(top, true, turn);
    });

    elemBottom.onHover(() => {
        checkHover(bottom, false, turn);
    });
}

function checkClick(nbr, isTop, scn, currentTurn) {                             /* function for the onClick */
    if (moneyCount.value < scores[nbr][2] && scores[nbr][4] == false) {             // if the player can't affort the event
        play("on_click_4");                                                             // play onClick sound
        if (isTop) {                                                                    // if the clicked event is on top
            destroyAll("greySquare");                                                       // destroy all greySquare (this prevents stacking)

            const greySquareTop = add([                                                     // add a grey square on top of the event clicked
                rect(width(), 294),
                pos(0, 49),
                outline(4),
                color(1, 1, 1),
                area(),
                opacity(0.5),
                "greySquare"
            ]);

            greySquareTop.onHover(() => {                                                   // prevent the stats from appearing onHover
                destroyAll("score");
            })
        }
        else {                                                                          // if the clicked event is at bottom
            destroyAll("greySquare");                                                       // destroy all greySquare (this prevents stacking)

            const greySquareBottom = add([                                                  // add a grey square on top of the event clicked
                rect(width(), 294),
                pos(0, 343),
                outline(4),
                color(1, 1, 1),
                area(),
                opacity(0.5),
                "greySquare"
            ]);

            greySquareBottom.onHover(() => {                                                // prevent the stats from appearing onHover
                destroyAll("score");
            })
        }
    }
    else {                                                                          // else
        play("on_click_3");                                                             // play onClick sound
        if (scores[nbr][4] == false) {                                                  //if it is an event wherein you lose money, lose money
            moneyCount.value = moneyCount.value - scores[nbr][2];
        }
        else {                                                                          // else, gain money
            moneyCount.value = moneyCount.value + scores[nbr][2];
        }

        opticsCount.value = parseFloat((opticsCount.value + (scores[nbr][3] / 100)).toFixed(2));                //optics and votes changes
        votesCount.value = parseFloat((votesCount.value + (scores[nbr][1] * opticsCount.value)).toFixed(2));

        votesCount.text = "Votes:" + votesCount.value + "%";                                //update texts
        moneyCount.text = "Money:" + moneyCount.value + ".-";
        opticsCount.text = "Optics:" + opticsCount.value;

        currentTurn++;                                                                      //increment and relaunch the game function to start a new round
        daysUntilVote.text = (11 - currentTurn) + " days left";
        if (currentTurn <= 10) testGame(scenarios[scn][currentTurn][0], scenarios[scn][currentTurn][1], scn, currentTurn);
        else {
            if (votesCount.value > 50) go("victoryPage", ({ isWin: true, playedScene: scn, votes: votesCount.value }));
            else go("victoryPage", ({ isWin: false, playedScene: scn, votes: votesCount.value }));
        }
    }
}

function checkHover(x, isTop, currentTurn) {                /* function for the onHover */
    if (elemTopStats) elemTopStats.destroy();                   // if stats already exist, delete them
    if (elemBottomStats) elemBottomStats.destroy();
    if (currentTurn <= 10) {                                    // if the turn count is between 1-10
        if (isTop) {                                                // add the stats for the top element
            elemTopStats = add([
                scale(2),
                pos(0, 49),
                sprite("score_" + eventNames[x]),
                area(),
                "score"
            ]);
        }
        else {                                                      // add the stats for the bottom element
            elemBottomStats = add([
                scale(2),
                pos(0, 343),
                sprite("score_" + eventNames[x]),
                area(),
                "score"
            ]);
        }
    }
}