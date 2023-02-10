rh._.exports({"0":[[" ","gpu_set_tex_mip_bias"]],"1":[["gpu_set_tex_mip_bias"]],"2":[["gpu_set_tex_mip_bias"]],"3":[[" ","gpu_set_tex_mip_bias"]],"4":[[" ","With this function you can set the mipmap bias value, where a value of 0 equals no bias, 1 equals the first mipmap, 2 equals the second mipmap etc... This controls the rate at which the mip map is swapped and will generally make rendered textures blurrier the higher the value and the greater the \"distance\" being viewed. Note that this function can take negative values too, in which case rendered textures will be sharper over a greater distance the lower the value."],[" ","gpu_set_tex_mip_bias(bias);"," ","Argument","Type"," ","Description"," ","bias","Real"," ","The mipmap bias value to use (default: 0)"],[" ","N/A"],[" ","if gpu_get_tex_mip_bias() != 0","\n    {","\n        gpu_set_tex_mip_bias(0);","\n    }"," ","The above code will check the current mipmap bias and if it is not 0 it is set to 0."," ","Back: ","Mipmapping"," ","Next: ","gpu_set_tex_mip_bias_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"542"})