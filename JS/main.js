/* MAIN.JS loads up Kaboom, the sounds, and sets the sprites to be used down the line*/

let heightWindow = window.innerHeight;
let multiplyer = Math.floor(heightWindow / 98);

kaboom({                                                /* Kaboom function */
    width: 124 * multiplyer,
    height: 98 * multiplyer,
    clearColor: [0, 0, 0],
    font: "sinko"
});

loadRoot("Images/Animated_BG/");
loadSpriteAtlas("Affiches_mur_sheet.png", {      // Sprit Atlas for the flyers on the street walls
    "event_affiche_day_nice": {                             // option #1: "day_nice"
        "x": 0,
        "y": 0,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_affiche_day_rain": {                          // option #2: "day_rain"
        "x": 0,
        "y": 42,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_affiche_dawn_nice": {                          // option #3: "dawn_nice"
        "x": 0,
        "y": 84,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_affiche_dawn_rain": {                          // option #4: "dawn_rain"
        "x": 0,
        "y": 126,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_affiche_dusk_nice": {                         // option #5: "dusk_nice"
        "x": 0,
        "y": 168,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_affiche_dusk_rain": {                         // option #6: "dusk_rain"
        "x": 0,
        "y": 210,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    },
});

loadSpriteAtlas("Marche_sheet.png", {            // Sprite Atlas for the markets
    "event_marche_day_nice": {                              // option #1: "day_nice"
        "x": 0,
        "y": 0,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_marche_day_rain": {                           // option #2: "day_rain"
        "x": 0,
        "y": 42,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_marche_dawn_nice": {                            // option #3: "dawn_nice"
        "x": 0,
        "y": 84,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_marche_dawn_rain": {                            // option #4: "dawn_rain"
        "x": 0,
        "y": 126,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_marche_dusk_nice": {                            // option #5: "dusk_nice"
        "x": 0,
        "y": 168,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_marche_dusk_rain": {                            // option #6: "dusk_rain"
        "x": 0,
        "y": 210,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    },
});

loadSpriteAtlas("Coupole_sheet.png", {           // Sprite Atlas for protests
    "event_coupole_day_nice": {                             // option #1: "day_nice"
        "x": 0,
        "y": 0,
        "width": 992,
        "height": 42,
        "sliceX": 8,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 7,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_coupole_day_rain": {                          // option #2: "day_rain"
        "x": 0,
        "y": 42,
        "width": 992,
        "height": 42,
        "sliceX": 8,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 7,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_coupole_dawn_nice": {                           // option #3: "dawn_nice"
        "x": 0,
        "y": 84,
        "width": 992,
        "height": 42,
        "sliceX": 8,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 7,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_coupole_dawn_rain": {                           // option #4: "dawn_rain"
        "x": 0,
        "y": 126,
        "width": 992,
        "height": 42,
        "sliceX": 8,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 7,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_coupole_dusk_nice": {                           // option #5: "dusk_nice"
        "x": 0,
        "y": 168,
        "width": 992,
        "height": 42,
        "sliceX": 8,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 7,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_coupole_dusk_rain": {                           // option #6: "dusk_rain"
        "x": 0,
        "y": 210,
        "width": 992,
        "height": 42,
        "sliceX": 8,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 7,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    },
});

loadSpriteAtlas("Poste_sheet.png", {         // Sprite Atlas for the post office
    "event_poste_day_nice": {                           // option #1: "day_nice"
        "x": 0,
        "y": 0,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_poste_day_rain": {                        // option #2: "day_rain"
        "x": 0,
        "y": 42,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_poste_dawn_nice": {                         // option #3: "dawn_nice"
        "x": 0,
        "y": 84,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_poste_dawn_rain": {                         // option #4: "dawn_rain"
        "x": 0,
        "y": 126,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_poste_dusk_nice": {                         // option #5: "dusk_nice"
        "x": 0,
        "y": 168,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_poste_dusk_rain": {                         // option #6: "dusk_rain"
        "x": 0,
        "y": 210,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    },
});

