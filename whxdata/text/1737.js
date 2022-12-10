rh._.exports({"0":[["surface_copy"]],"1":[["surface_copy"]],"2":[["surface_copy"]],"3":[["\n  ","\n  "],["\n  ","This function simply takes the image from one surface and copies it onto another one at the specified local position within that surface (where the (0,0) position is the top left corner of the destination surface). If the destination surface already has information this will be overwritten by the copy, and the function does ","not"," change the source surface in any way.","\n  ","NOTE",": When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly.","\n  "," ","\n  "],["\n  ","surface_copy(destination, x, y, source);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","destination","\n        ","Surface ID","\n        ","The ID of the surface to copy the other surface to.","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x position to copy to.","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y position to copy to.","\n      ","\n      ","\n        ","source","\n        ","Surface ID","\n        ","The ID of surface to be copied.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if view_current == 0","\n    {","\n        surface_copy(surf, 0, 0, temp_surf);","\n    }","\n    else","\n    {","\n        draw_surface(surf, 0, 0);","\n    }","\n  ","The above code will check the current view being drawn and if it is view[0] it copies the surface indexed in the variable \"temp_surf\" onto the surface indexed in the variable \"surf\". If the current view is anything other than view[0] the surface \"surf\" is drawn to the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","surface_copy_part","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["surface_copy"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1737"})