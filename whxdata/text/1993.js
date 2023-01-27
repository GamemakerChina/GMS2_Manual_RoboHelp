rh._.exports({"0":[[" ","buffer_tell"]],"1":[["buffer_tell"]],"2":[["buffer_tell"]],"3":[[" ","buffer_tell"]],"4":[[" ","When you read or write data to a buffer using the ","buffer_read"," or ","buffer_write"," the current \"seek\" position is advanced by the bytes written or read, and with this function you can get the current \"seek\" position for use in other buffer functions. For example, if your buffer alignment is set to 4 bytes and you write a single piece of data which is 1 byte in size then do a ","buffer_tell",", you'll get an return value of 1. However, if you write another piece of data, also 1 byte in size, then do a ","buffer_tell",", you'll get a return value of 5 as the alignment has \"padded\" the data to that position."],[" ","buffer_tell","(buffer);"," ","Argument"," ","Type"," ","Description"," ","buffer"," ","Buffer ID"," ","The index of the buffer to use."],[" ","Real"],[" ","var pos = ","buffer_tell","(buff); buffer_seek(buff, buffer_seek_start, 0);","\n    val[0] = buffer_read(buff, buffer_S16);","\n    val[1] = buffer_read(buff, buffer_S16);","\n    val[2] = buffer_read(buff, buffer_S16);","\n    buffer_seek(buff, buffer_seek_start, pos);"," ","The above code will store the current seek position within the buffer indexed in the variable \"buff\" to the local variable \"pos\". The buffer seek position will then be set to the start of the buffer, and three pieces of data are read into an array, before finally re-setting the buffer seek position to where it was previously."," ","Back: ","Buffers"," ","Next: ","buffer_peek"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1993"})