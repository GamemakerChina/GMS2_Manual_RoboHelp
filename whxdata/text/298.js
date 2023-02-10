rh._.exports({"0":[[" ","buffer_resize"]],"1":[["buffer_resize"]],"2":[["buffer_resize"]],"3":[[" ","buffer_resize"]],"4":[[" ","With this function you can resize a given buffer to be the size (in bytes) that you specify."],[" ","buffer_resize(buffer, newsize);"," ","Argument","Type"," ","Description"," ","buffer","Buffer ID"," ","The index of the buffer to change the size of."," ","newsize","Real"," ","The new size of the buffer (in bytes)."],[" ","N/A"],[" ","if (buffer_get_size(buff) < 16384)","\n    {","\n        buffer_resize(buff, 16384);","\n    }"," ","The above code will check the size of the buffer indexed in the variable \"buff\" and if it is less than the given value, the buffer is resized."," ","Back: ","Buffers"," ","Next: ","buffer_sizeof"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"298"})