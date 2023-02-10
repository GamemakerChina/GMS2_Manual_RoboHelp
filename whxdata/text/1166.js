rh._.exports({"0":[[" ","layer_get_id"]],"1":[["layer_get_id"]],"2":[["layer_get_id"]],"3":[[" ","layer_get_id"]],"4":[[" ","This function can be used to get the unique ID value for a given ","layer",". In the IDE, all layers have a name and a type, and to be able to edit or change them through code you must give the ","layer ID"," value. This function is used to retrieve this ID by using the name (a string) of the layer (as written in the IDE). If you create a new layer through code using the function ","layer_create()"," then that function will return the unique ID value instead (dynamical created layers do not get names). Note that if you give the name of a layer that does not exist in the current room, then you will get an error and the project will crash."],[" ","layer_get_id(layer_name)"," ","Argument","Type"," ","Description"," ","layer_name","String"," ","The name of the layer (a string)"],[" ","Layer ID"," or -1 (if the layer specified doesn't exist)"],[" ","var near = instance_nearest(x, y, obj_Tree);","\n    var layer_id = layer_get_id(\"Instances Front\");","\n    layer_add_instance(layer_id, near);"," ","The above code will first get the index of the nearest instance to the given x/y position and store it in a local variable. It then gets the unique instance layer ID for the layer named \"Instances Front\", and moves the found instance onto that layer."," ","Back: ","General Layer Functions"," ","Next: ","layer_get_depth"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1166"})