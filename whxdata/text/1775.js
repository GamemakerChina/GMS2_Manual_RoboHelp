rh._.exports({"0":[["font_cache_glyph"]],"1":[["font_cache_glyph"]],"2":[["font_cache_glyph"]],"3":[["\n  "],["\n  ","This function lets you pre-cache a character or glyph from a font.","\n  ","This can be useful for reasons of performance. If you don't pre-cache a character using this function it is automatically cached before it's drawn for the first time.","\n  ","NOTE"," This function returns a struct with the x and y position of the glyph on the font's texture page, e.g. ","{ x : 208, y : 62 }",". To get a handle to the texture page that the cached glyph is on you can use ","font_get_texture",".","\n  "],["\n  ","font_cache_glyph","(font, glyph_index);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","font","\n        ","Font Asset","\n        ","The font to cache a character or glyph from","\n      ","\n      ","\n        ","glyph_index","\n        ","Real","\n        ","The index (or character code) of the glyph to cache (see ","ord","/","string_ord_at",")","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Struct","\n  "," ","\n  "],["\n  ","\n    ","font_cache_glyph","(fnt_gui, 65);\n  ","\n  ","The above code ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fonts","\n        ","Next: ","font_add_enable_aa","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["font_cache_glyph"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1775"})