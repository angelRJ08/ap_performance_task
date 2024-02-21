namespace SpriteKind {
    export const keys = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
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
let down_key: Sprite = null
let up_key: Sprite = null
let left_key: Sprite = null
let right_key: Sprite = null
let Direction = 0
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
