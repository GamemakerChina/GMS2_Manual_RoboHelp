rh._.exports({"0":[["ds_map_is_list"]],"1":[["ds_map_is_list"]],"2":[["ds_map_is_list"]],"3":[["\n  ","\n  "],["\n  ","With this function you can check to see if a ","DS list"," is stored in the given map key. If the given key contains a DS list ID, then the function will return ","true"," otherwise it will return ","false",".","\n  ","Note that this will only detect lists that were added using the"," ","ds_map_add_list()"," ","function.","\n  "," ","\n  "],["\n  ","ds_map_is_list(id, key)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","id","DS Map ID","\n        ","The id of the map to use.","\n     ","\n      ","\n        ","key","String","\n        ","The key to check.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","var size = ds_map_size(inventory);","\n    var key = ds_map_find_first(inventory);","\n    for (var i = 0; i < size; i++)","\n    {","\n        if ds_map_is_list(inventory, key)","\n        {","\n            ds_list_destroy(inventory[? key]);","\n        }","\n        key = ds_map_find_next(inventory);","\n    }","\n    ds_map_destroy(inventory);","\n  ","The above code loops through a DS map and checks to see if any of the keys within it are for a DS list. If they are, then the DS list is destroyed, and the at the end of the loop the DS map is destroyed too.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_is_map"," "," ","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_map_is_list"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1360"})