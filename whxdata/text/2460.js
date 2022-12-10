rh._.exports({"0":[["buffer_create_from_vertex_buffer_ext"]],"1":[["buffer_create_from_vertex_buffer_ext"]],"2":[["buffer_create_from_vertex_buffer_ext,buffer_fixed,buffer_grow,buffer_wrap,buffer_fast,buffer_vbuffer"]],"3":[["\n  ","\n  "],["\n  ","You use this function to allocate a portion of memory as a buffer in your game filled with the data from a previously created ","vertex buffer",". The function returns a unique ","buffer id"," that should be stored in a variable and used for all further function calls to the buffer. The function takes the id for the vertex buffer to use (as returned by the function ","vertex_create_buffer()",", for example) with the following constants being used to define the buffer type:","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","buffer_fixed","\n        ","A buffer of fixed size.","\n      ","\n      ","\n        ","buffer_grow","\n        ","A buffer that will \"grow\" dynamically as data is added","\n      ","\n      ","\n        ","buffer_wrap","\n        ","A buffer where the data will \"wrap\". When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point.","\n      ","\n      ","\n        ","buffer_fast","\n        ","Special \"stripped\" buffer that is extremely fast to read/write to. Can only be used with ","buffer_u8"," ","data types",", and ","must"," be 1 byte aligned.","\n      ","\n      ","\n        ","buffer_vbuffer","\n        ","This type of buffer is to be used as a vertex buffer only.","\n      ","\n    ","\n  ","\n  ","Apart from the buffer type, you will also have to set the ","byte alignment"," for the buffer. This value will vary depending on the data that you wish to store in the buffer, and in most cases a value of 1 is perfectly fine. However, be aware that for some operations a specific alignment is ","essential",", and an incorrect alignment may cause errors (for further details on alignment see ","Buffer Alignment","). The following is a general guide to show which values are most appropriate for each data type (when in doubt, use an alignment of 1):","\n  ","\n    ","Strings should be aligned to 1 byte.","\n    ","Signed or unsigned 8bit integers can be aligned to any value, but note that for a fast buffer (see ","buffer_write()",") it ","must"," be aligned to 1.","\n    ","Signed or unsigned 16bit integers should be aligned to 2 bytes.","\n    ","Signed or unsigned 32bit integers should be aligned to 4 bytes","\n    ","Floats of up to 16bits should be aligned to 2 bytes. ","(Not currently supported!)","\n    ","Floats of up to 32bits should be aligned to 4 bytes.","\n    ","Floats of up to 64bits should be aligned to 8 bytes.","\n  ","\n  ","NOTE",": Vertex buffers are 1 byte aligned, but you can create the buffer with any alignment depending on how you want to treat the data, as the vertex data is simply a raw memory copy into the buffer.","\n  ","The final two arguments are used to specify the range of vertex data that you wish to copy into the newly created buffer. The start vertex can be anywhere between 0 and the number of vertices -1, and then you give the number of vertices from that point to copy. You can use the function ","vertex_get_number()"," on the vertex buffer to get the total number of vertices stored.","\n  ","NOTE",": It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again using ","buffer_delete()",". Also note that the vertex buffer used to create the new buffer is not removed from memory either and you should use the function ","vertex_delete_buffer()"," when it is no longer required.","\n  "," ","\n  "],["\n  ","buffer_create_from_vertex_buffer_ext(vertex_buffer, type, alignment, start_vertex, num_vertices)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","vertex_buffer","\n        ","Vertex Buffer ID","\n        ","The vertex buffer index to use.","\n      ","\n      ","\n        ","type","\n        ","Buffer Type Constant","\n        ","The type of buffer to create (see the constants list below).","\n      ","\n      ","\n        ","alignment","\n        ","Real","\n        ","The byte alignment for the buffer","\n      ","\n      ","\n        ","start_vertex","\n        ","Real","\n        ","The starting vertex.","\n      ","\n      ","\n        ","num_vertices","\n        ","Real","\n        ","The total number of vertices to copy.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Buffer ID","\n  "," ","\n  "],["\n  ","var v_num = vertex_get_number(model_buff); player_buffer = buffer_create_from_vertex_buffer(model_buffer, buffer_grow, 1, 0, v_num - 1);","\n  ","The above code allocates memory to a buffer then copies the data of all vertices from the given vertex buffer into it, returning the index of the new buffer which is stored in the variable \"player_buffer\", for future use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_delete","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["buffer_create_from_vertex_buffer_ext"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2460"})