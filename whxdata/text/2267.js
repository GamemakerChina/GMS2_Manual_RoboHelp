rh._.exports({"0":[[" ","instance_place_list"]],"1":[["instance_place_list"]],"2":[["instance_place_list"]],"3":[[" ","instance_place_list"]],"4":[[" ","With this function you can check a position for a collision with all instances of an object using the collision mask of the instance that runs the code for the check. When you use this you are effectively asking ","GameMaker"," to move the instance to the new position, check for a collision, then move back and tell you if a collision was found or not. This will work for precise collisions, but only if both the instance and the instances of the object being checked for have precise collision masks selected, otherwise only bounding box collisions are applied."," ","You supply a ","DS list"," too, so the ","id"," values of any instances that are colliding with the calling instance will be added to the end of the given list. You can ","clear"," the list before calling this function so that it only contains results from this function call. You also have the option to order the list based on the distance from the origin of the instance doing the checking to the origin of the instances found to be in collision."," ","Note that the function also accepts the special keyword ","all",", in which case all instances found to be in collision will be listed. The function returns the number of instances found, or 0 if none are found."],[" ","instance_place_list(x, y, obj, list, ordered);"," ","Argument"," ","Type"," ","Description"," ","x"," ","Real"," ","The x position to check for instances."," ","y"," ","Real"," ","The y position to check for instances."," ","obj"," ","Object Asset"," or ","Instance ID"," ","The object to check for instances of."," ","list"," ","DS List ID"," ","The DS list to use to store the IDs of colliding instances."," ","ordered"," ","Boolean"," ","Whether the list should be ordered by distance (","true",") or not (","false",")."],[" ","Real"," (The number of instances found to be in collision)"],[" ","var _list = ds_list_create();","\n    var _num = instance_place_list(x, y, obj_Enemy, _list, false);"," ","\n    if _num > 0","\n    {","\n        for (var i = 0; i < _num; ++i;)","\n        {","\n            instance_destroy(_list[| i]);","\n        }","\n    }"," ","\n    ds_list_destroy(_list);\n  "," ","The above code will check for a collision with all instances found at the calling instances position. These will be added to a DS list, which is then looped through to destroy each of the instances in collision."," ","Back: ","Instances"," ","Next: ","instance_position"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2267"})