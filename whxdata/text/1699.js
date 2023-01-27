rh._.exports({"0":[[" ","layer_sprite_speed"]],"1":[["layer_sprite_speed"]],"2":[["layer_sprite_speed"]],"3":[[" ","layer_sprite_speed"]],"4":[[" ","This function can be used to set the speed of an animating image that has been assigned to a sprite element. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you use the function ","layer_sprite_get_id()","), and then set the animation speed. If the IDE has set the animation speed for the sprite used to be calculated as Frames Per Game Frame, then the speed value given is a ","multiplier",", with 1 being the default value, and setting it to 0.5 will half the animation speed, while setting it to 1.5 will double it. However, if the IDE has set the animation speed for the sprite used to be calculated as Frames Per Second, then the speed value given is a literal frames per second value, so setting this to 5, for example, will set the animation to loop 5 frames every second that the game runs. If the sprite used has no sub-images, this function will have no effect."],[" ","layer_sprite_speed(sprite_element_id, speed);"," ","Argument"," ","Type"," ","Description"," ","sprite_element_id"," ","Sprite Element ID"," ","The unique ID value of the sprite element to change"," ","speed"," ","Real"," ","The speed multiplier/value to use for the element"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Assets_water\");","\n    var spr_id = layer_sprite_get_id(lay_id, \"gfc_water\");","\n    layer_sprite_speed(spr_id, 0.5);"," ","The above code will get the layer ID for the layer named \"Assets_water\" and then use that to get the ID of the given sprite element on that layer. This ID is then used to change the element image speed."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_xscale"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1699"})