rh._.exports({"0":[["tilemap_get_tile_width"]],"1":[["tilemap_get_tile_width"]],"2":[["tilemap_get_tile_width"]],"3":[["\n  ","\n  "],["\n  ","Using this function you can retrieve the width (in pixels) of each tile cell of the tile map element. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()","    or when you use the function ","layer_tilemap_get_id()","), and the function will return the tile set cell width.","\n  "," ","\n  "],["\n  ","tilemap_get_tile_width(tilemap_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","tilemap_element_id","Tile Map Element ID","\n        ","The unique ID value of the tile map element to get the tile cell width of","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"Tiles_Walls\");"," var map_id = layer_tilemap_get_id(lay_id);"," global.snap_x = tilemap_get_tile_width(map_id);"," global.snap_y = tilemap_get_tile_height(map_id);","\n  ","The above code uses the retrieved tile map ID to get the tile cell width and height and use them to set two global variables.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_get_tile_height","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["tilemap_get_tile_width"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"921"})