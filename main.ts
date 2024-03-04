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
    if (tiles2.length > 0 && info.score() != 0) {
        latestTile = tiles2[0]
    }
}
let direction_for_tile = 0
let tile: Sprite = null
let latestTile: Sprite = null
let tiles2: Sprite[] = []
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(3)
let list = [
0,
1,
2,
3
]
tiles2 = sprites.allOfKind(SpriteKind.tile)
forever(function () {
    for (let index = 0; index <= 3; index++) {
        pause(1000)
        if (list[index] == 0) {
            tile = sprites.create(img`
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
            direction_for_tile = 0
        } else if (list[index] == 1) {
            tile = sprites.create(img`
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
            direction_for_tile = 1
        } else if (list[index] == 2) {
            tile = sprites.create(img`
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
            direction_for_tile = 2
        } else if (list[index] == 3) {
            tile = sprites.create(img`
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
            direction_for_tile = 3
        }
        sprites.setDataNumber(tile, "direction", direction_for_tile)
        tile.setPosition(randint(50, 100), 0)
        tile.setVelocity(0, 50)
        tiles2.push(tile)
    }
})
