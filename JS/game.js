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
let opticsCount;
let daysUntilVote; // counters for the games' stats
let UI;
let UI_bottom;
let voteDate; // basic UI

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
    ["score_train", 7, 750, 2, false], // 0
    ["score_marche", 3, 300, 1, false], // 1
    ["score_ag", 0, 1000, 0, true], // 2
    ["score_journal", 2, 250, 0, false], // 3
    ["score_poste", 1, 250, 1, true], // 4
    ["score_coupole", 10, 500, -10, false], // 5
    ["score_affiche", 5, 200, 0, false], // 6
    ["score_radio", 3, 250, 1, false] // 7
];

//scenarios stock les scénarios et les scènes correspondantes pour leur déroulement
//scenarios contient : 0/name, 1/tour1, 2/tour2 ... 10/tour10, 11/votes_initial, 12/money_initial, 13/optics_initial, 14/date
let scenarios = [
    ["Achat_chemins_fer", [6, 4], [3, 1], [0, 6], [2, 1], [3, 4], [1, 6], [2, 3], [3, 0], [6, 4], [1, 0], 30, 2000, 0.75, "20th February 1898"], // 0
    ["AVS", [6, 3], [3, 4], [1, 3], [4, 1], [2, 6], [7, 1], [1, 4], [0, 6], [4, 3], [1, 7], 30, 1500, 0.95, "6th December 1925"], // 1
    ["Initiative_crise", [2, 3], [1, 4], [1, 2], [4, 3], [2, 6], [7, 0], [5, 2], [5, 0], [1, 4], [0, 5], 20, 500, 0.75, "2nd June 1935"], // 2
    ["Romanche_langue_nat", [4, 3], [1, 6], [1, 0], [3, 6], [4, 7], [7, 2], [0, 1], [3, 6], [7, 1], [1, 3], 35, 1500, 0.95, "20th February 1938"], // 3
    ["suffrage_feminin", [1, 6], [4, 3], [5, 7], [1, 4], [2, 5], [3, 7], [0, 4], [7, 1], [5, 3], [6, 0], 35, 1000, 0.8, "7th February 1972"] // 4
];

function testGame(top, bottom, scene, turn) {
    if (elemTop && elemBottom) {
        elemTop.destroy();
        elemBottom.destroy();
    }

    elemTop = add([
        pos(0, 7),
        sprite("event_" + eventNames[top] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        eventNames[top]
    ]);

    elemBottom = add([
        pos(0, 49),
        sprite("event_" + eventNames[bottom] + "_" + spriteModifier[parseInt(rand(0, 6))], { anim: "animated_BG" }),
        area(),
        eventNames[top]
    ]);

    elemTop.onClick(() => {
        checkClick(top, scene, turn);
    });

    elemBottom.onClick(() => {
        checkClick(bottom, scene, turn);
    });

    elemTop.onHover(() => {
        checkHover(top, true);
    });

    elemBottom.onHover(() => {
        checkHover(bottom, false);
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

function endScreen(scenarioPlayed) {
    // destroy everything
    
    // add end screen UI
    // add end screen text based on the scenario played
    // add button to go back to the main menu
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

function gameSetup(scenario, initial_tour, initial_votes, initial_money, initial_optics, dayOfVoting) {
    UI = add([
        pos(0, 0),
        sprite("ui_top"),
        area(),
        "UI_top"
    ]);

    UI_bottom = add([
        pos(0, 91),
        sprite("ui_bottom"),
        area(),
        "UI_bottom"
    ]);

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

    votesCount.text = "Votes:" + votesCount.value + "%";
    moneyCount.text = "Money:" + moneyCount.value + ".-";
    opticsCount.text = "Optics:" + opticsCount.value;

    voteDate = add([
        pos(1, 92),
        text("Vote day: " + dayOfVoting, {
            size: 4,
            width: 85,
            font: "sink",
        }),
    ]);

    daysUntilVote = add([
        pos(88, 92),
        text((11 - initial_tour) + " days left", {
            size: 4,
            width: 40,
            font: "sink",
        }),
    ]);

    testGame(scenarios[scenario][initial_tour][0], scenarios[scenario][initial_tour][1], scenario, initial_tour);
}

gameSetup(scenar, tour, scenarios[scenar][11], scenarios[scenar][12], scenarios[scenar][13], scenarios[scenar][14]);