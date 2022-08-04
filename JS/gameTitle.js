/* All the function necessary to make the title screen work */

function myTitleScreen() {                      /* Main function to display the title screen */
    const backgroundImage = add([                   // adding background
        scale(7),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        "Title_BG"
    ]);

    const monTitre = add([                          // adding the animated title
        scale(7),
        origin("center"),
        pos(width() / 2, 98),
        sprite("title", { anim: "animated_BG" }),
        "title_page"
    ]);

    const creditsBtn = add([                        // adding a credits button
        scale(5),
        origin("center"),
        pos(width() / 2, 525),
        sprite("credits"),
        area(),
        "title_page"
    ]);

    const playBtn = add([                           // adding a play button
        scale(5),
        origin("center"),
        pos(width() / 2, 350),
        sprite("play_now"),
        area(),
        "title_page"
    ]);

    playBtn.onClick(() => {                         // onClick the play button
        destroyAll("title_page");                       // remove the title and buttons

        levelSelect();                                  // load level selection screen
    });

    creditsBtn.onClick(() => {                      // onClick the credits button
        destroyAll("title_page");                       // remove the title and buttons

        const creditsTitle = add([                      // add a title for the credits' text
            origin("center"),
            pos(width() / 2, 75),
            text(`Vote Now!`, {
                size: 80,
                width: 800,
                font: "sinko",
            }),
            "credits_page"
        ]);

        const creditsTxt = add([                        // add the credits as a text
            origin("center"),
            pos(width() / 2, 320),
            text(`A game thought, designed, and developped by Joel Rimaz\n\nUnder the supervision of Isaac Pante\n\nFor the spring 2022 course "2D Video Games"\n\nUniversity of Lausanne\n\nAugust 2022`, {
                size: 30,
                width: 800,
                font: "sinko",
            }),
            "credits_page"
        ]);

        const backBtnCredits = add([                    // add a button to go back
            scale(5),
            origin("center"),
            pos(width() / 2, 600),
            sprite("back"),
            area(),
            "credits_page"
        ]);

        backBtnCredits.onClick(() => {                  // onClick the back button
            destroyAll("credits_page");                     // remove everything
            destroyAll("Title_BG");

            myTitleScreen();                                // reload the title screen
        });
    })
}

function levelSelect() {                        /* Function to display the selection menu */
    destroyAll("title_page");                       // remove the title and buttons

    let dist = 0;                                   // a useful variable

    for (let i = 0; i < scenarios.length; i++) {    // a for loop to display all the available scenarios. Each iteration we:
        add([                                           // add a text with the name of one of the campaigns
            color(255, 255, 255, 1),                    // setting it at a regular 50px distance from the preceding text
            origin("center"),
            pos(width() / 2, 50 + dist),
            text(scenarios[i][0], {
                size: 20,
                width: 800,
                font: "sinko",
            }),
            area(),
            "txt_lvl_select",
            "lvl" + i
        ]);

        dist += 50;                                     // increment the dist variable

        onClick("lvl" + i, (x) => {                     // onClick each created text
            findStartingLevel(x.text);                      // launch a function to setup the game
        })
    }

    const backBtnLvlSelect = add([                  // add a button to go back to the title screen
        scale(5),
        origin("center"),
        pos(width() / 2, 600),
        sprite("back"),
        area(),
        "txt_lvl_select"
    ]);

    backBtnLvlSelect.onClick(() => {                // onClick the back button
        destroyAll("txt_lvl_select");                   // remove everything
        destroyAll("Title_BG");

        myTitleScreen();                                // reload the title screen
    });
}

function findStartingLevel(lvlName) {       /* Function to launch the correct level based on the player's choice */
    destroyAll("txt_lvl_select");               // remove everything
    destroyAll("Title_BG");

    let scenarID;                               // useful variables
    let startTurn = 1;

    scenarios.forEach((e, i) => {               // forEach scenarios:
        if (e[0] == lvlName) scenarID = i;          // if the choice of the player corresponds to an entry in the Array, store the index
    });

    gameSetup(                                  // calling the function gameSetup with the relevant information
        scenarID,
        startTurn,
        scenarios[scenarID][11],
        scenarios[scenarID][12], 
        scenarios[scenarID][13],
        scenarios[scenarID][14]
    );
}

myTitleScreen();    // calling the title screen function to start the game