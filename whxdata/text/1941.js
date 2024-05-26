rh._.exports({"0":[[" ","draw_primitive_begin_texture"]],"1":[["draw_primitive_begin_texture"]],"2":[["draw_primitive_begin_texture"]],"3":[[" ","draw_primitive_begin_texture"]],"4":[[" ","This function must be called before you define the vertices of a textured primitive. You must give the kind of primitive to use (see ","draw_primitive_begin"," for more information) and the ","id"," of a texture to use, which can be that of a sprite asset or of a surface. This ","id"," can be retrieved from the function ","sprite_get_texture",", for example (use ","-1"," for no texture)."," ","NOTE"," For a texture to repeat it must be a power of two in size, i.e.: 32x32, 128x128, etc."],[" ","draw_primitive_begin_texture","(kind, tex)"," ","Argument"," ","Type"," ","Description"," ","kind"," ","Primitive Type Constant"," ","The kind of primitive you are going to draw."," ","tex"," ","Texture"," ","The texture to use with the primitive (","-1"," to use no texture)"],[" ","N/A"],[" ","draw_set_colour(c_white);","\n    var _tex = sprite_get_texture(spr_Background, 0);","\n    draw_primitive_begin_texture(pr_trianglestrip, _tex);","\n    draw_vertex_texture(0, 0, 0, 0);","\n    draw_vertex_texture(640, 0, 1, 0);","\n    draw_vertex_texture(0, 480, 0, 1);","\n    draw_vertex_texture(640, 480, 1, 1);","\n    draw_primitive_end();"," ","The above code will draw a 4 vertex triangle strip (making a rectangle) textured with the texture held in the ","_tex"," variable, and the whole texture will be used to cover the completed primitive."," ","Back: ","Primitives And Vertex Formats"," ","Next: ","draw_primitive_end"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1941"})