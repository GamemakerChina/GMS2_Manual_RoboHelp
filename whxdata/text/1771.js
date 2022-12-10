rh._.exports({"0":[["layer_sprite_get_sprite"]],"1":[["layer_sprite_get_sprite"]],"2":[["layer_sprite_get_sprite"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to get the current sprite index of the sprite element. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create"," or when you use the function ","layer_sprite_get_id","), and the function will return a real value that represents the sprite index being shown. If the element has no sprite assigned, the function will return -1.","\n  "," ","\n  "],["\n  ","layer_sprite_get_sprite","(sprite_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","sprite_element_id","\n        ","Sprite Element ID","\n        ","The unique ID value of the sprite element to get the information from","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Sprite Asset"," or -1","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"sprite_sky\");","\n    var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");","\n    if ","layer_sprite_get_sprite","(spr_id) != spr_Clouds","\n    {","\n        layer_sprite_change(spr_id, spr_Clouds);","\n    }","\n  ","The above code will get the layer ID for the layer named \"sprite_sky\" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the sprite assigned to the element, setting it to the sprite \"spr_Clouds\" if it is not already.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Layers","\n        ","Next: ","layer_sprite_get_index","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_sprite_get_sprite"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1771"})