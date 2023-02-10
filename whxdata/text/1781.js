rh._.exports({"0":[[" ","font_cache_glyph"]],"1":[["font_cache_glyph"]],"2":[["font_cache_glyph"]],"3":[[" ","font_cache_glyph"]],"4":[[" ","This function lets you pre-cache a character glyph from a font."," ","If you don't pre-cache a character using this function, it's automatically cached before it's drawn for the first time."," ","This function returns a struct with the x and y position of the glyph on the font's texture page, e.g. ","{ x : 208, y : 62 }",". To get a handle to the texture page that the cached glyph is on you can use ","font_get_texture","."],[" ","font_cache_glyph","(font, glyph_index);"," ","Argument"," ","Type"," ","Description"," ","font"," ","Font Asset"," ","The font to cache a character or glyph from"," ","glyph_index"," ","Real"," ","The index (or character code) of the glyph to cache (see ","ord","/","string_ord_at",")"],[" ","Struct"],[" ","var _glyph = ","font_cache_glyph","(fnt_gui, 65);"," ","The above code caches the glyph with the index ","65"," from a font asset, and stores the returned struct in a local variable."," ","Back: ","Fonts"," ","Next: ","font_add"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1781"})