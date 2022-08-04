function levelSelect() {
    destroyAll("title_page");

    let levelTxt;
    let dist = 0;
    let idLvl = 0;

    scenarios.forEach((e) => {
        levelTxt = add([
            color(255, 255, 255, 1),
            origin("center"),
            pos(width() / 2, 50 + dist),
            text(e[0], {
                size: 20,
                width: 800,
                font: "sinko",
            }),
            area(),
            "txt_lvl_select",
            "lvl" + idLvl
        ]);
        
        dist += 50;
        idLvl++;

        levelTxt.onClick((x) => {
            console.log(x)
        });
    });

    const backBtnLvlSelect = add([
        scale(5),
        origin("center"),
        pos(width() / 2, 600),
        sprite("back"),
        area(),
        "txt_lvl_select"
    ]);

    //go back to the menu
    backBtnLvlSelect.onClick(() => {
        destroyAll("txt_lvl_select");
        destroy("Title_BG");
        myTitleScreen();
    });
}

function myTitleScreen() {
    // add background
    const backgroundImage = add([
        scale(7),
        pos(0, 0),
        sprite("BG_title", { anim: "animated_BG" }),
        "Title_BG"
    ]);

    // add the title
    const monTitre = add([
        scale(7),
        origin("center"),
        pos(width() / 2, 98),
        sprite("title", { anim: "animated_BG" }),
        "title_page"
    ]);

    // add a play button
    const playBtn = add([
        scale(5),
        origin("center"),
        pos(width() / 2, 350),
        sprite("play_now"),
        area(),
        "title_page"
    ]);

    // load level selection screen
    playBtn.onClick(() => {
        destroyAll("title_page");
        levelSelect();
    });

    // add a credits button
    const creditsBtn = add([
        scale(5),
        origin("center"),
        pos(width() / 2, 525),
        sprite("credits"),
        area(),
        "title_page"
    ]);

    //display the credits
    creditsBtn.onClick(() => {
        destroyAll("title_page");
        const creditsTitle = add([
            origin("center"),
            pos(width() / 2, 75),
            text(`Vote Now!`, {
                size: 80,
                width: 800,
                font: "sinko",
            }),
            "credits_page"
        ]);

        const creditsTxt = add([
            origin("center"),
            pos(width() / 2, 320),
            text(`A game thought, designed, and developped by Joel Rimaz\n\nUnder the supervision of Isaac Pante\n\nFor the spring 2022 course "2D Video Games"\n\nUniversity of Lausanne\n\nAugust 2022`, {
                size: 30,
                width: 800,
                font: "sinko",
            }),
            "credits_page"
        ]);

        const backBtnCredits = add([
            scale(5),
            origin("center"),
            pos(width() / 2, 600),
            sprite("back"),
            area(),
            "credits_page"
        ]);

        //go back to the menu
        backBtnCredits.onClick(() => {
            destroyAll("credits_page");
            destroy("Title_BG");
            myTitleScreen();
        });
    })
}

myTitleScreen();