rh._.exports({"0":[[" ","layer_sprite_blend"]],"1":[["layer_sprite_blend"]],"2":[["layer_sprite_blend"]],"3":[[" ","layer_sprite_blend"]],"4":[[" ","This function controls the blending (or \"tinting\") of the sprite sprite and the default value is -1 (which represents the constant ","c_white",", which can also be used). Any other value (including internal colour constants like ","c_red",",\n    or ","c_aqua",") will blend the specified colour with the original sprite. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you use\n    the function ","layer_sprite_get_id()","), and then set the blending colour to use. Below you can see an example of a sprite that has been blended with different colours:"," ","Please note that you should try to limit blending on the ","HTML5"," platform (unless using WebGL),\n    as each blended sprite has to be cached separately and so having many blended sprites may adversely affect performance (you can also set the cache size using the function ","sprite_set_cache_size()",")."],[" ","layer_sprite_blend(sprite_element_id, blend);"," ","Argument","Type"," ","Description"," ","sprite_element_id","Sprite Element ID"," ","The unique ID value of the sprite element to change"," ","blend","Colour"," ","The colour to blend with the sprite sprite (default is ","c_white",")"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Asset_sky\");"," var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");"," layer_sprite_blend(spr_id, c_gray);"," ","The above code gets the ID value of the sprite called \"Clouds\" assigned to the layer \"Asset_sky\" and then tints it to a colour."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_alpha"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1862"})