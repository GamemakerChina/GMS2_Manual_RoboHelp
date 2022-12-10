rh._.exports({"0":[["collision_line_list"]],"1":[["collision_line_list"]],"2":[["collision_line_list"]],"3":[["\n  ","\n  "],["\n  ","This function is the same as the ","collision_line()"," function, only instead of just detecting one instance in collision at a time, it will detect multiple instances. You supply the x/y positions of the start and end of the line to check along with the object to check for, and you can set the check to be precise (in which case all instances being checked will need to have ","precise"," collision masks) and whether the check should include the calling instance or not.","\n  ","You supply a ","DS list"," too, so the ","id"," values of any instances that are colliding with the calling instance will be added to the end of the given list. You can ","clear"," the list before calling this function so that it only contains results from this function call. You also have the option to order the instances based on their distances from the centre of the line to their origins. The function returns the number of instances found, or 0 if none are found.","\n  ","Note that instead of an object index you can supply the ","instance keyword"," ","all",", to check for all instances in the current room, which may include the instance running the code (depending on the ","notme"," argument).","\n  "," ","\n  "],["\n  ","collision_line_list(x1, y1, x2, y2, obj, prec, notme, list, ordered);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","Real","\n        ","The x coordinate of the start of the line.","\n      ","\n      ","\n        ","y1","\n        ","Real","\n        ","The y coordinate of the start of the line.","\n      ","\n      ","\n        ","x2","\n        ","Real","\n        ","The x coordinate of the end of the line.","\n      ","\n      ","\n        ","y2","\n        ","Real","\n        ","The y coordinate of the end of the line.","\n      ","\n      ","\n        ","obj","\n        ","Object Asset"," or ","Instance ID","\n        ","The object or instance to check for.","\n      ","\n      ","\n        ","prec","\n        ","Boolean","\n        ","Whether the check is based on precise collisions (","true",", which is slower) or its bounding box in general (","false",", faster).","\n      ","\n      ","\n        ","notme","\n        ","Boolean","\n        ","Whether the calling instance, if relevant, should be excluded (","true",") or not (","false",").","\n      ","\n      ","\n        ","list","\n        ","DS List ID","\n        ","The DS list to use to store the IDs of colliding instances.","\n      ","\n      ","\n        ","ordered","\n        ","Boolean","\n        ","Whether the list should be ordered by distance (","true",") or not (","false",").","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real"," (The number of instances found to be in collision)","\n  "," ","\n  "],["\n  ","var _list = ds_list_create();","\n    var _num = collision_line_list(x - 100, y, x + 100, y, obj_Enemy, false, true, _list, false);","\n    if _num > 0","\n    {","\n        for (var i = 0; i < _num; ++i;)","\n        {","\n            instance_destroy(_list[| i]);","\n        }","\n    }","\n    ds_list_destroy(_list);","\n  ","The code above will check a line 100 pixels either side of the calling instance position for collisions with instances of \"obj_Enemy\". If there are any collisions, then the pre-created list is looped through and each instance that was in the collision is destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Collisions","\n        ","Next: ","collision_point","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["collision_line_list"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2431"})