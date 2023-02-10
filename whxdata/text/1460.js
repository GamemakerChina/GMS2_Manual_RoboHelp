rh._.exports({"0":[[" ","fx_get_name"]],"1":[["fx_get_name"]],"2":[["fx_get_name"]],"3":[[" ","fx_get_name"]],"4":[[" ","This function is used to retrieve the name of a filter/effect from its struct. You specify the FX struct to read (as returned from ","fx_create()"," or ","layer_get_fx()",") and the function returns its name as a string. This name can then be passed into ","fx_create()"," to create a new FX struct using the same filter/effect type."],[" ","fx_get_name(filter_or_effect);"," ","Argument","Type"," ","Description"," ","filter_or_effect","FX Struct"," ","The FX struct to get the name of"],[" ","String"],[" ","var layers = layer_get_all();","\n    for(var i = 0; i < array_length(layers); i ++)","\n    {    ","\n        var layer_fx = layer_get_fx(layers[i]);"," ","\n        if (layer_fx != -1)","\n        {","\n            if (fx_get_name(layer_fx) == \"_filter_tintfilter\")","\n            {            ","\n                fx_set_parameter(_fx_tint, \"g_TintCol\", [0, 0, 1, 1]);","\n            }","\n        }","\n    }"," ","The above code runs a ","for"," loop through all the layers present in the room, and checks each layer for an FX struct. If a layer has an FX struct, it checks the name of that filter/effect by calling ","fx_get_name()"," on it; if it's equal to ","\"_filter_tintfilter\""," meaning that it's a \"Colour Tint\" filter, it changes its tint colour to blue."," ","Back: ","Filter and Effect Functions"," ","Next: ","fx_get_parameter_names"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1460"})