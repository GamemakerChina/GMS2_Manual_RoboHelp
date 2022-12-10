rh._.exports({"0":[["texture_get_texel_height"]],"1":[["texture_get_texel_height"]],"2":[["texture_get_texel_height"]],"3":[["\n  ","\n  "],["\n  ","A texel, or ","texture element"," is the fundamental unit of texture space used in computer graphics. Textures are represented by arrays of texels, just as pictures are represented by arrays of pixels, and this function returns the height of a single texel from the texture page of the image asset used.","\n  "," ","\n  "],["\n  ","texture_get_texel_height(tex);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","tex","\n        ","Texture","\n        ","The texture page asset pointer to use","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var tex = sprite_get_texture(sprite_index, 0);","\n    tex_w = texture_get_texel_width(tex);","\n    tex_h = texture_get_texel_height(tex);","\n  ","The above code will get the texel width and height of the texture taken from a sprite asset.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Textures","\n        ","Next: ","texture_get_uvs","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["texture_get_texel_height"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"558"})