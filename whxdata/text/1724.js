rh._.exports({"0":[[" ","draw_surface_tiled_ext"]],"1":[["draw_surface_tiled_ext"]],"2":[["draw_surface_tiled_ext"]],"3":[[" ","draw_surface_tiled_ext"]],"4":[[" ","This function will take a surface and then repeatedly tile it across the whole room, starting from the coordinates that you give in the function and with each tile scaled, colour blended and with the alpha that you define (these properties are the same as those used in ","draw_surface_ext()",")."," ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."," ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface","."],[" ","draw_surface_tiled_ext(id, x, y, xscale, yscale, col, alpha);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Surface ID"," ","The unique ID value of the surface to draw."," ","x"," ","Real"," ","The x coordinate of where to draw the surface."," ","y"," ","Real"," ","The y coordinate of where to draw the surface."," ","xscale"," ","Real"," ","The horizontal scaling of the surface."," ","yscale"," ","Real"," ","The vertical scaling of the surface."," ","col"," ","Colour"," ","The colour with which to blend the surface."," ","alpha"," ","Real"," ","The alpha of the surface."],[" ","N/A"],[" ","draw_surface_tiled_ext(surf, x, y, 2, 2, c_red, 0.5);"," ","This will draw the surface indexed in \"surf\" at the instances own x and y position, double its stored size and tiled in every direction in the room, as well as blended with the colour red and partially transparent."," ","Back: ","Surfaces"," ","Next: ","draw_surface_general"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1724"})