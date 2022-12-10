rh._.exports({"0":[["layer_has_instance"]],"1":[["layer_has_instance"]],"2":[["layer_has_instance"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to check if a given instance is currently assigned to the given layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the instance ID of the instance to check for. You can also give an ","object_index"," (ie: the name of the object in the Asset Browser) and the function will check if any instances of that object are on the given layer. The function will return ","true"," if the instance is on the layer and ","false"," if it is not.","\n  "," ","\n  "],["\n  ","layer_has_instance(layer_id, instance_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","String"," or ","Layer ID","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n      ","\n        ","instance_id","\n        ","Instance ID","\n        ","The unique instance ID or the object index of the instance to check for","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if !layer_has_instance(global.Bullet_Layer, obj_Bullet_Parent)","\n    {","\n        layer_destroy(global.Bullet_Layer);","\n    }","\n  ","The above code will check to see if the given layer contains any instances of the object \"obj_Bullet_Parent\" and if not it will destroy the layer.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_instance_get_instance","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_has_instance"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1477"})