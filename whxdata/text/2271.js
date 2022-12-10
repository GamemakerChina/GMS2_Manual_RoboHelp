rh._.exports({"0":[["ds_exists"]],"1":[["ds_exists,ds_type_priority,ds_type_queue,ds_type_grid,ds_type_stack,ds_type_list,ds_type_map"]],"2":[["ds_exists,ds_type_priority,ds_type_queue,ds_type_grid,ds_type_stack,ds_type_list,ds_type_map"]],"3":[["\n  ","\n  "],["\n  ","With this function you can check to see if a data structure of the given type exists. You supply the \"index\" value (as held in a variable) and the DS \"type\", which can be any of the constants listed below, and the function will return ","true"," if the data structure exists and ","false"," otherwise.","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","DS Type Constant","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","ds_type_map","\n        ","A ","map"," data structure","\n      ","\n      ","\n        ","ds_type_list","\n        ","A ","list"," data structure","\n      ","\n      ","\n        ","ds_type_stack","\n        ","A ","stack"," data structure","\n      ","\n      ","\n        ","ds_type_grid","\n        ","A ","grid"," data structure","\n      ","\n      ","\n        ","ds_type_queue","\n        ","A ","queue"," data structure","\n      ","\n      ","\n        ","ds_type_priority","\n        ","A ","priority"," data structure","\n      ","\n    ","\n  ","\n  ","NOTE"," You cannot use this function to check the type of a data structure, as the same index number may be used by multiple data structures of differing types.","\n  "," ","\n  "],["\n  ","ds_exists(ind, type);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","Any DS ID","\n        ","The variable index to check for the data structure","\n      ","\n      ","\n        ","type","\n        ","DS Type Constant","\n        ","The type of data structure to check for (see the list of constants above)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if !ds_exists(ai_grid, ds_type_grid)","\n    {","\n        ai_grid = ds_grid_create(room_width / 32, room_height / 32);","\n    }","\n  ","The above code checks the (previously initialised) variable \"ai_grid\" to see if it indexes a DS grid type data structure, and if it does not then it creates one and stores its index in the variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Data Structures","\n        ","Next: ","ds_set_precision","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_exists"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2271"})