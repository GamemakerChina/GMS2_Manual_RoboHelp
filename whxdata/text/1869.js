rh._.exports({"0":[[" ","physics_test_overlap"]],"1":[["physics_test_overlap"]],"2":[["physics_test_overlap"]],"3":[[" ","physics_test_overlap"]],"4":[[" ","This function can be used to check and see if a physical body (i.e. the fixture of an instance) overlaps, or ","will"," overlap, when rotated and placed at a given position in the room. the \"angle\" argument is the angle of rotation that the calling instance has (or will have) at the position to be checked, and the \"obj\" argument can be either a single instance id, and object index or the ","keywords"," ","all"," or ","other","."],[" ","physics_test_overlap","(xpos, ypos, angle, obj);"," ","Argument"," ","Type"," ","Description"," ","xpos"," ","Real"," ","The x position in the room to check"," ","ypos"," ","Real"," ","The y position in the room to check"," ","angle"," ","Real"," ","The angle to check (of the calling instance)"," ","obj"," ","Object Asset"," or ","Object Instance"," ","The object to check for"],[" ","Boolean"],[" ","if ","physics_test_overlap","(x+20, y-35, 0, obj_Bomb)","\n    {","\n        alarm[0] = game_get_speed(gamespeed_fps);","\n        ignited = true;","\n    }"," ","The above code will check a position for a physics fixture overlap, and if there is one, it sets a variable and an alarm."," ","Back: ","Physics"," ","Next: ","physics_mass_properties"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1869"})