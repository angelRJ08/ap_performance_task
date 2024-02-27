namespace SpriteKind {
    export const keys = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.keys, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function pressed_correct_key (num: number) {
    if (true) {
    	
    }
}
let Direction = 0
let down_key: Sprite = null
let up_key: Sprite = null
let left_key: Sprite = null
let right_key: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
info.setLife(3)
let list = [
0,
1,
2,
3
]
for (let index = 0; index <= 3; index++) {
    if (list[index] == 0) {
        right_key = sprites.create(img`
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
        right_key.setVelocity(0, 25)
        right_key.setPosition(126, 29)
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
        right_key.setPosition(26, 28)
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
        up_key.setPosition(48, 18)
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
    pause(1000)
}
tiles.setCurrentTilemap(tilemap`level1`)
for (let index = 0; index < 4; index++) {
	
}
tiles.setCurrentTilemap(tilemap`level1`)
for (let index = 0; index < 4; index++) {
	
}
tiles.setCurrentTilemap(tilemap`level1`)
for (let index = 0; index < 4; index++) {
	
}
forever(function () {
    Direction = randint(0, 3)
    if (Direction == 0) {
        right_key = sprites.create(img`
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
    } else if (Direction == 1) {
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
    } else if (Direction == 2) {
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
    } else {
        down_key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . f f f . . . . 
            . . . . . . . . . f f f f . . . 
            . f f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f f 
            . f f f f f f f f f f f f f f f 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . . f f f . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.keys)
    }
})
forever(function () {
    Direction = randint(0, 3)
    if (Direction == 0) {
        right_key = sprites.create(img`
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
    } else if (Direction == 1) {
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
    } else if (Direction == 2) {
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
    } else {
        down_key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . f f f . . . . 
            . . . . . . . . . f f f f . . . 
            . f f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f f 
            . f f f f f f f f f f f f f f f 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . . f f f . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.keys)
    }
})
forever(function () {
    Direction = randint(0, 3)
    if (Direction == 0) {
        right_key = sprites.create(img`
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
    } else if (Direction == 1) {
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
    } else if (Direction == 2) {
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
    } else {
        down_key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . f f f . . . . 
            . . . . . . . . . f f f f . . . 
            . f f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f f 
            . f f f f f f f f f f f f f f f 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . . f f f . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.keys)
    }
})
forever(function () {
	
})
