rh._.exports({"0":[[" ","draw_sprite"]],"1":[["draw_sprite"]],"2":[["draw_sprite"]],"3":[[" ","draw_sprite"]],"4":[[" ","This function draws the given sprite and sub-image at a position within the game room. For the sprite you can use the instance variable ","sprite_index"," to get the current sprite that is assigned to the instance running the code, or you can use any other sprite asset. The same goes for the sub-image, as this can also be set to the instance variable ","image_index"," which will set the sub-image to that selected for the current instance sprite (note, that you can draw a different sprite and still use the sub-image value for the current instance), or you can use any other value for this to draw a specific sub-image of the chosen sprite. If the value is larger than the number of sub-images, then ","GameMaker"," will automatically loop the number to select the corresponding image (for example, if the sprite being drawn has 5 sub-images numbered 0 to 4 and we set the index value to 7, then the function will draw sub-image 3, numbered 0). Finally, the x and y position is the position within the room that the sprite will be drawn, and it is centered on the sprite ","x offset"," and ","y offset","."," ","NOTE"," This function may not work as expected when using skeleton animation sprites, and you may find that the function only draws the first frame of the default pose. You should be using the ","draw_skeleton_*"," functions instead."],[" ","draw_sprite(sprite, subimg, x, y);"," ","Argument"," ","Type"," ","Description"," ","sprite"," ","Sprite Asset"," ","The index of the sprite to draw."," ","subimg"," ","Real"," ","The sub-image (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object)."," ","x"," ","Real"," ","The x coordinate of where to draw the sprite."," ","y"," ","Real"," ","The y coordinate of where to draw the sprite."],[" ","N/A"],[" ","draw_sprite(sprite_index, image_index, x, y);","\n    draw_sprite(spr_Halo, 0, x, y-32);"," ","This will draw the instances assigned sprite (sprite_index) with the current sub-image at the x and y position of the instance within the room. It will then draw the first frame of the sprite indexed by \"spr_Halo\" at the same x and y position but 32 pixels 'above'."," ","Back: ","Sprites And Tiles"," ","Next: ","draw_sprite_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2299"})