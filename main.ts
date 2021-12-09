namespace SpriteKind {
    export const collectable = SpriteKind.create()
}
function level2Setup () {
    tiles.setTilemap(tilemap`l2`)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    emit.setVelocity(1, 1)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`end-tile`, function (sprite, location) {
    level2Setup()
})
function level1Setup () {
    tiles.setTilemap(tilemap`l1`)
    emit = sprites.create(assets.image`myImage`, SpriteKind.Player)
    ghg1 = sprites.create(assets.image`gas1`, SpriteKind.collectable)
    ghg2 = sprites.create(assets.image`gas2`, SpriteKind.collectable)
    ghg3 = sprites.create(assets.image`gas3`, SpriteKind.collectable)
    scene.cameraFollowSprite(emit)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    emit.setVelocity(1, 1)
    controller.moveSprite(emit)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.collectable, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let ghg3: Sprite = null
let ghg2: Sprite = null
let ghg1: Sprite = null
let emit: Sprite = null
info.setScore(0)
level1Setup()
