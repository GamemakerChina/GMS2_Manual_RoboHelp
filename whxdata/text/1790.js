rh._.exports({"0":[["layer_tilemap_get_id"]],"1":[["layer_tilemap_get_id"]],"2":[["layer_tilemap_get_id"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to retrieve the unique ID value of the tile map element on a layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the function will return the ID value associated with the tile map element on the layer. Note that this function is specifically designed for use with tile maps that have been added in the IDE, as if you add a tile map to a layer through code using the function ","layer_tilemap_create()",", then it will return the unique ID for the tile map element added. If the given tilemap ID is incorrect or the tilemap doesn't exist, the function will return -1.","\n  "," ","\n  "],["\n  ","layer_tilemap_get_id(layer_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","String"," or ","Layer ID","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Tile Map Element ID"," or -1","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"tilemap_trees\");","\n    var tile_id = layer_tilemap_get_id(lay_id);","\n    layer_tilemap_destroy(tile_id);","\n  ","The above code will get the layer ID for the layer named \"tilemap_trees\" and then use that to get the ID of the tile map element on that layer. This ID is then used to remove the tile map from the layer.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","layer_tilemap_exists","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_tilemap_get_id"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1790"})