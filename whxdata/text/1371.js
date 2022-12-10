rh._.exports({"0":[["tileset_get_texture"]],"1":[["tileset_get_texture"]],"2":[["tileset_get_texture"]],"3":[["\n  ","\n  "],["\n  ","This function returns a special ","pointer"," for the tile set texture page. This value can then be used in other draw functions, particularly in the ","2D primitive"," functions, as well as the ","Shader"," functions. You can get more information about the returned texture page using the different ","texture_"," functions found ","here",".","\n  ","\n  ","NOTE"," On HTML5, this returns a struct instead of a texture pointer, as a pointer cannot be used on that platform. However this does not change the use of the returned value, as its usage in ","texture functions"," still remains the same.","\n\n","\n  "," ","\n  "],["\n  ","tileset_get_texture(tileset);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","tileset","\n        ","Tile Set Asset","\n        ","The index of the tile set to use.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Texture","\n  "," ","\n  "],["\n  ","var tex;","\n    tex = tileset_get_texture(spr_Wall, 0);","\n    draw_primitive_begin_texture(pr_trianglestrip, tex);","\n    draw_vertex_texture(0, 0, 0, 0);","\n    draw_vertex_texture(480, 0, 1, 0);","\n    draw_vertex_texture(480, 640, 1, 1);","\n    draw_vertex_texture(0, 640, 0, 1);","\n    draw_primitive_end();","\n  ","The above code will draw a 4 vertex triangle strip textured with the texture held in the \"tex\" variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Sets","\n        ","Next: ","tileset_get_uvs","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["tileset_get_texture"]],"5":[["Syntax:"],["Returns"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1371"})