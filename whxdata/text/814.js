rh._.exports({"0":[[" ","sprite_get_xoffset"]],"1":[["sprite_get_xoffset"]],"2":[["sprite_get_xoffset"]],"3":[[" ","sprite_get_xoffset"]],"4":[[" ","When you define a sprite in the sprite editor, you need to set the ","origin"," for that sprite. This is the point at which the sprite will be \"attached\" or \"drawn\" when used with an instance. This function returns the relative offset for the x-axis of the origin based on the upper left corner being the 0,0 position, with a +x being right and a -x being left of this. The following image illustrates this:"],[" ","sprite_get_xoffset(index);"," ","Argument","Type"," ","Description"," ","index","Sprite Asset"," ","The index of the sprite to find the xoffset of."],[" ","Real"],[" ","if x - sprite_get_xoffset(sprite_index) < 0","\n    {","\n        x = sprite_get_xoffset(sprite_index);","\n    }"," ","The above code will ensure that an instance is maintained within the room based on the sprite (so the sprite is always visible)."," ","Back: ","Sprite Information"," ","Next: ","sprite_get_yoffset"]],"5":[[" ","Syntax:"],[" ","Returns"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"814"})