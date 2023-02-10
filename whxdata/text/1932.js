rh._.exports({"0":[[" ","layer_tilemap_create"]],"1":[["layer_tilemap_create"]],"2":[["layer_tilemap_create"]],"3":[[" ","layer_tilemap_create"]],"4":[[" ","With this function you can assign a tile-set resource to a layer to be used as a tile map in your project. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and then an initial (x, y) position to add the tile map to the room, the tile set resource to use, and then the width and height of the tile map in ","cells"," (ie: a width of 20 and a height of 10 will create a tile map with 200 cells that is 20 cells wide and 10 cells tall), with the size of the cells themselves being defined by the tile set chosen. It is worth noting that you cannot place tiles at negative positions within the tile map, so all tiles must be placed within the cell spaces 0 to width - 1, 0 to height - 1."],[" ","layer_tilemap_create(layer_id, x, y, tileset, width, height)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to target (or the layer name as a string)"," ","x"," ","Real"," ","The x position of the tile map in the room"," ","y"," ","Real"," ","The y position of the tile map in the room"," ","tileset"," ","Tile Set Asset"," ","The Tile Set asset to be used"," ","width"," ","Real"," ","The width tile map (in cells)"," ","height"," ","Real"," ","The height of the tile map (in cells)"],[" ","Tile Map Element ID"],[" ","global.back_layer = layer_create(10000);","\n    global.back_tiles = layer_tilemap_create(global.back_layer, 0, 0, tmap_Trees, 16, 32);"," ","The above code creates a new layer and then adds a new tile map element to it, setting the tile map position to (0,0) as well as the tile set to be used and the width and height of the tile map."," ","Back: ","Tile Map Layers"," ","Next: ","layer_tilemap_destroy"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1932"})