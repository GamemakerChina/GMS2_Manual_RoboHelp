rh._.exports({"0":[["fx_set_single_layer"]],"1":[["fx_set_single_layer"]],"2":[["fx_set_single_layer"]],"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","This function is used to enable or disable \"Single Layer\" mode for a filter/effect. By default, a filter/effect is applied to the layer that it is ","assigned to"," and all layers below that layer, however you can enable Single Layer mode on an FX struct to make sure that it's only applied to the layer that it is assigned to.","\n  ","You specify an FX struct (as returned from ","fx_create()"," or ","layer_get_fx()",") and a ","boolean"," value to enable (","true",") or disable (","false",") Single Layer mode.","\n  ","The following visual shows a filter being used with Single Layer mode disabled (which is the default behaviour for all FX layers) and the same filter with Single Layer mode enabled:","\n  ","\n    ","\n      ","Single Layer Mode OFF","\n    ","\n    ","\n      ","Single Layer Mode ON","\n    ","\n  ","\n  ","NOTE"," When you enable Single Layer mode for an FX, make sure that you apply it to a layer that is not an ","FX layer",", because an FX layer by itself contains nothing and so no filter/effect will be visible.","\n  "," ","\n  "],["\n  ","fx_set_single_layer(filter_or_effect, enable);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","filter_or_effect","FX Struct","\n        ","The FX struct to modify","\n     ","\n      ","\n        ","enable","Boolean","\n        ","A ","boolean"," value to enable (","true",") or disable (","false",") Single Layer Mode","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","shake_fx = fx_create(\"_filter_screenshake\");","\n    fx_set_single_layer(shake_fx, true);","\n    layer_set_fx(\"ShakeyThings\", shake_fx);","\n  ","The above code creates a new screenshake FX, enables Single Layer mode on it and then applies it to a room layer. This means that the screenshake filter will only be applied to the ","\"ShakeyThings\""," layer.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Filter and Effect Functions","\n        ","Next: ","layer_set_fx","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["fx_set_single_layer"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2255"})