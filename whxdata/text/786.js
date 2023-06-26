rh._.exports({"0":[[" ","tilemap_get_x"]],"1":[["tilemap_get_x"]],"2":[[" ","tilemap_get_x"]],"3":[[" ","Using this function you can retrieve the x position (within the room) of the tile map element. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()","    or when you use the function ","layer_tilemap_get_id()","), and the function will return the x-axis position."],[" ","tilemap_get_x(tilemap_element_id);"," ","Argument","Type"," ","Description"," ","tilemap_element_id","Tile Map Element ID"," ","The unique ID value of the tile map element to get the x position of"],[" ","Real"],[" ","var lay_id = layer_get_id(\"Tiles_Walls\");"," var map_id = layer_tilemap_get_id(lay_id);"," var _x = tilemap_get_x(map_id);"," var _y = tilemap_get_y(map_id);"," tilemap_x(map_id, _x + 10); tilemap_y(map_id, _y + 10);"," ","The above code uses the retrieved tile map ID to get the tile x and y position of the tile map and then uses those values to move it."," ","Back: ","Tile Map Layers"," ","Next: ","tilemap_get_y"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tilemap_get_x"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"786"})