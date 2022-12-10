rh._.exports({"0":[["sprite_add_from_surface"]],"1":[["sprite_add_from_surface"]],"2":[["sprite_add_from_surface"]],"3":[["\n  ","\n  "],["\n  ","This function works in exactly the same way as ","sprite_create_from_surface()"," only instead of creating a new sprite from the area of the indexed surface that you select, it adds the defined area of the surface as a new sub-image to a previously created sprite (this means that you cannot add it directly to a sprite from the resource tree, but rather only to one previously created from a surface, or one that has been duplicated from a resource sprite using ","sprite_duplicate()",").","\n  ","It should be noted that the memory used when adding a sprite in this way will be larger than you may expect. This is because ","GameMaker"," will store the sprite as a texture page ","and"," it will also be stored in GPU memory, so the total memory will be larger than would be expected for an image file of the same sprite.","\n  "," ","\n  "],["\n  ","sprite_add_from_surface(index, surface, x, y, w, h, removeback, smooth);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","Sprite Asset","\n        ","The index of the sprite to add the new image to.","\n      ","\n      ","\n        ","surface","\n        ","Surface ID","\n        ","The index of the surface from which we get the image.","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x position to copy from.","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y position to copy from.","\n      ","\n      ","\n        ","w","\n        ","Real","\n        ","The width of the area to be copied (from the x position).","\n      ","\n      ","\n        ","h","\n        ","Real","\n        ","The height of the area to be copied (from the y position).","\n      ","\n      ","\n        ","removeback","\n        ","Boolean","\n        ","Indicates whether to make all pixels with the background colour (left-bottom pixel) transparent.","\n      ","\n      ","\n        ","smooth","\n        ","Boolean","\n        ","Indicates whether to smooth the edges.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","spr_custom = sprite_create_from_surface(surf, 0, 0, 32, 32, true, true, 16, 16);","\n    var i;","\n    for (i = 1; i < 8; i += 1)","\n    {","\n        sprite_add_from_surface(spr_custom, surf, i, 0, 32, 32, true, true);","\n    }","\n  ","The above code creates a sprite from the surface indexed in the variable \"surf\", assigning its index to the variable \"spr_Custom\", and then uses a ","for"," loop to move across the surface and capture various sections which are added into the sprite as sub-images.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_collision_mask","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["sprite_add_from_surface"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2151"})