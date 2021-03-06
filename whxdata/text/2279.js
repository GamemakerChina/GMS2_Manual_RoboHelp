rh._.exports({"0":[["gpu_get_blendmode_ext"]],"1":[["gpu_get_blendmode_ext,bm_zero,bm_one,bm_src_colour,bm_inv_src_colour,bm_src_alpha,bm_inv_src_alpha,bm_dest_alpha,bm_inv_dest_alpha,bm_dest_colour,bm_inv_dest_colour,bm_src_alpha_sat,bm_src_color,bm_inv_src_color,bm_dest_color,bm_inv_dest_colour"]],"2":[["gpu_get_blendmode_ext,bm_zero,bm_one,bm_src_colour,bm_inv_src_colour,bm_src_alpha,bm_inv_src_alpha,bm_dest_alpha,bm_inv_dest_alpha,bm_dest_colour,bm_inv_dest_colour,bm_src_alpha_sat,bm_src_color,bm_inv_src_color,bm_dest_color,bm_inv_dest_colour"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to retrieve the current extended blend mode being used for drawing. The function returns a 2 element 1D array with the following elements in it:","\n  ","\n    ","[0] = Source ","Blend Mode Factor Constant"," (default is ","bm_src_alpha",")","\n    ","[1] = Destination ","Blend Mode Factor Constant"," (default is ","bm_inv_src_alpha",")","\n  ","\n  ","The values of the array will be one of the following constants (\"s\" denotes a value taken from the source while a \"d\" denotes a value from the destination):","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Blend Mode Factor Constant","\n      ","\n      ","\n        ","Constant","\n        ","Blend factor (Red, Green, Blue, Alpha)","\n      ","\n      ","\n        ","bm_zero","\n        ","(0, 0, 0, 0)","\n      ","\n      ","\n        ","bm_one","\n        ","(1, 1, 1, 1)","\n      ","\n      ","\n        ","bm_src_colour","\n        ","(Rs, Gs, Bs, As)","\n      ","\n      ","\n        ","bm_inv_src_colour","\n        ","(1-Rs, 1-Gs, 1-Bs, 1-As)","\n      ","\n      ","\n        ","bm_src_alpha","\n        ","(As, As, As, As)","\n      ","\n      ","\n        ","bm_inv_src_alpha","\n        ","(1-As, 1-As, 1-As, 1-As)","\n      ","\n      ","\n        ","bm_dest_alpha","\n        ","(Ad, Ad, Ad, Ad)","\n      ","\n      ","\n        ","bm_inv_dest_alpha","\n        ","(1-Ad, 1-Ad, 1-Ad, 1-Ad)","\n      ","\n      ","\n        ","bm_dest_colour","\n        ","(Rd, Gd, Bd, Ad)","\n      ","\n      ","\n        ","bm_inv_dest_colour","\n        ","(1-Rd, 1-Gd, 1-Bd, 1-Ad)","\n      ","\n      ","\n        ","bm_src_alpha_sat","\n        ","(f, f, f, 1) where f = min(As, 1-Ad)","\n      ","\n    ","\n  ","\n  ","Note that you can change these values and pass the full array to the ","gpu_set_blendmode_ext()"," function as a single argument.","\n  "," ","\n  "],["\n  ","gpu_get_blendmode_ext();","\n  "," ","\n  "],["\n  ","Array"," (2 elements only; see above for constants)","\n  "," ","\n  "],["\n  ","var bm = gpu_get_blendmode_ext();","\n    bm[0] = bm_src_alpha;","\n    gpu_set_blendmode_ext(bm);","\n  ","The above code gets the current extended blend mode, modifies the source, and then sets the extended blend mode again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_get_blendmode_ext_sepalpha","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_get_blendmode_ext"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2279"})