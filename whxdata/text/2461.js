rh._.exports({"0":[[" ","Primitives And Vertex Formats"]],"2":[["Primitives And Vertex Formats,Primitives,Vertex Buffers,Vertex Formats"]],"3":[[" ","Primitives And Vertex Formats"]],"4":[[" ","A primitive is a type of drawing done using points to define what is shown on the screen. They can be made up of single points, lines, or triangles and can be coloured, have alpha blending and even be given a texture, which means that they can be used to create some very exciting effects in a 2D game! For example, you can create a rectangle using multiple triangle primitives, then texture it with a flag sprite and in the draw event of an instance have that flag \"wave\" in the wind and distort the sprite you used by simply modifying the points that form the primitive."," ","WARNING! ","These functions do not work with the HTML5 module unless you have enabled OpenGL in the ","Game Options","."," ","Information on drawing primitives can be found on the following pages:"," ","draw_primitive_begin"," ","draw_primitive_begin_texture"," ","draw_primitive_end"," ","draw_vertex"," ","draw_vertex_colour"," ","draw_vertex_texture"," ","draw_vertex_texture_colour"," ","GameMaker"," permits you to define your own ","vertex formats"," from which you can create your own custom primitives. This can greatly speed up shader operations or can be used to extend their capabilities and create surprising effects. You can find information on this in the following sections:"," ","vertex_format_begin"," ","vertex_format_add_colour"," ","vertex_format_add_position"," ","vertex_format_add_position_3d"," ","vertex_format_add_texcoord"," ","vertex_format_add_normal"," ","vertex_format_add_custom"," ","vertex_format_end"," ","vertex_format_delete"," ","Once you have created your vertex format (see the section above) you can then use it to build the primitives that you want to draw using the following veretx buffer functions:"," ","vertex_create_buffer"," ","vertex_create_buffer_ext"," ","vertex_create_buffer_from_buffer"," ","vertex_create_buffer_from_buffer_ext"," ","vertex_get_buffer_size"," ","vertex_get_number"," ","vertex_delete_buffer"," ","vertex_begin"," ","vertex_colour"," ","vertex_normal"," ","vertex_position"," ","vertex_position_3d"," ","vertex_argb"," ","vertex_texcoord"," ","vertex_float1"," ","vertex_float2"," ","vertex_float3"," ","vertex_float4"," ","vertex_ubyte4"," ","vertex_end"," ","vertex_freeze"," ","vertex_submit"," ","IMPORTANT!"," The primitives that you build should follow the format that you have set using the Vertex Format functions, so if you have defined a vertex format with only positional data, there is no point building your primitive with colour data. You should note that the order in which you add properties to the primitive you are building is defined by the order in which you added these properties when creating the vertex format, so if you have defined the vector format with the order position, colour and texture coordinate, you ","must"," add these properties to the primitive being built in the same order otherwise you will get errors."," ","For an overview of how to build primitives using the vertex functions, see:"," ","Guide To Primitives And Vertex Building"," ","Back: ","Drawing"," ","Next: ","Surfaces"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2461"})