loadSpriteAtlas("Journal_sheet.png", {           // Sprite Atlas for the journal
    "event_journal_day_nice": {                             // option #1: "day_nice"
        "x": 0,
        "y": 0,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_journal_day_rain": {                          // option #2: "day_rain"
        "x": 0,
        "y": 42,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_journal_dawn_nice": {                           // option #3: "dawn_nice"
        "x": 0,
        "y": 84,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_journal_dawn_rain": {                           // option #4: "dawn_rain"
        "x": 0,
        "y": 126,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_journal_dusk_nice": {                           // option #5: "dusk_nice"
        "x": 0,
        "y": 168,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_journal_dusk_rain": {                           // option #6: "dusk_rain"
        "x": 0,
        "y": 210,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    },
});

loadSpriteAtlas("Train_sheet_day.png", {         // Sprite Atlas #1 for the train
    "event_train_day_nice": {                               // option #1: "day_nice"
        "x": 0,
        "y": 0,
        "width": 1488,
        "height": 504,
        "sliceX": 12,
        "sliceY": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 142,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_train_day_rain": {                            // option #2: "day_rain"
        "x": 1488,
        "y": 0,
        "width": 1488,
        "height": 504,
        "sliceX": 12,
        "sliceY": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 142,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }
});

loadSpriteAtlas("Train_sheet_dawn.png", {        // Sprite Atlas #2 for the train
    "event_train_dawn_nice": {                              // option #3: "dawn_nice"
        "x": 0,
        "y": 0,
        "width": 1488,
        "height": 504,
        "sliceX": 12,
        "sliceY": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 142,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_train_dawn_rain": {                           // option #4: "dawn_rain"
        "x": 1488,
        "y": 0,
        "width": 1488,
        "height": 504,
        "sliceX": 12,
        "sliceY": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 142,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }
});

loadSpriteAtlas("Train_sheet_dusk.png", {        // Sprite Atlas #3 for the train
    "event_train_dusk_nice": {                              // option #5: "dusk_nice"
        "x": 0,
        "y": 0,
        "width": 1488,
        "height": 504,
        "sliceX": 12,
        "sliceY": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 142,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_train_dusk_rain": {                           // option #6: "dusk_rain"
        "x": 1488,
        "y": 0,
        "width": 1488,
        "height": 504,
        "sliceX": 12,
        "sliceY": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 142,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }
});

loadSpriteAtlas("Radio_sheet.png", {     // Sprite Atlas for the radio
    "event_radio_day_nice": {                       // option #1: "day_nice"
        "x": 0,
        "y": 0,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_radio_day_rain": {                    // option #2: "day_rain"
        "x": 0,
        "y": 42,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_radio_dawn_nice": {                   // option #3: "dawn_nice"
        "x": 0,
        "y": 84,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_radio_dawn_rain": {                   // option #4: "dawn_rain"
        "x": 0,
        "y": 126,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_radio_dusk_nice": {                   // option #5: "dusk_nice"
        "x": 0,
        "y": 168,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_radio_dusk_rain": {                   // option #6: "dusk_rain"
        "x": 0,
        "y": 210,
        "width": 1612,
        "height": 42,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    },
});

loadSpriteAtlas("AG_sheet.png", {    // Sprite Atlas for sponsoring
    "event_ag_day_nice": {                      // option #1: "day_nice"
        "x": 0,
        "y": 0,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 10,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_ag_day_rain": {                   // option #2: "day_rain"
        "x": 0,
        "y": 42,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 10,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_ag_dawn_nice": {                  // option #3: "dawn_nice"
        "x": 0,
        "y": 84,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 10,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_ag_dawn_rain": {                  // option #4: "dawn_rain"
        "x": 0,
        "y": 126,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 10,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_ag_dusk_nice": {                  // option #5: "dusk_nice"
        "x": 0,
        "y": 168,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 10,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_ag_dusk_rain": {                  // option #6: "dusk_rain"
        "x": 0,
        "y": 210,
        "width": 1488,
        "height": 42,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 10,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    },
});

