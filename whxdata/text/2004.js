rh._.exports({"0":[["fx_set_parameters"]],"1":[["fx_set_parameters"]],"2":[["fx_set_parameters"]],"3":[["\n  ","\n  "],["\n  ","This function is used to change the parameters of a filter/effect. You specify an FX struct (as returned from ","fx_create()"," or ","layer_get_fx()",") and a struct containing its parameters (as returned from ","fx_get_parameters()","). This will make your changes visible in the layer that the FX struct is assigned to.","\n  ","Your parameter struct is not required to contain every parameter that is applicable to the filter/effect, and only the variables that are present in the given struct will be updated for the filter/effect.","\n  "," ","\n  "],["\n  ","fx_set_parameters(filter_or_effect, parameter_struct);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","filter_or_effect","FX Struct","\n        ","The FX struct to modify","\n     ","\n      ","\n        ","parameter_struct","Struct","\n        ","A struct containing the parameters for the filter/effect","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var _fx_struct = layer_get_fx(\"TintEffect\");","\n    ","\n    if (_fx_struct != -1)","\n    {","\n        var _params = fx_get_parameters(_fx_struct);","\n        var _osc = sin(current_time / 1000);","\n        _params.g_TintCol = [_osc, 0.3 + _osc, 0.6 + _osc, 1];","\n    ","\n        fx_set_parameters(_fx_struct, _params);","\n    }\n  ","\n  ","The above code gets the FX struct for a layer that is assumed to have the \"Colour Tint\" filter applied to it, and retrieves its parameter struct by calling ","fx_get_parameters()",". After that it creates an oscillating value by using ","sin()"," and ","current_time",", which is then used for the RGBA values for the tint effect so it keeps animating. The RGBA array is assigned to the ","g_TintCol"," variable in the parameter struct, and the struct is then applied back to the FX struct by calling ","fx_set_parameters()",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Filter and Effect Functions","\n        ","Next: ","fx_set_single_layer","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["fx_set_parameters"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2004"})