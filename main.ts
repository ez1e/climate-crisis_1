function level2Setup () {
    tiles.setTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    emit.setVelocity(1, 1)
}
function levelPassed () {
    info.changeScoreBy(1)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`end-tile`, function (sprite, location) {
    levelPassed()
    level2Setup()
})
function level1Setup () {
    tiles.setTilemap(tilemap`level1`)
    emit = sprites.create(assets.image`myImage`, SpriteKind.Player)
    scene.cameraFollowSprite(emit)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    emit.setVelocity(1, 1)
    controller.moveSprite(emit)
}
let emit: Sprite = null
info.setScore(0)
level1Setup()
