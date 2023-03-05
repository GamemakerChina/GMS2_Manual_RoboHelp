rh._.exports({"0":[[" ","layer_tilemap_destroy"]],"1":[["layer_tilemap_destroy"]],"2":[["layer_tilemap_destroy"]],"3":[[" ","layer_tilemap_destroy"]],"4":[[" ","This function will destroy the given tile map element. You supply the tile map ID (which you get when you create the tile map using ","layer_tilemap_create()"," or when you use the layer ID along with ","layer_get_tilemap_id()",") and this will remove it. Note that this does ","not"," remove the layer, only the tile map from it, and if the tile map is one that has been added in the room editor, then the next time you leave the room and then return, the tile map will be recreated again. However if the room is persistent, the tile map will be removed unless room persistence is switched off again."],[" ","layer_tilemap_destroy(tilemap_element_id)"," ","Argument"," ","Type"," ","Description"," ","tilemap_element_id"," ","Tile Map Element ID"," ","The unique ID value of the tile map to be destroyed"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Tiles_trees\");","\n    var tile_id = layer_tilemap_get_id(lay_id);","\n    if layer_tilemap_exists(lay_id, tile_id)","\n    {","\n        layer_tilemap_destroy(tile_id);","\n    }"," ","The above code checks the layer \"Tiles_trees\" to see if the given tile map element exists and if it does, then it is destroyed (but not the layer)."," ","Back: ","Tile Map Layers"," ","Next: ","tilemap_tileset"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1220"})