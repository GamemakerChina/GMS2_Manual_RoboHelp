rh._.exports({"0":[["gpu_get_tex_max_mip"]],"1":[["gpu_get_tex_max_mip"]],"2":[["gpu_get_tex_max_mip"]],"3":[["\n  ","\n  "],["\n  ","With this function you can get the currently set maximum mipmap level which is to be used, where a value of 0 is the highest resolution, 1 is to use the first mipmap, 2 is the second etc... Note that this can be quite useful for avoiding bleeding artifacts when rendering textures, for example, setting the texture page border to 8px and then setting the max mipmap level to 3 will ensure you don't get any bleeding problems at greater render distances.","\n  "," ","\n  "],["\n  ","gpu_get_tex_max_mip();","\n  "," ","\n  "],["\n  ","Real"," (default: 16)","\n  "," ","\n  "],["\n  ","if gpu_get_tex_max_mip() != 4","\n    {","\n        gpu_set_tex_max_mip(4);","\n    }","\n  ","The above code will check the current maximum mipmap level and if it is not 4 it is set to 4.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_get_tex_max_mip_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_get_tex_max_mip"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"276"})