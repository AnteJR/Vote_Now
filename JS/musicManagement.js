function playMenuMusic() {
    music_menu = play("menu_music", {
        volume: 0.3,
        loop: true,
        seek: 0
    });
}

function playGameMusic() {
    music_game = play("game_music", {
        volume: 0.4,
        loop: true,
        seek: 0
    });
}

function playTick(turn) {
    play("tick", {
        volume: (0.05 * (turn - 5)),
        loop: false,
        seek: 0
    });
}

function playTock(turn) {
    play("tock", {
        volume: (0.05 * (turn - 5)),
        loop: false,
        seek: 0
    });
}