rh._.exports({"0":[[" ","texture_get_uvs"]],"1":[["texture_get_uvs"]],"2":[["texture_get_uvs"]],"3":[[" ","texture_get_uvs"]],"4":[[" ","This function returns a 1D ","array"," with 4 elements representing the UV coordinates for the given texture pointer, filling in the array with the following values:"," ","[0] = left"," ","[1] = top"," ","[2] = right"," ","[3] = bottom"," ","[4] = amount of pixels the asset compiler has trimmed from the sprites left side (sprite assets only)"," ","[5] = amount of pixels the asset compiler has trimmed from the sprites top side (sprite assets only)"," ","[6] = normalised percentage of pixel data from the original sprites width that has been saved to the texture page (sprite assets only)"," ","[7] = normalised percentage of pixel data from the original sprites height that has been saved to the texture page (sprite assets only)"," ","This value can then be used in other draw functions, particularly in general 3D and some of the 2D primitive functions, as well as the Shader functions. If you need the UVS for a sprite then you can use the ","sprite_get_uvs()"," and for a font, ","font_get_uvs()","."],[" ","texture_get_uvs(texid)"," ","Argument"," ","Type"," ","Description"," ","texid"," ","Texture"," ","The texture pointer to get the UVS for"],[" ","Array"," (4 - 8 elements)"],[" ","var _tex = surface_get_texture(surf_back);","\n    var _uvs = texture_get_uvs(tex);","\n    var ","_uvs","_left = _uvs[0];","\n    var ","_uvs","_top = _uvs[1];","\n    var ","_uvs","_right = _uvs[2];","\n    var ","_uvs","_bottom = _uvs[3];"," ","The above code first retrieves the texture for the surface stored in ","surf_back",", and then gets the UV coordinates for that texture. It then retrieves the left, top, right and bottom UV coordinates from the returned array and stores them in local variables."," ","Back: ","Textures"," ","Next: ","texture_set_stage"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1925"})