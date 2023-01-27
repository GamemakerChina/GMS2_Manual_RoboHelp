rh._.exports({"0":[[" ","layer_sprite_get_x"]],"1":[["layer_sprite_get_x"]],"2":[["layer_sprite_get_x"]],"3":[[" ","layer_sprite_get_x"]],"4":[[" ","This function can be used to get the x position of the sprite element in the room. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you use the function ","layer_sprite_get_id()","), and the function will return the x position value."],[" ","layer_sprite_get_x(sprite_element_id);"," ","Argument","Type"," ","Description"," ","sprite_element_id","Sprite Element ID"," ","The unique ID value of the sprite element to get the information from"],[" ","Real"],[" ","var lay_id = layer_get_id(\"sprite_sky\");","\n    var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");","\n    if layer_sprite_get_x(spr_id) < 0","\n    {","\n        layer_sprite_x(spr_id, room_width);","\n    }"," ","The above code will get the layer ID for the layer named \"sprite_sky\" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the element x position and if it is less than 0, then the layer element is moved to a different x position."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_get_y"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1058"})