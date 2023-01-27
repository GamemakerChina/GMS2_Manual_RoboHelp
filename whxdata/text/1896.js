rh._.exports({"0":[[" ","vertex_create_buffer_from_buffer_ext"]],"1":[["vertex_create_buffer_from_buffer_ext"]],"2":[["vertex_create_buffer_from_buffer_ext"]],"3":[[" ","vertex_create_buffer_from_buffer_ext"]],"4":[[" ","As with the function ","vertex_create_buffer()",", this function will create a new vertex buffer, only now the vertex data it stores is copied from the regular buffer that is specified as the source. The buffer is pre-formatted with the vertex format for building primitives for use with (for example) shaders, and you can also supply an offset within the source buffer to copy from and the number of vertices that the final buffer should have. Note that if the number of vertices does not match those being copied you may get corrupted vertex data."],[" ","vertex_create_buffer_from_buffer_ext(buffer, format, src_offset, vert_num);"," ","Argument"," ","Type"," ","Description"," ","buffer"," ","Buffer ID"," ","The buffer to create the vertex buffer from."," ","format"," ","Primitive Type Constant"," ","The primitive vertex format to use."," ","src_offset"," ","Real"," ","The offset within the the source buffer to copy from."," ","vert_num"," ","Real"," ","The number of vertices the buffer should have."],[" ","Vertex Buffer ID"],[" ","vertex_format_begin();","\n    vertex_format_add_position_3d();","\n    vertex_format_add_colour();","\n    vertex_format_add_textcoord();","\n    var my_format = vertex_format_end();","\n    v_buff = vertex_create_buffer_from_buffer(global.modelBuff, myFormat, 0, 512);"," ","The above code will create a new vertex format then create a new vertex buffer from a previously created regular buffer, applying the custom vertex format to it with 0 offset. The function tells the new vertex buffer that it should expect 512 vertices."," ","Back: ","Primitives And Vertex Formats"," ","Next: ","vertex_get_buffer_size"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1896"})