rh._.exports({"0":[["vertex_create_buffer_from_buffer"]],"1":[["vertex_create_buffer_from_buffer"]],"2":[["vertex_create_buffer_from_buffer"]],"3":[["\n  ","\n  "],["\n  ","As with the function ","vertex_create_buffer()",", this function will create a new vertex buffer, only now the vertex data it stores is copied from the regular buffer that is specified as the source. The buffer created is a special ","grow"," buffer which is pre-formatted with the vertex format for building primitives for use with (for example) shaders. This function requires that you supply the pointer to a previously created regular buffer, and a vertex format that should be applied to the copied data.","\n  "," ","\n  "],["\n  ","vertex_create_buffer_from_buffer(buffer, format);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","Buffer ID","\n        ","The buffer to create the vertex buffer from.","\n      ","\n      ","\n        ","format","\n        ","Primitive Type Constant","\n        ","The primitive vertex format to use.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Vertex Buffer ID","\n  "," ","\n  "],["\n  ","vertex_format_begin();","\n    vertex_format_add_position_3d();","\n    vertex_format_add_colour();","\n    vertex_format_add_textcoord();","\n    var my_format = vertex_format_end();","\n    v_buff = vertex_create_buffer_from_buffer(global.modelBuff, myFormat);","\n  ","The above code will create a new vertex format then create a new vertex buffer from a previously created regular buffer, applying the custom vertex format to it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Primitives And Vertex Formats","\n        ","Next: ","vertex_create_buffer_from_buffer_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["vertex_create_buffer_from_buffer"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1474"})