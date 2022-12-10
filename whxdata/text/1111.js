rh._.exports({"0":[["texture_flush"]],"1":[["texture_flush"]],"2":[["texture_flush"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to \"flush\" a texture page or a group of texture pages, i.e.: remove them from VRAM when no longer required. The textures stay in RAM.","\n  ","You supply the unique ","texture page ID"," (as returned by the ","texturegroup_*"," functions) to flush a single page, or you can supply a ","texture group name"," (as defined in the ","Texture Group Editor",") to flush all the texture pages in the group.","\n  "," ","\n  "],["\n  ","texture_flush(tex_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","tex_id","\n        ","Texture"," or ","String","\n        ","The texture page pointer ","or"," a texture group name (a string)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var _tex_array = texturegroup_get_textures( \"MainMenu\");","\n    for (var i = 0; i < array_length(_tex_array); ++i;)","\n    {","\n        texture_flush(_tex_array[i]);","\n    }","\n  ","The above code will flush all the texture pages under the texture group \"MainMenu\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Textures","\n        ","Next: ","texture_debug_messages","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["texture_flush"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1111"})