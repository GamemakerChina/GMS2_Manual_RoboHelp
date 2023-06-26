rh._.exports({"0":[[" ","draw_sprite_tiled_ext"]],"1":[["draw_sprite_tiled_ext"]],"2":[[" ","draw_sprite_tiled_ext"]],"3":[[" ","This function will take a sprite and then repeatedly tile it across the whole view (or room if no view is defined), starting from the coordinates that you give in the function and with each tile scaled, colour blended and with the alpha that you define\n    (these properties are the same as those used in ","draw_sprite_ext()","). This function is for 2D (orthographic) projections only, and will not work correctly when a 3D camera projection is used."," ","NOTE",": Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate\n    sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set\n    the font cache size to try and limit this should it be necessary using the function ","sprite_set_cache_size()","."],[" ","draw_sprite_tiled_ext(sprite, subimg, x, y, xscale, yscale, colour, alpha);"," ","Argument","Type"," ","Description"," ","sprite","Sprite Asset"," ","The index of the sprite to draw."," ","subimg","Real"," ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object)."," ","x","Real"," ","The x coordinate of where to draw the sprite."," ","y","Real"," ","The y coordinate of where to draw the sprite."," ","xscale","Real"," ","The horizontal scaling of the sprite. A multiplier ' 1 = normal scaling, 0.5 is half etc."," ","yscale","Real"," ","The vertical scaling of the sprite. A multiplier ' 1 = normal scaling, 0.5 is half etc."," ","colour","Colour"," ","The colour with which to blend the sprite. c_white is to display it normally."," ","alpha","Real"," ","The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque)."],[" ","N/A"],[" ","draw_sprite_tiled_ext(sprite_index, image_index, x, y, 2, 2, c_red, 0.5);"," ","This will draw the instances assigned sprite (sprite_index) and its current frame of animation (image_index) at the instances own x and y position, but scaled to twice the normal size, blended red and with half the normal alpha. The sprite will be tiled\n    horizontally and vertically across the view."," ","Back: ","Sprites And Tiles"," ","Next: ","draw_enable_swf_aa"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_sprite_tiled_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2186"})