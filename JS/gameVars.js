/* Main JS file for the game's variables */

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
//scenarios contient : 0/name, 1/tour1, 2/tour2 ... 10/tour10, 11/votes_initial, 12/money_initial, 13/optics_initial, 14/date, 15/txt_victoire, 16/txt_défaite
let scenarios = [
    ["Achat_chemins_fer", [6, 4], [3, 1], [0, 6], [2, 1], [3, 4], [1, 6], [2, 3], [3, 0], [6, 4], [1, 0], 30, 1500, 0.75, "20th February 1898", "The bill is accepted! Thanks to your efforts, the CFF (Chemin de fer federaux; Federal Railways) are created and operated by the Confederation. In 1898, the project had cumulated 67.9% of all the votes, which is a great score considering the same bill was rejected by the population in 1891.", "The bill is rejected by the population. The Confederation is thus not allowed to buy the Central Swiss Railways to manage them at the state level. Without the creation of the CFF (Chemin de fer federaux; Federal railways), Railways stay in private hands, for better or for worse. This is not the first time the government is blocked by vote for that specific buyout: it was already rejected in 1891 by 68.9% of the population!"], // 0
    ["AVS", [6, 3], [3, 4], [1, 3], [4, 1], [2, 6], [7, 1], [1, 4], [0, 6], [4, 3], [1, 7], 30, 1500, 0.95, "6th December 1925"], // 1
    ["Initiative_crise", [2, 3], [1, 4], [1, 2], [4, 3], [2, 6], [7, 0], [5, 2], [5, 0], [1, 4], [0, 5], 20, 500, 0.75, "2nd June 1935"], // 2
    ["Romanche_langue_nat", [4, 3], [1, 6], [1, 0], [3, 6], [4, 7], [7, 2], [0, 1], [3, 6], [7, 1], [1, 3], 35, 1500, 0.95, "20th February 1938"], // 3
    ["Loi_concurrence_dél", [3, 1], [0, 2], [4, 6], [3, 7], [7, 0], [1, 2], [6, 1], [4, 1], [7, 4], [3, 5], 30, 1000, 0.9, "29th October 1944"], // 4
    ["Suffrage_feminin", [1, 6], [4, 3], [5, 7], [1, 4], [2, 5], [3, 7], [0, 4], [7, 1], [5, 3], [6, 0], 35, 1000, 0.8, "7th February 1972"] // 5
];