rh._.exports({"0":[["tilemap_get"]],"1":[["tilemap_get"]],"2":[["tilemap_get"]],"3":[["\n  ","\n  "],["\n  ","Using this function you can retrieve the tile data from a cell of the tile map element. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), as well as the ","cell"," x and y position and the function will return the tile data \"blob\". This data is essentially a bit mask that contains the tile index, the flip/rotate/mirror booleans and any mask data that has been applied (see ","tilemap_set_mask()"," for details), and the resulting data value can then be used in the ","tile_*"," functions to change a tiles properties. Note that we are using x/y cell positions based on the size of the tile map grid and ","not"," as a position in the room, so \"cell_x\" is a value from 0 to ","tile map width",", and \"cell_y\" is a value from 0 to ","tile map height",". If you need to get the data for a tile at a specific room position then you need to use the function ","tilemap_get_at_pixel()",".","\n  ","IMPORTANT!"," If the tiles in the tile map have been unchanged (ie: they are not rotated or flipped etc...), then the return value of the tile set data will be exactly equal to the index of the tile on the tile set. So you can create \"collision maps\" of tiles using one tile at index 1 in the tile set - for example - then use this function to check for 1 or 0 (an empty tile) to calculate collisions.","\n  "," ","\n  "],["\n  ","tilemap_get(tilemap_element_id, cell_x, cell_y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","Tile Map Element ID","\n        ","The unique ID value of the tile map element to get the tile-data of","\n      ","\n      ","\n        ","x_cell","\n        ","Real","\n        ","The cell along the x-axis to get the tile data from","\n      ","\n      ","\n        ","y_cell","\n        ","Real","\n        ","The cell along the y-axis to get the tile data from","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Tile Data"," (-1 if there is an error)","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"Tiles_sky\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    var data = tilemap_get(map_id, 0, 0);","\n    data = tile_set_flip(data, true);","\n    tilemap_set(map_id, data, 0, 0);","\n  ","The above code gets the ID for the tile map on the layer \"Tiles_Sky\" and then uses that to get the data from the tile at cell (0, 0). This tile data is then flipped before being used to set the tile on the tile map again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_get_at_pixel","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["tilemap_get"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2195"})