rh._.exports({"0":[["texture_set_stage"]],"1":[["texture_set_stage"]],"2":[["texture_set_stage"]],"3":[["\n  ","\n  "],["\n  ","This function will set the given stage \"slot\" a texture to be used. The number of stage \"slots\" available will depend on the platform you are compiling to, with a maximum of 8 being available for Windows, Mac and Linux, but on lower end Android devices (for example) this number can be as low as 2. It is also worth noting that the first stage slot (1) is always used automatically by ","GameMaker",".","\n  ","NOTE",": This function will do nothing outside of the context of a running shader! See ","Shaders ","for more information.","\n  "," ","\n  "],["\n  ","texture_set_stage(stage, tex);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","stage","\n        ","Real","\n        ","The texture \"slot\" to use.","\n      ","\n      ","\n        ","tex","\n        ","Texture","\n        ","The texture to use.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","glassshader_bgsampler = shader_get_sampler_index(GlassShader, \"s_BackgroundSampler\")","\n    spr = sprite_get_texture(sprite_index, 0);","\n    shader_set(GlassShader);","\n    texture_set_stage(glassshader_bgsampler, spr);","\n    shader_reset();","\n  ","The above code will get the ","handle"," for the sampler within the shader indexed as \"GlassShader\" and then set that shader constant to the given sprite texture.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Textures","\n        ","Next: ","texture_global_scale","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["texture_set_stage"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1291"})