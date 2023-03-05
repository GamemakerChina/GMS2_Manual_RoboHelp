rh._.exports({"0":[[" ","vertex_create_buffer_from_buffer"]],"1":[["vertex_create_buffer_from_buffer"]],"2":[["vertex_create_buffer_from_buffer"]],"3":[[" ","vertex_create_buffer_from_buffer"]],"4":[[" ","As with the function ","vertex_create_buffer()",", this function will create a new vertex buffer, only now the vertex data it stores is copied from the regular buffer that is specified as the source. The buffer created is a special ","grow"," buffer which is pre-formatted with the vertex format for building primitives for use with (for example) shaders. This function requires that you supply the pointer to a previously created regular buffer, and a vertex format that should be applied to the copied data."],[" ","vertex_create_buffer_from_buffer(buffer, format);"," ","Argument"," ","Type"," ","Description"," ","buffer"," ","Buffer ID"," ","The buffer to create the vertex buffer from."," ","format"," ","Primitive Type Constant"," ","The primitive vertex format to use."],[" ","Vertex Buffer ID"],[" ","vertex_format_begin();","\n    vertex_format_add_position_3d();","\n    vertex_format_add_colour();","\n    vertex_format_add_textcoord();","\n    var my_format = vertex_format_end();","\n    v_buff = vertex_create_buffer_from_buffer(global.modelBuff, myFormat);"," ","The above code will create a new vertex format then create a new vertex buffer from a previously created regular buffer, applying the custom vertex format to it."," ","Back: ","Primitives And Vertex Formats"," ","Next: ","vertex_create_buffer_from_buffer_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1538"})