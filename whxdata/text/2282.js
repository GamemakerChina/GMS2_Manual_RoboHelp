rh._.exports({"0":[[" ","draw_sprite_stretched_ext"]],"1":[["draw_sprite_stretched_ext"]],"2":[[" ","draw_sprite_stretched_ext"]],"3":[[" ","This function does exactly the same as the ","draw_sprite_stretched()"," function with the added ability to set the colour blending and alpha value for the sprite when it is drawn (similar to the function ","draw_sprite_ext()",")."," ","NOTE"," When drawing with this function, the sprite ","x offset"," and ","y offset"," (or origins) are ignored and the sprite is drawn with the top-left corner at the specified x/y position in the room."," ","NOTE"," Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set the font cache size to try and limit this should it be necessary using the function ","sprite_set_cache_sizee()","."],[" ","draw_sprite_stretched_ext(sprite, subimg, x, y, w, h, colour, alpha);"," ","Argument","Type"," ","Description"," ","sprite","Sprite Asset"," ","The index of the sprite to draw."," ","subimg","Real"," ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object)."," ","x","Real"," ","The x coordinate of where to draw the sprite."," ","y","Real"," ","The y coordinate of where to draw the sprite."," ","w","Real"," ","The width of the area the stretched sprite will occupy."," ","h","Real"," ","The height of the area the stretched sprite will occupy."," ","colour","Colour"," ","The colour with which to blend the sprite. c_white is to display it normally."," ","alpha","Real"," ","The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque)."],[" ","N/A"],[" ","draw_sprite_stretched_ext(sprite_index, image_index, x, y, sprite_width, sprite_height / 2, c_white, 0.5);"," ","This will draw the instances assigned sprite and its sub-image with the left corner at the instance x /y position. Its width is set to the same as the sprite, and the height is the sprite height divided by two. It will also be blended normally but have a partially transparent alpha value."," ","Back: ","Sprites And Tiles"," ","Next: ","draw_sprite_pos"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_sprite_stretched_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2282"})