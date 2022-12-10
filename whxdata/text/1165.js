rh._.exports({"0":[["surface_exists"]],"1":[["surface_exists"]],"2":[["surface_exists"]],"3":[["\n  ","\n  "],["\n  ","This function is essential when working with surfaces due to their volatile nature. Surfaces are always held in texture memory which means that they can be destroyed from one moment to the next (for example, when a screensaver starts on windows, or when minimised on an Android device), so you should always check that a surface exists before doing anything with it (this includes drawing it to the screen). The example code below shows a typical use of this command in the draw event of an instance to check for a surface and re-create it if it has been removed (note that the surface will have been originally created in the create event of the object).","\n  "," ","\n  "],["\n  ","surface_exists(surface_id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","surface_id","Surface ID","\n        ","The ID of the surface to check.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if !surface_exists(surf)","\n    {","\n        surf = surface_create(1024, 1024);","\n    }","\n    else","\n    {","\n        if view_current = 1","\n        {","\n            draw_surface(surf,0,0);","\n        }","\n    }","\n  ","The above code will check to see if a surface indexed in the variable \"surf\" exists, and if it does not, it will re-create it. If it does exist, it then checks to see which view is currently being drawn and if it is view[1] it draws the surface.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","surface_create","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["surface_exists"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1165"})