rh._.exports({"0":[["ds_map_write"]],"1":[["ds_map_write"]],"2":[["ds_map_write"]],"3":[["\n  ","\n  "],["\n  ","This function will turn the DS map data of the specified map into string format which can then be written to an *.ini or a *.txt file for easy storage. This string can then be later read back into a new ds_map using ","ds_map_read()",".","\n  ","NOTE",": The returned string is not a human readable string, but rather a dump of the contents of the data-structure.","\n  "," ","\n  "],["\n  ","ds_map_write(id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","id","DS Map ID","\n        ","The id of the data structure to use","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","String","\n  "," ","\n  "],["\n  ","ini_open(\"map.ini\");"," var t_string;"," t_string = ds_map_write(inventory);"," ini_write_string(\"Saved\", \"0\", t_string);"," ini_close();\n  ","\n  ","The above code opens an ini file ready to be written to. It then uses ","ds_map_write()"," to generate a string which is stored in the temporary variable \"t_string\". Finally, it writes that string to the ini file before closing it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_destroy","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_map_write"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"710"})