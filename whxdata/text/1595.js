rh._.exports({"0":[["buffer_copy"]],"1":[["buffer_copy"]],"2":[["buffer_copy"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to copy a segment (or all) of the data stored in one buffer to another. When using two buffers and copying from one to the other, both buffers must have previously been created using the ","buffer_create()","    function (for example), and you can specify a data offset (in bytes) for the start point of the data to be copied from the source buffer relative to the start of the buffer, as well as another data offset to define the position to copy the data to\n    in the destination buffer.","\n  ","NOTE",": You cannot copy to the same buffer.","\n  "," ","\n  "],["\n  ","buffer_copy(src_buffer, src_offset, size, dest_buffer, dest_offset);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","src_buffer","Buffer ID","\n        ","The index of the buffer to copy ","from",".","\n     ","\n      ","\n        ","src_offset","Real","\n        ","The data offset to start copying from (in bytes).","\n     ","\n      ","\n        ","size","Real","\n        ","The size of the data to copy (in bytes).","\n     ","\n      ","\n        ","dest_buffer","Buffer ID","\n        ","The index of the buffer to copy ","to",".","\n     ","\n      ","\n        ","dest_offset","Real","\n        ","The offset position to copy the data to (in bytes).","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","buffer_copy(buff1, 0, 2048, buff2, 2048);","\n  ","The above code will copy the data stored in the buffer indexed in the variable \"buff1\", and then paste it into the buffer indexed in the variable \"buff2\", but offset by 2048 bytes.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_copy_from_vertex_buffer","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["buffer_copy"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1595"})