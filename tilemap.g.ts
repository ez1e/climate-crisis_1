// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000a0a0a0a0a0a0a0a0a0a0a0a0a0a010a0a040404040404040404040a0a0a040a0a0a0a0a0a0a0a0a0a0a040a0a0a040a0a0a040404040404040a0404040a040a0a0a040a0a0a0a0a0404040a040a040a0a0a040a0404040a0a0a0a0a0404040a0a0a040a040a04040404040a0a0a0a0a0a0a0404040a040a0a0a0a0a0a040a0a0a0a0a0a0a0a040a0a04040404040a0a0a0a0404040404040a040a0a0a0a0a0a0a0a040a0a0a0a040a0404040404040a0a0a040a0a04040404040a0a0a0a0a0a0a0a040a0a040a0a0a040a0a0905060a0a0a040404040a0404040404040b070a0a0a0a0a0a0a0a040a0a0a0a0803020a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 . 2 
2 2 . . . . . . . 2 . . . 2 . 2 
2 2 . 2 2 2 2 2 . . . 2 . 2 . 2 
2 2 . 2 . . . 2 2 2 2 2 . . . 2 
2 2 . 2 . 2 . . . . . 2 2 2 2 2 
2 2 . . . 2 . 2 2 2 2 2 2 . 2 2 
2 2 2 2 2 2 . 2 2 . . . . . 2 2 
2 2 . . . . . . 2 . 2 2 2 2 2 2 
2 2 . 2 2 2 2 . 2 . . . . . . 2 
2 2 . 2 2 . . . . . 2 2 2 2 2 2 
2 2 . 2 2 . 2 2 2 . 2 2 . . . 2 
2 2 . . . . 2 . . . . . . . . 2 
2 2 2 2 2 2 2 . 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.builtin.forestTiles0,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "end-tile":
            case "tile1":return tile1;
            case "transparency16":return transparency16;
            case "end-tile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile3":return tile3;
            case "teleporter":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
