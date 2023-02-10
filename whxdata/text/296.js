rh._.exports({"0":[[" ","draw_primitive_end"]],"1":[["draw_primitive_end"]],"2":[["draw_primitive_end"]],"3":[[" ","draw_primitive_end"]],"4":[[" ","This function must be called when you have finished defining the points of your primitive. If you do not call this function, ","nothing will be drawn"," as this effectively tells ","GameMaker"," that you have finished and that it can now\n    draw the defined primitive."],[" ","draw_primitive_end()"],[" ","N/A"],[" ","draw_set_colour(c_white);"," var tex = sprite_get_texture(spr_Background, 0);"," draw_primitive_begin_texture(pr_trianglestrip, tex);"," draw_vertex_texture(0, 0, 0, 0);"," draw_vertex_texture(640, 0, 1, 0);"," draw_vertex_texture(0, 480,\n    0, 1);"," draw_vertex_texture(640, 480, 1, 1);"," draw_primitive_end();\n  "," ","The above code will draw a 4 vertex triangle strip textured with the texture held in the \"tex\" variable."," ","Back: ","Primitives And Vertex Formats"," ","Next: ","draw_vertex"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"296"})