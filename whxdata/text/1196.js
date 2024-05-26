rh._.exports({"0":[[" ","font_get_texture"]],"1":[["font_get_texture"]],"2":[["font_get_texture"]],"3":[[" ","font_get_texture"]],"4":[[" ","This function returns a special ","pointer"," for the font texture page."," ","This value can then be used in other draw functions, particularly in general drawing when using ","primitives"," as well as the ","Shader"," functions. You can get more information about the returned texture page using the different ","texture_*"," functions on the ","Textures"," page."," ","NOTE"," On HTML5, this returns a struct instead of a texture pointer, as a pointer cannot be used on that platform. However this does not change the use of the returned value, as its usage in ","texture functions"," still remains the same."],[" ","font_get_texture","(font);"," ","Argument"," ","Type"," ","Description"," ","font"," ","Font Asset"," ","The font to use."],[" ","Texture"],[" ","tex = ","font_get_texture","(fnt_Main);"," ","The above code will get the texture pointer for the font indexed as ","fnt_Main","."," ","Back: ","Fonts"," ","Next: ","font_get_uvs"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1196"})