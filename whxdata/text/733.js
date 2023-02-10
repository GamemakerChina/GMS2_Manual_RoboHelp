rh._.exports({"0":[[" ","texture_prefetch"]],"1":[["texture_prefetch"]],"2":[["texture_prefetch"]],"3":[[" ","texture_prefetch"]],"4":[[" ","This function can be used to \"prefetch\" a texture page or a group of texture pages, ie: load them into VRAM when required. You supply the unique ","texture page ID"," (as returned by the ","texturegroup_*"," functions) to prefetch a single page, or you can supply a ","texture group name"," (as defined in the ","Texture Group Editor",") to prefetch all the texture pages in the group."],[" ","texture_prefetch(tex_id);"," ","Argument"," ","Type"," ","Description"," ","tex_id"," ","Texture"," or ","String"," ","The texture page pointer ","or"," a texture group name (a string)"],[" ","N/A"],[" ","var _tex_array = texturegroup_get_textures( \"MainMenu\");","\n    for (var i = 0; i < array_length(_tex_array); ++i;)","\n    {","\n        texture_prefetch(_tex_array[i]);","\n    }"," ","The above code will prefetch all the texture pages under the texture group \"MainMenu\"."," ","Back: ","Textures"," ","Next: ","texture_flush"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"733"})