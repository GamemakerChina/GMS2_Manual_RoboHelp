rh._.exports({"0":[["gpu_get_tex_mip_filter_ext"]],"1":[["gpu_get_tex_mip_filter_ext,tf_point,tf_linear,tf_anisotropic"]],"2":[["gpu_get_tex_mip_filter_ext,tf_point,tf_linear,tf_anisotropic"]],"3":[["\n  ","\n  "],["\n  ","With this function you can get the current mip filter mode for a given shader sampler. You supply the index value for the shader sampler (as returned by the function ","shader_get_sampler_index()",", and the function will return one of the mode value constants listed below.","\n  "," ","\n  "],["\n  ","gpu_get_tex_mip_filter_ext(sampler_index);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","sampler_index","Shader Sampler Handle","\n        ","The index of the shader sampler to get","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Mipmapping Filter Constant"," (listed below):","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","tf_point","\n        ","This means that blending between mipmap levels is disabled, which can cause visible texture transitions, but gives the best performance.","\n      ","\n      ","\n        ","tf_linear","\n        ","This means that blending between mipmap levels is enabled (this is also known as ","trilinear filtering","), which smooths the texture transitions, but it will give a minor hit to performance.","\n      ","\n      ","\n        ","tf_anisotropic","\n        ","This means that anisotropic filtering is enabled, which greatly improves texture transition quality and can reduce the blurring visible with other filtering modes, but it has the highest hit on performance.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "],["\n  ","var _sampleIndex = shader_get_sampler_index(shd_Glass, \"s_Background\");","\n    var _spriteTex = sprite_get_texture(sprite_index, 0);","\n    shader_set(shd_Glass);","\n    if gpu_get_tex_mip_filter_ext(_sampleIndex) != tf_point","\n    {","\n        gpu_set_tex_mip_filter_ext(_sampleIndex, tf_point);","\n    }","\n    texture_set_stage(_sampleIndex , _spriteTex);","\n    shader_reset();","\n  ","The above code sets the mip filter mode to ","tf_point"," (disabling mipmapping) for the given shader texture sampler if it has not already been set.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_get_tex_mip_bias","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_get_tex_mip_filter_ext"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1968"})