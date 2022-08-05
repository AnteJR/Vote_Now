/* Function for the game's end to work */

function endScreen(scenarioPlayed, votesTotal) {        /* Function to display the end screen with all the needed parameters */
    music_game.pause();
    music_menu.play();

    const endBG = add([                                     // add background image
        scale(7),
        pos(0, 0),
        sprite("ui_end"),
        area(),
        "end_BG"
    ]);

    destroyAll("event");                                    // destroy everything
    destroyAll("texts_game");
    destroyAll("UI");
    endBG.onHover(() => {
        destroyAll("score");
    });

    const endTxt = add([                                    // add end screen text based on the scenario played
        origin("center"),                                   // currently empty; will be filled in once the player pressed continue
        pos(width() / 2, (height() / 2) - 70),
        text("", {
            size: 26,
            width: 800,
            font: "sinko",
        }),
        "text_end"
    ]);

    let victoryFailure;                                     // useful variabless
    let isWin = false;

    if (votesTotal > 50) isWin = true;                      // if the player has more than 50% votes, it's a victory

    if (isWin) {                                            // if the player won
        victoryFailure = add([                                  // display the "Victory!" animation
            scale(7),
            pos(width() / 2, (height() / 2) - 49),
            origin("center"),
            sprite("victory", { anim: "animated_BG" })
        ]);
    }
    else {                                                  // if the player lost
        victoryFailure = add([                                  // display the "Failure!" animation
            scale(7),
            pos(width() / 2, (height() / 2) - 70),
            origin("center"),
            sprite("failure", { anim: "animated_BG" })
        ]);
    }

    const skipTxt = add([                                   // button "continue"
        scale(4),
        origin("center"),
        pos(width() / 2, (height() / 2) + 100),
        sprite("continue"),
        area(),
        "continue",
        "text_end"
    ]);

    skipTxt.onClick(() => {                                 // onClick for the "continue" button
        play("on_click_1");                                 // play onClick sound
        victoryFailure.destroy();                           // destroy the other texts and the "continue" button
        skipTxt.destroy();

        if (isWin) {                                        // if the player won, show the correct text
            endTxt.text = scenarios[scenarioPlayed][15] + "\n\nYour score was: " + votesTotal + "%! Congrats!";
        }
        else {                                              // if the player did not win, show the correct text
            endTxt.text = scenarios[scenarioPlayed][16] + "\n\nYour score was: " + votesTotal + "%! Better luck next time!";
        }

        let btnToMenu = add([                               // add a button to go to the main menu
            scale(4),
            origin("center"),
            pos(width() / 2, (height() / 2) + 250),
            sprite("to_menu"),
            area(),
            "text_end"
        ]);

        btnToMenu.onClick(() => {                           // onClick the menu button
            destroyAll("text_end");
            destroyAll("end_BG");

            play("on_click_2");                             // play onClick sound

            myTitleScreen();                                // go to menu
        })
    });
}