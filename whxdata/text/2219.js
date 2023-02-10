rh._.exports({"0":[[" ","fx_create"]],"1":[["fx_create"]],"2":[["fx_create"]],"3":[[" ","fx_create"]],"4":[[" ","This function is used to create a new FX Struct for a given effect type, which can then be ","applied to a layer","."," ","The names of the Filters/Effects that you can pass into this function are listed on this page: ","FX Types & Parameters","."],[" ","You can read the parameters for the created effect by calling ","fx_get_parameter","/","s"," on the returned struct, and assign new values to them by calling ","fx_set_parameter","/","s","."," ","Note that the struct returned by this function will contain no visible members and can only be modified through one of the ","Filter/Effect Functions","."],[" ","The function will return -1 if the struct failed to create for any reason; this may happen if the specified FX name was wrong or the FX was not loaded into the game package."," ","To ensure that this function works properly, make sure the FX you need is loaded into your game package, as explained on the ","Filter and Effect Functions"," page:"," ","Please note that there are currently only two ways to ensure that GameMaker loads a particular filter/effect in your game:"," ","By adding the filter/effect in ","at least one room"," through the IDE"," ","By calling ","fx_create()"," with the filter/effect name as a string ","literal"," ","This means that to use a specific filter/effect at runtime, it must have either been added into a room first (so GameMaker knows you are going to use it) or specified explicitly in an ","fx_create()"," call."," ","If these conditions are not fulfilled, i.e. you are not passing in a string literal ","and"," the filter/effect is not present in any rooms, then the function will not be able to load that filter/effect and will return -1."],[" ","fx_create(filter_or_effect_name);"," ","Argument"," ","Type"," ","Description"," ","filter_or_effect_name"," ","String"," ","The name of the filter/effect to create (get them from ","FX Types & Parameters",")."],[" ","FX Struct"," or -1 (on failure)"],[" ","var _fx_tint = fx_create(\"_filter_tintfilter\");","\n    fx_set_parameter(_fx_tint, \"g_TintCol\", [1, 0, 0, 1]);","\n    layer_set_fx(\"EffectLayer\", _fx_tint);"," ","The above code creates a new FX struct from the ","\"_filter_tintfilter\""," effect, which is the \"Colour Tint\" filter found in the Room Editor. It assigns a value to its ","\"g_TintCol\""," parameter which is the colour of the tint, and as it's a ","vec4"," internally, it takes an array containing four values (corresponding to its red, green, blue and alpha values). The FX struct for the tint is then applied to an FX layer."," ","Back: ","Filter and Effect Functions"," ","Next: ","fx_get_parameter"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"8":[[" ","Usage"],[" ","Function Failures"]],"id":"2219"})