/* Main JS file for the game's variables */

let elemTop;                            // variables for game objects
let elemBottom;                             // main images
let elemTopStats;
let elemBottomStats;                        // images' stats
let votesCount;
let moneyCount;
let opticsCount;
let daysUntilVote;                          // counters for the games' stats
let UI;                                     // basic UI
let UI_bottom;
let voteDate;
let music_menu;
let music_game;

let eventNames = [                      // names of the events
    "train",
    "marche",
    "ag",
    "journal",
    "poste",
    "coupole",
    "affiche",
    "radio"
];

let spriteModifier = [                  // sprite modifiers; ie. variations to pick from when drawing a sprite
    "dawn_nice",
    "dawn_rain",
    "day_nice",
    "day_rain",
    "dusk_nice",
    "dusk_rain",
];

let scores = [                                  // what each event does to the game stats. The structure is as follows:
    ["score_train", 7, 700, 2, false, 0],           // 0. name
    ["score_marche", 3, 300, 1, false, 1],          // 1. vote
    ["score_ag", 0, 1000, 0, true, 2],              // 2. money
    ["score_journal", 2, 250, 0, false, 3],         // 3. optics
    ["score_poste", 1, 250, 1, true, 4],            // 4. isGain (boolean)
    ["score_coupole", 10, 500, -10, false, 5],      // 5. id
    ["score_affiche", 5, 200, 0, false, 6],
    ["score_radio", 3, 250, 2, false, 7]
];//scenarios stock les scénarios et les scènes correspondantes pour leur déroulement
//scenarios contient : 0/name, 1/tour1, 2/tour2 ... 10/tour10, 11/votes_initial, 12/money_initial, 13/optics_initial, 14/date, 15/txt_victoire, 16/txt_défaite


