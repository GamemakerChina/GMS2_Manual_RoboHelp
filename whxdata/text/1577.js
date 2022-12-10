rh._.exports({"0":[["layer_get_depth"]],"1":[["layer_get_depth"]],"2":[["layer_get_depth"]],"3":[["\n  ","\n  "],["\n  ","You can use this function to get the ","depth"," value associated with a given layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the function will return that layers depth as a real number. Note that depth is defined as being higher the \"further away\" from the camera and lower the \"closer\" to the camera, so if you have three layers with depths -100, 0, 100, the layers will draw in the order 100, 0, -100, so that the \"top\" layer (ie, the closest to the camera view and so drawn over everything else) will be the layer with the -100 depth.","\n  ","The following image shows a schematic of how depth works for layers:","\n  ","Note that if you supply an invalid layer ID value you will get an error.","\n  "," ","\n  "],["\n  ","layer_get_depth(layer_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","String"," or ","Layer ID","\n        ","The unique ID value of the layer to get the depth of (or the layer name as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","if layer_get_depth(global.temp_layer) != -100","\n    {","\n        layer_destroy(global.temp_layer);","\n        global.temp_layer = layer_create(-100);","\n    }","\n  ","The above code checks the depth of a layer ID stored in a global variable and if it is not -100 it destroys the layer and re-creates it at the depth of -100.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_get_id_at_depth","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_get_depth"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1577"})