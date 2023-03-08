rh._.exports({"0":[[" ","draw_sprite_tiled"]],"1":[["draw_sprite_tiled"]],"2":[["draw_sprite_tiled"]],"3":[[" ","draw_sprite_tiled"]],"4":[[" ","This function will take a sprite and then repeatedly tile it across the whole view (or room if no view is defined), starting from the coordinates that you give in the function. Tiling is based on the width and height of the sprite as defined by the\n    ","sprite variables"," of the instance running the code. This function is for 2D (orthographic) projections only, and will not work correctly when a 3D\n    camera projection is used."],[" ","draw_sprite_tiled(sprite, subimg, x, y);"," ","Argument","Type"," ","Description"," ","sprite","Sprite Asset"," ","The index of the sprite to draw."," ","subimg","Real"," ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object)."," ","x","Real"," ","The x coordinate of where to draw the sprite."," ","y","Real"," ","The y coordinate of where to draw the sprite."],[" ","N/A"],[" ","draw_sprite_tiled(sprite_index, image_index, x, y);"," ","This will draw the instances assigned sprite (sprite_index) and its current frame of animation (image_index) at the instances own x and y position, and tiled horizontally and vertically across the view."," ","Back: ","Sprites And Tiles"," ","Next: ","draw_sprite_tiled_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1359"})