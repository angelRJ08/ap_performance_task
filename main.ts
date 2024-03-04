namespace SpriteKind {
    export const keys = SpriteKind.create()
    export const tile = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    pressed_correct_key(2)
})
scene.onOverlapTile(SpriteKind.keys, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(-1)
    sprites.destroy(sprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    pressed_correct_key(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    pressed_correct_key(0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    pressed_correct_key(3)
})
function pressed_correct_key (direction: number) {
    if (info.score() != 0) {
        if (direction == current_key) {
            game.splash("good job")
        }
    }
}
let current_key = 0
let down_key: Sprite = null
let up_key: Sprite = null
let left_key: Sprite = null
let right_arrow: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(3)
let list = [
0,
2,
2,
3
]
let tiles2 = sprites.allOfKind(SpriteKind.tile)
for (let index = 0; index <= 3; index++) {
    if (list[index] == 0) {
        right_arrow = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . f f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f f 
            . f f f f f f f f f f f f f f f 
            . f f f f f f f f f f f f f f f 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . f f f . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.keys)
        right_arrow.setVelocity(0, 25)
        right_arrow.setPosition(126, 29)
    } else if (list[index] == 1) {
        left_key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . f f f . . . . . . . . . 
            . . . f f f f . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            f f f f f f f f f f f f f f f . 
            f f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            . . f f f f f f f f f f f f f . 
            . . . f f f f . . . . . . . . . 
            . . . . f f f . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.keys)
        left_key.setVelocity(0, 25)
        left_key.setPosition(48, 18)
    } else if (list[index] == 2) {
        up_key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.keys)
        up_key.setVelocity(0, 25)
        up_key.setPosition(26, 28)
    } else if (list[index] == 3) {
        down_key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . f f f f f f f f f f f f . . . 
            . f f f f f f f f f f f f . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            `, SpriteKind.keys)
        down_key.setVelocity(0, 25)
        down_key.setPosition(87, 25)
    }
    current_key = list[index]
    pause(1000)
}
