rh._.exports({"0":[["physics_apply_impulse"]],"1":[["physics_apply_impulse"]],"2":[["physics_apply_impulse"]],"3":[["\n  ","\n  "],["\n  ","Not only can you apply force and gravity to an object with the physics in ","GameMaker"," but you can also apply an impulse. This is slightly different to a force in that when it is applied it will ","immediately ","affect the speed, and, potentially the torque (or \"spin\") of the object, particularly if the point chosen to apply the impulse is not aligned with the center of mass (note: the center of mass is ","not necessarily"," the same as the origin!). Here is an illustration:","\n  ","As you can see, the player has clicked on the ball and this has given it an impulse to move to the upper right, spinning as it goes. The exact impulse is defined by the vector we get from the components ximpulse/yimpulse in relation to the xpos/ypos coordinates - which simply means that the impulse is calculated as the distance from xpos/ypos to ximpulse/yimpulse in Newtons, and the direction is the angle that we get from xpos/ypos to ximpulse/yimpulse.","\n  ","NOTE",": The physics world uses meters for all its calculations, and the ratio of pixels per meter is defined in the room editor or using ","physics_world_create()",".","\n  "," ","\n  "],["\n  ","physics_apply_impulse(xpos, ypos, ximpulse, yimpulse)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","xpos","Real","\n        ","The x coordinate ","in the room"," where the impulse will be applied","\n     ","\n      ","\n        ","ypos","Real","\n        ","The y coordinate ","in the room"," where the impulse will be applied","\n     ","\n      ","\n        ","ximpulse","Real","\n        ","the x component of the impulse vector","\n     ","\n      ","\n        ","yimpulse","Real","\n        ","the y component of the impulse vector","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if mouse_check_button_pressed(mb_left)","\n    {","\n        with (place_meeting(mouse_x, mouse_y, all))","\n        {","\n            physics_apply_impulse(mouse_x, mouse_y, -10 + irandom(20), -10 + irandom(20));","\n        }","\n    }","\n  ","The code above will apply an impulse with a random vector to an instance that is at the mouse position when the left button is pressed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Forces","\n        ","Next: ","physics_apply_local_force","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_apply_impulse"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1989"})