rh._.exports({"0":[["sprite_yoffset"]],"1":[["sprite_yoffset"]],"2":[["sprite_yoffset"]],"3":[["\n  ","\n  "],["\n  ","This ","read only"," variable returns the local yoffset (the y component of the origin as defined in the sprite editor) of the sprite that has been assigned to the instance. This yoffset is returned in pixels and will be dependent on the ","image_yscale",", so that (for example) if a square 32x32 sprite is defined as having the y origin at 16, when that sprite is scaled by 2 this variable will return 32. If you need the un-scaled yoffset you should use ","sprite_get_yoffset()",".","\n  ","\n  "," ","\n  "],["\n  ","sprite_yoffset;","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","if y - sprite_yoffset < 0","\n    {","\n        y = sprite_yoffset;","\n    }","\n  ","The above code checks to see if the top edge of the sprite of the instance is outside the room and if it is it moves the instance so that the whole sprite is visible.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Instance Variables","\n        ","Next: ","image_alpha","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["sprite_yoffset"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"593"})