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
    "radio",
    "socials"
];

let spriteModifier = [                  // sprite modifiers; ie. variations to pick from when drawing a sprite
    "dawn_nice",
    "dawn_rain",
    "day_nice",
    "day_rain",
    "dusk_nice",
    "dusk_rain",
];

let scoreModifier = [
    "terrible",
    "not_so_great",
    "ok",
    "great",
    "incredible"
]

let scores = [                                  // what each event does to the game stats
    [
        ["score_train_terrible", 5, 700, 0, false],
        ["score_train_not_so_great", 6, 600, 3, false],
        ["score_train_ok", 7, 700, 2, false],
        ["score_train_great", 8, 700, 0, false],
        ["score_train_incredible", 7.5, 700, 3, false]
    ],
    [
        ["score_marche_terrible", 2, 300, 1, false],
        ["score_marche_not_so_great", 2, 200, 2, false],
        ["score_marche_ok", 3, 300, 2, false],
        ["score_marche_great", 5, 300, 0, false],
        ["score_marche_incredible", 4, 300, 3, false]
    ],
    [
        ["score_ag_terrible", 0, 750, -1, true],
        ["score_ag_not_so_great", 0, 1100, -1, true],
        ["score_ag_ok", 0, 1000, 0, true],
        ["score_ag_great", 1, 1000, 0, true],
        ["score_ag_incredible", 0, 1250, 0, true]
    ],
    [
        ["score_journal_terrible", 1, 200, 0, false],
        ["score_journal_not_so_great", 1.5, 150, 0, false],
        ["score_journal_ok", 2, 200, 0, false],
        ["score_journal_great", 3, 200, 0, false],
        ["score_journal_incredible", 3, 150, 0, false]
    ],
    [
        ["score_poste_terrible", 0, 200, 0, true],
        ["score_poste_not_so_great", 0, 200, 5, true],
        ["score_poste_ok", 1, 250, 1, true],
        ["score_poste_great", 2, 300, 0, true],
        ["score_poste_incredible", 2, 250, 2, true]
    ],
    [
        ["score_coupole_terrible", 5, 500, -5, false],
        ["score_coupole_not_so_great", 9, 450, -9, false],
        ["score_coupole_ok", 10, 500, -10, false],
        ["score_coupole_great", 11, 550, -10, false],
        ["score_coupole_incredible", 15, 500, -10, false]
    ],
    [
        ["score_affiche_terrible", 3, 300, 0, false],
        ["score_affiche_not_so_great", 3, 200, 0, false],
        ["score_affiche_ok", 5, 300, 0, false],
        ["score_affiche_great", 6, 300, 0, false],
        ["score_affiche_incredible", 6, 250, 0, false]
    ],
    [
        ["score_radio_terrible", 2, 250, 0, false],
        ["score_radio_not_so_great", 2, 200, 2, false],
        ["score_radio_ok", 3, 250, 2, false],
        ["score_radio_great", 5, 250, 1, false],
        ["score_radio_incredible", 4, 250, 4, false]
    ],
    [
        ["score_socials_terrible", 4, 400, 2, false],
        ["score_socials_not_so_great", 4, 350, 5, false],
        ["score_socials_ok", 5, 400, 4, false],
        ["score_socials_great", 6, 400, 3, false],
        ["score_socials_incredible", 6, 400, 6, false]
    ]
];

