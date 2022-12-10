rh._.exports({"0":[["gpu_set_blendmode"]],"1":[["gpu_set_blendmode,bm_normal,bm_add,bm_subtract,bm_max"]],"2":[["gpu_set_blendmode,bm_normal,bm_add,bm_subtract,bm_max"]],"3":[["\n  ","\n  "],["\n  ","When ","GameMaker"," goes to draw a pixel there is a source colour (the colour of the pixel we're going to draw) and a destination colour(the colour that's already in the pixel we're drawing to), so when determining the new colour of the pixel, the source and destination colours are calculated according to the chosen blend mode. Each component of the colours is stored as a floating point value between 0 and 1, and the new colour is calculated by multiply each component of the source colour by some factor and by multiplying each component of destination colour by some other factor and then adding the results together component by component.","\n  ","This function permits you to set the blend mode in four basic ways using the following constants:","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Extended Blend Mode","\n      ","\n      ","\n        ","bm_normal","\n        ","Normal blending (the default blend mode).","\n        ","(","bm_src_alpha",", ","bm_inv_src_alpha",")","\n      ","\n      ","\n        ","bm_add","\n        ","Additive blending. Luminosity values of light areas are added.","\n        ","(","bm_src_alpha",", ","bm_one",")","\n      ","\n      ","\n        ","bm_subtract","\n        ","Subtractive blending. Luminosity values of light areas are subtracted.","\n        ","(","bm_zero",", ","bm_inv_src_colour",")","\n      ","\n      ","\n        ","bm_max","\n        ","Max blending. Similar to additive blending.","\n        ","(","bm_src_alpha",", ","bm_inv_src_colour",")","\n      ","\n    ","\n  ","\n  ","As you can see from the above table, these four blend modes are really composites of ","extended"," blend modes which can be found on the page describing ","gpu_set_blendmode_ext()",".","\n  ","To help you get the most from blend modes and to help understand how they work and how they affect the final image being drawn to the screen, we recommend that you read the following guide:","\n  ","\n    ","Guide To Using Blendmodes","\n  ","\n  "," ","\n  "],["\n  ","gpu_set_blendmode(mode);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","mode","\n        ","Blend Mode Constant","\n        ","The blend mode to use (see the table above)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","gpu_set_blendmode(bm_add);","\n    draw_circle_colour(100, 100, 50, c_white, c_black, 0);","\n    gpu_set_blendmode(bm_normal);","\n  ","This will turn the black into transparency, creating a 'glow' effect from the white being strong on the outside and gradually weakening further from the circle centre. The blend mode is reset after the circle is drawn to ensure additive blending is not also applied to everything else after it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_set_blendmode_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_set_blendmode"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2272"})