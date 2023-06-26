rh._.exports({"0":[[" ","tilemap_set"]],"1":[["tilemap_set"]],"2":[[" ","tilemap_set"]],"3":[[" ","This function can be used to set any cell (grid square) within the tile map element on the layer to a new tile. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and then the tile data to set as well as the position within the tile map."," ","You can retrieve tile data using the function ","tilemap_get()"," and then use the ","tile_"," functions to change it before setting the cell using this function. Alternatively, a new tile data value can be created as 0 (which would be an ","empty tile","), or by using the positive index value of the tile you want to use. The ","tile_"," functions can still be run on such values."," ","The function will return ","true"," if the tile was successfully set and ","false"," if there was an issue and it wasn't set."],[" ","tilemap_set(tilemap_element_id, tiledata, xcell, ycell)"," ","Argument"," ","Type"," ","Description"," ","tilemap_element_id"," ","Tile Map Element ID"," ","The unique ID value of the tile map element to change"," ","tiledata"," ","Tile Data"," ","The tile data to set"," ","xcell"," ","Real"," ","The cell (grid) position to set along the x-axis"," ","ycell"," ","Real"," ","The cell (grid) position to set along the y-axis"],[" ","Boolean"],[" ","var lay_id = layer_get_id(\"Tiles_sky\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    var data = tilemap_get(map_id, 0, 0);","\n    data = tile_set_flip(data, true);","\n    tilemap_set(map_id, data, 0, 0);"," ","The above code gets the ID for the tile map on the layer \"Tiles_Sky\" and then uses that to get the data from the tile at cell (0, 0). This tile data is then flipped before being used to set the tile on the tile map again."," ","Back: ","Tile Map Layers"," ","Next: ","tilemap_set_at_pixel"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tilemap_set"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2134"})