rh._.exports({"0":[[" ","gpu_set_blendmode"]],"1":[["gpu_set_blendmode,bm_normal,bm_add,bm_subtract,bm_max"]],"2":[["gpu_set_blendmode,bm_normal,bm_add,bm_subtract,bm_max"]],"3":[[" ","gpu_set_blendmode"]],"4":[[" ","When ","GameMaker"," goes to draw a pixel there is a source colour (the colour of the pixel we're going to draw) and a destination colour(the colour that's already in the pixel we're drawing to), so when determining the new colour of the pixel, the source and destination colours are calculated according to the chosen blend mode. Each component of the colours is stored as a floating point value between 0 and 1, and the new colour is calculated by multiply each component of the source colour by some factor and by multiplying each component of destination colour by some other factor and then adding the results together component by component."," ","This function permits you to set the blend mode in four basic ways using the following constants:"," ","Constant"," ","Description"," ","Extended Blend Mode"," ","bm_normal"," ","Normal blending (the default blend mode)."," ","(","bm_src_alpha",", ","bm_inv_src_alpha",")"," ","bm_add"," ","Additive blending. Luminosity values of light areas are added."," ","(","bm_src_alpha",", ","bm_one",")"," ","bm_subtract"," ","Subtractive blending. Luminosity values of light areas are subtracted."," ","(","bm_zero",", ","bm_inv_src_colour",")"," ","bm_max"," ","Max blending. Similar to additive blending."," ","(","bm_src_alpha",", ","bm_inv_src_colour",")"," ","As you can see from the above table, these four blend modes are really composites of ","extended"," blend modes which can be found on the page describing ","gpu_set_blendmode_ext()","."," ","To help you get the most from blend modes and to help understand how they work and how they affect the final image being drawn to the screen, we recommend that you read the following guide:"," ","Guide To Using Blendmodes"],[" ","gpu_set_blendmode(mode);"," ","Argument"," ","Type"," ","Description"," ","mode"," ","Blend Mode Constant"," ","The blend mode to use (see the table above)"],[" ","N/A"],[" ","gpu_set_blendmode(bm_add);","\n    draw_circle_colour(100, 100, 50, c_white, c_black, 0);","\n    gpu_set_blendmode(bm_normal);"," ","This will turn the black into transparency, creating a 'glow' effect from the white being strong on the outside and gradually weakening further from the circle centre. The blend mode is reset after the circle is drawn to ensure additive blending is not also applied to everything else after it."," ","Back: ","GPU Control"," ","Next: ","gpu_set_blendmode_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2303"})