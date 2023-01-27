rh._.exports({"0":[[" ","layer_sprite_yscale"]],"1":[["layer_sprite_yscale"]],"2":[["layer_sprite_yscale"]],"3":[[" ","layer_sprite_yscale"]],"4":[[" ","Using this function you can change whether the given sprite element on a layer should be scaled along the y axis or not. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you use the function ","layer_sprite_get_id()","), and then set the scale value. A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the height of the sprite used), larger values will scale up, and negative values will mirror the sprite and scale it unless the value used is exactly -1 (in which case the sprite used is just mirrored top-to-bottom about its (0, 0) position with no scaling)."],[" ","layer_sprite_yscale(sprite_element_id, yscale);"," ","Argument","Type"," ","Description"," ","sprite_element_id","Sprite Element ID"," ","The unique ID value of the sprite element to change"," ","yscale","Real"," ","The yscale value (default is 1)"],[" ","N/A"],[" ","var asset_sprite = layer_sprite_get_id(layer, \"gfc_Trees\");","\n    if layer_sprite_get_xscale(asset_sprite) != 1 || layer_sprite_get_yscale(asset_sprite) != 1","\n    {","\n        layer_sprite_xscale(asset_sprite, 1);","\n        layer_sprite_yscale(asset_sprite, 1);","\n    }"," ","The above code will check the sprite element assigned to the layer the instance running the code is on and if it is scaled in either direction it will set both the x-axis scale and y-axis scale to 1."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_angle"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1556"})