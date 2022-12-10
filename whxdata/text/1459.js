rh._.exports({"0":[["physics_test_overlap"]],"1":[["physics_test_overlap"]],"2":[["physics_test_overlap"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to check and see if a physical body (ie: the fixture of an instance) overlaps, or ","will"," overlap, when rotated and placed at a given position in the room. the \"angle\" argument is the angle of rotation that the calling instance has (or will have) at the position to be checked, and the \"obj\" argument can be either a single instance id, and object index or the ","keywords"," ","all"," or ","other",".","\n  "," ","\n  "],["\n  ","physics_test_overlap(xpos, ypos, angle, obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","xpos","\n        ","Real","\n        ","The x position in the room to check","\n      ","\n      ","\n        ","ypos","\n        ","Real","\n        ","The y position in the room to check","\n      ","\n      ","\n        ","angle","\n        ","Real","\n        ","The angle to check (of the calling instance)","\n      ","\n      ","\n        ","obj","\n        ","Object Asset"," or ","Instance ID","\n        ","The object to check for","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if physics_test_overlap(x+20, y-35, 0, obj_Bomb)","\n    {","\n        alarm[0] = room_speed;","\n        ignited = true;","\n    }","\n  ","The above code will check a position for a physics fixture overlap, and if there is one, it sets a variable and an alarm.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Physics","\n        ","Next: ","physics_mass_properties","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_test_overlap"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1459"})