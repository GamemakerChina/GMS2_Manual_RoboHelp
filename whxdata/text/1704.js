rh._.exports({"0":[["tilemap_get_cell_x_at_pixel"]],"1":[["tilemap_get_cell_x_at_pixel"]],"2":[["tilemap_get_cell_x_at_pixel"]],"3":[["\n  ","\n  "],["\n  ","Using this function you can retrieve the x-axis position of an individual tile map cell by giving the relative x-axis position within the room. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()","    or when you use the function ","layer_tilemap_get_id()","), as well as the x and y position ","within the room"," and the function will return the x position of the cell within the tile map for that point.\n    Note that if the value is outside of the tile map area, and no cell is available, it will return -1.","\n  "," ","\n  "],["\n  ","tilemap_get_cell_x_at_pixel(tilemap_element_id, x, y);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","tilemap_element_id","Tile Map Element ID","\n        ","The unique ID value of the tile map element to get the cell x position of","\n     ","\n      ","\n        ","x","Real","\n        ","The x position within the room to use for getting the cell","\n     ","\n      ","\n        ","y","Real","\n        ","The y position within the room to use for getting the cell","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real"," (x-axis cell position or -1 if there is an error)","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"Tiles_Walls\");"," var map_id = layer_tilemap_get_id(lay_id);"," var _x = tilemap_get_cell_x_at_pixel(map_id, mouse_x, mouse_y);"," var _y = tilemap_get_cell_y_at_pixel(map_id, mouse_x, mouse_y);"," tiledata\n    = tilemap_get(map_id, _x, _y);","\n  ","The above code uses the retrieved tile map ID to get the cell position from a set of room coordinates and then store the data for any tile found there in an instance variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_get_cell_y_at_pixel","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["tilemap_get_cell_x_at_pixel"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1704"})