loadSpriteAtlas("computer_sprite_sheet.png", {    // Sprite Atlas for sponsoring
    "event_socials_day_nice": {                      // option #1: "day_nice"
        "x": 0,
        "y": 0,
        "width": 1736,
        "height": 42,
        "sliceX": 14,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 13,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_socials_day_rain": {                   // option #2: "day_rain"
        "x": 0,
        "y": 42,
        "width": 1736,
        "height": 42,
        "sliceX": 14,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 13,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_socials_dawn_nice": {                  // option #3: "dawn_nice"
        "x": 0,
        "y": 84,
        "width": 1736,
        "height": 42,
        "sliceX": 14,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 13,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_socials_dawn_rain": {                  // option #4: "dawn_rain"
        "x": 0,
        "y": 126,
        "width": 1736,
        "height": 42,
        "sliceX": 14,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 13,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_socials_dusk_nice": {                  // option #5: "dusk_nice"
        "x": 0,
        "y": 168,
        "width": 1736,
        "height": 42,
        "sliceX": 14,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 13,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }, "event_socials_dusk_rain": {                  // option #6: "dusk_rain"
        "x": 0,
        "y": 210,
        "width": 1736,
        "height": 42,
        "sliceX": 14,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 13,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    },
});

loadSpriteAtlas("BG_Title.png", {    // Sprite Atlas for the main menu's background
    "BG_title": {
        "x": 0,
        "y": 0,
        "width": 1488,
        "height": 98,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "loop": true
            },
            "idle": 0
        }
    }
});

loadRoot("Images/Effects_Texts/");
loadSpriteAtlas("Effects_Sheet.png", {       // Sprite Atlas for the events' effects
    "score_train_ok": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    }, "score_marche_ok": {                                   // effect for the market
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    }, "score_ag_ok": {                                       // effect for the fundraising
        "x": 0,
        "y": 42 * 2,
        "width": 124,
        "height": 42
    }, "score_journal_ok": {                                  // effect for the journal
        "x": 0,
        "y": 42 * 3,
        "width": 124,
        "height": 42
    }, "score_poste_ok": {                                    // effect for the post office
        "x": 0,
        "y": 42 * 4,
        "width": 124,
        "height": 42
    }, "score_coupole_ok": {                                  // effect for the protest
        "x": 0,
        "y": 42 * 5,
        "width": 124,
        "height": 42
    }, "score_affiche_ok": {                                  // effect for the flyers
        "x": 0,
        "y": 42 * 6,
        "width": 124,
        "height": 42
    }, "score_radio_ok": {                                    // effect for the radio
        "x": 0,
        "y": 42 * 7,
        "width": 124,
        "height": 42
    }, "score_socials_ok": {                                    // effect for the social media
        "x": 0,
        "y": 42 * 8,
        "width": 124,
        "height": 42
    },
});

loadSpriteAtlas("Effects_Sheet_NG.png", {
    "score_train_not_so_great": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    }, "score_marche_not_so_great": {                                   // effect for the market
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    }, "score_ag_not_so_great": {                                       // effect for the fundraising
        "x": 0,
        "y": 42 * 2,
        "width": 124,
        "height": 42
    }, "score_journal_not_so_great": {                                  // effect for the journal
        "x": 0,
        "y": 42 * 3,
        "width": 124,
        "height": 42
    }, "score_poste_not_so_great": {                                    // effect for the post office
        "x": 0,
        "y": 42 * 4,
        "width": 124,
        "height": 42
    }, "score_coupole_not_so_great": {                                  // effect for the protest
        "x": 0,
        "y": 42 * 5,
        "width": 124,
        "height": 42
    }, "score_affiche_not_so_great": {                                  // effect for the flyers
        "x": 0,
        "y": 42 * 6,
        "width": 124,
        "height": 42
    }, "score_radio_not_so_great": {                                    // effect for the radio
        "x": 0,
        "y": 42 * 7,
        "width": 124,
        "height": 42
    }, "score_socials_not_so_great": {                                    // effect for the social media
        "x": 0,
        "y": 42 * 8,
        "width": 124,
        "height": 42
    },
});

