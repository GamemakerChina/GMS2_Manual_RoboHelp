rh._.exports({"0":[[" ","gpu_get_tex_mip_filter"]],"1":[["gpu_get_tex_mip_filter,tf_point,tf_linear,tf_anisotropic"]],"2":[["gpu_get_tex_mip_filter,tf_point,tf_linear,tf_anisotropic"]],"3":[[" ","gpu_get_tex_mip_filter"]],"4":[[" ","With this function you can get the current mip filter mode. The mode value returned by the function will be one of the constants listed below."],[" ","gpu_get_tex_mip_filter();"],[" ","Mipmapping Filter Constant"," (listed below):"," ","Mipmapping Filter Constant"," ","Constant"," ","Description"," ","tf_point"," ","This means that blending between mipmap levels is disabled, which can cause visible texture transitions, but gives the best performance."," ","tf_linear"," ","This means that blending between mipmap levels is enabled (this is also known as ","trilinear filtering","), which smooths the texture transitions, but it will give a minor hit to performance."," ","tf_anisotropic"," ","This means that anisotropic filtering is enabled, which greatly improves texture transition quality and can reduce the blurring visible with other filtering modes, but it has the highest hit on performance."],[" ","if keyboard_check(vk_enter)","\n    {","\n        switch(gpu_get_tex_mip_filter())","\n        {","\n            case tf_point: gpu_set_tex_mip_filter(tf_linear); break;","\n            case tf_linear: gpu_set_tex_mip_filter(tf_anisotropic); break;","\n            case tf_anisotropic: gpu_set_tex_mip_filter(tf_point); break;","\n        }","\n    }"," ","The above code checks the keyboard and if the specified key is pressed it will then get the current mip filter and toggle the value to the next one, cycling through the different modes."," ","Back: ","Mipmapping"," ","Next: ","gpu_get_tex_mip_filter_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1937"})