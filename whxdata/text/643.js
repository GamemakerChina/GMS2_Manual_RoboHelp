rh._.exports({"0":[[" ","surface_get_target_ext"]],"1":[["surface_get_target_ext"]],"2":[["surface_get_target_ext"]],"3":[[" ","surface_get_target_ext"]],"4":[[" ","This function will retrieve the surface ID assigned to one of the 4 render targets available to surfaces. You supply the index of the render target to check, and the function will return -1 if no surface is assigned, or an integer value >= 0, representing the ID of the surface assigned (as returned by the function ","surface_create()",")."],[" ","surface_get_target_ext(index);"," ","Argument","Type"," ","Description"," ","index","Real"," ","The render target index to check (from 0 to 3)."],[" ","Surface ID"," or -1 (if no target surface is set)"],[" ","if surface_get_target_ext(0) == -1","\n    {","\n        surface_set_target_ext(0, global.Surf);","\n    }"," ","The above code will first check and see if the shader render target 0 has been set to a surface, and if not, then one is assigned."," ","Back: ","Surfaces"," ","Next: ","surface_reset_target"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"643"})