loadSpriteAtlas("Effects_Sheet_G.png", {
    "score_train_great": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    }, "score_marche_great": {                                   // effect for the market
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    }, "score_ag_great": {                                       // effect for the fundraising
        "x": 0,
        "y": 42 * 2,
        "width": 124,
        "height": 42
    }, "score_journal_great": {                                  // effect for the journal
        "x": 0,
        "y": 42 * 3,
        "width": 124,
        "height": 42
    }, "score_poste_great": {                                    // effect for the post office
        "x": 0,
        "y": 42 * 4,
        "width": 124,
        "height": 42
    }, "score_coupole_great": {                                  // effect for the protest
        "x": 0,
        "y": 42 * 5,
        "width": 124,
        "height": 42
    }, "score_affiche_great": {                                  // effect for the flyers
        "x": 0,
        "y": 42 * 6,
        "width": 124,
        "height": 42
    }, "score_radio_great": {                                    // effect for the radio
        "x": 0,
        "y": 42 * 7,
        "width": 124,
        "height": 42
    }, "score_socials_great": {                                    // effect for the social media
        "x": 0,
        "y": 42 * 8,
        "width": 124,
        "height": 42
    },
});

loadSpriteAtlas("Effects_Sheet_T.png", {
    "score_train_terrible": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    }, "score_marche_terrible": {                                   // effect for the market
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    }, "score_ag_terrible": {                                       // effect for the fundraising
        "x": 0,
        "y": 42 * 2,
        "width": 124,
        "height": 42
    }, "score_journal_terrible": {                                  // effect for the journal
        "x": 0,
        "y": 42 * 3,
        "width": 124,
        "height": 42
    }, "score_poste_terrible": {                                    // effect for the post office
        "x": 0,
        "y": 42 * 4,
        "width": 124,
        "height": 42
    }, "score_coupole_terrible": {                                  // effect for the protest
        "x": 0,
        "y": 42 * 5,
        "width": 124,
        "height": 42
    }, "score_affiche_terrible": {                                  // effect for the flyers
        "x": 0,
        "y": 42 * 6,
        "width": 124,
        "height": 42
    }, "score_radio_terrible": {                                    // effect for the radio
        "x": 0,
        "y": 42 * 7,
        "width": 124,
        "height": 42
    }, "score_socials_terrible": {                                    // effect for the social media
        "x": 0,
        "y": 42 * 8,
        "width": 124,
        "height": 42
    },
});

loadSpriteAtlas("Effects_Sheet_I.png", {
    "score_train_incredible": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    }, "score_marche_incredible": {                                   // effect for the market
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    }, "score_ag_incredible": {                                       // effect for the fundraising
        "x": 0,
        "y": 42 * 2,
        "width": 124,
        "height": 42
    }, "score_journal_incredible": {                                  // effect for the journal
        "x": 0,
        "y": 42 * 3,
        "width": 124,
        "height": 42
    }, "score_poste_incredible": {                                    // effect for the post office
        "x": 0,
        "y": 42 * 4,
        "width": 124,
        "height": 42
    }, "score_coupole_incredible": {                                  // effect for the protest
        "x": 0,
        "y": 42 * 5,
        "width": 124,
        "height": 42
    }, "score_affiche_incredible": {                                  // effect for the flyers
        "x": 0,
        "y": 42 * 6,
        "width": 124,
        "height": 42
    }, "score_radio_incredible": {                                    // effect for the radio
        "x": 0,
        "y": 42 * 7,
        "width": 124,
        "height": 42
    }, "score_socials_incredible": {                                    // effect for the social media
        "x": 0,
        "y": 42 * 8,
        "width": 124,
        "height": 42
    },
});

