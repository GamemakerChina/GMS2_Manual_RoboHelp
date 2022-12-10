rh._.exports({"0":[["gpu_get_tex_min_mip_ext"]],"1":[["gpu_get_tex_min_mip_ext"]],"2":[["gpu_get_tex_min_mip_ext"]],"3":[["\n  ","\n  "],["\n  ","With this function you can get the minimum mipmap level which is currently used for a given shader sampler. You supply the index value for the shader sampler (as returned by the function ","shader_get_sampler_index()",", and the function will return a value of 0 for full resolution, 1 for the first mipmap, 2 for the second etc...","\n  "," ","\n  "],["\n  ","gpu_get_tex_min_mip_ext(sampler_index);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","sampler_index","Shader Sampler Handle","\n        ","The index of the shader sampler to get","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real"," (default: 0)","\n  "," ","\n  "],["\n  ","var _sampleIndex = shader_get_sampler_index(shd_Glass, \"s_Background\");","\n    var _spriteTex = sprite_get_texture(sprite_index, 0);","\n    shader_set(shd_Glass);","\n    if gpu_get_tex_min_mip_ext(_sampleIndex) != 0","\n    {","\n        gpu_set_tex_min_mip_ext(_sampleIndex, 0);","\n    }","\n    texture_set_stage(_sampleIndex , _spriteTex);","\n    shader_reset();","\n  ","The above code sets the minimum mipmap level to 0 for the given shader texture sampler if it has not already been set to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_get_tex_max_mip","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_get_tex_min_mip_ext"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1106"})