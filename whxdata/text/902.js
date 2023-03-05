rh._.exports({"0":[[" ","surface_free"]],"1":[["surface_free"]],"2":[["surface_free"]],"3":[[" ","surface_free"]],"4":[[" ","When you are working with surfaces, you should always use this function whenever you are finished using them. Surfaces take up space in memory and so need to be removed, normally at the end of a room, but it can be done at any time depending on the use you put them to. Failure to do so can cause memory leaks which will eventually slow down and crash your game."," ","NOTE",": When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."],[" ","surface_free(surface_id);"," ","Argument","Type"," ","Description"," ","surface_id","Surface ID"," ","The ID of the surface to be freed."],[" ","N/A"],[" ","if keyboard_check_pressed(vk_escape)","\n    {","\n        surface_free(surf);","\n        room_goto(rm_Menu);","\n    }"," ","The above code checks for a key press and if it detects one it frees the memory reserved for the surface indexed in the variable \"surf\" and then changes room."," ","Back: ","Surfaces"," ","Next: ","surface_save"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"902"})