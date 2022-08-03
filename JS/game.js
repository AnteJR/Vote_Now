/* Main JS file for the game*/

// main variables
let scenar = 0;
let tour = 1;

// variables for game objects
let elemTop;
let elemBottom; // main images
let elemTopStats;
let elemBottomStats; // images' stats
let votesCount;
let moneyCount;
let opticsCount; // counters for the games' stats
let UI; // basic UI

let eventNames = [
    "train",
    "marche",
    "ag",
    "journal",
    "poste",
    "coupole",
    "affiche",
    "radio"
];

let spriteModifier = [
    "dawn_nice",
    "dawn_rain",
    "day_nice",
    "day_rain",
    "dusk_nice",
    "dusk_rain",
];

//scores contient : 0/name, 1/vote, 2/money, 3/optics, 4/isGain (boolean)
let scores = [
    ["score_train", 7, 750, 2, false],
    ["score_marche", 3, 300, 2, false],
    ["score_ag", 0, 1000, 0, true],
    ["score_journal", 2, 250, 0, false],
    ["score_poste", 1, 250, 1, true],
    ["score_coupole", 10, 500, -10, false],
    ["score_affiche", 5, 200, 0, false],
    ["score_radio", 3, 250, 1, false]
];

//scenarios stock les scénarios et les scènes correspondantes pour leur déroulement
//scenarios contient : 0/name, 1/tour1, 2/tour2 ... 10/tour10, 11/votes_initial, 12/money_initial, 13/optics_initial
let scenarios = [
    ["suffrage_feminin", [1, 6], [4, 3], [5, 7], [1, 4], [2, 5], [3, 7], [0, 4], [7, 1], [5, 3], [6, 0], 40, 1000, 0.9]
];

function testGame(top, bottom) {
    if (elemTop && elemBottom) {
        elemTop.destroy();
        elemBottom.destroy();
    }

    elemTop = add([
        pos(0, 7),
        sprite("event_" + eventNames[top] + "_" + spriteModifier[parseInt(rand(0, 5))], { anim: "animated_BG" }),
        area(),
        eventNames[top]
    ]);

    console.log(eventNames[top] + "_" + spriteModifier[parseInt(rand(0, 5))])

    elemBottom = add([
        pos(0, 49),
        sprite("event_" + eventNames[bottom] + "_" + spriteModifier[parseInt(rand(0, 5))], { anim: "animated_BG" }),
        area(),
        eventNames[top]
    ]);

    elemTop.onClick(() => {
        checkClick(top);
    });

    elemBottom.onClick(() => {
        checkClick(bottom);
    });

    elemTop.onHover(() => {
        checkHover(top, true);
    });

    elemBottom.onHover(() => {
        checkHover(bottom, false);
    });
}

function checkClick(nbr) {
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
        votesCount.text = "Votes:" + votesCount.value;
        moneyCount.text = "Money:" + moneyCount.value;
        opticsCount.text = "Optics:" + opticsCount.value;

        tour++; //increment and relaunch the gameFunction
        if (tour <= 10) testGame(scenarios[scenar][tour][0], scenarios[scenar][tour][1]);
    }
}

function checkHover(x, isTop) {
    if (elemTopStats) elemTopStats.destroy();
    if (elemBottomStats) elemBottomStats.destroy();

    if (isTop) {
        elemTopStats = add([
            pos(0, 7),
            sprite("score_" + eventNames[x]),
            area()
        ]);
    }
    else {
        elemBottomStats = add([
            pos(0, 49),
            sprite("score_" + eventNames[x]),
            area()
        ]);
    }
}

function gameSetup(scenario, initial_tour, initial_votes, initial_money, initial_optics) {
    UI = add([
        pos(0, 0),
        sprite("ui_top"),
        area(),
        "UI_top"
    ])

    votesCount = add([
        pos(2, 1),
        text("Votes:", {
            size: 4,
            width: 40,
            font: "sink",
        }),
        { value: initial_votes }
    ]);

    moneyCount = add([
        pos(42, 1),
        text("Money:", {
            size: 4,
            width: 40,
            font: "sink",
        }),
        { value: initial_money }
    ]);

    opticsCount = add([
        pos(82, 1),
        text("Optics:", {
            size: 4,
            width: 40,
            font: "sink",
        }),
        { value: initial_optics }
    ]);

    votesCount.text = "Votes:" + votesCount.value;
    moneyCount.text = "Money:" + moneyCount.value;
    opticsCount.text = "Optics:" + opticsCount.value;

    testGame(scenarios[scenario][initial_tour][0], scenarios[scenario][initial_tour][1]);
}

gameSetup(scenar, tour, scenarios[scenar][11], scenarios[scenar][12], scenarios[scenar][13]);