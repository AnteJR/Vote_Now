/* MAIN.JS loads up Kaboom and sets the SpriteAtlas to be user down the line*/

/* Kaboom function */
kaboom({
    width: 124,
    height: 91,
    clearColor: [0, 0, 0],
    scale: 7,
    font: "sink"
});

//sprite Atlas pour les affiches
loadSpriteAtlas("Images/Affiches_mur_sheet.png", {
    "event_affiche_day_nice": {
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
    }, "event_affiche_day_rain": {
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
    }, "event_affiche_dawn_nice": {
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
    }, "event_affiche_dawn_rain": {
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
    }, "event_affiche_dusk_nice": {
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
    }, "event_affiche_dusk_rain": {
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

//sprite Atlas pour les marchés
loadSpriteAtlas("Images/Marche_sheet.png", {
    "event_marche_day_nice": {
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
    }, "event_marche_day_rain": {
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
    }, "event_marche_dawn_nice": {
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
    }, "event_marche_dawn_rain": {
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
    }, "event_marche_dusk_nice": {
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
    }, "event_marche_dusk_rain": {
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

//sprite Atlas pour les manifestations
loadSpriteAtlas("Images/Coupole_sheet.png", {
    "event_coupole_day_nice": {
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
    }, "event_coupole_day_rain": {
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
    }, "event_coupole_dawn_nice": {
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
    }, "event_coupole_dawn_rain": {
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
    }, "event_coupole_dusk_nice": {
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
    }, "event_coupole_dusk_rain": {
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

//sprite Atlas Poste
loadSpriteAtlas("Images/Poste_sheet.png", {
    "event_poste_day_nice": {
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
    }, "event_poste_day_rain": {
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
    }, "event_poste_dawn_nice": {
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
    }, "event_poste_dawn_rain": {
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
    }, "event_poste_dusk_nice": {
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
    }, "event_poste_dusk_rain": {
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

//sprite Atlas journal
loadSpriteAtlas("Images/Journal_sheet.png", {
    "event_journal_day_nice": {
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
    }, "event_journal_day_rain": {
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
    }, "event_journal_dawn_nice": {
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
    }, "event_journal_dawn_rain": {
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
    }, "event_journal_dusk_nice": {
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
    }, "event_journal_dusk_rain": {
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

//sprite Atlas train
loadSpriteAtlas("Images/Train_sheet.png", {
    "event_train_day_nice": {
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
    }, "event_train_day_rain": {
        "x": 0,
        "y": 1488,
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
    }, "event_train_dawn_nice": {
        "x": 0,
        "y": 504,
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
    }, "event_train_dawn_rain": {
        "x": 1488,
        "y": 504,
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
    }, "event_train_dusk_nice": {
        "x": 0,
        "y": 1008,
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
    }, "event_train_dusk_rain": {
        "x": 1488,
        "y": 1008,
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

//sprite Atlas radio
loadSpriteAtlas("Images/Radio_sheet.png", {
    "event_radio_day_nice": {
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
    }, "event_radio_day_rain": {
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
    }, "event_radio_dawn_nice": {
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
    }, "event_radio_dawn_rain": {
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
    }, "event_radio_dusk_nice": {
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
    }, "event_radio_dusk_rain": {
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

//sprite Atlas AG
loadSpriteAtlas("Images/AG_sheet.png", {
    "event_ag_day_nice": {
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
    }, "event_ag_day_rain": {
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
    }, "event_ag_dawn_nice": {
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
    }, "event_ag_dawn_rain": {
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
    }, "event_ag_dusk_nice": {
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
    }, "event_ag_dusk_rain": {
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

//sprite Atlas Effects
loadSpriteAtlas("Images/Effects_Sheet.png", {
    "score_train": {
        "x": 0,
        "y": 0,
        "width": 124,
        "height": 42
    },
    "score_marche": {
        "x": 0,
        "y": 42,
        "width": 124,
        "height": 42
    },
    "score_ag": {
        "x": 0,
        "y": 84,
        "width": 124,
        "height": 42
    },
    "score_journal": {
        "x": 0,
        "y": 126,
        "width": 124,
        "height": 42
    },
    "score_poste": {
        "x": 0,
        "y": 168,
        "width": 124,
        "height": 42
    },
    "score_coupole": {
        "x": 0,
        "y": 210,
        "width": 124,
        "height": 42,
    },
    "score_affiche": {
        "x": 0,
        "y": 252,
        "width": 124,
        "height": 42,
    },
    "score_radio": {
        "x": 0,
        "y": 294,
        "width": 124,
        "height": 42
    },
});

loadSpriteAtlas("Images/Title.png", {
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

loadSprite("ui_top", "Images/UI.png")