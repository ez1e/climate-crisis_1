function level2Setup () {
    tiles.setTilemap(tilemap`level0`)
    emit = sprites.create(assets.image`myImage`, SpriteKind.Player)
    scene.cameraFollowSprite(emit)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    emit.setVelocity(1, 1)
    controller.moveSprite(emit)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`end-tile`, function (sprite, location) {
    nextLevel()
})
function nextLevel () {
    game.over(true)
}
function level1Setup () {
    tiles.setTilemap(tilemap`level1`)
    emit = sprites.create(assets.image`myImage`, SpriteKind.Player)
    scene.cameraFollowSprite(emit)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    emit.setVelocity(1, 1)
    controller.moveSprite(emit)
}
let emit: Sprite = null
level1Setup()
level2Setup()
