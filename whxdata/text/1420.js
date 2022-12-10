rh._.exports({"0":[["layer_background_get_sprite"]],"1":[["layer_background_get_sprite"]],"2":[["layer_background_get_sprite"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to get the current sprite index value of the background element. You give the background element ID (which you get when you create a background element using ","layer_background_create()"," or when you use the function ","layer_background_get_id()","), and the function will return a real value that represents the sprite index being shown. If the element has no sprite assigned, the function will return -1.","\n  "," ","\n  "],["\n  ","layer_background_get_sprite(background_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","background_element_id","Background Element ID","\n        ","The unique ID value of the background element to get the information from","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Sprite Asset"," or -1","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"Background_sky\");","\n    var back_id = layer_background_get_id(lay_id);","\n    if layer_background_get_sprite(back_id) != spr_Clouds","\n    {","\n        layer_background_sprite(back_id, spr_Clouds);","\n    }","\n  ","The above code will get the layer ID for the layer named \"Background_sky\" and then use that to get the ID of the background element on that layer. This ID is then used to check the sprite assigned to the element, setting it to the sprite \"spr_Clouds\" if it is not already.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_get_htiled","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_background_get_sprite"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1420"})