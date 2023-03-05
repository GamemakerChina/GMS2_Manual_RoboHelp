rh._.exports({"0":[[" ","layer_sprite_exists"]],"1":[["layer_sprite_exists"]],"2":[["layer_sprite_exists"]],"3":[[" ","layer_sprite_exists"]],"4":[[" ","You can use this function to check and see if a sprite element exists on any given layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you use the function ","layer_sprite_get_id()",") and the function will return either ","true"," if the element exists, or ","false"," if it does not."," ","NOTE",": This function works within the scope of the current target room - by default the room in which the function is called - which can be set using the function ","layer_set_target_room()","."],[" ","layer_sprite_exists(layer_id, sprite_element_id)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to target (or the layer name as a string)"," ","sprite_element_id"," ","Sprite Element ID"," ","The unique ID value of the sprite element to check"],[" ","Boolean"],[" ","var lay_id = layer_get_id(\"Asset_Trees\");","\n    if layer_sprite_exists(lay_id, global.TreesSprites)","\n    {","\n        layer_sprite_destroy(lay_id, global.TreesSprites);","\n    }"," ","The above code checks the layer \"Asset_trees\" to see if the given sprite element exists and if it does, then it is destroyed (but not the layer)."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_create"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1831"})