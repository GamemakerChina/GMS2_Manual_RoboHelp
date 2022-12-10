rh._.exports({"0":[["surface_get_target_ext"]],"1":[["surface_get_target_ext"]],"2":[["surface_get_target_ext"]],"3":[["\n  ","\n  "],["\n  ","This function will retrieve the surface ID assigned to one of the 4 render targets available to surfaces. You supply the index of the render target to check, and the function will return -1 if no surface is assigned, or an integer value >= 0, representing the ID of the surface assigned (as returned by the function ","surface_create()",").","\n  "," ","\n  "],["\n  ","surface_get_target_ext(index);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","index","Real","\n        ","The render target index to check (from 0 to 3).","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Surface ID"," or -1 (if no target surface is set)","\n  "," ","\n  "],["\n  ","if surface_get_target_ext(0) == -1","\n    {","\n        surface_set_target_ext(0, global.Surf);","\n    }","\n  ","The above code will first check and see if the shader render target 0 has been set to a surface, and if not, then one is assigned.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","surface_reset_target","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["surface_get_target_ext"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"667"})