loadSpriteAtlas("Effects_Sheet_REVERSE.png", {       // Sprite Atlas for the reversed events' effects
    "score_train_reverse_ok": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    }, "score_marche_reverse_ok": {                                   // effect for the market
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    }, "score_ag_reverse_ok": {                                       // effect for the fundraising
        "x": 0,
        "y": 42 * 2,
        "width": 124,
        "height": 42
    }, "score_journal_reverse_ok": {                                  // effect for the journal
        "x": 0,
        "y": 42 * 3,
        "width": 124,
        "height": 42
    }, "score_poste_reverse_ok": {                                    // effect for the post office
        "x": 0,
        "y": 42 * 4,
        "width": 124,
        "height": 42
    }, "score_coupole_reverse_ok": {                                  // effect for the protest
        "x": 0,
        "y": 42 * 5,
        "width": 124,
        "height": 42
    }, "score_affiche_reverse_ok": {                                  // effect for the flyers
        "x": 0,
        "y": 42 * 6,
        "width": 124,
        "height": 42
    }, "score_radio_reverse_ok": {                                    // effect for the radio
        "x": 0,
        "y": 42 * 7,
        "width": 124,
        "height": 42
    }, "score_socials_reverse_ok": {                                    // effect for the social media
        "x": 0,
        "y": 42 * 8,
        "width": 124,
        "height": 42
    },
});

loadSpriteAtlas("Effects_Sheet_REVERSE_NG.png", {
    "score_train_reverse_not_so_great": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    }, "score_marche_reverse_not_so_great": {                                   // effect for the market
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    }, "score_ag_reverse_not_so_great": {                                       // effect for the fundraising
        "x": 0,
        "y": 42 * 2,
        "width": 124,
        "height": 42
    }, "score_journal_reverse_not_so_great": {                                  // effect for the journal
        "x": 0,
        "y": 42 * 3,
        "width": 124,
        "height": 42
    }, "score_poste_reverse_not_so_great": {                                    // effect for the post office
        "x": 0,
        "y": 42 * 4,
        "width": 124,
        "height": 42
    }, "score_coupole_reverse_not_so_great": {                                  // effect for the protest
        "x": 0,
        "y": 42 * 5,
        "width": 124,
        "height": 42
    }, "score_affiche_reverse_not_so_great": {                                  // effect for the flyers
        "x": 0,
        "y": 42 * 6,
        "width": 124,
        "height": 42
    }, "score_radio_reverse_not_so_great": {                                    // effect for the radio
        "x": 0,
        "y": 42 * 7,
        "width": 124,
        "height": 42
    }, "score_socials_reverse_not_so_great": {                                    // effect for the social media
        "x": 0,
        "y": 42 * 8,
        "width": 124,
        "height": 42
    },
});

loadSpriteAtlas("Effects_Sheet_REVERSE_G.png", {
    "score_train_reverse_great": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    }, "score_marche_reverse_great": {                                   // effect for the market
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    }, "score_ag_reverse_great": {                                       // effect for the fundraising
        "x": 0,
        "y": 42 * 2,
        "width": 124,
        "height": 42
    }, "score_journal_reverse_great": {                                  // effect for the journal
        "x": 0,
        "y": 42 * 3,
        "width": 124,
        "height": 42
    }, "score_poste_reverse_great": {                                    // effect for the post office
        "x": 0,
        "y": 42 * 4,
        "width": 124,
        "height": 42
    }, "score_coupole_reverse_great": {                                  // effect for the protest
        "x": 0,
        "y": 42 * 5,
        "width": 124,
        "height": 42
    }, "score_affiche_reverse_great": {                                  // effect for the flyers
        "x": 0,
        "y": 42 * 6,
        "width": 124,
        "height": 42
    }, "score_radio_reverse_great": {                                    // effect for the radio
        "x": 0,
        "y": 42 * 7,
        "width": 124,
        "height": 42
    }, "score_socials_reverse_great": {                                    // effect for the social media
        "x": 0,
        "y": 42 * 8,
        "width": 124,
        "height": 42
    },
});

