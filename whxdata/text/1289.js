rh._.exports({"0":[[" ","layer_sprite_get_blend"]],"1":[["layer_sprite_get_blend"]],"2":[["layer_sprite_get_blend"]],"3":[[" ","layer_sprite_get_blend"]],"4":[[" ","This function can be used to get the blend colour of the sprite element. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you use the function ","layer_sprite_get_id()","), and the function will return real value that represents the colour assigned."],[" ","layer_sprite_get_blend(sprite_element_id);"," ","Argument","Type"," ","Description"," ","sprite_element_id","Sprite Element ID"," ","The unique ID value of the sprite element to get the information from"],[" ","Colour"],[" ","var lay_id = layer_get_id(\"sprite_sky\");","\n    var back_id = layer_sprite_get_id(lay_id, \"Clouds\");","\n    if layer_sprite_get_blend(back_id) == c_white","\n    {","\n        layer_sprite_blend(back_id, make_colour_rgb(random(255), random(255), 255));","\n    }"," ","The above code will get the layer ID for the layer named \"sprite_sky\" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the element blend colour and if it is equivalent to the constant ","c_white",", then the element blend is set to a random colour."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_get_alpha"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1289"})