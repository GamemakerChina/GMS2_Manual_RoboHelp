rh._.exports({"0":[["part_system_position"]],"1":[["part_system_position"]],"2":[["part_system_position"]],"3":[["\n  ","\n  "],["\n  ","With this function you can set the base position for the particle system relative to the (0,0) position of the room, meaning that all further particle functions relating to this system will now be drawn relative to the new position. By default this position is always (0,0), but in some very special circumstances you may wish to change this to something else.","\n  ","NOTE",": This function will change ","everything"," within the particle system, so if you have an emitter at position (100,100) and then set the particle system position to (0,100), the emitter will now draw at (100,200). The same goes if you shift the system and then create the emitter, as even though you create it at (100,100) it will be drawn at (100,200).","\n  "," ","\n  "],["\n  ","part_system_position(ind, x, y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","Particle System ID","\n        ","The index of the particle system to change.","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The new x coordinate of the particle system.","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The new y coordinate of the particle system.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if mouse_check_button_pressed(mb_left)","\n    {","\n        part_system_position(global.Sname, mouse_x, mouse_y);","\n    }","\n  ","The above code will check for the press of the mouse button and if it detects one, the particle system indexed in the global variable \"Sname\" is shifted to the mouse x/y position","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Systems","\n        ","Next: ","part_system_clear","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["part_system_position"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1457"})