loadSpriteAtlas("Effects_Sheet_REVERSE_T.png", {
    "score_train_reverse_terrible": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    }, "score_marche_reverse_terrible": {                                   // effect for the market
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    }, "score_ag_reverse_terrible": {                                       // effect for the fundraising
        "x": 0,
        "y": 42 * 2,
        "width": 124,
        "height": 42
    }, "score_journal_reverse_terrible": {                                  // effect for the journal
        "x": 0,
        "y": 42 * 3,
        "width": 124,
        "height": 42
    }, "score_poste_reverse_terrible": {                                    // effect for the post office
        "x": 0,
        "y": 42 * 4,
        "width": 124,
        "height": 42
    }, "score_coupole_reverse_terrible": {                                  // effect for the protest
        "x": 0,
        "y": 42 * 5,
        "width": 124,
        "height": 42
    }, "score_affiche_reverse_terrible": {                                  // effect for the flyers
        "x": 0,
        "y": 42 * 6,
        "width": 124,
        "height": 42
    }, "score_radio_reverse_terrible": {                                    // effect for the radio
        "x": 0,
        "y": 42 * 7,
        "width": 124,
        "height": 42
    }, "score_socials_reverse_terrible": {                                    // effect for the social media
        "x": 0,
        "y": 42 * 8,
        "width": 124,
        "height": 42
    },
});

loadSpriteAtlas("Effects_Sheet_REVERSE_I.png", {
    "score_train_reverse_incredible": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    }, "score_marche_reverse_incredible": {                                   // effect for the market
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    }, "score_ag_reverse_incredible": {                                       // effect for the fundraising
        "x": 0,
        "y": 42 * 2,
        "width": 124,
        "height": 42
    }, "score_journal_reverse_incredible": {                                  // effect for the journal
        "x": 0,
        "y": 42 * 3,
        "width": 124,
        "height": 42
    }, "score_poste_reverse_incredible": {                                    // effect for the post office
        "x": 0,
        "y": 42 * 4,
        "width": 124,
        "height": 42
    }, "score_coupole_reverse_incredible": {                                  // effect for the protest
        "x": 0,
        "y": 42 * 5,
        "width": 124,
        "height": 42
    }, "score_affiche_reverse_incredible": {                                  // effect for the flyers
        "x": 0,
        "y": 42 * 6,
        "width": 124,
        "height": 42
    }, "score_radio_reverse_incredible": {                                    // effect for the radio
        "x": 0,
        "y": 42 * 7,
        "width": 124,
        "height": 42
    }, "score_socials_reverse_incredible": {                                    // effect for the social media
        "x": 0,
        "y": 42 * 8,
        "width": 124,
        "height": 42
    },
});

// Sprite Atlas' for the animated texts
loadRoot("Images/Animated_Texts/");
loadSpriteAtlas("Title.png", {           // Animated title
    "title": {
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 588,
        "sliceX": 1,
        "sliceY": 14,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 13,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }
});

loadSpriteAtlas("Victory.png", {         // Animated Victory text
    "victory": {
        "x": 0,
        "y": 0,
        "width": 1476,
        "height": 37,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }
});

loadSpriteAtlas("Passed.png", {         // Animated Passed text
    "passed": {
        "x": 0,
        "y": 0,
        "width": 124*13,
        "height": 33,
        "sliceX": 13,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 12,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }
});

loadSpriteAtlas("stopped.png", {         // Animated Not Passed text
    "not_passed": {
        "x": 0,
        "y": 0,
        "width": 124*15,
        "height": 36,
        "sliceX": 15,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 14,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }
});

