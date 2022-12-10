rh._.exports({"0":[["skeleton_collision_draw_set"]],"1":[["skeleton_collision_draw_set"]],"2":[["skeleton_collision_draw_set"]],"3":[["\n  ","\n  "],["\n  ","With this function, you can toggle on (","true",") or off (","false",") drawing the collision data for the current skeletal animation sprite being used by the instance. If this is switched on, the bounding box and the precise collision mask will be drawn as outlines around the sprite.","\n  ","This function only works when the skeletal sprite drawing is being handled by the object. To draw the collision bounding box when drawing a skeletal sprite manually, use ","draw_skeleton_collision()",".","\n  ","\n  ","NOTE"," The bounding box of a Spine sprite is set up in Spine itself, not in ","GameMaker",".","\n\n","\n  "," ","\n  "],["\n  ","skeleton_collision_draw_set(flag);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","flag","\n        ","Boolean","\n        ","Set to ","true"," to turn on drawing, and ","false"," to turn it off.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if debug_mode == true","\n    {","\n        skeleton_collision_draw_set(true);","\n    }","\n  ","The above code checks to see if the game is being run in debug mode and if it is, it toggles the skeletal collision data for the instance to be shown.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing And Miscellaneous","\n        ","Next: ","draw_skeleton","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["skeleton_collision_draw_set"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1143"})