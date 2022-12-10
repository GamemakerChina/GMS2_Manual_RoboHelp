rh._.exports({"0":[["layer_get_vspeed"]],"1":[["layer_get_vspeed"]],"2":[["layer_get_vspeed"]],"3":[["\n  ","\n  "],["\n  ","You can use this function to retrieve the vertical speed (in pixels per game frame) of the layer within the currently scoped room. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the function returns a real number for the vertical speed, where a positive value is down and a negative value up. Default is 0 (unless set in the room editor).","\n  "," ","\n  "],["\n  ","layer_get_vspeed(layer_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","String"," or ","Layer ID","\n        ","The unique ID value of the layer to get the vertical speed from","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"Sprites\");","\n    if layer_get_hspeed(lay_id) != 0 || layer_get_vspeed(lay_id) != 0","\n    {","\n        layer_hspeed(lay_id, 0);","\n        layer_vspeed(lay_id, 0);","\n    }","\n  ","The above code checks the given layer horizontal and vertical speeds and if they are not both set to 0 then it is sets them to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_create","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_get_vspeed"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1047"})