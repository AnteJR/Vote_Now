/* Main JS file for the game's variables */
let elemTopStats,
    elemBottomStats,
    music_menu,
    music_game,
    hover_sound,
    monInterval1,
    monInterval2;

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
        "Government's buyout of Swiss railways",            // 0. name
        [6, 4], [3, 1], [0, 6], [2, 1], [3, 4],             // 1-10. turn 1-10 (ie. what two events will be displayed each turn)
        [1, 6], [2, 3], [3, 0], [6, 4], [1, 0],             // 11 - 13. intial vote percentage, money and optics
        40,                                                 // 14. the exact date the vote took place
        1500,                                               // 15-16. texts explaining what happens depending if the player wins or fails
        0.8,                                                // 17. the introductory text
        "20.02.1898",                                       // 18. the actual result of the vote
        "The bill is accepted! Thanks to your efforts, railway will be bought by the government, and the CFF will soon be created and operated by the Confederation. This means cheaper, more efficient, and uniform railways throughout the country. In 1898, the project had cumulated 67.9% of all the votes.",
        "The bill is rejected by the population. The Confederation is thus not allowed to buy the Central Swiss Railways to manage them at the state level. Without the creation of the CFF, railways stay in private hands. This is not the first time the government is blocked by vote for that specific buyout: it was already rejected in 1891 by 68.9% of the population!",
        "Government's buyout of Swiss railways (1898)\n\nThis bill aims for the federal government to buy the many private railway companies throughout Switzerland to offer a uniform, centralized, nationalized railway system.\n\nIf you manage to make the bill pass, the CFF (Chemin de fer federaux; Federal Railways) will be created in 1902 to manage the railways thoughout the country.",
        67.9
    ],
    [
        "Sickness and accident insurance bill",
        [4, 3], [6, 1], [2, 0], [0, 3], [4, 5],
        [1, 3], [6, 4], [3, 2], [0, 4], [5, 3], 
        25, 1500, 0.71, 
        "04.02.1912", 
        "The bill passed! In the meantime, the government will do some light price-fixing and put some slight regulations on insurances. A small win now, but still a win in the long-term: this bill lays the foundation for the current insurance system, put in place in 1994! In 1912, the bill passed with 54.4% of all the votes.",
        "The bill failed; the opposing parties were more aggressive than you. The insurance won't be available to anyone except the richer portion of the population. Indeed, insurances laws always are difficult to pass in Switzerland against the insurer's lobby...",
        "Sickness and accident insurance (1912)\n\nWhat if you get sick or into an accident? For now, it's 1912, and if you do, you have to pay all of the necessary medical interventions and medicine out of your own pocket, unless you subscribe to an expensive private insurance policy.\n\nThis bill aims to help get citizen insured, though the insurances will in any case stay private entities.",
        54.4
    ],
    [
        "Veterans, elderly and disabled insurance bill", 
        [6, 3], [3, 4], [1, 3], [4, 1], [2, 6],
        [7, 1], [1, 4], [0, 6], [4, 3], [1, 6],
        32, 1500, 0.95,
        "6.12.1925",
        "The bill is accepted! With your coordination, the campaign was successful, and there will now be an insurance in place for handicaped people, veterans and the elderly! This will go on as becoming the main source for retirement benefits as well as the only source of income for disabled people. In 1925, the bill is accepted by 65.4% of the population.",
        "The bill is rejected. As of yet, there is still to be a fund for disabled people, veterans and the elderly. Outside of charity, that is, though this will hardly allows people affected to get by. And maybe most disheartening of all: this is already the second time the population voted no on this matter, 6 months prior to this vote.",
        "Veterans, elderly and disabled insurance (1925)\n\nCurrently, war veterans and disabled people get by either through charity, or their relatives taking care of them. In the case of the elderly, their only real option is the latter.\n\nAs such, and after Worl War 1, the Swiss government proposes this bill to insure those people by paying them a (somewhat) living wage for their conditions.",
        65.4
    ],
    [
        "Popular initiative to fight the economic crisis",
        [2, 3], [1, 4], [1, 0], [4, 3], [2, 6],
        [7, 0], [5, 2], [5, 0], [1, 4], [0, 5],
        20, 500, 0.73,
        "02.06.1935",
        "The bill passed... somehow? The opposing campaign used ruthless tactics, some experts even call this the Swiss redscare, since the initiative's far-left defendant were portrayed as communists! But it passed, and will probably help relieve the Swiss population from the economic crash of 1929, which still affected Switzerland in 1935. In reality, it failed, garnering only 42.8% of the votes.",
        "The bill is rejected, despite your best efforts. Don't be too sadened: it didn't pass either in our reality, with only 42.8% of voters for it. The opposing centre and right parties used redscare tactics to portray the proponants of the initiative as dangerous communist, and it worked. The economic crisis of the 1930s will thus hit the poorer populations most, as always, but they will survive.",
        "The crisis initiative (1935)\n\n1929 and the subsequent decade are dark years for the world over. As the economic crash ravages Switzerland in the early 1930s, a left-leaning comittee wants the government to help out the population who is most suffering: poorer, working-class individuals and small businesses, that can barely, if at all, afford to live. See if you can help them win over a staunchly anti-communist country.",
        42.8
    ],
    [
        "Romansch as a new national language bill",
        [2, 6], [4, 7], [6, 2], [3, 6], [4, 7],
        [0, 2], [5, 0], [2, 6], [7, 4], [6, 0],
        45, 2000, 1.2,
        "20.02.1938",
        "The bill passed! It's really not a surprise, as Romansch is a quite unique language to Switzerland, and somewhat of a national pride. Accepting it as a national language means official documents, communications and state presses publish everything in Romansch, preserving the language. In 1938, it got a whopping 91.6% of votes, making it one of the most accepted bill in Switzerland's history.",
        "The bill failed... somehow? It is really a wonder how it happened. Everyone from the far left to the far right were in favor of this bill. As such, Romansch will not get support from the state, and will slowly erode as German becomes dominant in the Grisons...",
        "Romansch as a new national language (1938)\n\nRomansch is an elaborate mix of German, Italian and native Celtic languages, spoken by 44'000 people out of the 4 million residents of Switzerland in 1938, and it is slowly disappearing. Recognizing it as a national language, what this bill proposes, would make it so official communications are translated in Romansch, and the language promoted, which would help preserve it.",
        91.6
    ],
    [
        "Fight against unfair competition bill",
        [3, 1], [0, 2], [4, 6], [3, 7], [7, 0],
        [1, 2], [6, 1], [4, 1], [1, 4], [3, 6],
        30, 1000, 0.9,
        "29.10.1944",
        "The bill passed, thanks to you! Unfair competition has been a hot issue ever since capitalism has been adopted as the main economic systems. As such, protecting people and business from it is a good thing! In 1944, though, the law barely passed the vote, getting 52.9% of ballots.",
        "The bill did not pass. The competition was maybe a bit unfair... meddling in the public discourse, interest groups representing the main industries were vehemently against the law. Unfair competition won't be regulated for the time being.",
        "Unfair competition bill (1944)\n\nUnfair competition is generally described as an economical advantage between two competing brands or producers.\n\nSwitzerland is a small country and is afraid others may interfere with it's local economy: as such, this bill aims to prevent unfair dispositions competing economic forces may have against Swiss companies and products.",
        52.9
    ],
    [
        "New Civil Protection militia bill",
        [7, 3], [1, 2], [0, 6], [7, 2], [4, 1],
        [0, 3], [4, 2], [7, 1], [0, 3], [3, 1],
        35, 750, 0.83,
        "24.05.1959",
        "The bill passed! Congratulations! There will now be a division of the population, men deemed unfit for the army, that will actively work as part of a mandatory service to help the population in case of an emergency. This is a good thing, which was first refused in a vote in 1952, but which passed in 1959 with 62.3% of the votes!",
        "The bill failed. Like in 1952, the population did not see fit to put an alternative for the mandatory military service. At this point in time, the army stays the main helping hand for other first responders in case of an emergency or disaster. Here's to hoping a special service just for that won't be required in the near future.",
        "New Civil Protection militia (1959)\n\nWorld Wars and international nuclear threats take a toll on Switzerland's morale, and the government is thinking of creating a new militia, parallel to the army, to ensure nuclear protections are working and in the norms, as well as more generally aid the population if there ever were to be a natural catastrophe.",
        62.3
    ],
    [
        "Women's suffrage bill",
        [1, 6], [2, 3], [5, 7], [1, 4], [2, 5],
        [3, 7], [0, 5], [7, 1], [5, 3], [6, 0],
        35, 1000, 0.9,
        "07.02.1971",
        "The bill FINALLY passed. It's been since 1959; it took many convincing in the most rural cantons, and a lot of patience. But Switzerland finally joins the rest of Europe by allowing women to vote. The real vote saw 65.7% of ballots in favor of women's suffrage.",
        "Old habits tend to stick... Switzerland is not at its first attempt to implement women's suffrage, and this one isn't its last. For 12 years now the male population refuses to give women the right to vote. Alas, Switzerland is set to be the last western country to get there. Quite the achievement...",
        "Women's suffrage (1971)\n\nFirst tried and rejected by the population in 1959, women's suffrage isn't finding a place in Switzerland. Now that almost all European countries have adopted it, the federal government insists on pushing this bill to give women the right to vote. They hope the international context might push the nay-sayers in the right direction this time...",
        65.7
    ],
    [
        "Popular initiative against the military service",
        [6, 2], [5, 7], [1, 3], [7, 4], [2, 6],
        [5, 7], [1, 2], [5, 0], [3, 6], [5, 1],
        25, 500, 0.7,
        "26.11.1989",
        "The bill passed! That's quite the achievement. In reality, the vote failed with only 35.6% of ballots in favor of the revocation of mandatory military service for men. It is a sticking tradition of which the Swiss people are proud of, and which rarely, if even changes. But it changed. And from now on men won't be required to serve in the military!",
        "Unsurprisingly, the bill failed. The Swiss people are too proud to the army to vote against it. Though there would be plenty of reasons why a mandatory military service would be frowned upon, it is not the case in Switzerland, at least for now. The initiative failed, as it did in real life with only 35.6% of votes.",
        "Initiative against mandatory military service (1989)\n\nWar are never fun, and the fact that Switzerland, a small and internationally neutral country, has a mandatory military service doesn't please the GSSA (Groupe pour une Suisse sans armee; Group for a military-free Switzerland). This year, they got enough signature to try and ban the practice in Switzerland. Will they do it?",
        35.6
    ],
    [
        "Popular initiative against nuclear power",
        [5, 2], [3, 6], [4, 1], [0, 2], [5, 3],
        [4, 0], [1, 6], [7, 3], [2, 4], [7, 5],
        20, 1000, 0.85,
        "23.09.1990",
        "The initiative passed! This is a resounding victory for environmentalists! Now, Switzerland will try to have greener ways of producing energy. The bill did pass for real, garnering 54.5% of the votes!",
        "Nuclear still has a prosperous life ahead! In reality the bill did not fail, but here, this means Switzerland can still create new centrals to keep its energy independance. Much to the detriment of environmentalists, the Swiss nuclear energy is safe and sound, for now.",
        "Get out of nuclear initiative (1990)\n\nFollowing events such as Chernobyl, nuclear energy got an ever worsening reputation as an unsafe way to generate power. As such, this bill forcing the government to stop producing new nuclear centrals and start to transition its energy production seems like an appropriate reponse to a fear that the population has.",
        54.5
    ]
];