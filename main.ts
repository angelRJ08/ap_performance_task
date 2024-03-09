namespace SpriteKind {
    export const keys = SpriteKind.create()
    export const tile = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    pressed_correct_key(2)
})
scene.onOverlapTile(SpriteKind.keys, assets.tile`myTile1`, function (sprite, location) {
    if (!(sprites.readDataBoolean(sprite, "Pressed"))) {
        info.changeLifeBy(-1)
        scene.cameraShake(3, 200)
    }
    DeleteLatestTile = tiles2.removeAt(tiles2.indexOf(sprite))
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
    if (tiles2.length > 0) {
        latestTile = tiles2[0]
        if (sprites.readDataNumber(latestTile, "direction") == direction) {
            info.changeScoreBy(1)
            sprites.destroy(latestTile, effects.fire, 200)
            sprites.setDataBoolean(latestTile, "Pressed", true)
            DeleteLatestTile = tiles2.removeAt(0)
        } else {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            scene.cameraShake(4, 200)
            info.changeLifeBy(-1)
            latestTile.startEffect(effects.rings)
        }
    }
}
let direction_for_tile = 0
let tile: Sprite = null
let latestTile: Sprite = null
let DeleteLatestTile: Sprite = null
let tiles2: Sprite[] = []
let lifeOfPlayer = true
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(5)
info.setLife(3)
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
        if (info.life() == 0) {
            lifeOfPlayer = false
        }
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
