rh._.exports({"0":[[" ","draw_sprite_stretched"]],"1":[["draw_sprite_stretched"]],"2":[["draw_sprite_stretched"]],"3":[[" ","draw_sprite_stretched"]],"4":[[" ","This function simply takes a sprite resource and stretches it over the given width and height so that it occupies that area. As with ","draw_sprite()"," you can specify a sprite and a sub-image for drawing, then the x / y position in the room for the sprite to be drawn at and finally a width and a height (which must be pixel values). The image below shows the result of this function with different sets of arguments:"," ","NOTE"," When drawing with this function, the sprite ","x offset"," and ","y offset"," (or origins) are ignored and the sprite is drawn with the top-left corner at the specified x/y position in the room."," ","If used with a Nine Slice enabled sprite, it will retain any detail after scaling depending on your Nine Slice settings in the ","Sprite Editor",". See the page on ","Nine Slice"," for more information."],[" ","draw_sprite_stretched(sprite, subimg, x, y, w, h);"," ","Argument","Type"," ","Description"," ","sprite","Sprite Asset"," ","The index of the sprite to draw."," ","subimg","Real"," ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object)."," ","x","Real"," ","The x coordinate of where to draw the sprite."," ","y","Real"," ","The y coordinate of where to draw the sprite."," ","w","Real"," ","The width of the area the stretched sprite will occupy."," ","h","Real"," ","The height of the area the stretched sprite will occupy."],[" ","N/A"],[" ","draw_sprite_stretched(sprite_index, image_index, x, y, sprite_width, sprite_height / 2);"," ","This will draw the instance's assigned sprite and its sub-image with the left corner at the instance x/y position. Its width is set to the same as the sprite, and the height is the sprite height divided by two."," ","Back: ","Sprites And Tiles"," ","Next: ","draw_sprite_stretched_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2215"})