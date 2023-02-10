rh._.exports({"0":[[" ","sprite_xoffset"]],"1":[["sprite_xoffset"]],"2":[["sprite_xoffset"]],"3":[[" ","sprite_xoffset"]],"4":[[" ","This ","read only"," variable returns the local xoffset (the x component of the origin as defined in the sprite editor) of the sprite that has been assigned to the instance. This xoffset is returned in pixels and will be dependent on the ","image_xscale",", so that (for example) if a square 32x32 sprite is defined as having the x origin at 16, when that sprite is scaled by 2 this variable will return 32. If you need the un-scaled xoffset you should use ","sprite_get_xoffset()","."],[" ","sprite_xoffset;"],[" ","Real"],[" ","if x - sprite_xoffset < 0","\n    {","\n        x = sprite_xoffset;","\n    }"," ","The above code checks to see if the left edge of the sprite of the instance is outside the room and if it is it moves the instance so that the whole sprite is visible."," ","Back: ","Sprite Instance Variables"," ","Next: ","sprite_yoffset"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"592"})