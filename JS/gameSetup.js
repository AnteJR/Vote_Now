/* Function to set the game up */

function gameSetup(scenario, initial_tour, initial_votes, initial_money, initial_optics, dayOfVoting) {     /* main function to setup */
    UI = add([                  // add the top UI
        scale(7),
        pos(0, 0),
        sprite("ui_top"),
        area(),
        "UI_top",
        "UI"
    ]);

    UI_bottom = add([           // add the bottom UI
        scale(7),
        pos(0, 637),
        sprite("ui_bottom"),
        area(),
        "UI_bottom",
        "UI"
    ]);

    votesCount = add([          // add the vote count in the top left
        scale(7),
        pos(14, 7),
        text("Votes:" + initial_votes + "%", {
            size: 4,
            font: "sink",
        }),
        { value: initial_votes },
        "texts_game"
    ]);

    moneyCount = add([          // add the money count in the top center
        scale(7),
        pos(294, 7),
        text("Money:" + initial_money + ".-", {
            size: 4,
            font: "sink",
        }),
        { value: initial_money },
        "texts_game"
    ]);

    opticsCount = add([         // add the optics count in the top right
        scale(7),
        pos(574, 7),
        text("Optics:" + initial_optics, {
            size: 4,
            font: "sink",
        }),
        { value: initial_optics },
        "texts_game"
    ]);

    voteDate = add([            // add the vote date in the bottom left
        scale(7),
        pos(7, 644),
        text("Vote day: " + dayOfVoting, {
            size: 4,
            font: "sink",
        }),
        "texts_game"
    ]);

    daysUntilVote = add([       // add the days until the vote in the bottom right
        scale(7),
        pos(616, 644),
        text((11 - initial_tour) + " days left", {
            size: 4,
            font: "sink",
        }),
        "texts_game"
    ]);

    testGame(                   // launch the game with the relevant events for turn one
        scenarios[scenario][initial_tour][0],
        scenarios[scenario][initial_tour][1],
        scenario,
        initial_tour);
}