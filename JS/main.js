kaboom({
    width: 124,
    height: 84,
    clearColor: [0, 0, 0],
    scale: 8,
    font: "sink"
});

loadSpriteAtlas("Images/Sprite_sheet.png", {
    "title": {
        "x": 1488,
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
    },
    "event_train": {
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
    },
    "event_marche": {
        "x": 0,
        "y": 504,
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
    "event_ag": {
        "x": 0,
        "y": 546,
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
    "event_journal": {
        "x": 0,
        "y": 588,
        "width": 1364,
        "height": 42,
        "sliceX": 11,
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
    "event_poste": {
        "x": 0,
        "y": 630,
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
    "event_coupole": {
        "x": 0,
        "y": 672,
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
    "event_affiche": {
        "x": 0,
        "y": 714,
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
    "event_radio": {
        "x": 0,
        "y": 756,
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
    "score_train": {
        "x": 1612,
        "y": 462,
        "width": 124,
        "height": 42,
        "sliceX": 1,
        "sliceY": 1,
        "anims": {
            "idle": 0
        }
    },
    "score_marche": {
        "x": 1612,
        "y": 504,
        "width": 124,
        "height": 42,
        "sliceX": 1,
        "sliceY": 1,
        "anims": {
            "idle": 0
        }
    },
    "score_ag": {
        "x": 1612,
        "y": 546,
        "width": 124,
        "height": 42,
        "sliceX": 1,
        "sliceY": 1,
        "anims": {
            "idle": 0
        }
    },
    "score_journal": {
        "x": 1612,
        "y": 588,
        "width": 124,
        "height": 42,
        "sliceX": 1,
        "sliceY": 1,
        "anims": {
            "idle": 0
        }
    },
    "score_poste": {
        "x": 1612,
        "y": 630,
        "width": 124,
        "height": 42,
        "sliceX": 1,
        "sliceY": 1,
        "anims": {
            "idle": 0
        }
    },
    "score_coupole": {
        "x": 1612,
        "y": 672,
        "width": 124,
        "height": 42,
        "sliceX": 1,
        "sliceY": 1,
        "anims": {
            "idle": 0
        }
    },
    "score_affiche": {
        "x": 1612,
        "y": 714,
        "width": 124,
        "height": 42,
        "sliceX": 1,
        "sliceY": 1,
        "anims": {
            "idle": 0
        }
    },
    "score_radio": {
        "x": 1612,
        "y": 756,
        "width": 124,
        "height": 42,
        "sliceX": 1,
        "sliceY": 1,
        "anims": {
            "idle": 0
        }
    },
});

const elem1 = add([
    pos(0, 0),
    sprite("event_radio", { anim: "animated_BG" }),
    area(),
    "radio_event",
    "radio"
])

const elem2 = add([
    pos(0, 42),
    sprite("event_marche", { anim: "animated_BG" }),
    area(),
    "marche_event",
    "marche"
])

let mesObj = get();

console.log(mesObj)

onHover("radio", (a) => {
    add([
        pos(a.pos),
        sprite("score_radio"),
        area(),
        "radio_score"
    ])
})
