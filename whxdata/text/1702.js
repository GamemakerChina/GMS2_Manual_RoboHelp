rh._.exports({"0":[[" ","buffer_fill"]],"1":[["buffer_fill,buffer_u8,buffer_s8,buffer_u16,buffer_s16,buffer_u32,buffer_s32,buffer_u64,buffer_f16,buffer_f32,buffer_f64,buffer_bool,buffer_string,buffer_text"]],"2":[["buffer_fill"]],"3":[[" ","buffer_fill"]],"4":[[" ","This function can be used to fill a previously created buffer with a given data type and value. The data you fill the buffer with must be in agreement with the \"type\" argument of this function, meaning that you can't try to fill with a\n    string and use the unsigned 16bit integer type, for example. The type constants are the same as those used by the ","buffer_read()"," and ","buffer_write()"," functions. The \"size\"\n    is the size of the buffer (in bytes) that you wish to fill, while the offset is the offset value (also in bytes) from the start of the buffer to start the fill from."],[" ","buffer_fill(buffer, offset, type, value, size);"," ","Argument","Type"," ","Description"," ","buffer","Buffer ID"," ","The index of the buffer to fill."," ","offset","Real"," ","The data offset value (in bytes)."," ","type","Real"," ","The type of data that is to be written to the buffer (see the list of constants ","here",")."," ","value","Real"," ","The data to write."," ","size","Real"," ","The size of the buffer (in bytes) that you wish to fill."],[" ","N/A"],[" ","map_buffer = buffer_create(16384, buffer_fixed, 0);"," buffer_fill(map_buffer, 0, buffer_u16, 0, 16384);"," ","The above code finds the start of the buffer with the id stored in the variable \"buff\" them writes a series of signed 16bit integer values to it."," ","Back: ","Buffers"," ","Next: ","buffer_seek"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1702"})