let scenarios = [                                        // scenarios stores all useful data for each votation you can play
    [                                                    // scenarios is structured as follos:
        "Government's buyout of Swiss railways (1898)",     // 0. name
        [6, 4], [3, 1], [0, 6], [2, 1], [3, 4],             // 1-10. turn 1-10 (ie. what two events will be displayed each turn)
        [1, 6], [2, 3], [3, 0], [6, 4], [1, 0],             // 11. intial vote percentage
        30,                                                 // 12. initial money the player has
        1500,                                               // 13. initial optics of the vote
        0.75,                                               // 14. the exact date the vote took place
        "20th February 1898",                               // 15-16. texts explaining what happens depending if the player wins or fails
        "The bill is accepted! Thanks to your efforts, the CFF (Chemin de fer federaux; Federal Railways) are created and operated by the Confederation. In 1898, the project had cumulated 67.9% of all the votes, which is a great score considering the same bill was rejected by the population in 1891.",
        "The bill is rejected by the population. The Confederation is thus not allowed to buy the Central Swiss Railways to manage them at the state level. Without the creation of the CFF (Chemin de fer federaux; Federal railways), railways stay in private hands, for better or for worse. This is not the first time the government is blocked by vote for that specific buyout: it was already rejected in 1891 by 68.9% of the population!"
    ],
    [
        "Sickness and accident insurance bill (1912)",
        [4, 3], [6, 1], [2, 0], [0, 3], [4, 5],
        [1, 3], [6, 4], [3, 2], [0, 4], [5, 3], 
        20, 1500, 0.7, 
        "4th February 1912", 
        "The bill passed! The campaign was tough: parties from the right were vehemently against it, and campaigned under classist slogans decrying spending public money to help poorer people. This is barely the case with this law, but it lays the foundation for the current insurance system, put in place in 1994! In 1912, the bill passed with 54.4% of all the votes.",
        "The bill failed; the opposing parties were more aggressive than you. The insurance won't be available to anyone except the richer portion of the population. Even if it passed, it still wouldn't have been perfect; the current insurance law was passed only in 1994! It would have been good to have a foundation to build better laws on, but that will be for another vote, though insurances always are difficult to pass in Switzerland."
    ],
    [
        "Veterans, elderly and disabled insurance bill (1925)", 
        [6, 3], [3, 4], [1, 3], [4, 1], [2, 6],
        [7, 1], [1, 4], [0, 6], [4, 3], [1, 6],
        30, 1500, 0.95,
        "6th December 1925",
        "The bill is accepted! With your coordination, the campaign was successful, and there is now an insurance in place for handicaped people, veterans and the elderly! This will go on as becoming the main source for retirement benefits as well as the only source of income for disabled people. In 1925, the bill is accepted by 65.4% of the population, 6 months after a popular initiative with the same goals was rejected.",
        "The bill is rejected. As of yet, there is still to be a fund for disabled people, veterans and the elderly. Outside of charity, that is, though this will hardly allows people affected to get by. Don't get discouraged! It isn't rare for the Swiss to vote multiple times on the same object, and accepting it given some time. This was already the second time the population was voting on this matter."
    ],
    [
        "Popular initiative to help relieve the economic crisis of 1929 (1935)",
        [2, 3], [1, 4], [1, 0], [4, 3], [2, 6],
        [7, 0], [5, 2], [5, 0], [1, 4], [0, 5],
        20, 500, 0.7,
        "2nd June 1935",
        "The bill passed... somehow? The opposing campaign used ruthless tactics, some experts even call this the Swiss redscare, since the initiative's far-left defendant were portrayed as communists! But it passed, and will probably help relieve the Swiss population from the economic crash of 1929, which still affected Switzerland in 1935. In reality, it failed, garnering only 42.8% of the votes.",
        "The bill is rejected, despite your best efforts. Don't be too sadened: it didn't pass either in our reality. The opposing centre and right parties used redscare tactics to portray the proponants of the initiative as dangerous communist, and it worked. The economic crisis of the 1930s will thus hit the poorer populations most, as always, but they will survive."
    ],
    [
        "Romansch as a new national language bill (1938)",
        [4, 3], [1, 6], [1, 0], [3, 6], [4, 7],
        [7, 2], [0, 1], [3, 6], [7, 1], [1, 3],
        45, 2000, 1,
        "20th February 1938",
        "The bill passed! It's really not a surprise, as Romansch is a quite unique language spoken only in the canton of the Grisons. Accepting it as a national language means official documents, communications and state presses publish everything in Romansch, preserving the language. In 1938, it got a whopping 91.6% of votes, making it one of the most accepted bill in Switzerland's history.",
        "The bill failed... somehow. It is really a wonder how it happened. Everyone from the far left to the far right were in favor of this bill. Romansch will not get support from the state, and will slowly erode as German becomes dominant in the Grisons..."
    ],
    [
        "Fight against unfair competition bill (1944)",
        [3, 1], [0, 2], [4, 6], [3, 7], [7, 0],
        [1, 2], [6, 1], [4, 1], [7, 4], [3, 5],
        30, 1000, 0.9,
        "29th October 1944",
        "The bill passed, thanks to you! Unfair competition has been a hot issue ever since capitalism was considered as the main economic systems. As such, protecting people and business from it is a good thing! In 1944, though, the law barely passed the vote, getting 52.9% of ballots. A narrow win against interest groups.",
        "The bill did not pass. The competition was maybe a bit unfair... meddling in the public discourse, interest groups representing the main industries were vehemently against the law. It did not pass, which means unfair competition won't be regulated for the time being."
    ],
    [
        "New Civil Protection militia bill (1959)",
        [7, 3], [1, 2], [0, 6], [7, 2], [4, 1],
        [0, 3], [4, 2], [7, 1], [0, 3], [3, 1],
        35, 750, 0.8,
        "24th May 1959",
        "The bill passed! Congratulations! There will now be a division of the population, those deemed unfit for the army, that will actively work as part of a mandatory service to help the population in case of an emergency. This is a good thing, which was first refused in a vote in 1952, but which passed in 1959 with 62.3% of the votes!",
        "The bill failed. Like in 1952, the population did not see fit to put an alternative for the mandatory military service. At this point in time, the army stays the main helping hand for other first responders in case of an emergency or disaster. Here's to hoping a special service just for that will not be required in the near future..."
    ],
    [
        "Women's suffrage bill (1971)",
        [1, 6], [4, 3], [5, 7], [1, 4], [2, 5],
        [3, 7], [0, 4], [7, 1], [5, 3], [6, 0],
        35, 1000, 0.9,
        "7th February 1971",
        "The bill FINALLY passed. It's been since 1959 that the government proposed for the first time that women should be allowed to vote. It took many convincing in the most rural cantons, and a lot of patience, but Switzerland finally joins the rest of Europe by allowing women to vote. The real vote saw 65.7% of ballots in favor of women's suffrage.",
        "Old habits tend to stick... Switzerland is not at its first failed attempt to implement women's suffrage. Already in 1959, 12 years prior, did the government try to give women the possibility to express their opinions at the urn, but alas. Switzerland is set to be the last western country to allow women to vote. Quite the achievement..."
    ],
    [
        "Popular initiative against the military service (1989)",
        [6, 2], [5, 7], [1, 3], [7, 4], [2, 6],
        [5, 7], [1, 2], [5, 0], [3, 6], [5, 1],
        20, 500, 0.7,
        "26th November 1989",
        "The bill passed! That's quite the achievement. In reality, the vote failed with only 35.6% of ballots in favor of the revocation of mandatory military service for men. It is a sticking tradition of which the Swiss people are proud of, and which rarely, if even changes. But it changed. And from now on men won't be required to serve in the military!",
        "Unsurprisingly, the bill failed. The Swiss people are too proud to the army to vote against it. Though there would be plenty of reasons why a mandatory military service would be frowned upon, it is not the case in Switzerland, at least for most of the population. The initiative failed, as it did in real life."
    ],
    [
        "Popular initiative against nuclear power (1990)",
        [5, 2], [3, 6], [4, 1], [0, 2], [5, 3],
        [4, 0], [1, 6], [7, 3], [2, 4], [7, 5],
        30, 1000, 0.85,
        "23rd Septeber 1990",
        "The initiative passed! Following events such as Chernobyl, nuclear energy got an ever worsening reputation as an unsafe way to generate power. As such, this bill forcing the government to stop producing new nuclear centrals and start to transition its energy production is is a resounding victory for environmentalists. The bill did pass for real, garnering 54.5% of the votes.",
        "Nuclear still has a prosperous life ahead! In reality the bill did not fail, but here, this means Switzerland can still create new centrals and keep its energy independance. Much to the detriment of fearmongerers about nuclear, the Swiss nuclear energy is safe and sound, for now."
    ]
];