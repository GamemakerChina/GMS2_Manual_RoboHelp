rh._.exports({"0":[[" ","layer_hspeed"]],"1":[["layer_hspeed"]],"2":[["layer_hspeed"]],"3":[[" ","layer_hspeed"]],"4":[[" ","You can use this function to set the horizontal speed (in pixels per game frame) of the layer within the currently scoped room. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the speed value to set, where a positive value is to the right and a negative value to the left."],[" ","layer_hspeed(layer_id, hspd)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to set the horizontal speed of"," ","hspd"," ","Real"," ","The horizontal speed (in pixels per game frame) to set"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Sprites\");","\n    if layer_get_hspeed(lay_id) != 0 || layer_get_vspeed(lay_id) != 0","\n    {","\n        layer_hspeed(lay_id, 0);","\n        layer_vspeed(lay_id, 0);","\n    }"," ","The above code checks the given layer horizontal and vertical speeds and if they are not both set to 0 then it is sets them to 0."," ","Back: ","General Layer Functions"," ","Next: ","layer_vspeed"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1054"})