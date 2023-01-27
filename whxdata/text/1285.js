rh._.exports({"0":[[" ","surface_reset_target"]],"1":[["surface_reset_target"]],"2":[["surface_reset_target"]],"3":[[" ","surface_reset_target"]],"4":[[" ","With this function you reset all further drawing from the target surface back to the screen. Please note that to start drawing to a surface you must first have called the function ","surface_set_target()"," and then this one after you have finished, ","for each surface target that you have set"," or else nothing will be drawn on the screen as all further drawing (even in other instances) will be done on the surface. You should also realise that nothing will be seen if the surface itself is not drawn on the screen in the draw event of an instance."," ","NOTE",": If you have not previously set a render target with the function ","surface_set_target()",", using this function will silently (ie: without any error messages) end all further code execution for the event."],[" ","surface_reset_target();"],[" ","N/A"],[" ","if view_current = 0","\n    {","\n        surface_set_target(surf);","\n        with (obj_Effect)","\n        {","\n            draw_self();","\n        }","\n        surface_reset_target();","\n    }","\n    else","\n    {","\n        draw_surface(surf, 0, 0);","\n    }"," ","The above code will check to see which view is currently being drawn, and if it is view[0] it sets the draw target to a surface and draws all instances of the object \"obj_Effect\" before resetting the draw target again. If the view is not view[0] the surface is drawn to the screen."," ","Back: ","Surfaces"," ","Next: ","surface_copy"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1285"})