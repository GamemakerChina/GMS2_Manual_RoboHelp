rh._.exports({"0":[["font_get_texture"]],"1":[["font_get_texture"]],"2":[["font_get_texture"]],"3":[["\n  ","\n  "],["\n  ","This function returns a special ","pointer"," for the font texture page. This value can then be used in other draw functions, particularly in general drawing when using ","primitives"," as well as the ","Shader"," functions. You can get more information about the returned texture page using the different ","texture_"," functions found ","here",".","\n  ","\n  ","NOTE"," On HTML5, this returns a struct instead of a texture pointer, as a pointer cannot be used on that platform. However this does not change the use of the returned value, as its usage in ","texture functions"," still remains the same.","\n\n","\n  "," ","\n  "],["\n  ","font_get_texture(font);","\n  "," ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","font","\n        ","Font Asset","\n        ","The index of the font to use.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Texture","\n  "," ","\n  "],["\n  ","tex = font_get_texture(fnt_Main);","\n  ","The above code will get the texture pointer for the font indexed as \"fnt_Main\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fonts","\n        ","Next: ","font_get_uvs","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["font_get_texture"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1002"})