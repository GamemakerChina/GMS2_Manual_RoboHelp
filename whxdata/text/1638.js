rh._.exports({"0":[["layer_get_script_begin"]],"1":[["layer_get_script_begin"]],"2":[["layer_get_script_begin"]],"3":[["\n  ","\n  "],["\n  ","You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and this function will return the ","script function"," index of the function assigned to run at the beginning of rendering for that layer, or it will return -1 if no function is assigned. You can assign script functions to a layer with ","layer_script_begin()"," and ","layer_script_end()",".","\n  "," ","\n  "],["\n  ","layer_get_script_begin(layer_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","String"," or ","Layer ID","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Script Function"," or -1 (if no function is assigned)","\n  "," ","\n  "],["\n  ","if layer_get_script_begin(layer) == -1","\n    {","\n        layer_script_begin(layer, scr_SetShaderValues);","\n    }","\n  ","The above code will check to see if the layer that the instance running the code has a script function assigned to it and if it doesn't one is assigned.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_get_script_end","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_get_script_begin"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1638"})