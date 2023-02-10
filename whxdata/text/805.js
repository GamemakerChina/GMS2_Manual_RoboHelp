rh._.exports({"0":[[" ","layer_get_shader"]],"1":[["layer_get_shader"]],"2":[["layer_get_shader"]],"3":[[" ","layer_get_shader"]],"4":[[" ","This function can be used to check if the given layer has a shader assigned to it. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact), and the function will return either the shader index of the shader assigned, or -1 if no shader is assigned."],[" ","layer_get_shader(layer_id)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to target (or the layer name as a string)"],[" ","Shader Asset"," or -1 (if no shader is assigned)"],[" ","if layer_get_shader(layer) == -1","\n    {","\n        layer_shader(layer, shd_Sepia);","\n    }"," ","The above code will check to see if the layer that the instance running the code has a shader assigned to it and if it doesn't one is assigned."," ","Back: ","General Layer Functions"," ","Next: ","layer_set_target_room"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"805"})