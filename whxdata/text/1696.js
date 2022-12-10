rh._.exports({"0":[["surface_create"]],"1":[["surface_create"]],"2":[["surface_create"]],"3":[["\n  ","\n  "],["\n  ","This function is used to create a surface and will return the index of the surface which should be stored in a variable for future function calls. When the surface is first created, it may contain \"noise\" as basically it is just an area of memory that is put aside for the purpose (and that memory may still contain information), so you may want to clear the surface before use with a function like ","draw_clear_alpha()",".","\n  ","It is highly recommended that all surfaces be created with a size that is a power of 2, ie: 16, 128, 512 or 1024 pixels in size, for example. This is not exactly necessary on certain platforms (like Windows and MacOS) but it will certainly increase compatibility on those targets, while for HTML5 and devices it is essential and very it's important that you remember this or you may run into problems later.","\n  "," ","\n  "],["\n  ","surface_create(w, h);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","w","Real","\n        ","The width of the surface to be created.","\n     ","\n      ","\n        ","h","Real","\n        ","The height of the surface to be created.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Surface ID","\n  "," ","\n  "],["\n  ","if !surface_exists(surf)","\n    {","\n        surf = surface_create(1024, 1024);","\n        surface_set_target(surf);","\n        draw_clear_alpha(c_black, 0);","\n        surface_reset_target();","\n        view_surface_id[0] = surf;","\n    }","\n  ","The above code checks to see if a surface exists and if it does not it will create a surface that is 1024 pixels wide and 1024 pixels high, assigning the index to the variable \"surf\". The drawing target is then set to the new surface, which is cleared and made transparent before having the drawing target reset to the display. Finally the surface is assigned to a view.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","surface_create_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["surface_create"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1696"})