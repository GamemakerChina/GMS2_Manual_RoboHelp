rh._.exports({"0":[[" ","font_add_sprite"]],"1":[["font_add_sprite"]],"2":[[" ","font_add_sprite"]],"3":[[" ","With this function you can use a ","sprite strip"," to create a new font asset, where each sub-image would be an individual symbol or letter. The index is the UTF8 map number for the first character to use and the ranges to use are the same as you would for a normal font, starting with \"!\" but remember that you should only include what you need and that you should be using the ","ord()"," function to get the correct UTF8 value for the starting letter. The created sprite font will then have the sub-images set to an individual glyph from the font, where the \"first\" glyph will have the image_index of 0. You can define \"space\" as being any character you want, for example a single line the size that you want the space to be, and all spaces in text will be rendered at that width (but the image chosen will ","never"," be rendered), or if you don't supply a sprite for space then the width of the widest character in the sprite font will be used instead."," ","You can also set the spacing for the font to be proportional (","true",") or not (","false","), where a proportional font is spaced based on the actual width of the letters (so the letter \"i\" takes less room than the letter \"w\", for example) while a non-proportional font will be spaced based on the sub-image width, like a monospaced font. Finally, you can define the space to leave between each letter when writing, and this can be any integer value, with 0 being no space (the letters will \"touch\" if proportional)."," ","The function returns an ","index"," value that should be stored in a variable as this will be needed in all further codes that refer to this font, or it will return -1 if the function fails for any reason."," ","It is also worth noting that there cannot be any ","spaces"," in the character map, so that if you, for example, use '.' and '0' but not '/', you need to either include '/' anyway or leave a blank sub-image between the two used characters."," ","The sprite itself can be a sprite asset from the Asset Browser or one loaded from a file using ","sprite_add"," first to get the index of the loaded sprite (which is then used in the function). It's important to note that for the font alignment functions (like ","draw_set_halign()",") to work as expected when using a sprite font, the sprite should have its origin set to the ","top left corner",". If you use other values then you will need to take the origin offset into consideration when drawing text using the font."," ","NOTE"," ","When you load a font into ","GameMaker"," you must remember to remove it again (with ","font_delete()",") when no longer needed, otherwise there is risk of a memory leak which will slow down and eventually crash your game."],[" ","font_add_sprite(spr, first, prop, sep);"," ","Argument"," ","Type"," ","Description"," ","spr"," ","Sprite Asset"," ","The sprite to add a font based on."," ","first"," ","Real"," ","The index of the first available character."," ","prop"," ","Boolean"," ","Set as proportional font or not."," ","sep"," ","Real"," ","The space to leave between each letter."],[" ","Font Asset"],[" ","global.Font = font_add_sprite(spr_HUD_Font, ord(\"!\"), true, 2);"," ","The above code will create a new font asset from a sprite asset and store the index of the new font in the variable \"global.Font\" for later use."," ","Back: ","Fonts"," ","Next: ","font_add_sprite_ext"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["font_add_sprite"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2434"})