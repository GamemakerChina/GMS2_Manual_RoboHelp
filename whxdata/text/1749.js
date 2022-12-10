rh._.exports({"0":[["buffer_load_partial"]],"1":[["buffer_load_partial"]],"2":[["buffer_load_partial"]],"3":[["\n  ","\n  "],["\n  ","This function will load some of the buffer data that was previously saved using the ","buffer_save()"," functions into an existing buffer. You give the id of the previously created buffer to load into, then the saved buffer file to load, and then the offset from the start of the buffer (in bytes) that you wish to load the data from. The following arguments are for setting the length of the buffer data (in bytes) from the initial offset point that you wish to load and the offset point to load the data to in the buffer (again, in bytes).","\n  ","Please read the ","buffer_load()"," page for platform-specific notes.","\n  "," ","\n  "],["\n  ","buffer_load_partial(buffer, filename, offset, src_len, dest_offset);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","buffer","Buffer ID","\n        ","The index of the buffer to load into (destination).","\n     ","\n      ","\n        ","filename","String","\n        ","The name of the file to load from (source).","\n     ","\n      ","\n        ","offset","Real","\n        ","The offset within the destination buffer to load to (in bytes).","\n     ","\n      ","\n        ","src_len","Real","\n        ","The length of the part of the source buffer to load (in bytes).","\n     ","\n      ","\n        ","dest_offset","Real","\n        ","The offset where to start putting the partial data in the destination buffer (in bytes).","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","buff = buffer_create(256, buffer_grow, 1);","\n    var _file = \"save.dat\";","\n    var _so = 6;","\n    var _sl = 5;","\n    var _do= 0;","\n    buffer_load_partial(buff, _file, _so, _sl, _do);","\n  ","The above code will create a new \"grow\" buffer and then load in a part of the data saved in the file \"save.dat\" to it.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_compress","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["buffer_load_partial"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1749"})