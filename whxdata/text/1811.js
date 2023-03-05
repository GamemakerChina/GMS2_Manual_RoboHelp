rh._.exports({"0":[[" ","draw_surface_stretched_ext"]],"1":[["draw_surface_stretched_ext"]],"2":[["draw_surface_stretched_ext"]],"3":[[" ","draw_surface_stretched_ext"]],"4":[[" ","This function does exactly the same as the ","draw_surface_stretched()"," function with the added ability to set the colour blending and alpha value for the surface when it is drawn (similar to the function ","draw_surface_ext()",")."," ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."," ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface","."],[" ","draw_surface_stretched_ext(id, x, y, w, h, col, alpha);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Surface ID"," ","The unique ID value of the surface to draw."," ","x"," ","Real"," ","The x position of where to draw the surface."," ","y"," ","Real"," ","The y position of where to draw the surface."," ","w"," ","Real"," ","The width at which to draw the surface."," ","h"," ","Real"," ","The height at which to draw the surface."," ","colour"," ","Colour"," ","The colour with which to colour the surface."," ","alpha"," ","Real"," ","The alpha with which to blend the surface."],[" ","N/A"],[" ","draw_surface_stretched_ext(surf, x, y, 200, 200, c_white, 0.5);"," ","This will draw the given surface with its left corner at the instances x/y position and it will be stretched to occupy an area of 200x200 pixels with no blending, but partial transparency."," ","Back: ","Surfaces"," ","Next: ","draw_surface_tiled"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1811"})