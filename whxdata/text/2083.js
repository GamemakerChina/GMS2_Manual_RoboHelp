rh._.exports({"0":[["layer_set_fx"]],"1":[["layer_set_fx"]],"2":[["layer_set_fx"]],"3":[["\n  ","\n  "],["\n  ","This function is used to assign an FX struct to a Room Layer. You specify either the ID or the name of the layer you want to modify, and then an FX struct (as returned from ","fx_create()"," or ","layer_get_fx()",") which will be applied to the specified layer, making the effect visible in the room.","\n  ","If you specify a layer that is not a Filter/Effect Layer but is of another type (such as an Instance Layer, Asset Layer, Tile Layer, etc.) then the effect will be applied to the contents of that layer as well as to any layers below it.","\n  ","If the specified layer already has an FX struct assigned to it, it will be replaced by the new one.","\n  ","NOTE"," Calling this function at the root level of a script will do nothing, as scripts are executed before the first room loads. You can set a ","target room"," first and then call this function.","\n  "," ","\n  "],["\n  ","layer_set_fx(layer_name_or_id, filter_or_effect);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_name_or_id","\n        ","String"," or ","Layer ID","\n        ","The name or ID of the layer to modify","\n      ","\n      ","\n        ","filter_or_effect","\n        ","FX Struct","\n        ","The FX struct to apply to the layer","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var _fx_tint = fx_create(\"_filter_tintfilter\");","\n    fx_set_parameter(_fx_tint, \"g_TintCol\", [1, 0, 0, 1]);","\n    layer_set_fx(\"EffectLayer\", _fx_tint);","\n  ","The above code creates a new FX struct from the ","\"_filter_tintfilter\""," effect, which is the \"Colour Tint\" filter found in the Room Editor. It assigns a value to its ","\"g_TintCol\""," parameter which is the colour of the tint, and as it's a ","vec4"," internally, it takes an array containing four values (corresponding to its red, green, blue and alpha values). The FX struct for the tint is then applied to an FX layer.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Filter and Effect Functions","\n        ","Next: ","layer_get_fx","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_set_fx"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2083"})