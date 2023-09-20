rh._.exports({"0":[[" ","gpu_get_tex_max_mip"]],"1":[["gpu_get_tex_max_mip"]],"2":[[" ","gpu_get_tex_max_mip"]],"3":[[" ","With this function you can get the currently set maximum mipmap level which is to be used, where a value of 0 is the highest resolution, 1 is to use the first mipmap, 2 is the second etc... Note that this can be quite useful for avoiding bleeding artifacts when rendering textures, for example, setting the texture page border to 8px and then setting the max mipmap level to 3 will ensure you don't get any bleeding problems at greater render distances."],[" ","gpu_get_tex_max_mip();"],[" ","Real"," (default: 16)"],[" ","if gpu_get_tex_max_mip() != 4","\n    {","\n        gpu_set_tex_max_mip(4);","\n    }"," ","The above code will check the current maximum mipmap level and if it is not 4 it is set to 4."," ","Back: ","Mipmapping"," ","Next: ","gpu_get_tex_max_mip_ext"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_get_tex_max_mip"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"223"})