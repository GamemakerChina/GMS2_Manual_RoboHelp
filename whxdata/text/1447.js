rh._.exports({"0":[[" ","texturegroup_get_textures"]],"1":[["texturegroup_get_textures"]],"2":[["texturegroup_get_textures"]],"3":[[" ","texturegroup_get_textures"]],"4":[[" ","This function can be used to retrieve the ","texture page IDs"," of the individual pages that make up a texture group. You supply the texture group ID string (as defined in the Texture Group Editor), and the function will return a 1D array, where each entry in the array is a single texture page ID. If the function fails - ie: an invalid group is given, or the group has no texture assigned to it - then the array will be empty (0 length)."],[" ","texturegroup_get_textures(tex_id);"," ","Argument"," ","Type"," ","Description"," ","tex_id"," ","String"," ","The name of the texture group to check (a string)"],[" ","Array"," of ","Texture","s"],[" ","var _tex_array = texturegroup_get_textures( \"MainMenu\");","\n    for (var i = 0; i < array_length(_tex_array); ++i;)","\n    {","\n        if texture_is_ready(_tex_array[i])","\n        {","\n            texture_prefetch(_tex_array[i]);","\n        }","\n    }"," ","The above code will retrieve the texture page IDs for the texture group \"MainMenu\", then check to see if they are unpacked, and if they are them they are placed into VRAM."," ","Back: ","Textures"," ","Next: ","texturegroup_get_sprites"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1447"})