rh._.exports({"0":[["buffer_compress"]],"1":[["buffer_compress"]],"2":[["buffer_compress"]],"3":[["\n  ","\n  "],["\n  ","With this function you can compress part (or all) of a buffer using ","zlib compression",". You supply the ID of the buffer to compress (as returned by ","buffer_create()","), the offset within the buffer to use in bytes, and the size of the buffer data to compress (also in bytes). The function will return a new buffer ID value for the compressed buffer, or a value less than 0 if it has failed for any reason. This function will not alter the original buffer.","\n  "," ","\n  "],["\n  ","buffer_compress(buffer, offset, size);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","buffer","Buffer ID","\n        ","The index of the buffer to compress.","\n     ","\n      ","\n        ","offset","Real","\n        ","The offset within the buffer to compress (in bytes).","\n     ","\n      ","\n        ","size","Real","\n        ","The size of the buffer area to compress (in bytes).","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Buffer ID","\n  "," ","\n  "],["\n  ","var srcBuff = buffer_create(1024, buffer_grow, 1);","\n    buffer_write(srcBuff, global.DataString);","\n    var cmpBuff = buffer_compress(srcBuff, 0, buffer_tell(srcBuff));","\n    buffer_save(cmpBuff, \"Player_Save.sav\");","\n    buffer_delete(srcBuff);","\n    buffer_delete(cmpBuff);","\n  ","The above code will create a buffer then populate it with the data from a string. This buffer is then compressed and saved, and both the source and compressed buffers are deleted","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_decompress","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["buffer_compress"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1346"})