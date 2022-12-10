rh._.exports({"0":[["fx_create"]],"1":[["fx_create"]],"2":[["fx_create"]],"3":[["\n  ","\n  "],["\n  ","This function is used to create a new FX Struct for a given effect type, which can then be ","applied to a layer",".","\n  ","The names of the Filters/Effects that you can pass into this function are listed on this page: ","FX Types & Parameters",".","\n  "],["\n  ","You can read the parameters for the created effect by calling ","fx_get_parameter","/","s"," on the returned struct, and assign new values to them by calling ","fx_set_parameter","/","s",".","\n  ","Note that the struct returned by this function will contain no visible members and can only be modified through one of the ","Filter/Effect Functions",".","\n  "],["\n  ","The function will return -1 if the struct failed to create for any reason; this may happen if the specified FX name was wrong or the FX was not loaded into the game package.","\n  ","To ensure that this function works properly, make sure the FX you need is loaded into your game package, as explained on the ","Filter and Effect Functions"," page:","\n  ","\n    ","\n  ","Please note that there are currently only two ways to ensure that GameMaker loads a particular filter/effect in your game:","\n  ","\n    ","By adding the filter/effect in ","at least one room"," through the IDE","\n    ","By calling ","fx_create()"," with the filter/effect name as a string ","literal","\n  ","\n  ","This means that to use a specific filter/effect at runtime, it must have either been added into a room first (so GameMaker knows you are going to use it) or specified explicitly in an ","fx_create()"," call.","\n\n","\n  ","\n  ","If these conditions are not fulfilled, i.e. you are not passing in a string literal ","and"," the filter/effect is not present in any rooms, then the function will not be able to load that filter/effect and will return -1.","\n  "," ","\n  "," ","\n  "],["\n  ","fx_create(filter_or_effect_name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","filter_or_effect_name","\n        ","String","\n        ","The name of the filter/effect to create (get them from ","FX Types & Parameters",").","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","FX Struct"," or -1 (on failure)","\n  "," ","\n  "],["\n  ","var _fx_tint = fx_create(\"_filter_tintfilter\");","\n    fx_set_parameter(_fx_tint, \"g_TintCol\", [1, 0, 0, 1]);","\n    layer_set_fx(\"EffectLayer\", _fx_tint);","\n  ","The above code creates a new FX struct from the ","\"_filter_tintfilter\""," effect, which is the \"Colour Tint\" filter found in the Room Editor. It assigns a value to its ","\"g_TintCol\""," parameter which is the colour of the tint, and as it's a ","vec4"," internally, it takes an array containing four values (corresponding to its red, green, blue and alpha values). The FX struct for the tint is then applied to an FX layer.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Filter and Effect Functions","\n        ","Next: ","fx_get_parameter","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["fx_create"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Usage"],["Function Failures"]],"id":"2226"})