loadSpriteAtlas("Failure.png", {         // Animated Failure text
    "failure": {
        "x": 0,
        "y": 0,
        "width": 1488,
        "height": 31,
        "sliceX": 12,
        "anims": {
            "animated_BG": {
                "from": 0,
                "to": 11,
                "speed": 10,
                "loop": true
            },
            "idle": 0
        }
    }
});

loadRoot("Images/UI/");
loadSprite("ui_top", "UI.png");                  // Sprites for the UI and backgrounds
loadSprite("ui_bottom", "UI_2.png");
loadSprite("ui_end", "Background_end.png");
loadSprite("bot_ui_tuto", "bottom_ui_tuto.png");
loadSprite("top_ui_tuto", "top_ui_tuto.png");

loadRoot("Images/Logos/");
loadSprite("new_logo", "new_logo.png");
loadSprite("fail_logo", "fail_logo.png");
loadSprite("bravo_logo", "bravo_logo.png");
loadSprite("perfect_logo", "perfect_logo.png");

loadRoot("Images/Backgrounds/");
loadSprite("BG_Mission_0", "train_vote_BG.png");
loadSprite("BG_Mission_1", "insurance.png");
loadSprite("BG_Mission_2", "AVS.png");
loadSprite("BG_Mission_3", "crash.png");
loadSprite("BG_Mission_4", "romansch.png");
loadSprite("BG_Mission_5", "unfair_competition.png");
loadSprite("BG_Mission_6", "PCi.png");
loadSprite("BG_Mission_7", "vote_femmes.png");
loadSprite("BG_Mission_8", "Military.png");
loadSprite("BG_Mission_9", "nuclear.png");
loadSprite("BG_Mission_10", "ONU_BG.png");
loadSprite("BG_Mission_11", "Secondary_homes.png");
loadSprite("BG_Mission_12", "Same-sex_protection.png");
loadSprite("BG_Mission_13", "Same-sex_marriage.png");
loadSprite("BG_Mission_14", "AVS_reform.png");

loadRoot("Images/Texts/");
loadSprite("continue", "continue.png");          // Sprites for texts I use as buttons
loadSprite("to_menu", "to_menu.png");
loadSprite("play_now", "play_now.png");
loadSprite("play", "play_only.png");
loadSprite("credits", "credits.png");
loadSprite("back", "back.png");
loadSprite("achievements", "achievements.png");
loadSprite("delete_game", "delete_progress.png");
loadSprite("next", "next.png");
loadSprite("previous", "previous.png");
loadSprite("proceed", "proceed.png");
loadSprite("tutorial", "tutorial.png");

loadRoot("Images/Posters/");
loadSprite("Affiche_UKN", "Unknown_poster.png");
loadSprite("Affiche0", "Affiche_1.png");
loadSprite("Affiche1", "Affiche_2.png");
loadSprite("Affiche2", "Affiche_3.png");
loadSprite("Affiche3", "Affiche_4.png");
loadSprite("Affiche4", "Affiche_5.png");
loadSprite("Affiche5", "Affiche_6.png");
loadSprite("Affiche6", "Affiche_7.png");
loadSprite("Affiche7", "Affiche_8.png");
loadSprite("Affiche8", "Affiche_9.png");
loadSprite("Affiche9", "Affiche_10.png");
loadSprite("Affiche10", "Affiche_11.png");
loadSprite("Affiche11", "Affiche_12.png");
loadSprite("Affiche12", "Affiche_13.png");
loadSprite("Affiche13", "Affiche_14.png");
loadSprite("Affiche14", "Affiche_15.png");

loadRoot("Audio/");
loadSound("menu_music", "Menu music.mp3");        // Load sounds and musics
loadSound("game_music", "game_song_complete.mp3");
loadSound("on_hover", "Sound_onHover.mp3");
loadSound("on_click_1", "Sound_onClick_1.mp3");
loadSound("on_click_2", "Sound_onClick_2.mp3");
loadSound("on_click_3", "on_Click_Sound_3.mp3");
loadSound("on_click_4", "Sound_onClick_4.mp3");
loadSound("test_hover", "test.mp3");