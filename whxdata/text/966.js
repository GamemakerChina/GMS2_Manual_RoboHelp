rh._.exports({"0":[[" ","layer_get_vspeed"]],"1":[["layer_get_vspeed"]],"2":[["layer_get_vspeed"]],"3":[[" ","layer_get_vspeed"]],"4":[[" ","You can use this function to retrieve the vertical speed (in pixels per game frame) of the layer within the currently scoped room. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the function returns a real number for the vertical speed, where a positive value is down and a negative value up. Default is 0 (unless set in the room editor)."],[" ","layer_get_vspeed(layer_id)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to get the vertical speed from"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Sprites\");","\n    if layer_get_hspeed(lay_id) != 0 || layer_get_vspeed(lay_id) != 0","\n    {","\n        layer_hspeed(lay_id, 0);","\n        layer_vspeed(lay_id, 0);","\n    }"," ","The above code checks the given layer horizontal and vertical speeds and if they are not both set to 0 then it is sets them to 0."," ","Back: ","General Layer Functions"," ","Next: ","layer_create"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"966"})