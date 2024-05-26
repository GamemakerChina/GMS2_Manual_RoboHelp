rh._.exports({"0":[[" ","draw_skeleton_collision"]],"1":[["draw_skeleton_collision"]],"2":[["draw_skeleton_collision"]],"3":[[" ","draw_skeleton_collision"]],"4":[[" ","This function will draw the collision masks associated with the given skeletal animation. You supply the base sprite, the animation set to use and the frame to get the information from, and you can also set the transform properties to suit."," ","NOTE"," The bounding box of a Spine sprite is set up in Spine itself, not in ","GameMaker","."],[" ","draw_skeleton_collision(sprite, animname, frame, x, y, xscale, yscale, rot, colour)"," ","Argument"," ","Type"," ","Description"," ","sprite"," ","Sprite Asset"," ","The index of the sprite to draw."," ","animname"," ","String"," ","The name of the animation to get the frame from (a string)."," ","frame"," ","Real"," ","The animation frame to draw (from 0 to image_number - 1)."," ","x"," ","Real"," ","The x coordinate of where to draw the sprite."," ","y"," ","Real"," ","The y coordinate of where to draw the sprite."," ","xscale"," ","Real"," ","The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc..."," ","yscale"," ","Real"," ","The vertical scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc..."," ","rot"," ","Real"," ","The rotation of the sprite. 0=normal, 90=turned 90 degrees counter-clockwise etc."," ","colour"," ","Colour"," ","The colour with which to blend the sprite."],[" ","N/A"],[" ","draw_skeleton_collision(sprite_index, \"jump\", image_index, x, y, image_xscale, image_yscale, image_angle, c_white);"," ","The above code will draw the collision mask data for the current sprite, using the current transforms, for the animation set \"jump\"."," ","Back: ","Drawing And Miscellaneous"," ","Next: ","draw_skeleton_time"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1908"})