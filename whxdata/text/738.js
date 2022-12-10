rh._.exports({"0":[["sprite_index"]],"1":[["sprite_index"]],"2":[["sprite_index"]],"3":[["\n  ","\n  "],["\n  ","This variable returns the index of the current sprite for the instance, or -1 if the instance has no sprite associated with it. You can change it to give the instance a different sprite by giving it the name of a sprite from the resource tree or by using a variable that has an externally loaded sprite indexed in it. Changing the sprite does not change the index of the currently visible frame, so if you change the sprite on frame number 3, the new sprite will be drawn with that frame visible (assuming it has the same number of frames).","\n  "," ","\n  "],["\n  ","sprite_index;","\n  "," ","\n  "],["\n  ","Sprite Asset","\n  "," ","\n  "],["\n  ","with (obj_Check)","\n    {","\n        if !collision_line(x, y, other.x, other.y, obj_Wall, false, true)","\n        {","\n            sprite_index = spr_spotted;","\n        }","\n        else","\n        {","\n            sprite_index = spr_clear;","\n        }","\n    }","\n  ","The above code will loop through all instances of \"obj_Check\" checking for a collision line between them and the instance running the code. The sprite of those instances will be changed depending on the return value (true or false) for the collision line.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Instance Variables","\n        ","Next: ","sprite_width","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["sprite_index"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"738"})