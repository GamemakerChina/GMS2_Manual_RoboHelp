rh._.exports({"0":[["ds_map_set"]],"1":[["ds_map_set"]],"2":[["ds_map_set"]],"3":[["\n  ","\n  "],["\n  ","With this function you can set the value of a key within a given DS map. You supply the DS map ID value (as returned by the function ","ds_map_create()","), then give the key you want to set and the value to set it to. Keys can be integers or strings, and if the given key does not exist then it will be created for you and set to the value. This function is the same as using the ","DS map accessor"," to set/create a map key/value pair. The function does not return anything, so if you need to check if the key value has been replaced or a new key has been created, then you should use the function ","ds_map_replace()",".","\n  "," ","\n  "],["\n  ","ds_map_set(id, key, value)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","id","DS Map ID","\n        ","The id of the map to use.","\n     ","\n      ","\n        ","key","String","\n        ","The key to set.","\n     ","\n      ","\n        ","value","Any","\n        ","The value to set the key to.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if is_undefined(ds_map_find_value(map, \"score\"))","\n    {","\n        ds_map_set(map, \"score\", 0);","\n    }","\n  ","The above code will check to see if the given key exists and if it doesn't then it is created and set.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_read","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_map_set"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1228"})