rh._.exports({"0":[["draw_surface"]],"1":[["draw_surface"]],"2":[["draw_surface"]],"3":[["\n  ","\n  "],["\n  ","With this function you can draw a surface at a given position within the room, with the top left corner of the surface being drawn at the specified x/y position.","\n  ","\n  ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly.","\n  ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface",".","\n\n","\n  "," ","\n  "],["\n  ","draw_surface(id, x, y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","Surface ID","\n        ","The unique ID value of the surface to draw.","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x position of where to draw the surface.","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y position of where to draw the surface.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var _vx = camera_get_view_x(view_camera[0]);","\n    var _vy = camera_get_view_y(view_camera[0]);","\n    draw_surface(surf, _vx, _vy);","\n  ","The above code draws the surface indexed in \"surf\" at same position as camera view[0].","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","draw_surface_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_surface"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"752"})