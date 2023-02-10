rh._.exports({"0":[[" ","draw_sprite_ext"]],"1":[["draw_sprite_ext"]],"2":[["draw_sprite_ext"]],"3":[[" ","draw_sprite_ext"]],"4":[[" ","This function will draw the given sprite as in the function ","draw_sprite()"," but with additional options to change the scale, blending, rotation and alpha of the sprite being drawn. Changing these values does ","not"," modify the resource in any way (only how it is drawn), and you can use any of the available ","sprite variables"," instead of direct values for all the arguments in the function. The image below illustrates how different values affect the drawing of the sprite:"," ","If used with a Nine Slice enabled sprite, it will retain any detail after scaling depending on your Nine Slice settings in the ","Sprite Editor",". See the page on ","Nine Slice"," for more information."," ","NOTE",": Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set the font cache size to try and limit this should it be necessary using the function ","sprite_set_cache_size()","."," ","NOTE",": This function may not work as expected when using skeleton animation sprites, and you may find that the function only draws the first frame of the default pose. You should be using the ","draw_skeleton_*"," functions instead."],[" ","draw_sprite_ext( sprite, subimg, x, y, xscale, yscale, rot, colour, alpha );"," ","Argument","Type"," ","Description"," ","sprite","Sprite Asset"," ","The index of the sprite to draw."," ","subimg","Real"," ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object)."," ","x","Real"," ","The x coordinate of where to draw the sprite."," ","y","Real"," ","The y coordinate of where to draw the sprite."," ","xscale","Real"," ","The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc..."," ","yscale","Real"," ","The vertical scaling of the sprite as a multiplier: 1 = normal scaling, 0.5 is half etc..."," ","rot","Real"," ","The rotation of the sprite. 0=right way up, 90=rotated 90 degrees counter-clockwise etc..."," ","colour","Colour"," ","The colour with which to blend the sprite. ","c_white"," is to display it normally."," ","alpha","Real"," ","The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque)."],[" ","N/A"],[" ","draw_sprite_ext(sprite_index, image_index, x, y, image_xscale, image_yscale, image_angle, image_blend, image_alpha);"," ","This will draw the instances assigned sprite with all its default values (essentially the same as using ","draw_self",")."," ","Back: ","Sprites And Tiles"," ","Next: ","draw_sprite_general"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2307"})