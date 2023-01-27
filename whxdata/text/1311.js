rh._.exports({"0":[[" ","layer_sprite_get_index"]],"1":[["layer_sprite_get_index"]],"2":[["layer_sprite_get_index"]],"3":[[" ","layer_sprite_get_index"]],"4":[[" ","This function can be used to get the current image index value of the sprite element. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you use the function ","layer_sprite_get_id()","), and the function will return real value that represents the image index being shown for the sprite. The function will return -1 if either the sprite element doesn't exist or the element doesn't have a valid sprite assigned to it."],[" ","layer_sprite_get_index(sprite_element_id);"," ","Argument","Type"," ","Description"," ","sprite_element_id","Sprite Element ID"," ","The unique ID value of the sprite element to get the information from"],[" ","Real"," or -1"],[" ","var lay_id = layer_get_id(\"sprite_sky\");","\n    var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");","\n    if layer_sprite_get_index(spr_id) < 4","\n    {","\n        layer_sprite_index(spr_id, 4);","\n    }"," ","The above code will get the layer ID for the layer named \"sprite_sky\" and then use that to get the ID of the sprite element on that layer. This ID is then used to check if the image index for the element is less than 4, and if so it is set to 4."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_get_speed"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1311"})