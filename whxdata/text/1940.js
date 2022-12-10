rh._.exports({"0":[["buffer_copy_from_vertex_buffer"]],"1":[["buffer_copy_from_vertex_buffer"]],"2":[["buffer_copy_from_vertex_buffer"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to copy some (or all) of the vertex data stored in one vertex buffer into a previously created regular buffer. When copying from a vertex buffer into a regular buffer with this function, both buffers must have previously been created (using the ","vertex_create_buffer()"," and ","buffer_create()"," functions, for example). You can specify the range of vertex data that you wish to copy into the buffer, where the start vertex can be anywhere between 0 and the number of vertices -1, and you can give the number of vertices from that point on to copy. You can use the function ","vertex_get_number()"," on the vertex buffer to get the total number of vertices stored. Finally you give the buffer index to copy the vertex data into, as well as a data offset to define the position to copy the vertex data to in the destination buffer.","\n  "," ","\n  "],["\n  ","buffer_copy_from_vertex_buffer(vertex_buffer, start_vertex, num_vertices, dest_buffer, dest_offset);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","vertex_buffer","\n        ","Vertex Buffer ID","\n        ","The index of the vertex buffer to copy ","from",".","\n      ","\n      ","\n        ","start_vertex","\n        ","Real","\n        ","The starting vertex.","\n      ","\n      ","\n        ","num_vertices","\n        ","Real","\n        ","The total number of vertices to use.","\n      ","\n      ","\n        ","dest_buffer","\n        ","Buffer ID","\n        ","The index of the buffer to copy ","to",".","\n      ","\n      ","\n        ","dest_offset","\n        ","Real","\n        ","The offset position to copy the data to (in bytes).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var v_num = vertex_get_number(model_buff); buffer_copy_from_vertex_buffer(model_buffer, 0, v_num - 1, player_buffer, 0);","\n  ","The above code will copy the vertex data stored in the vertex buffer indexed in the variable \"model_buffer\", and then paste it into the buffer indexed in the variable \"player_buffer\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_get_type","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["buffer_copy_from_vertex_buffer"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1940"})