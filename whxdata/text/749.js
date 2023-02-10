rh._.exports({"0":[[" ","draw_surface"]],"1":[["draw_surface"]],"2":[["draw_surface"]],"3":[[" ","draw_surface"]],"4":[[" ","With this function you can draw a surface at a given position within the room, with the top left corner of the surface being drawn at the specified x/y position."," ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."," ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface","."],[" ","draw_surface(id, x, y);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Surface ID"," ","The unique ID value of the surface to draw."," ","x"," ","Real"," ","The x position of where to draw the surface."," ","y"," ","Real"," ","The y position of where to draw the surface."],[" ","N/A"],[" ","var _vx = camera_get_view_x(view_camera[0]);","\n    var _vy = camera_get_view_y(view_camera[0]);","\n    draw_surface(surf, _vx, _vy);"," ","The above code draws the surface indexed in \"surf\" at same position as camera view[0]."," ","Back: ","Surfaces"," ","Next: ","draw_surface_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"749"})