rh._.exports({"0":[["draw_surface_stretched_ext"]],"1":[["draw_surface_stretched_ext"]],"2":[["draw_surface_stretched_ext"]],"3":[["\n  ","\n  "],["\n  ","This function does exactly the same as the ","draw_surface_stretched()"," function with the added ability to set the colour blending and alpha value for the surface when it is drawn (similar to the function ","draw_surface_ext()",").","\n  ","\n  ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly.","\n  ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface",".","\n\n","\n  "," ","\n  "],["\n  ","draw_surface_stretched_ext(id, x, y, w, h, col, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","Surface ID","\n        ","The unique ID value of the surface to draw.","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x position of where to draw the surface.","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y position of where to draw the surface.","\n      ","\n      ","\n        ","w","\n        ","Real","\n        ","The width at which to draw the surface.","\n      ","\n      ","\n        ","h","\n        ","Real","\n        ","The height at which to draw the surface.","\n      ","\n      ","\n        ","colour","\n        ","Colour","\n        ","The colour with which to colour the surface.","\n      ","\n      ","\n        ","alpha","\n        ","Real","\n        ","The alpha with which to blend the surface.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","draw_surface_stretched_ext(surf, x, y, 200, 200, c_white, 0.5);","\n  ","This will draw the given surface with its left corner at the instances x/y position and it will be stretched to occupy an area of 200x200 pixels with no blending, but partial transparency.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","draw_surface_tiled","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_surface_stretched_ext"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1828"})