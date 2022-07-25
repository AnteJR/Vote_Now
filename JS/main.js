kaboom({
    width: 124,
    height: 84,
    clearColor: [0, 0, 0],
    scale: 8
});

loadSpriteAtlas("Images/Sprite_sheet.png", {
	"pub_train": {
		"x": 0,
		"y": 0,
		"width": 1488,
		"height": 504,
		"sliceX": 12,
		"sliceY":12,
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
    "pub_marche": {
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
    "argent_ag": {
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
    "pub_journal": {
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
    "argent_poste": {
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
    "pub_affiche": {
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
    "pub_radio": {
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
})

const elem1 = add([
	pos(0,0),
	sprite("pub_radio", { anim: "animated_BG" }),
])

const elem2 = add([
	pos(0,42),
	sprite("pub_marche", { anim: "animated_BG" }),
])

elem2.flipY(true); elem2.flipX(true)