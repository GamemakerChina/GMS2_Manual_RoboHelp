rh._.exports({"0":[["draw_tilemap"]],"1":[["draw_tilemap"]],"2":[["draw_tilemap"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to draw a given tilemap anywhere in the room. You give the tilemap element ID (which you get when you create a tilemap element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), then give the x/y position for drawing (in the room). Note that this will simply draw the tilemap at the specified point, using the layer depth of the instance that is calling the function. It does ","not"," move the tilemap - nor change it in any way - and does not matter if the tilemap is flagged as visible or not.","\n  "," ","\n  "],["\n  ","draw_tilemap(tilemap_element_id, x, y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","Tile Map Element ID","\n        ","The unique ID value of the tilemap element to draw","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x position within the room to draw at","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y position within the room to draw at","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"Tiles_Effects\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    draw_tilemap(map_id, mouse_x, mouse_y);","\n  ","The above code gets the layer ID then uses that to get a specific tilemap ID which in turn is used to draw the tilemap at the mouse's position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprites And Tiles","\n        ","Next: ","draw_self","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_tilemap"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1810"})