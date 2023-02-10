rh._.exports({"0":[[" ","application_surface_is_enabled"]],"1":[["application_surface_is_enabled"]],"2":[["application_surface_is_enabled"]],"3":[[" ","application_surface_is_enabled"]],"4":[[" ","This function will return ","true"," if the application surface is being used for drawing, or ","false"," if the screen buffer is being used."],[" ","application_surface_is_enabled();"],[" ","Boolean"],[" ","if keyboard_check_pressed(vk_space)","\n    {","\n        if application_surface_is_enabled()","\n        {","\n            application_surface_enable(false);","\n        }","\n        else","\n        {","\n            application_surface_enable(true);","\n        }","\n    }"," ","The above code check for a key press and the toggle the application surface on or off depending on its state (like in an options menu)."," ","Back: ","Surfaces"," ","Next: ","application_get_position"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"324"})