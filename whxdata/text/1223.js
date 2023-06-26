rh._.exports({"0":[[" ","texture_set_stage"]],"1":[["texture_set_stage"]],"2":[[" ","texture_set_stage"]],"3":[[" ","This function will set the given stage \"slot\" a texture to be used. The number of stage \"slots\" available will depend on the platform you are compiling to, with a maximum of 8 being available for Windows, Mac and Linux, but on lower end Android devices (for example) this number can be as low as 2. It is also worth noting that the first stage slot (1) is always used automatically by ","GameMaker","."," ","NOTE",": This function will do nothing outside of the context of a running shader! See ","Shaders ","for more information."],[" ","texture_set_stage(stage, tex);"," ","Argument"," ","Type"," ","Description"," ","stage"," ","Real"," ","The texture \"slot\" to use."," ","tex"," ","Texture"," ","The texture to use."],[" ","N/A"],[" ","glassshader_bgsampler = shader_get_sampler_index(GlassShader, \"s_BackgroundSampler\")","\n    spr = sprite_get_texture(sprite_index, 0);","\n    shader_set(GlassShader);","\n    texture_set_stage(glassshader_bgsampler, spr);","\n    shader_reset();"," ","The above code will get the ","handle"," for the sampler within the shader indexed as \"GlassShader\" and then set that shader constant to the given sprite texture."," ","Back: ","Textures"," ","Next: ","texture_global_scale"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["texture_set_stage"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1223"})