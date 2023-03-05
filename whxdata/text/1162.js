rh._.exports({"0":[[" ","surface_exists"]],"1":[["surface_exists"]],"2":[["surface_exists"]],"3":[[" ","surface_exists"]],"4":[[" ","This function is essential when working with surfaces due to their volatile nature. Surfaces are always held in texture memory which means that they can be destroyed from one moment to the next (for example, when a screensaver starts on windows, or when minimised on an Android device), so you should always check that a surface exists before doing anything with it (this includes drawing it to the screen). The example code below shows a typical use of this command in the draw event of an instance to check for a surface and re-create it if it has been removed (note that the surface will have been originally created in the create event of the object)."],[" ","surface_exists(surface_id);"," ","Argument","Type"," ","Description"," ","surface_id","Surface ID"," ","The ID of the surface to check."],[" ","Boolean"],[" ","if !surface_exists(surf)","\n    {","\n        surf = surface_create(1024, 1024);","\n    }","\n    else","\n    {","\n        if view_current = 1","\n        {","\n            draw_surface(surf,0,0);","\n        }","\n    }"," ","The above code will check to see if a surface indexed in the variable \"surf\" exists, and if it does not, it will re-create it. If it does exist, it then checks to see which view is currently being drawn and if it is view[1] it draws the surface."," ","Back: ","Surfaces"," ","Next: ","surface_create"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1162"})