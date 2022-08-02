/* Main JS file for the game*/

//main variables
let votes = 50;
let money = 500;
let optics = 1.00;

let scenar = 0;
let tour = 1;

let elemTop;
let elemBottom;

let eventNames = [
    "event_train",
    "event_marche",
    "event_ag",
    "event_journal",
    "event_poste",
    "event_coupole",
    "event_affiche",
    "event_radio"
];

let spriteModifier = [
    "dawn_nice",
    "dawn_rain",
    "day_nice",
    "day_rain",
    "dusk_nice",
    "dusk_rain",
]

let eventNames_ID = [
    "train",
    "marche",
    "ag",
    "journal",
    "poste",
    "coupole",
    "affiche",
    "radio"
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
    ["suffrage_feminin", [1, 3], [4, 6], [5, 7], [1, 4], [2, 5], [3, 7], [0, 4], [7, 1], [5, 3], [6, 0], 40, 1000, 0.9]
]

function testGame(top, bottom) {
    elemTop = add([
        pos(0, 0),
        sprite(eventNames[top], { anim: "animated_BG" }),
        area(),
        eventNames_ID
    ]);

    elemBottom = add([
        pos(0, 42),
        sprite(eventNames[bottom], { anim: "animated_BG" }),
        area(),
        eventNames_ID
    ]);
    elemTop.onClick(() => {
        checkClick(top);
    });
    elemBottom.onClick(() => {
        checkClick(bottom);
    });
}

function checkClick(nbr) {
    if (money < scores[nbr][2] && scores[nbr][4] == false) {
        alert("nope")
    }
    else {
        if (scores[nbr][4] == false) {
            money = money - scores[nbr][2];
        }
        else {
            money = money + scores[nbr][2];
        }
        optics = parseFloat((optics + (scores[nbr][3] / 100)).toFixed(2));
        votes = parseFloat((votes + (scores[nbr][1] * optics)).toFixed(2));
        console.log("money : " + money + "   optics : " + optics + "   votes : " + votes)
        tour++;
        if (tour <= 10) testGame(scenarios[scenar][tour][0], scenarios[scenar][tour][1]);
    }
}

testGame(scenarios[scenar][tour][0], scenarios[scenar][tour][1]);