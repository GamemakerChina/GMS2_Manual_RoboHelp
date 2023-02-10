rh._.exports({"0":[[" ","vertex_submit"]],"1":[["vertex_submit,pr_pointlist,pr_linelist,pr_linestrip,pr_trianglelist,pr_trianglestrip"]],"2":[["vertex_submit,pr_pointlist,pr_linelist,pr_linestrip,pr_trianglelist,pr_trianglestrip"]],"3":[[" ","vertex_submit"]],"4":[[" ","You can use this function to submit the contents of a vertex buffer to the graphics pipeline for use with a shader. You supply the buffer index to use, the base primitive type to use (see the constants below) and the texture that is to be used. The base primitive type is only used for assigning the order in which the vertexes that you stored in the buffer are drawn and connected, but the actual data used for each of the vertexes will be that which you defined when creating the vertex buffer."," ","NOTE",": This function can only be used in the ","Draw Event","."," ","For a visual example of the different base primitives available, see the image below:"," ","Constant"," ","Description"," ","pr_pointlist"," ","A primitive consisting of a list of points."," ","pr_linelist"," ","A primitive made up of a individual lines in a list."," ","pr_linestrip"," ","A primitive made up of a consecutive strip of lines."," ","pr_trianglelist"," ","A primitive made up of individual triangles in a list."," ","pr_trianglestrip"," ","A primitive made up of a consecutive strip of triangles."],[" ","vertex_submit(buffer, primitive, texture);"," ","Argument"," ","Type"," ","Description"," ","buffer"," ","Vertex Buffer ID"," ","The buffer to use."," ","primitive"," ","Primitive Type Constant"," ","The primitive base type."," ","texture"," ","Texture"," ","The texture to use (or -1 for no texture)."],[" ","N/A"],[" ","shader_set(shader_prim);","\n    vertex_submit(buff, pr_trianglelist, sprite_get_texture(sprite_index));","\n    shader_reset();"," ","The above code will submit the vertex buffer indexed in the variable \"buff\" for drawing with the shader \"shader_prim\", using a triangle list as the base primitive and the texture of the sprite for the instance running the code."," ","Back: ","Primitives And Vertex Formats"," ","Next: ","draw_primitive_begin"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2160"})