rh._.exports({"0":[[" ","sprite_save_strip"]],"1":[["sprite_save_strip"]],"2":[["sprite_save_strip"]],"3":[[" ","sprite_save_strip"]],"4":[[" ","This function will create a ","strip image"," from all the sub-images in a sprite, saving it to disc with the specified filename. The sprite must have been ","added"," at runtime (you cannot save sprites added through the IDE) and the file must be saved with a ","*.png"," extension."," ","NOTE",": Depending on the target platform that is chosen you are limited as to where you can save and load files from. See ","File Handling"," for more information."],[" ","sprite_save_strip(ind, filename);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Sprite Asset"," ","The index of the sprite to save."," ","filename"," ","String"," ","The filename for the saved sprite strip."],[" ","N/A"],[" ","var spr, i;","\n    spr = sprite_create_from_surface(0, 0, 32, 32, true, true, 16, 16);"," ","\n    for (i = 1; i < 8; i +=1)","\n    {","\n        sprite_add_from_surface(spr, i, 0, 32, 32, true, true, 16, 16);","\n    }"," ","\n    sprite_save_strip(spr, \"Custom_Player_Sprite.png\");","\n    sprite_delete(spr);\n  "," ","The above code creates a sprite from the surface indexed in the variable \"surf\", assigning its index to the local variable \"spr_Custom\", and then uses a ","for"," loop to move across the surface and capture various sections which are added into the sprite as sub-images. this new sprite is then saved as a png strip before being removed from memory."," ","Back: ","Sprite Manipulation"," ","Next: ","sprite_flush"]],"5":[[" ","Syntax:"],[" ","Returns"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1741"})