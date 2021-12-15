namespace SpriteKind {
    export const collectable = SpriteKind.create()
}
function level2Setup () {
    tiles.setTilemap(tilemap`l2`)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    emit.setVelocity(1, 1)
    ghg1 = sprites.create(assets.image`gas1`, SpriteKind.collectable)
    ghg2 = sprites.create(assets.image`gas2`, SpriteKind.collectable)
    ghg3 = sprites.create(assets.image`gas3`, SpriteKind.collectable)
    tiles.placeOnTile(ghg1, tiles.getTileLocation(5, 1))
    tiles.placeOnTile(ghg2, tiles.getTileLocation(14, 1))
    tiles.placeOnTile(ghg3, tiles.getTileLocation(3, 14))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`end-tile`, function (sprite, location) {
    if (currentCount == 3 && info.score() == 0) {
        level2Setup()
        currentCount = 0
        info.changeScoreBy(1)
    }
    if (currentCount == 3 && info.score() == 1) {
        level3Setup()
        currentCount = 0
        info.changeScoreBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`startGame`, function (sprite, location) {
    level1Setup()
})
function level3Setup () {
    tiles.setTilemap(tilemap`l3`)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    emit.setVelocity(1, 1)
    ghg1 = sprites.create(assets.image`gas1`, SpriteKind.collectable)
    ghg2 = sprites.create(assets.image`gas2`, SpriteKind.collectable)
    ghg3 = sprites.create(assets.image`gas3`, SpriteKind.collectable)
    tiles.placeOnTile(ghg1, tiles.getTileLocation(4, 17))
    tiles.placeOnTile(ghg2, tiles.getTileLocation(5, 2))
    tiles.placeOnTile(ghg3, tiles.getTileLocation(11, 7))
}
function level1Setup () {
    tiles.setTilemap(tilemap`l1`)
    ghg1 = sprites.create(assets.image`gas1`, SpriteKind.collectable)
    ghg2 = sprites.create(assets.image`gas2`, SpriteKind.collectable)
    ghg3 = sprites.create(assets.image`gas3`, SpriteKind.collectable)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    tiles.placeOnTile(ghg1, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(ghg2, tiles.getTileLocation(2, 13))
    tiles.placeOnTile(ghg3, tiles.getTileLocation(13, 7))
    emit.setVelocity(1, 1)
}
function splashScreen () {
    tiles.setTilemap(tilemap`splashScreen1`)
    emit = sprites.create(assets.image`myImage`, SpriteKind.Player)
    controller.moveSprite(emit)
    scene.cameraFollowSprite(emit)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.collectable, function (sprite, otherSprite) {
    currentCount += 1
    emit.setImage(assets.image`gasTrap`)
    otherSprite.destroy()
    timer.after(500, function () {
        emit.setImage(assets.image`myImage`)
    })
})
let currentCount = 0
let ghg3: Sprite = null
let ghg2: Sprite = null
let ghg1: Sprite = null
let emit: Sprite = null
info.setScore(0)
splashScreen()
