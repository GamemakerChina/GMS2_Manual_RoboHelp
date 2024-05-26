rh._.exports({"0":[[" ","draw_surface_stretched"]],"1":[["draw_surface_stretched"]],"2":[["draw_surface_stretched"]],"3":[[" ","draw_surface_stretched"]],"4":[[" ","This function simply takes a surface and stretches it over the given width and height so that it occupies the area. As with ","draw_surface"," you can specify a surface and then the (x, y) position in the room for the surface to be drawn at and finally a width and a height (which must be pixel values)."," ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."," ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface","."],[" ","draw_surface_stretched","(surface, x, y, w, h);"," ","Argument"," ","Type"," ","Description"," ","surface"," ","Surface"," ","The surface to draw."," ","x"," ","Real"," ","The x position of where to draw the surface."," ","y"," ","Real"," ","The y position of where to draw the surface."," ","w"," ","Real"," ","The width at which to draw the surface."," ","h"," ","Real"," ","The height at which to draw the surface."],[" ","N/A"],[" ","draw_surface_stretched","(surf, 10, 10, 100, 100);"," ","This will draw the surface indexed in the variable ","surf"," with its left corner at (10, 10). Its width and height are both set to 100, which is how much space it will occupy regardless of the surface's actual width and height."," ","Back: ","Surfaces"," ","Next: ","draw_surface_stretched_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1966"})