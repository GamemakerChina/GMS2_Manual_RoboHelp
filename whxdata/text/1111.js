rh._.exports({"0":[["tile_get_flip"]],"1":[["tile_get_flip"]],"2":[["tile_get_flip"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to check whether in a given set of tile-data the tile has been flipped or not. You give the tile-data, which can be retrieved using the function ","tilemap_get()",", and the function will return ","true"," if the tile is flipped, or ","false"," if not.","\n  "," ","\n  "],["\n  ","tile_get_flip(tiledata)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","tiledata","\n        ","Tile Data","\n        ","the tile-data to check","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"Tiles_sky\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    var mx = tilemap_get_cell_x_at_pixel(map_id, mouse_x, mouse_y);","\n    var my = tilemap_get_cell_y_at_pixel(map_id, mouse_x, mouse_y);","\n    var data = tilemap_get(map_id, mx, my);","\n    var bool = !tile_get_flip(data);","\n    data = tile_set_flip(data, bool);","\n    tilemap_set(map_id, data, mx, my);","\n  ","The above code gets the tile map ID from the given layer and then gets the x and y cell position for the tile under the mouse. This position is then used to get the tile-data which is flipped and then used to set the tile again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tile_get_mirror","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["tile_get_flip"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1111"})