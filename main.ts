tiles.setTilemap(tilemap`level1`)
let emit = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(emit)
controller.moveSprite(emit)
