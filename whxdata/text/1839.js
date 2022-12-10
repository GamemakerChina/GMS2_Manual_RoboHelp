rh._.exports({"0":[["layer_get_fx"]],"1":[["layer_get_fx"]],"2":[["layer_get_fx"]],"3":[["\n  ","\n  "],["\n  ","This function is used to retrieve the FX struct for a layer. You specify either the ID or the name of the layer you want to target and the function will return a struct containing information on its applied effect. This struct will be similar to the struct you get from ","fx_create()",", and the functions ","fx_get_parameter","/","s"," and ","fx_set_parameter","/","s"," can be used on it to read and modify its parameters.","\n  ","If the specified layer has no filters/effects applied to it, the function will return -1.","\n  "," ","\n  "],["\n  ","layer_get_fx(layer_name_or_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_name_or_id","\n        ","String"," or ","Layer ID","\n        ","The name or ID of the layer to read","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","FX Struct"," (or -1 if not found)","\n  "," ","\n  "],["\n  ","var layers = layer_get_all();","\n    for(var i = 0; i < array_length(layers); i ++)","\n    {    ","\n        var layer_fx = layer_get_fx(layers[i]);","\n        ","\n        if (layer_fx != -1)","\n        {","\n            if (fx_get_name(layer_fx) == \"_filter_tintfilter\")","\n            {            ","\n                fx_set_parameter(_fx_tint, \"g_TintCol\", [0, 0, 1, 1]);","\n            }","\n        }","\n    }","\n  ","The above code runs a ","for"," loop through all the layers present in the room, and checks each layer for an FX struct. If a layer has an FX struct, it checks the name of that filter/effect by calling ","fx_get_name()"," on it; if it's equal to ","\"_filter_tintfilter\""," meaning that it's a \"Colour Tint\" filter, it changes its tint colour to blue.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Filter and Effect Functions","\n        ","Next: ","layer_clear_fx","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_get_fx"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1839"})