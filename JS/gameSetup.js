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

//gameSetup(scenar, tour, scenarios[scenar][11], scenarios[scenar][12], scenarios[scenar][13], scenarios[scenar][14]);