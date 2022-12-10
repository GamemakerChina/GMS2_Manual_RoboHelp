rh._.exports({"0":[["layer_set_target_room"]],"1":[["layer_set_target_room"]],"2":[["layer_set_target_room"]],"3":[["\n  ","\n  "],["\n  ","When you call this function you are telling ","GameMaker"," that ","all further layer functions should be applied to the given room",". In this way you can procedurally change or generate layers and layer contents in a room that is not the current room. When you are finished adding layers or layer elements to a room, call the function ","layer_reset_target_room()"," to reset the room target (or call this function again with a room argument of -1). Note that this function can only be used on ","rooms other than the current room",", and is designed so that you can add/remove layers and layer elements to rooms other than the room that is currently running.","\n  ","WARNING!"," While targeting another room, you can use all the regular layer functions ","except"," you cannot create instances using ","instance_create_layer()"," or ","instance_create_depth()",", nor will the layer function ","layer_add_instance()"," be available.","\n  "," ","\n  "],["\n  ","layer_set_target_room(room)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","room","Room Asset","\n        ","The room to target for all further layer functions","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","layer_set_target_room(rm_Game);","\n    var l = layer_get_id(\"SpriteAssets\");","\n    repeat(50)","\n    {","\n        var _x = irandom(1000);","\n        var _y = irandom(1000);","\n        layer_sprite_create(l, _x, _y, spr_Trees);","\n    }","\n    layer_reset_target_room();","\n  ","The above code sets the target room to the room \"rm_Game\" and then gets the layer ID for the layer called \"SpriteAssets\" in that room. This layer ID is then used to add 50 random sprite assets to the layer, before the layer target is reset to the current room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_get_target_room","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_set_target_room"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1872"})