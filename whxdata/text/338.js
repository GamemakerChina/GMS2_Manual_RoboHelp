rh._.exports({"0":[[" ","layer_reset_target_room"]],"1":[["layer_reset_target_room"]],"2":[["layer_reset_target_room"]],"3":[[" ","layer_reset_target_room"]],"4":[[" ","This function is used to reset the layer target to the current room. See the function ","layer_set_target_room()"," for further information."],[" ","layer_reset_target_room()"],[" ","N/A"],[" ","layer_set_target_room(rm_Game);","\n    var l = layer_get_id(\"SpriteAssets\");","\n    repeat(50)","\n    {","\n        layer_sprite_create(l, irandom(1000), irandom(1000), spr_Trees);","\n    }","\n    layer_reset_target_room();"," ","The above code sets the target room to the room \"rm_Game\" and then gets the layer ID for the layer called \"SpriteAssets\" in that room. This layer ID is then used to add 50 random sprite assets to the layer, before the layer target is reset to the current room."," ","Back: ","General Layer Functions"," ","Next: ","layer_exists"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"338"})