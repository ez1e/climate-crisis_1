namespace SpriteKind {
    export const collectable = SpriteKind.create()
}
function level2Setup () {
    info.startCountdown(35)
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
    if (currentCount == 3 && info.score() == 2) {
        level4Setup()
        currentCount = 0
        info.changeScoreBy(1)
    }
    if (currentCount == 3 && info.score() == 3) {
        level5Setup()
        currentCount = 0
        info.changeScoreBy(1)
    }
    if (currentCount == 3 && info.score() == 4) {
        game.over(true)
        currentCount = 0
        info.changeScoreBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`startGame`, function (sprite, location) {
    level1Setup()
})
function level3Setup () {
    info.startCountdown(40)
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
    info.startCountdown(45)
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
function level5Setup () {
    info.startCountdown(60)
    tiles.setTilemap(tilemap`l5`)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    emit.setVelocity(1, 1)
    ghg1 = sprites.create(assets.image`gas1`, SpriteKind.collectable)
    ghg2 = sprites.create(assets.image`gas2`, SpriteKind.collectable)
    ghg3 = sprites.create(assets.image`gas3`, SpriteKind.collectable)
    tiles.placeOnTile(ghg1, tiles.getTileLocation(17, 20))
    tiles.placeOnTile(ghg2, tiles.getTileLocation(16, 7))
    tiles.placeOnTile(ghg3, tiles.getTileLocation(5, 6))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.collectable, function (sprite, otherSprite) {
    currentCount += 1
    emit.setImage(assets.image`gasTrap`)
    otherSprite.destroy()
    timer.after(500, function () {
        emit.setImage(assets.image`myImage`)
    })
})
function level4Setup () {
    info.startCountdown(45)
    tiles.setTilemap(tilemap`l4`)
    tiles.placeOnRandomTile(emit, assets.tile`teleporter`)
    emit.setVelocity(1, 1)
    ghg1 = sprites.create(assets.image`gas1`, SpriteKind.collectable)
    ghg2 = sprites.create(assets.image`gas2`, SpriteKind.collectable)
    ghg3 = sprites.create(assets.image`gas3`, SpriteKind.collectable)
    tiles.placeOnTile(ghg1, tiles.getTileLocation(1, 11))
    tiles.placeOnTile(ghg2, tiles.getTileLocation(16, 14))
    tiles.placeOnTile(ghg3, tiles.getTileLocation(14, 1))
}
let currentCount = 0
let ghg3: Sprite = null
let ghg2: Sprite = null
let ghg1: Sprite = null
let emit: Sprite = null
info.setScore(0)
console.log("Your name is Emit. You are a time traveler sent back to the past to collect the excess greenhouse gasses present in the atmosphere to help stop the global disaster caused by them in the future.")
console.log("The two squares in front of you are teleporters, stepping on them will transport you to the first location, where you will have to collect all excess green house gasses, before the time runs out, then you can move on to the next area.")
console.log("Stay safe and godspeed")
splashScreen()
