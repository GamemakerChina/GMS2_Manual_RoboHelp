rh._.exports({"0":[["sprite_merge"]],"1":[["sprite_merge"]],"2":[["sprite_merge"]],"3":[["\n  ","\n  "],["\n  ","This function will merge the sprite indexed in argument 1 (\"ind2\") with that which is indexed in argument 0 (\"ind1\"). The images themselves are ","NOT"," merged together, but rather the image indices are\n    merged, with the sub images from sprite \"ind2\" appended onto those of sprite \"ind1\", ie: they are added on at the end. Note that if the sprites are different sizes, then the appended sprites are stretched to fit the image size\n    for \"ind1\".","\n  ","This change is permanent, and from the moment you use this function until the game is closed or the sprite deleted, the sprite that is being merged into will be changed, however the sprite that it is being merged with will remain the same.","\n  ","NOTE",": Neither the image asset that is being merged into, nor the image asset that is for merging, can be one of the original game resources. You must use ","sprite_duplicate()"," first\n    to create two new resources (if you are merging included game assets) and then merge those.","\n  ","NOTE",": This function is only useful for ","bitmap"," sprites and will not work with SWF or JSON (Spine) sprites.","\n  "," ","\n  "],["\n  ","sprite_merge(ind1, ind2);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","ind1","Sprite Asset","\n        ","The index of the sprite to merge.","\n     ","\n      ","\n        ","ind2","Sprite Asset","\n        ","The index of the sprite that ind1 is to be merged with.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var tspr;"," tspr[0] = spr_add(working_directory + \"Sprite Assets\\explode1.png\", 16, true, true, 0, 0);"," tspr[1] = sprite_duplicate(spr_Explosion);"," sprite_merge(tspr[0], tspr[1]);"," sprite_index = t_spr[0];"," sprite_delete(tspr[1]);\n  ","\n  ","The above code loads a sprite into a local variable then merges it with another sprite that has been duplicated. Finally the merged sprite is assigned to the instance ","sprite_index"," while the loaded sprite is removed\n    to free the memory it uses. Note that at some point after this operation, like in the Destroy or Room End events, you will also need to use ","sprite_delete()"," to remove the merged sprite\n    from memory too.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_create_from_surface","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["sprite_merge"]],"5":[["Syntax:"],["Returns"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1983"})