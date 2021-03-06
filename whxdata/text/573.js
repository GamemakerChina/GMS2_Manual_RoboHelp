rh._.exports({"0":[["gpu_set_tex_mip_bias"]],"1":[["gpu_set_tex_mip_bias"]],"2":[["gpu_set_tex_mip_bias"]],"3":[["\n  ","\n  "],["\n  ","With this function you can set the mipmap bias value, where a value of 0 equals no bias, 1 equals the first mipmap, 2 equals the second mipmap etc... This controls the rate at which the mip map is swapped and will generally make rendered textures blurrier the higher the value and the greater the \"distance\" being viewed. Note that this function can take negative values too, in which case rendered textures will be sharper over a greater distance the lower the value.","\n  "," ","\n  "],["\n  ","gpu_set_tex_mip_bias(bias);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","bias","Real","\n        ","The mipmap bias value to use (default: 0)","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if gpu_get_tex_mip_bias() != 0","\n    {","\n        gpu_set_tex_mip_bias(0);","\n    }","\n  ","The above code will check the current mipmap bias and if it is not 0 it is set to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_set_tex_mip_bias_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_set_tex_mip_bias"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"573"})