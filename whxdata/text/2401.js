rh._.exports({"0":[["shader_set_uniform_f_buffer"]],"1":[["shader_set_uniform_f_buffer"]],"2":[["shader_set_uniform_f_buffer"]],"3":[["\n  "],["\n  ","With this function you can set the value of a shader uniform to a list of floating point values that are stored in a buffer.","\n  ","As floats are represented in a buffer using the ","buffer_f32"," data type, this function expects the data in the range given by offset and count to be formatted as consecutive values of this type.","\n  ","\n  ","NOTE"," All uniforms must be set ","after"," calling the function ","shader_set"," and ","before"," calling ","shader_reset",".","\n\n","\n  "],["\n  ","shader_set_uniform_f_buffer","(uniform, buffer, offset, count);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","handle","\n        ","Shader Uniform Handle","\n        ","The handle to the shader uniform as returned by ","shader_get_uniform","\n      ","\n      ","\n        ","buffer","\n        ","Buffer ID","\n        ","The buffer to read the values from","\n      ","\n      ","\n        ","offset","\n        ","Real","\n        ","The offset (in bytes) in the buffer","\n      ","\n      ","\n        ","count","\n        ","Real","\n        ","The number of values of type ","buffer_f32"," to be used (see ","Buffer Data Type Constant",")","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","/// Create Event","\n    var _values = 4;","\n    var _size = buffer_sizeof(buffer_f32);","\n    buffer = buffer_create(_values * _size, buffer_fixed, 1);","\n    ","\n    buffer_write(buffer, buffer_f32, 1);","\n    buffer_write(buffer, buffer_f32, 0.7);","\n    buffer_write(buffer, buffer_f32, 0.9);","\n    buffer_write(buffer, buffer_f32, 1);","\n    ","\n    uni_blend_colour = shader_get_uniform(shader_Colorize, \"u_vBlendColour\");","\n    ","\n    ","\n    /// Draw Event","\n    shader_set(shader_Colorize);","\n    ","shader_set_uniform_f_buffer","(uni_blend_colour, _buffer, 0, 4);","\n    vertex_submit(global.vb_character, pr_trianglelist, -1);","\n    shader_reset();","\n    ","\n    ","\n    /// Clean Up event","\n    buffer_delete(buffer);\n  ","\n  ","The above code first creates a new buffer ","buffer"," of a fixed size that has room to store four values (","_values",") of type ","buffer_f32",". This is done in an object's Create event. Four values between 0 and 1 are then ","written"," to the buffer that represent, in order, the R, G, B and A component of a blend colour. After that a handle is retrieved to a ","uniform vec4 u_vBlendColour;"," uniform defined in a ","shader"," named \"shader_Colorize\". Next in the Draw event this shader is set, the four values in the buffer are passed to the shader using ","shader_set_uniform_f_buffer",", and the model in a ","vertex buffer"," named ","vb_character"," is submitted (i.e. ","drawn","). After that the shader is reset. Finally in the Clean Up event the buffer is deleted to avoid a memory leak.","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Shaders","\n        ","Next: ","shader_set_uniform_i","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["shader_set_uniform_f_buffer"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2401"})