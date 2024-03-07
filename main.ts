namespace SpriteKind {
    export const keys = SpriteKind.create()
    export const tile = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    pressed_correct_key(2)
})
scene.onOverlapTile(SpriteKind.keys, assets.tile`myTile1`, function (sprite, location) {
    DeleteLatestTile = tiles2.removeAt(tiles2.indexOf(sprite))
    if (!(sprites.readDataBoolean(sprite, "Pressed"))) {
        sprites.destroy(sprite)
        info.setScore(info.score() - 1)
    }
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    pressed_correct_key(1)
})
sprites.onDestroyed(SpriteKind.tile, function (sprite) {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    pressed_correct_key(0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    pressed_correct_key(3)
})
function pressed_correct_key (direction: number) {
    if (info.score() != 0) {
        latestTile = tiles2[0]
        if (sprites.readDataNumber(latestTile, "direction") == direction) {
            sprites.setDataBoolean(latestTile, "Pressed", true)
            sprites.destroy(latestTile, effects.fire, 100)
            DeleteLatestTile = tiles2.removeAt(0)
            info.changeScoreBy(1)
        }
    }
}
let direction_for_tile = 0
let tile: Sprite = null
let latestTile: Sprite = null
let DeleteLatestTile: Sprite = null
let tiles2: Sprite[] = []
tiles.setCurrentTilemap(tilemap`level1`)
info.setLife(3)
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
        sprites.setDataBoolean(tile, "Pressed", false)
        tiles2.push(tile)
    }
})
