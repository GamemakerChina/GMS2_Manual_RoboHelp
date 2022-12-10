rh._.exports({"0":[["ds_grid_read"]],"1":[["ds_grid_read"]],"2":[["ds_grid_read"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to convert a string which has been created previously by the function ","ds_grid_write()"," back into a DS grid. The DS grid must have been created previously (see the example below).","\n  ","Note that if the specified DS string was written by the GameMaker: Studio 1.2.x runtime (or older), you should specify the optional argument \"legacy\", setting it to ","true"," as the string format changed after that.","\n  "," ","\n  "],["\n  ","ds_grid_read(index, string [, legacy]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","DS Grid ID","\n        ","The index of the grid to read.","\n      ","\n      ","\n        ","string","\n        ","String","\n        ","The string to read into the DS grid.","\n      ","\n      ","\n        ","legacy","\n        ","Boolean","\n        ","OPTIONAL"," Can be either ","true"," or ","false"," or omitted completely.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","grid = ds_grid_create(room_width div 32, room_height div 32);","\n    ini_open(\"Save.ini\");","\n    ds_grid_read(grid, ini_read_string(\"Save\", \"0\", \"\"));","\n    ini_close();","\n  ","The above code creates a DS grid based on the size of the room (each 32x32 square of pixels represents one grid cell) and then reads a previously saved set of grid data from an ini file into the new DS grid.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Grids","\n        ","Next: ","ds_grid_write","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_grid_read"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1368"})