let scenarios = {   // scenarios stores all useful data for each votation you can play
    english: [
        [                                                    // scenarios is structured as follos:
            "Government's buyout of Swiss railways",            // 0. name
            [6, 4], [3, 1], [0, 6], [2, 1], [3, 4],             // 1-10. turn 1-10 (ie. what two events will be displayed each turn)
            [1, 6], [2, 3], [3, 1], [6, 4], [1, 0],             // 11 - 13. intial vote percentage, money and optics
            40,                                                 // 14. the exact date the vote took place
            1500,                                               // 15-17. texts explaining what happens depending if the player wins or fails & the introductory text
            0.8,                                                // 18. the actual result of the vote
            "20.02.1898",                                       // 19. if the bills has to be passed (>50 ; true) or not (<50 ; false)
            "The bill is accepted! Thanks to your efforts, railway will be bought by the government, and the CFF will soon be created and operated by the Confederation. This means cheaper, more efficient, and uniform railways throughout the country. In 1898, the project had cumulated 67.9% of all the votes.",
            "The bill is rejected by the population. The Confederation is thus not allowed to buy the Central Swiss Railways to manage them at the state level. Without the creation of the CFF, railways stay in private hands. This is not the first time the government is blocked by vote for that specific buyout: it was already rejected in 1891 by 68.9% of the population!",
            "Government's buyout of Swiss railways (1898)\n\nThis bill aims for the federal government to buy the many private railway companies throughout Switzerland to offer a uniform, centralized, nationalized railway system.\n\nIf you manage to make the bill pass, the CFF (Chemin de fer federaux; Federal Railways) will be created in 1902 to manage the railways thoughout the country.",
            67.9,
            true
        ],
        [
            "Sickness and accident insurance bill",
            [2, 3], [6, 1], [2, 0], [1, 3], [4, 5],
            [0, 3], [2, 4], [3, 1], [6, 4], [3, 6],
            25, 1500, 0.71,
            "04.02.1912",
            "The bill passed! In the meantime, the government will do some light price-fixing and put some slight regulations on insurances. A small win now, but still a win in the long-term: this bill lays the foundation for the current insurance system, put in place in 1994! In 1912, the bill passed with 54.4% of all the votes.",
            "The bill failed; the opposing parties were more aggressive than you. The insurance won't be available to anyone except the richer portion of the population. Indeed, insurances laws always are difficult to pass in Switzerland against the insurer's lobby...",
            "Sickness and accident insurance (1912)\n\nWhat if you get sick or into an accident? For now, it's 1912, and if you do, you have to pay all of the necessary medical interventions and medicine out of your own pocket, unless you subscribe to an expensive private insurance policy.\n\nThis bill aims to help get citizen insured, though the insurances will in any case stay private entities.",
            54.4,
            true
        ],
        [
            "Veterans, elderly and disabled insurance bill",
            [6, 3], [3, 4], [1, 3], [4, 1], [2, 6],
            [7, 1], [1, 4], [0, 6], [4, 3], [1, 6],
            32, 1500, 0.95,
            "6.12.1925",
            "The bill is accepted! With your coordination, the campaign was successful, and there will now be an insurance in place for handicaped people, veterans and the elderly! This will go on as becoming the main source for retirement benefits as well as the only source of income for disabled people. In 1925, the bill is accepted by 65.4% of the population.",
            "The bill is rejected. As of yet, there is still to be a fund for disabled people, veterans and the elderly. Outside of charity, that is, though this will hardly allows people affected to get by. And maybe most disheartening of all: this is already the second time the population voted no on this matter, 6 months prior to this vote.",
            "Veterans, elderly and disabled insurance (1925)\n\nCurrently, war veterans and disabled people get by either through charity, or their relatives taking care of them. In the case of the elderly, their only real option is the latter.\n\nAs such, and after World War 1, the Swiss government proposes this bill to insure those people by paying them a (somewhat) living wage for their conditions.",
            65.4,
            true
        ],
        [
            "Popular initiative to fight the economic crisis",
            [2, 3], [1, 4], [1, 0], [4, 3], [2, 6],
            [7, 5], [0, 2], [5, 1], [0, 4], [5, 0],
            20, 500, 0.73,
            "02.06.1935",
            `The bill passed... somehow? The opposing campaign used ruthless tactics, some experts even call this "the Swiss redscare", since the initiative's far-left defendant were portrayed as communists! But it passed, and will probably help relieve the Swiss population from the economic crash of 1929, which still affected Switzerland in 1935. In reality, it failed, garnering only 42.8% of the votes.`,
            "The bill is rejected, despite your best efforts. It didn't pass in our reality either, with only 42.8% of voters in favor of it. The economic crisis of the 1930s will thus hit the poorer populations most, as always, but they will survive.",
            "The crisis initiative (1935)\n\nAs the 1929 economic crash ravages Switzerland in the early 1930s, a left-leaning comittee wants the government to help out the population who is most suffering: poorer, working-class individuals and small businesses, that can barely, if at all, afford to live. The bill did not pass in real life, but maybe you can make the impossible happen.",
            42.8,
            true
        ],
        [
            "Romansch as a new national language bill",
            [2, 6], [4, 7], [6, 2], [3, 6], [7, 4],
            [0, 2], [2, 5], [7, 6], [0, 4], [6, 0],
            36, 2000, 1.2,
            "20.02.1938",
            "The bill passed! It's really not a surprise, as Romansch is a quite unique language to Switzerland, and somewhat of a national pride. Accepting it as a national language means official documents, communications and state presses publish everything in Romansch, preserving the language. In 1938, it got a whopping 91.6% of votes, making it one of the most accepted bill in Switzerland's history.",
            "The bill failed... somehow? It is really a wonder how it happened. Everyone from the far left to the far right were in favor of this bill. As such, Romansch will not get support from the state, and will slowly erode as German becomes dominant in the Grisons...",
            "Romansch as a new national language (1938)\n\nRomansch is an elaborate mix of German, Italian and native Celtic languages, spoken by 44'000 people out of the 4 million residents of Switzerland in 1938, and it is slowly disappearing. Recognizing it as a national language, what this bill proposes, would make it so official communications are translated in Romansch, and the language promoted, which would help preserve it.",
            91.6,
            true
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
            52.9,
            true
        ],
        [
            "New Civil Protection militia bill",
            [1, 2], [7, 3], [0, 6], [7, 2], [4, 1],
            [0, 3], [4, 2], [7, 1], [0, 3], [3, 1],
            35, 750, 0.83,
            "24.05.1959",
            "The bill passed! Congratulations! There will now be a division of the population, men deemed unfit for the army, that will actively work as part of a mandatory service to help the population in case of an emergency. This is a good thing, which was first refused in a vote in 1952, but which passed in 1959 with 62.3% of the votes!",
            "The bill failed. Like in 1952, the population did not see fit to put an alternative for the mandatory military service. At this point in time, the army stays the main helping hand for other first responders in case of an emergency or disaster. Here's to hoping a special service just for that won't be required in the near future.",
            "New Civil Protection militia (1959)\n\nWorld Wars and international nuclear threats take a toll on Switzerland's morale, and the government is thinking of creating a new militia, parallel to the army, to ensure nuclear protections are working and in the norms, as well as more generally aid the population if there ever were to be a natural catastrophe.",
            62.3,
            true
        ],
        [
            "Give women's the right to vote bill",
            [1, 6], [2, 3], [5, 7], [1, 4], [2, 5],
            [3, 7], [0, 5], [7, 1], [5, 3], [6, 0],
            35, 1000, 0.9,
            "07.02.1971",
            "The bill FINALLY passed. It's been since 1959; it took many convincing in the most rural cantons, and a lot of patience. But Switzerland finally joins the rest of Europe by allowing women to vote. The real vote saw 65.7% of ballots in favor of women's suffrage.",
            "Old habits tend to stick... Switzerland is not at its first attempt to implement women's suffrage, and this one isn't its last. For 12 years now the male population refuses to give women the right to vote. Alas, Switzerland is set to be the last western country to get there. Quite the achievement...",
            "Women's suffrage (1971)\n\nFirst tried and rejected by the population in 1959, women's suffrage isn't finding a place in Switzerland. Now that almost all European countries have adopted it, the federal government insists on pushing this bill to give women the right to vote. They hope the international context might push the nay-sayers in the right direction this time...",
            65.7,
            true
        ],
        [
            "Popular initiative against the military service",
            [6, 2], [5, 7], [1, 3], [7, 4], [2, 6],
            [5, 2], [1, 7], [0, 5], [3, 6], [5, 1],
            25, 500, 0.7,
            "26.11.1989",
            "The bill passed! That's quite the achievement. In reality, the vote failed with only 35.6% of ballots in favor of the revocation of mandatory military service for men. It is a sticking tradition of which the Swiss people are proud of, and which rarely, if even changes. But it changed. And from now on men won't be required to serve in the military!",
            "Unsurprisingly, the bill failed. The Swiss people are too proud to their army to vote against it. The initiative failed, as it did in real life with only 35.6% of votes.",
            "Initiative against mandatory military service (1989)\n\nWars are never fun, and the fact that Switzerland has a mandatory military service doesn't please the GSSA (Groupe pour une Suisse sans armee; Group for a military-free Switzerland). This year, they got enough signatures to try and ban the practice in Switzerland. This bill did not pass in real life, but maybe you can make the impossible happen.",
            35.6,
            true
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
            54.5,
            true
        ],
        [
            "Popular initiative to join the UN",
            [3, 7], [4, 6], [1, 5], [2, 0], [7, 3],
            [0, 1], [6, 4], [3, 7], [0, 4], [1, 3],
            29, 2000, 0.65,
            "03.03.2002",
            "The initiative passed! This is a victory for international community building! Now, Switzerland will collaborate more closely with the UN, have a siege there, and will be able to vote for the UN's decisions. The bill did pass in our world, garnering 54.6% of the votes!",
            "The bill failed; Switzerland won't be joining the UN for a few years at least. It will still act as a neutral ground for the UN to meet and deliberate, but won't take part in the debates, nor the decision process. Such is the price of political neutraliy, say the ones who were opposed to this adhesion.",
            "Initiative for Switzerland to join the UN (2002)\n\nIt's been years in the making, and the people will finally vote on it: Switzerland may join the UN if the vote passes! International collaboration is important, and Switzerland already has a central role in the UN's infrastructure (the UN Office is in Geneva). Thus, why not join, for good?",
            54.6,
            true
        ],
        [
            "Popular initiative against more secondary residences",
            [0, 8], [3, 2], [6, 4], [1, 0], [8, 2],
            [7, 1], [3, 4], [2, 1], [1, 8], [3, 5],
            16, 1000, 0.8,
            "11.03.2012",
            "The initiative passed! With that, constructing a new secondary residence, especially in the more rural parts of the country, will be much more complicated: either you live there, or don't construct anything. The bill did pass by a hair for real, garnering a mere 50.6% of the votes!",
            "The bill failed; for now, legislation on construction in the countryside won't change, and there won't be restrictions put in place if you want to build a secondary place of residence in Switzerland. This is to the detriment of the local population and the Swiss landscape, but investors and construction companies can keep making money.",
            "Initiative to prevent new secondary homes (2012)\n\nMany rich Swiss residents, as well as wealthy foreigners, take advantage of Switzerland's relatively lax laws to build secondary residences in the most beautiful parts of the country, even if they come there only 2 weeks every year. This initiative wants to change that, and prevent new secondary homes to be built in the countryside.",
            50.6,
            true
        ],
        [
            "Stop discrimination against sexual orientation bill",
            [8, 2], [2, 3], [0, 4], [4, 8], [0, 7],
            [3, 5], [8, 1], [4, 3], [1, 4], [8, 6],
            25, 1500, 0.91,
            "09.02.2020",
            "The initiative passed! Same-sex couples and people experiencing same-sex attraction will now be protected under the law against discrimination of all kinds. This is a important step towards a more equal society, and a clear victory for progressives. The law also passed in reality, with 63.1% of votes in favor.",
            "The bill failed; this is a clear disappointment for the people who spent time organizing and planning the campaign. For now, homosexual individuals won't be protected from discrimination, which unfortunately keeps them more vulnerable to homophobia.",
            "Stop discrimination based on sexual orientation bill (2020)\n\nSwitzerland protects people against racial prejudice, whether someone discriminates or incites to racial hatred. This law proposes to do the same for people experiencing same-sex attraction. A step in the right direction for Switzerland in 2020. Now to see what the people thinks.",
            63.1,
            true
        ],
        [
            "Same-sex marriage and adoption bill",
            [0, 6], [2, 7], [4, 8], [1, 0], [6, 7],
            [4, 5], [8, 2], [7, 6], [3, 1], [7, 4],
            27, 2000, 0.8,
            "26.09.2021",
            "The initiative passed! Same-sex couples will now be able to marry with the same legal status as heterosexual couples; this also gives them access to adoption and artificial insemination, which allows them to have children, and for those children to be recognized under the law. This is a resounding victory for progress, and one which garnered 64.1% of positive votes in our reality.",
            "The bill failed; this is heart-breaking. Same-sex couples will not be able to marry, nor adopt or have children recognized, like is the case for heterosexual couples. Because this referendum was victorious and the law failed, the government won't be able to make a new law for same-sex couples for at least 5 years to a decade! This really is a shame...",
            "Same-sex marriage and adoption (2021)\n\nSwitzerland still doesn't allow for same-sex couples to marry and have children. Currently, a union is possible, but really only helps for succession rights. This bill not only proposes to make marriage fully legal for same-sex couples, but also allows them to have children, and for those children to be recognized under the law.",
            64.1,
            true
        ],
        [
            "Reform of the insurance for the elderly",
            [1, 2], [4, 6], [8, 0], [3, 5], [4, 2],
            [8, 1], [0, 6], [0, 2], [5, 6], [0, 8],
            85, 1000, 0.71,
            "25.09.2022",
            "The initiative failed! This is a victory! It means women can still retire at 64 without reprecussion on their retirement fund. This also means there won't be a flexible limit to retirement to incetivize people to retire at 70. This is a social victory for the Swiss people, which unfortunately passed in our reality with a measly 50.5% of the votes.",
            "The bill passed; this is a clear step backwards. Now, women will have to retire at 65, and there will an incentivization for poorer people to work for up to 70 years old. The bill also passed for real, with a mere 50.5% favorable votes, which is frustrating to say the least.",
            "Elderly's insurance reform (2022)\n\nDespite record profits, the government fears there may not be enough to provide for all the elderly in the near future. The solution? Increase women's retirement age from 64 to 65, and implement a system where the later you retire (up to 70), the better your fund will be, incentivizing people to retire later.",
            50.5,
            false
        ]
    ],
    french: [
        [                                          // FRENCH
            "Rachat des chemins de fer fédéraux",
            [6, 4], [3, 1], [0, 6], [2, 1], [3, 4],
            [1, 6], [2, 3], [3, 1], [6, 4], [1, 0],
            40,
            1500,
            0.8,
            "20.02.1898",
            "La loi est passée!\n\nLes chemins de fer privés seront rachetés par l'état, et les CFF seront tout prochainement fondés par la Confédération. La population pourra profiter de rail moins chers, plus fiables et, surtout, unis à l'échelle du pays. En 1898, la loi a obtenu 67.9% des votes.",
            "La loi est rejetée.\n\nLes chemins de fers restent dans les mains des privés; le gouvernement n'est pas autorisé à les racheter pour proposer un système centralisé. Pas de CFF non plus. Ce rachat n'en n'est pas à son premier refus: déjà en 1891, 68.9% de la population votante refusait un tel projet!",
            "Rachat des chemins de fer (1898)\n\nCette loi vise à autoriser le conseil fédéral à racheter les compagnies privées de chemin de fer afin de proposer un système centralisé.\n\nSi la loi passe, les CFF (Chemin de fer fédéraux) seront créées en 1902 pour gérer les chemins de fers dans tous le pays.",
            67.9,
            true
        ],
        [
            "Assurance maladie et accidents",
            [2, 3], [6, 1], [2, 0], [1, 3], [4, 5],
            [0, 3], [2, 4], [3, 1], [6, 4], [3, 6],
            25, 1500, 0.71,
            "04.02.1912",
            "La loi est passée!\n\nEn attendant une assurance étatique, l'état instaure déjà des régulations sur les prix et pratiques des assurances privées. Une petite victoire pour 1912, mais une fondation importante pour la loi sur l'assurance maladie de 1994! En 1912, la loi passe à 54.4% de votes positifs.",
            "La loi est rejetée.\n\nLes assurances restent pour le moment une affaire de personnes aisées. La faute au cartel des assurances, très puissant, et son lobbyism auprès de l'état et de la population...",
            "Assurance maladie et accident (1912)\n\nQue se passe-t-il si vous êtes malade ou avez un accident? En 1912, vous devez tout payer de votre poche, sauf si vous souscrivez à une assurance privée extrêmement coûteuse.\n\nCette loi vise à assurer la population, même si les assurances resteront privées.",
            54.4,
            true
        ],
        [
            "Assurance vieillesse, handicaps et survivants",
            [6, 3], [3, 4], [1, 3], [4, 1], [2, 6],
            [7, 1], [1, 4], [0, 6], [4, 3], [1, 6],
            32, 1500, 0.95,
            "6.12.1925",
            "La loi est passée!\n\nLes personnes retraitées, en situation de handicap et les vétérans auront une assurance! Cette loi deviendra la seule source de revenu étatique pour les retraites. En 1925, la loi est acceptée par 65.4% de la population.",
            "La loi est rejetée.\n\nPas d'assurance pour le moment... En-dehors des charités, il est difficile de vivre quand sa situation de vie est compliquée par l'âge, un handicap ou une guerre. Ce n'est même pas la première fois qu'un tel projet est rejeté: ce fut déjà le cas 6 mois auparavant, en juin 1925.",
            "Assurance vieilles, handicaps et survivants (1925)\n\nEn 1925, les retraités, les vétérans et les personnes en situation de handicap peuvent soit profiter de la charité, ou vivre au frais de leurs familles. Souvent, leur seule option est la seconde.\n\nDès lors, après la Première guerre mondiale, le gouvernement suisse propose à ces populations une solde leur permettant (plus ou moins) de vivre.",
            65.4,
            true
        ],
        [
            "Initiative contre la crise de 1929",
            [2, 3], [1, 4], [1, 0], [4, 3], [2, 6],
            [7, 5], [0, 2], [5, 1], [0, 4], [5, 0],
            20, 500, 0.73,
            "02.06.1935",
            `La loi est passée???\n\nMalgré une campagne adverse virulente considérée comme un redscare hélvétique, la loi est passée!!! Elle aidera idéalement les populations les plus à risques lors de la crise économique des années 1930, ce qui est une excellent nouvelle. En réalité, la loi est rejetée 42.8% des voix...`,
            "La loi est rejetée.\n\nComme dans notre réalité, où la loi est seulement acceptée à 42.8%, la loi est rejetté. La crise économique sera dure à vivre pour les plus pauvres, ce qui ne change pas de d'habitude... Mais les classes défavorisées survivront, comme toujours.",
            "Initiative de crise (1935)\n\nAlors que le crash de 1929 cause une crise économique en Suisse dans les années 1930, un comité de gauche cherche à aider les populations à risque: la classe ouvrières et les petits commerçants, qui n'ont plus de quoi vivre.\n\nLa loi a échoué en réalité, mais peut-être que vous parviendrez à réaliser l'impossible...!",
            42.8,
            true
        ],
        [
            "Romanche, quatrième langue nationale",
            [2, 6], [4, 7], [6, 2], [3, 6], [7, 4],
            [0, 2], [2, 5], [7, 6], [0, 4], [6, 0],
            36, 2000, 1.2,
            "20.02.1938",
            "La loi est passée!\n\nSans surprise, puisque le Romanche fait la fierté de la Suisse. L'accepter comme langue nationale veut dire que les documents, communications et la presse étatiques seront publiés en Romanche, ce qui aide à préserver la langue. En 1938, la loi ramasse 91.6% des votes, en faisant un des projet ayant reçu le plus de OUI de tous les temps.",
            "La loi est rejetée???\n\nDifficile de le croire... Tout le monde, à gauche comme à droite, était en faveur de cette loi. Sans reconnaissance officielle, le Romanche va progressivement disparaître au profit de l'Allemand dans le canton des Grisons...",
            "Le Romanche comme langue nationale (1938)\n\nLe Romanche est un mélange élaboré d'Allemand, d'Italient et de langues celtes, parlé par 44'000 des 4 millions de suisses en 1938... et la langue est en voie d'extinction.\n\nCette loi propose de le reconnaître comme langue nationale, ce qui aiderait sa promotion et sa préservation.",
            91.6,
            true
        ],
        [
            "Loi fédérale sur la concurrence déloyale",
            [3, 1], [0, 2], [4, 6], [3, 7], [7, 0],
            [1, 2], [6, 1], [4, 1], [1, 4], [3, 6],
            30, 1000, 0.9,
            "29.10.1944",
            "La loi est passée!\n\nDepuis les débuts du capitalisme, la concurrence déloyale est un problème pour un petit pays comme la Suisse. Ainsi, en protéger la population et les commerces est une bonne chose! En 1944, la loi a failli ne pas passer, récoltant seulement 52.9% des voix.",
            "La loi est rejetée.\n\nLes groupes d'intérêt pour les milieux économiques et les cartels de l'industrie ont fait des pieds et des mains pour que la loi ne passent pas. Pour le moment, il n'y aura donc pas de loi sur la concurrence déloyale...",
            "Loi sur la concurrence déloyale (1944)\n\nLa concurrence déloyale est généralement décrite comme un avantage démesuré entre 2 partis économiques.\n\nLa Suisse est un pays et n'a pas envie que d'autres puissances économiques se mêlent de ses affaires: ainsi, cette loi vise à protéger la Suisse et ses petites et moyennes entreprises faces aux multinationales.",
            52.9,
            true
        ],
        [
            "Loi sur la nouvelle Protection Civile",
            [1, 2], [7, 3], [0, 6], [7, 2], [4, 1],
            [0, 3], [4, 2], [7, 1], [0, 3], [3, 1],
            35, 750, 0.83,
            "24.05.1959",
            "La loi est passée!\n\nUne alternative au service militaire est crée, mettant au service de la population les jeunes hommes inaptes à l'armée. Si le projet a d'abord été rejeté en 1952, il est effectivement passé en 1959 avec 62.3% des suffrages!",
            "La loi est rejetée.\n\nComme en 1952, la population n'a pas jugé utile cette alternative au service militaire obligatoire. L'armée reste pour le moment le seul groupe appelé pour soutenir l'aide à la population fournie par la police, les pompiers et le services sanitaires en cas de catastrophe.",
            "Nouvelle Protection Civile (1959)\n\nLes deux Guerres mondiales et les menaces nucléaires font peur à la Suisse.\n\nAussi le gouvernement pense a créer une nouvelle milice parrallèle à l'armée pour assurer le maintien et contrôle des abris nucléaires, ainsi qu'aider la population en cas de catasrophe naturelle, sanitaire ou sociale...",
            62.3,
            true
        ],
        [
            "Introduction du suffrage féminin",
            [1, 6], [2, 3], [5, 7], [1, 4], [2, 5],
            [3, 7], [0, 5], [7, 1], [5, 3], [6, 0],
            35, 1000, 0.9,
            "07.02.1971",
            "La loi est ENFIN passée!\n\nÇa fait depuis 1959; il aura fallu beaucoup de travail afin de convaincre les cantons ruraux, mais la Suisse rejoint enfin la quasi-totalité des pays européen en donnant aux femmes le droit de voter. La votation a vu 65.7% des voix en faveur du suffrage féminin en 1971.",
            "La loi est rejetée...\n\nCe n'est pas la première fois que la Suisse essaie de faire passer le suffrage féminin; en 1959 déjà la population masculine a rejeté d'octroyer le droit de vote aux femmes. À ce rythme, la Suisse sera le dernier pays européen à franchir ce pas... Quel exploit...",
            "Le suffrage féminin (1971)\n\nDéjà rejeté par la population en 1959, le suffrage féminin ne trouve pas sa place en Suisse.\n\nAprès son adoption dans la majorité des pays d'Europe, le gouvernement insiste pour faire passer cette loi, en comptant sur la situation internationale pour convaincre les sceptiques...",
            65.7,
            true
        ],
        [
            "Initiative contre le service militaire obligatoire",
            [6, 2], [5, 7], [1, 3], [7, 4], [2, 6],
            [5, 2], [1, 7], [0, 5], [3, 6], [5, 1],
            25, 500, 0.7,
            "26.11.1989",
            "La loi est passée???\n\nQuel exploit! En réalité, la loi a échoué avec seuelement 35.6% OUI. Le population suisse est généralement fière de son armée et refusent de la changer. Mais pas cette fois. Et grâce à vous, les hommes ne seront plus obligés de faire l'armée!",
            "La loi est rejetée.\n\nLa Suisse est trop fière de son armée pour voter en sa défaveur. L'initiative du GSSA a échoué, comme dans la vraie vie où elle a seulement récolté 35.6% de votes positifs.",
            "Initiative contre le service militaire obligatoire (1989)\n\nLes guerres ne sont jamais amusantes, et le service militaires obligatoire suisse déplait au GSSA (Groupe pour une Suisse sans armee).\n\nCette année, assez de signatures ont été récoltées pour tenter de l'interdire. La loi a échoué en réalité, mais peut-être que vous parviendrez à réaliser l'impossible...!",
            35.6,
            true
        ],
        [
            "Initiative contre de nouvelles centrales nucléaires",
            [5, 2], [3, 6], [4, 1], [0, 2], [5, 3],
            [4, 0], [1, 6], [7, 3], [2, 4], [7, 5],
            20, 1000, 0.85,
            "23.09.1990",
            "La loi est passée!\n\nC'est un succès pour les écologistes! Maintenant, la Suisse va s'atteler à changer ses apports en énergie, idéalement pour des options plus respectueuses de l'environnement. La loi est passée dans notre réalité également, avec 54.5% de OUI!",
            "La loi est rejetée.\n\nLa loi est passée, en réalité, mais ici la Suisse a toujours le droit de créer de nouvelles centrales nucléaires pour garder son indépendance énergétique. Le nucléaire suisse a de beaux jours devant lui, pour le moment...!",
            "Initiative contre le nucléaires (1990)\n\nAprès Chernobyl, la réputation du nucléaire est de plus en plus mauvaise, surtout concernant ses risques, et les gens ont peur.\n\nAinsi, cette initiative, accompagnée de deux autres, veut forcer le gouvernement à quitter le nucléaire, en interdisant la construction de nouvelles centrales.",
            54.5,
            true
        ],
        [
            "Initiative pour l'adhésion à l'ONU",
            [3, 7], [4, 6], [1, 5], [2, 0], [7, 3],
            [0, 1], [6, 4], [3, 7], [0, 4], [1, 3],
            29, 2000, 0.65,
            "03.03.2002",
            "La loi est passée!\n\nL'internationalisme est bien vivant en Suisse! À présent, la Suisse collaborera avec l'ONU, y siégera, et pourra voter avec le reste du monde sur les propositions des Nations Unies. La loi est réellement passée également, avec 54.6% de votes en sa faveur!",
            "La loi est rejetée.\n\nLa Suisse ne rejoindra pas l'ONU, pour le moment. Elle continuera d'aider l'ONU, notamment en y accueillant son siège à Genève, mais ne prendra pas part aux débats, ni aux décisions. Le prix de la neutralité, diront les opposants. Cependant, la loi est réellement passée avec 54.6% OUI.",
            "Initiative pour l'adhésion à l'ONU (2002)\n\nAprès des années de discussions et débat, la population va trancher: la Suisse pourrait rejoindre l'ONU!\n\nCollaborer à l'international est important, et la Suisse est déjà centrale au fonctionnement de l'ONU (qui siège à Genève). Pourquoi ne pas rendre cela officiel?",
            54.6,
            true
        ],
        [
            "Initiative contre les résidences secondaires",
            [0, 8], [3, 2], [6, 4], [1, 0], [8, 2],
            [7, 1], [3, 4], [2, 1], [1, 8], [3, 5],
            16, 1000, 0.8,
            "11.03.2012",
            "La loi est passée!\n\nDès lors, construite de nouvelles résidences secondaires sera plus difficile, surtout en régions rurales et alpines. La loi est tout juste passée en Suisse, avec 50.6% des voix en sa faveur!",
            "La loi est rejetée.\n\nPour le moment, il n'y aura pas de nouveauté ou de restrictions particulière concernant les résidences secondaires en zones rurales. C'est au détriment de la population et des paysages suisses, mais les riches pourront continuer à construire! La loi a failli ne pas passer, à seulement 50.6% de OUI.",
            "Initiative contre les résidences secondaires (2012)\n\nBeaucoup de riches, suisses ou étrangers, profitent des lois laxistes de la Suisse pour construire des résidences secondaires dans les plus belles régions du pays, même pour y habiter seulement 2 semaines par an.\n\nCette initiative vise à combattre cela, et interdire la construction de nouvelles résidences secondaires en Suisse.",
            50.6,
            true
        ],
        [
            "Stop à la discrimination sexuelle",
            [8, 2], [2, 3], [0, 4], [4, 8], [0, 7],
            [3, 5], [8, 1], [4, 3], [1, 4], [8, 6],
            25, 1500, 0.91,
            "09.02.2020",
            "La loi est passée!\n\nLes personnes homosexuelles seront désormais protégées de toute forme de discrimination en raison de leur orientation sexuelle. C'est une étape importante pour avoir une société plus inclusive et égalitaire. La loi est réellement passée également, avec 63.1% de votes positifs.",
            "La loi est rejetée.\n\nQuelle déception pour les communautés LGBTQIA+. Pour le moment, les personnes homosexuelles ne seront pas protégées des discriminations, les rendant juridiquement plus vulnérables à l'homophobie. La loi est cependant passée dans notre réalité avec 63.1% de OUI.",
            "Stop à la discrimination sexuelle (2020)\n\nLa Suisse protège juridiquement sa population en cas de discrimination raciale.\n\nCette loi propose de faire la même chose pour les personnes bisxuelles et homosexuelles. Un pas dans la bonne direction pour la Suisse en 2020. À voir ce qu'en pense le peuple.",
            63.1,
            true
        ],
        [
            "Mariage (et adoption) pour toutes et tous",
            [0, 6], [2, 7], [4, 8], [1, 0], [6, 7],
            [4, 5], [8, 2], [7, 6], [3, 1], [7, 4],
            27, 2000, 0.8,
            "26.09.2021",
            "La loi est passée!\n\nLes couples de même sexe pourront se marier, comme c'était le cas déjà pour les couples hétéros; cela leur ouvre aussi la porte à l'adoption et l'insémination artificielle, ce qui leur permet d'avoir des enfants qui soient reconnus par l'État. C'est un immense succès pour le progrès social, qui a également trouvé 64.1% de OUI dans notre réalité.",
            "La loi est rejetée.\n\nQuelle tristesse... Ni le mariage, ni l'adoption, ni la reconnaissance des enfants ne seront accessibles pour les personnes homosexuelles... Cela prendra des années avant de pouvoir réétablir un projet de loi qui satisfasse la population. En réalité, la loi a été acceptée à 64.1%.",
            "Same-sex marriage and adoption (2021)\n\nLa Suisse ne permet toujours pas aux couples homosexuels de se marier et d'avoir des enfants. Pour l'instant, un PACS (pacte civile de solidarité) est possible, mais n'aide vraiment qu'en cas de décès.\n\nCette loi propose de corriger la situation, autorisant mariage, adoption, insémination artificielle et reconnaissance des enfants pour les couples homosexuels!",
            64.1,
            true
        ],
        [
            "Réforme de l'AVS (AVS21)",
            [1, 2], [4, 6], [8, 0], [3, 5], [4, 2],
            [8, 1], [0, 6], [0, 2], [5, 6], [0, 8],
            85, 1000, 0.71,
            "25.09.2022",
            "La loi est passée!\n\nVictoire! La retraite des femmes reste à 64 ans, et il n'y aura pas de limite flexible à la retraite encourageant à la prendre à 70 ans. C'est une victoire sociale claire pour la Suisse, qui ne s'est malheureusement pas passées en Suisse: la loi a été acceptée à seulement 50.5% des voix.",
            "La loi est rejetée.\n\nUn immense pas en arrière. Maintenant les femmes prendront leur retraite à 65 ans, et un système d'encouragement à la retraite tardive sera mise en place. La loi est passée chez nous également, même si elle n'a remporté que 50.5% des voix.",
            "Réforme AVS21 (2022)\n\nMalgré des profits records, le gouvernement a peur de ne pas avoir assez à donner aux retraités pour les années à venir.\n\nLa solution? Augmenter l'âge de la retraite des femmes à 65 ans, et mettre en place un système de retraites flexibles (de 60 à 70 ans), où plus l'âge est élevé, plus la rente le sera, afin d'encourager les retraites tardives.",
            50.5,
            false
        ]
    ]
};