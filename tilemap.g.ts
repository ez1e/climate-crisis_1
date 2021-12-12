// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "l5":
            case "level2":return tiles.createTilemap(hex`18001800050505050505050505050505050505050505050505050505050303030303030303010303030303030202020202030305050304020202020202020303020202030203030302030305050304020402040303030303020302030203020202030305050304020402020202020203020302020203020303030305050304020404040303030204020404030303020302020205050302020202040202040202020302020204020302030205050302030303040203040203030302030204020202030205050302030202020202020204040302030303030303030205050302040203030203040404020202020202020202020205050302030203030202020203020404040402030303030305050202030203030303030303020302020202040202020205050203030202020204020202020202030303030202020205050204040404030303030302030402030202020202060205050204040303020202020202040302030203030202020205050202020202030403030304030302040204040202020205050303030302040202020202020202030204040302030305050303020202020204020402030303030204040302020205050304020402040203020302030202020202020202030205050202020402040203020302030203030303030203030205050204040402020202020302030302020202030203030205050202020404020303030302020202030303030203030205050304020204020202020303030302020202020202020205050505050505050505050505050505050505050505050505`, img`
222222222222222222222222
222222222.222222.....222
222.......22...2.222.222
222.2.222222.2.2.2...222
222.2......2.2...2.22222
222.222222.2.22222.2...2
22....2..2...2...2.2.2.2
22.2222.22.222.2.2...2.2
22.2.......222.2222222.2
22.2.22.2222...........2
22.2.22....2.2222.222222
2..2.2222222.2....2....2
2.22....2......2222....2
2.222222222.22.2.......2
2.2222......22.2.22....2
2.....22222222.2.22....2
22222.2........2.222.222
222.....2.2.2222.222...2
222.2.2.2.2.2........2.2
2...2.2.2.2.2.22222.22.2
2.222.....2.22....2.22.2
2...22.2222....2222.22.2
222..2....2222.........2
222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,myTiles.tile5,myTiles.tile4], TileScale.Sixteen);
            case "l1":
            case "level1":return tiles.createTilemap(hex`100010000a0a0a0a0a0a0a0a0a0a0a0a0a0a010a0a0c0404040404040404040a0a0a040a0a0a0a0a0a0a0a0a0a0a040a0a0a040a0a0a040404040404040a0404040a040a0a0a040a0a0a0a0a0404040a040a040a0a0a040a0404040a0a0a0a0a0404040a0a0a040a040a04040404040a0a0a0a0a0a0a0404040a040a0a0a0a0a0a0d0a0a0a0a0a0a0a0a040a0a04040404040a0a0a0a0404040404040a040a0a0a0a0a0a0a0a040a0a0a0a040a0404040404040a0a0a040a0a04040404040a0a0a0a0a0a0a0a040a0a040a0a0a040a0a0905060a0a0a0e0404040a0404040404040b070a0a0a0a0a0a0a0a040a0a0a0a0803020a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`, img`
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
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.builtin.forestTiles0,myTiles.tile4,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "l2":
            case "level3":return tiles.createTilemap(hex`1000100004040404040404040404040404040404040302040406040202020202020405040404020202020402040404040204020404040204020404020202020402020204040402040402040404040202020402040404020404020402020202040404020404020202020204020404020402020204040204040204020202040204040204040402040202040201020202020402040404020402040402020204040404020204040204020402040204020202040402040402040202020402020204020202020404020404040204040404040204040404040202040402020202020202020204040404020604040404040204040402020404040404040404040404040404040404`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 2 . 2 . . . . . . 2 . 2 
2 2 . . . . 2 . 2 2 2 2 . 2 . 2 
2 2 . 2 . 2 2 . . . . 2 . . . 2 
2 2 . 2 2 . 2 2 2 2 . . . 2 . 2 
2 2 . 2 2 . 2 . . . . 2 2 2 . 2 
2 . . . . . 2 . 2 2 . 2 . . . 2 
2 . 2 2 . 2 . . . 2 . 2 2 . 2 2 
2 . 2 . . 2 . . . . . . 2 . 2 2 
2 . 2 . 2 2 . . . 2 2 2 2 . . 2 
2 . 2 . 2 . 2 . 2 . . . 2 2 . 2 
2 . 2 . . . 2 . . . 2 . . . . 2 
2 . 2 2 2 . 2 2 2 2 2 . 2 2 2 2 
2 . . 2 2 . . . . . . . . . 2 2 
2 2 . . 2 2 2 2 2 . 2 2 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile4,sprites.castle.tilePath5,myTiles.tile1,sprites.skillmap.islandTile4,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "end-tile":
            case "tile1":return tile1;
            case "transparency16":return transparency16;
            case "myTile":
            case "tile3":return tile3;
            case "teleporter":
            case "tile4":return tile4;
            case "lilipad":
            case "tile2":return tile2;
            case "shrub":
            case "tile5":return tile5;
            case "badTile":
            case "tile6":return tile6;
            case "badTile0":
            case "tile7":return tile7;
            case "badTile1":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
