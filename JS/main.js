/* MAIN.JS loads up Kaboom, the sounds, and sets the sprites to be used down the line*/

kaboom({                                                /* Kaboom function */
    width: 868,
    height: 686,
    clearColor: [0, 0, 0],
    font: "sink"
});

loadRoot("Images/")

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

loadSpriteAtlas("Effects_Sheet.png", {       // Sprite Atlas for the events' effects
    "score_train": {                                    // effect for the train
        "x": 0,
        "y": 0,
        "width": 434,
        "height": 147
    },
    "score_marche": {                                   // effect for the market
        "x": 0,
        "y": 147,
        "width": 434,
        "height": 147
    },
    "score_ag": {                                       // effect for the fundraising
        "x": 0,
        "y": 147*2,
        "width": 434,
        "height": 147
    },
    "score_journal": {                                  // effect for the journal
        "x": 0,
        "y": 147*3,
        "width": 434,
        "height": 147
    },
    "score_poste": {                                    // effect for the post office
        "x": 0,
        "y": 147*4,
        "width": 434,
        "height": 147
    },
    "score_coupole": {                                  // effect for the protest
        "x": 0,
        "y": 147*5,
        "width": 434,
        "height": 147
    },
    "score_affiche": {                                  // effect for the flyers
        "x": 0,
        "y": 147*6,
        "width": 434,
        "height": 147
    },
    "score_radio": {                                    // effect for the radio
        "x": 0,
        "y": 147*7,
        "width": 434,
        "height": 147
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
                                            // Sprite Atlas' for the animated texts
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

loadSprite("ui_top", "UI.png");                  // Sprites for the UI and backgrounds
loadSprite("ui_bottom", "UI_2.png");
loadSprite("ui_end", "Background_end.png");

loadSprite("continue", "Continue.png");          // Sprites for texts I use as buttons
loadSprite("to_menu", "To_menu.png");
loadSprite("play_now", "Play_now.png");
loadSprite("credits", "Credits.png");
loadSprite("back", "Back.png");

loadRoot("Audio/")
loadSound("menu_music", "Menu music.mp3");        // Load sounds and musics
loadSound("game_music", "game_song_complete.mp3");
loadSound("on_hover", "Sound_onHover.mp3");
loadSound("on_click_1", "Sound_onClick_1.mp3");
loadSound("on_click_2", "Sound_onClick_2.mp3");
loadSound("on_click_3", "on_Click_Sound_3.mp3");
loadSound("on_click_4", "Sound_onClick_4.mp3");