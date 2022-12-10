rh._.exports({"0":[["gpu_get_tex_max_aniso"]],"1":[["gpu_get_tex_max_aniso"]],"2":[["gpu_get_tex_max_aniso"]],"3":[["\n  ","\n  "],["\n  ","With this function you can get the current maximum level of anisotropy when using the ","tf_anisotropic"," filter mode (see ","gpu_get_tex_mip_filter()"," for more information). The returned value will range between 1 and 16.","\n  "," ","\n  "],["\n  ","gpu_get_tex_max_aniso();","\n  "," ","\n  "],["\n  ","Real"," (default: 16)","\n  "," ","\n  "],["\n  ","if gpu_get_tex_max_aniso() != 8","\n    {","\n        gpu_set_tex_max_aniso(8);","\n    }","\n  ","The above code will check the current maximum anisotropic filtering level and if it is not 8 it is set to 8.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_get_tex_max_aniso_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_get_tex_max_aniso"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"134"})