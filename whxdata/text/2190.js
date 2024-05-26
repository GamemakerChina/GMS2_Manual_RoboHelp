rh._.exports({"0":[[" ","fx_set_parameter"]],"1":[["fx_set_parameter"]],"2":[["fx_set_parameter"]],"3":[[" ","fx_set_parameter"]],"4":[[" ","This function is used to change the value of a parameter in the given FX struct. You specify an FX struct (as returned from ","fx_create()"," or ","layer_get_fx()","), a parameter name as a string, and its new value. This will make your changes visible in the layer that the FX struct is assigned to."," ","You are able to pass in multiple arguments for the parameter in case it is a vector, however you can also simply specify an array as your only argument which would contain your multiple values."," ","Find the parameter names for a filter/effect on this page: ","FX Types & Parameters","."],[" ","fx_set_parameter(filter_or_effect, parameter_name, val, ...);"," ","Argument"," ","Type"," ","Description"," ","filter_or_effect"," ","FX Struct"," ","The FX struct to modify"," ","parameter_name"," ","String"," ","The name of the parameter to change the value of (as a string)"," ","val..."," ","Real"," or ","Array"," ","The new value(s) for that parameter as a real or array"],[" ","N/A"],[" ","var _fx_tint = fx_create(\"_filter_tintfilter\");","\n    fx_set_parameter(_fx_tint, \"g_TintCol\", [1, 0, 0, 1]);","\n    layer_set_fx(\"EffectLayer\", _fx_tint);"," ","The above code creates a new FX struct from the ","\"_filter_tintfilter\""," effect, which is the \"Colour Tint\" filter found in the Room Editor. It assigns a value to its ","\"g_TintCol\""," parameter which is the colour of the tint, and as it's a ","vec4"," internally, it takes an array containing four values (corresponding to its red, green, blue and alpha values). The FX struct for the tint is then applied to an FX layer."," ","Note that you are also able to pass values to the vector as separate arguments instead of an array:"," ","fx_set_parameter(_fx_tint, \"g_TintCol\", 1, 0, 0, 1);"," ","Back: ","Filter and Effect Functions"," ","Next: ","fx_set_parameters"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2190"})