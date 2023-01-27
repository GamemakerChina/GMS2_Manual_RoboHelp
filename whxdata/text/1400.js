rh._.exports({"0":[[" ","surface_save_part"]],"1":[["surface_save_part"]],"2":[["surface_save_part"]],"3":[[" ","surface_save_part"]],"4":[[" ","This function will save a part of a surface to disc using the given filename. The surface ","must"," be saved as a ","*.png"," format file, and the (x,y) position must be given as local coordinates to the surface, bearing in mind that the top left corner of the surface is always (0,0)."],[" ","surface_save_part(surface_id, fname, x, y, width, height);"," ","Argument","Type"," ","Description"," ","surface_id","Surface ID"," ","The ID of the surface to set as the drawing target."," ","fname","String"," ","The name of the saved image file."," ","x","Real"," ","The starting x position within the surface."," ","y","Real"," ","The starting y position within the surface."," ","width","Real"," ","The width of the part to save."," ","height","Real"," ","The height of the part to save."],[" ","N/A"],[" ","if keyboard_check_pressed(ord(\"S\")","\n    {","\n        surface_save_part(surf, \"test.png\", 0, 0, 100, 100);","\n    }"," ","The above code will check to see if the user presses the \"S\" key on the keyboard and if they do it will save a part of the surface indexed in the variable \"surf\" to disc."," ","Back: ","Surfaces"," ","Next: ","draw_surface"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1400"})