rh._.exports({"0":[[" ","layer_x"]],"1":[["layer_x"]],"2":[["layer_x"]],"3":[[" ","layer_x"]],"4":[[" ","You can use this function to set the x position of the layer within the currently scoped room. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the function will move the layer the given number of pixels along the horizontal axis of the room."],[" ","layer_x(layer_id, x)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to set the x position of"," ","x"," ","Real"," ","The x position in the room to set the layer to"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Sprites\");","\n    if layer_get_x(lay_id) != 0 || layer_get_y(lay_id) != 0","\n    {","\n        layer_x(lay_id, 0);","\n        layer_y(lay_id, 0);","\n    }"," ","The above code checks the given layer position and if it is not set to (0, 0) then it is set to that position."," ","Back: ","General Layer Functions"," ","Next: ","layer_y"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"854"})