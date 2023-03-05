rh._.exports({"0":[[" ","texturegroup_get_sprites"]],"1":[["texturegroup_get_sprites"]],"2":[["texturegroup_get_sprites"]],"3":[[" ","texturegroup_get_sprites"]],"4":[[" ","With this function you can retrieve the sprite index of each of the sprites assigned to texture pages within the given texture group. You supply the texture group ID string (as defined in the texture Group Editor) and the function will return a 1D array where each entry contains the sprite index for a sprite resource. If the function fails - ie: an invalid group is given, or the group has no texture assigned to it - then the array will be empty (0 length)."],[" ","texturegroup_get_sprites(tex_id);"," ","Argument"," ","Type"," ","Description"," ","tex"," ","String"," ","The name of the texture group to check (a string)"],[" ","Array"],[" ","var _tex_array = texturegroup_get_sprites( \"MainMenu\");","\n    for (var i = 0; i < array_length(_tex_array); ++i;)","\n    {","\n        show_debug_message(\"Sprite \" + string(i) + \" Index:\" + string(tex_array[i]));","\n    }"," ","The above code will retrieve the sprite indexes for the texture group \"MainMenu\", then display those IDs in the console output window."," ","Back: ","Textures"," ","Next: ","texturegroup_get_fonts"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"925"})