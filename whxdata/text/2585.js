rh._.exports({"0":[[" ","gpu_set_blendmode_ext_sepalpha"]],"1":[["gpu_set_blendmode_ext_sepalpha,bm_zero,bm_one,bm_src_colour,bm_inv_src_colour,bm_src_alpha,bm_inv_src_alpha,bm_dest_alpha,bm_inv_dest_alpha,bm_dest_colour,bm_inv_dest_colour,bm_src_alpha_sat,bm_src_color,bm_inv_src_color,bm_dest_color,bm_inv_dest_colour"]],"2":[["gpu_set_blendmode_ext_sepalpha,bm_zero,bm_one,bm_src_colour,bm_inv_src_colour,bm_src_alpha,bm_inv_src_alpha,bm_dest_alpha,bm_inv_dest_alpha,bm_dest_colour,bm_inv_dest_colour,bm_src_alpha_sat,bm_src_color,bm_inv_src_color,bm_dest_color,bm_inv_dest_colour"]],"3":[[" ","gpu_set_blendmode_ext_sepalpha"]],"4":[[" ","When ","GameMaker"," goes to draw a pixel there is a source colour (the colour of the pixel we're going to draw) and a destination colour(the colour that's already in the pixel we're drawing to), so when determining the new colour of the pixel, the source and destination colours are calculated according to the chosen blend mode. Each component of the colours is stored as a floating point value between 0 and 1, and the new colour is calculated by multiply each component of the source colour by some factor and by multiplying each component of destination colour by some other factor and then adding the results together component by component."," ","This function permits you to set the different component parts that should be factored together to create a custom blend mode, selecting different parts of different blend mode factors for the RGB components and the Alpha component. So the \"src\" and \"dest\" argument will use the first 3 blend mode values (RGB) and the \"alphasrc\" and \"alphadest\" arguments will take the last part of the blend mode factor. For example, if you have the RGB source as ","bm_zero",", then (0, 0, 0) will be used. If you then set the Alpha source as bm_one then (1) will be used, giving a final source blend mode of (0, 0, 0, 1)."," ","The following chart shows the RGBA values for each blend mode, where (Rs, Gs, Bs, As) are considered the source values and (Rd, Gd, Bd, Ad) are the destination values. The eleven constants that are available for use can be either source or destination (or both) when used in this function."," ","Constant"," ","Blend factor (Red, Green, Blue, Alpha)"," ","bm_zero"," ","(0, 0, 0, 0)"," ","bm_one"," ","(1, 1, 1, 1)"," ","bm_src_colour"," ","(Rs, Gs, Bs, As)"," ","bm_inv_src_colour"," ","(1-Rs, 1-Gs, 1-Bs, 1-As)"," ","bm_src_alpha"," ","(As, As, As, As)"," ","bm_inv_src_alpha"," ","(1-As, 1-As, 1-As, 1-As)"," ","bm_dest_alpha"," ","(Ad, Ad, Ad, Ad)"," ","bm_inv_dest_alpha"," ","(1-Ad, 1-Ad, 1-Ad, 1-Ad)"," ","bm_dest_colour"," ","(Rd, Gd, Bd, Ad)"," ","bm_inv_dest_colour"," ","(1-Rd, 1-Gd, 1-Bd, 1-Ad)"," ","bm_src_alpha_sat"," ","(f, f, f, 1) where f = min(As, 1-Ad)"," ","IMPORTANT!"," HTML5 without WebGL enabled will ","not"," be able to display use following modes correctly:"," ","bm_src_colour"," ","bm_inv_src_colour"," ","bm_dest_colour"," ","bm_inv_dest_colour"," ","bm_src_alpha_sat"," ","Note that you can either supply four individual arguments to this function or you can supply an array of arguments (as returned by the function ","gpu_get_blendmode_ext_sepalpha()"," for example). If supplying an array it should have the following four elements:"," ","[0] = Source blend mode minus the alpha component (default is ","bm_src_alpha"," (As, As, As))"," ","[1] = Destination blend mode minus the alpha component (default is ","bm_inv_src_alpha"," (1-As, 1-As, 1-As))"," ","[2] = Source alpha component (default is ","bm_src_alpha"," (As))"," ","[3] = Destination alpha component (default is ","bm_inv_src_alpha"," (1-As))"," ","To help you get the most from blend modes and to help understand how they work and how they affect the final image being drawn to the screen, we recommend that you read the following guide:"," ","Guide To Using Blendmodes"],[" ","gpu_set_blendmode(src, dest, alphasrc, alphadest);"," ","Argument"," ","Type"," ","Description"," ","src"," ","Blend Mode Factor Constant"," ","Source blend mode factor for RGB (see constants above)."," ","dest"," ","Blend Mode Factor Constant"," ","Destination blend mode factor for RGB (see constants above)"," ","alphasrc"," ","Blend Mode Factor Constant"," ","Source blend mode factor Alpha (see constants above)."," ","alphadest"," ","Blend Mode Factor Constant"," ","Destination blend mode factor Alpha (see constants above)"],[" ","N/A"],[" ","var bm = gpu_get_blendmode_ext_sepalpha();","\n    bm[0] = bm_src_alpha;","\n    bm[1] = bm_inv_src_alpha;","\n    gpu_set_blendmode_ext_sepalpha(bm);"," ","The above code creates a local array and gets the current extended blend mode with separate alpha values. This array is then manipulated and returned to set the blend mode."," ","Back: ","GPU Control"," ","Next: ","gpu_set_colourwriteenable"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2585"})