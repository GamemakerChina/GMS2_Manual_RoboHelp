rh._.exports({"0":[[" ","collision_circle_list"]],"1":[["collision_circle_list"]],"2":[["collision_circle_list"]],"3":[[" ","collision_circle_list"]],"4":[[" ","This function is the same as the ","collision_circle()"," function, only instead of just detecting one instance in collision at a time, it will detect multiple instances. You supply the x/y position of the center of the circular area to check along with the radius and the object to check for, and you can set the check to be precise (in which case all instances being checked will need to have ","precise"," collision masks) and whether the check should include the calling instance or not."," ","You supply a ","DS list"," too, so the ","id"," values of any instances that are colliding with the calling instance will be added to the end of the given list. You can ","clear"," the list before calling this function so that it only contains results from this function call. You also have the option to order the instances based on their distances from the origin of the circular area to their origins. The function returns the number of instances found, or 0 if none are found."," ","Note that instead of an object index you can supply the ","instance keyword"," ","all",", to check for all instances in the current room, which may include the instance running the code (depending on the ","notme"," argument)."],[" ","collision_circle_list(x1, y1, rad, obj, prec, notme, list, ordered);"," ","Argument"," ","Type"," ","Description"," ","x1"," ","Real"," ","The x coordinate of the center of the circle to check."," ","y1"," ","Real"," ","The y coordinate of the center of the circle to check."," ","rad"," ","Real"," ","The radius (distance in pixels from its center to its edge)."," ","obj"," ","Object Asset"," or ","Instance ID"," ","The object to check for instance collisions."," ","prec"," ","Boolean"," ","Whether the check is based on precise collisions (","true",", which is slower) or its bounding box in general (","false",", faster)."," ","notme"," ","Boolean"," ","Whether the calling instance, if relevant, should be excluded (","true",") or not (","false",")."," ","list"," ","DS List ID"," ","The DS list to use to store the IDs of colliding instances."," ","ordered"," ","Boolean"," ","Whether the list should be ordered by distance (","true",") or not (","false",")."],[" ","Real"," (The number of instances found to be in collision)"],[" ","var _list = ds_list_create();","\n    var _num = collision_circle_list(x, y, 100, obj_Enemy, false, true, _list, false);","\n    if (_num > 0)","\n    {","\n        for (var i = 0; i < _num; ++i;)","\n        {","\n            instance_destroy(_list[| i]);","\n        }","\n    }","\n    ds_list_destroy(_list);"," ","The code above will check a circular area with a 100 pixel radius around the calling instance position for collisions with instances of \"obj_Enemy\". If there are any collisions, then the pre-created list is looped through and each instance that was in the collision is destroyed."," ","Back: ","Collisions"," ","Next: ","collision_ellipse"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2369"})