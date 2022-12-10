rh._.exports({"0":[["gpu_get_tex_mip_enable_ext"]],"1":[["gpu_get_tex_mip_enable_ext,mip_off,mip_on,mip_markedonly"]],"2":[["gpu_get_tex_mip_enable_ext,mip_off,mip_on,mip_markedonly"]],"3":[["\n  ","\n  "],["\n  ","With this function you can get whether mipmapping is switched off, switched on for everything or switched on only for texture groups selected in the ","Texture Group Manager"," on a shader sampler. You supply the index value for the shader sampler (as returned by the function ","shader_get_sampler_index()",", and the function will return one of the constants listed below.","\n  "," ","\n  "],["\n  ","gpu_get_tex_mip_enable_ext(sampler_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","sampler_index","\n        ","Shader Sampler Handle","\n        ","The index of the shader sampler to get","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Constant","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","mip_off","\n        ","Mipmapping is disabled.","\n      ","\n      ","\n        ","mip_on","\n        ","Mipmapping for all textures is enabled.","\n      ","\n      ","\n        ","mip_markedonly","\n        ","Mipmapping is enabled for textures that have it enabled in the Texture Group options.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","var _sampleIndex = shader_get_sampler_index(shd_Glass, \"s_Background\");","\n    var _spriteTex = sprite_get_texture(sprite_index, 0);","\n    shader_set(shd_Glass);","\n    if gpu_get_tex_mip_enable_ext(_sampleIndex) != mip_on","\n    {","\n        gpu_set_tex_mip_enable_ext(_sampleIndex, mip_on);","\n    }","\n    texture_set_stage(_sampleIndex , _spriteTex);","\n    shader_reset();","\n  ","The above code enables mipmapping for the given shader texture sampler if it has not already been enabled.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_set_tex_mip_filter","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_get_tex_mip_enable_ext"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1895"})