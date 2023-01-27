rh._.exports({"0":[[" ","tile_get_empty"]],"1":[["tile_get_empty"]],"2":[["tile_get_empty"]],"3":[[" ","tile_get_empty"]],"4":[[" ","This function can be used to check whether a given set of tile-data is for an empty tile or not. You give the tile-data, which can be retrieved using the function ","tilemap_get()",", and the function will return ","true"," if the tile is empty, or ","false"," if there is a tile index."],[" ","tile_get_empty(tiledata)"," ","Argument"," ","Type"," ","Description"," ","tiledata"," ","Tile Data"," ","the tile-data to check"],[" ","Boolean"],[" ","var lay_id = layer_get_id(\"Tiles_sky\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    for (var i = 0; i < tilemap_get_width(map_id); i++;)","\n    {","\n        for (var j = 0; j < tilemap_get_height(map_id); j++;)","\n        {","\n            var data = tilemap_get(map_id, i, j);","\n            if !tile_get_empty(data)","\n            {","\n                data = tile_set_empty(data)","\n                tilemap_set(map_id, data, i, j);","\n            }","\n        }","\n    }"," ","The above code gets the tile map ID from the given layer and then proceeds to check every tile cell on the map to see if it has data or not. If it does, the tile is set to empty."," ","Back: ","Tile Map Layers"," ","Next: ","tile_get_index"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1203"})