rh._.exports({"0":[["tilemap_get_mask"]],"1":[["tilemap_get_mask"]],"2":[["tilemap_get_mask"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to retrieve the bit mask value for the given tile map. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and the function will return the current mask value or -1 if there is an error or 0 if no mask is specified. For further information on tile map bit masks, see the function ","tilemap_set_mask()",".","\n  "," ","\n  "],["\n  ","tilemap_get_mask(tilemap_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","Tile Map Element ID","\n        ","The unique ID value of the tile map element to get the mask of","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real"," (0 for no mask, -1 for an error)","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"Tiles_sky\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    var mask = tilemap_get_mask(map_id);","\n    var new_mask = tile_mirror | tile_flip | tile_rotate | 255;","\n    if mask != new_mask","\n    {","\n        tilemap_set_mask(map_id, new_mask);","\n    }","\n  ","The above code gets the tile map ID from the given layer and then checks the mask value associated with it. If it is not the same as the value defined in the variable \"new_mask\", then it is set to that value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_get_global_mask","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["tilemap_get_mask"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1367"})