rh._.exports({"0":[[" ","tile_get_index"]],"1":[["tile_get_index"]],"2":[["tile_get_index"]],"3":[[" ","tile_get_index"]],"4":[[" ","This function can be used to get the tile index (the position of the tile within the tile set image) from a set of tile-data. You specify the tile-data, which can be retrieved using the function ","tilemap_get()",", and the function will return an integer value for the index."," ","When using this function, ensure that the given tile-data is valid, otherwise the returned index value will not be valid either which may result in unexpected behaviour."],[" ","tile_get_index(tiledata)"," ","Argument"," ","Type"," ","Description"," ","tiledata"," ","Tile Data"," ","the tile-data to check"],[" ","Real"],[" ","var lay_id = layer_get_id(\"Tiles_sky\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    var mx = tilemap_get_cell_x_at_pixel(map_id, mouse_x, mouse_y);","\n    var my = tilemap_get_cell_y_at_pixel(map_id, mouse_x, mouse_y);","\n    var data = tilemap_get(map_id, mx, my);","\n    var ind = tile_get_index(data);","\n    data = tile_set_index(data, irandom(23));","\n    tilemap_set(map_id, data, mx, my);"," ","The above code gets the tile map ID from the given layer and then uses that to get the tile-data for the cell under the mouse position. This data is then used to set the tile index to a random number."," ","Back: ","Tile Map Layers"," ","Next: ","tile_get_flip"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1189"})