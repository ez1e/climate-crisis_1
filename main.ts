tiles.setTilemap(tilemap`level1`)
let emit = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(emit)
tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
emit.setVelocity(1, 1)
controller.moveSprite(emit)
