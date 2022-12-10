rh._.exports({"0":[["layer_tilemap_create"]],"1":[["layer_tilemap_create"]],"2":[["layer_tilemap_create"]],"3":[["\n  ","\n  "],["\n  ","With this function you can assign a tile-set resource to a layer to be used as a tile map in your project. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and then an initial (x, y) position to add the tile map to the room, the tile set resource to use, and then the width and height of the tile map in ","cells"," (ie: a width of 20 and a height of 10 will create a tile map with 200 cells that is 20 cells wide and 10 cells tall), with the size of the cells themselves being defined by the tile set chosen. It is worth noting that you cannot place tiles at negative positions within the tile map, so all tiles must be placed within the cell spaces 0 to width - 1, 0 to height - 1.","\n  "," ","\n  "],["\n  ","layer_tilemap_create(layer_id, x, y, tileset, width, height)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","String"," or ","Layer ID","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x position of the tile map in the room","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y position of the tile map in the room","\n      ","\n      ","\n        ","tileset","\n        ","Tile Set Asset","\n        ","The Tile Set asset to be used","\n      ","\n      ","\n        ","width","\n        ","Real","\n        ","The width tile map (in cells)","\n      ","\n      ","\n        ","height","\n        ","Real","\n        ","The height of the tile map (in cells)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Tile Map Element ID","\n  "," ","\n  "],["\n  ","global.back_layer = layer_create(10000);","\n    global.back_tiles = layer_tilemap_create(global.back_layer, 0, 0, tmap_Trees, 16, 32);","\n  ","The above code creates a new layer and then adds a new tile map element to it, setting the tile map position to (0,0) as well as the tile set to be used and the width and height of the tile map.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","layer_tilemap_destroy","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_tilemap_create"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1944"})