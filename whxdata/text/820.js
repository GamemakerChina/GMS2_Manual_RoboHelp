rh._.exports({"0":[[" ","distance_to_object"]],"1":[["distance_to_object"]],"2":[["distance_to_object"]],"3":[[" ","distance_to_object"]],"4":[[" ","This function calculates the distance from the edge of the bounding box of the calling instance to the nearest edge of the nearest instance of the object specified. The object can be an object index or a specific instance ID as well as the ","keyword"," ","other",", and the distance is returned in pixels. Note that if either of the objects have no sprite or no mask defined, the results will be incorrect."],[" ","distance_to_object(obj);"," ","Argument"," ","Type"," ","Description"," ","obj"," ","Object Asset"," or ","Instance ID"," ","The object to check for."],[" ","Real"],[" ","if (distance_to_object(obj_Player) < range)","\n    {","\n        canshoot = true;","\n    }"," ","The above code will check for the distance to the player object and if it is less than the value stored in the variable \"range\" the variable \"canshoot\" is set to true."," ","Back: ","Angles And Distance"," ","Next: ","distance_to_point"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"820"})