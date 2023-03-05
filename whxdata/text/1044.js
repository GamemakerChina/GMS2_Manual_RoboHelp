rh._.exports({"0":[[" ","buffer_set_used_size"]],"1":[["buffer_set_used_size"]],"2":[["buffer_set_used_size"]],"3":[[" ","buffer_set_used_size"]],"4":[[" ","This function is primarily for use within extensions, and allows you to set the \"used\" size of the given buffer, which is the number of bytes that have been written to it."," ","When you write data to a buffer from an extension, GameMaker does not know how much of the buffer was filled by the extension code and is not able to read that data. This function can be called by the extension to tell the engine how many bytes of data\n    was written to the buffer, so the engine can read that data."],[" ","buffer_set_used_size(buffer, size);"," ","Argument","Type"," ","Description"," ","buffer","Buffer ID"," ","The index of the buffer to use."," ","size","Real"," ","The number of bytes to set as the \"used\" size."],[" ","N/A"],[" ","buffer_write(_bufferAddress, buffer_u8, 1);"," buffer_write(_bufferAddress, buffer_u8, 2);"," buffer_write(_bufferAddress, buffer_u16, 400);"," "," buffer_set_used_size(_bufferAddress, 4);"," ","The above functions would be called in an extension to write some data to a GameMaker buffer (through its memory address), and then set the number of bytes that were written to it so the engine can read that data."," ","Back: ","Buffers"," ","Next: ","buffer_exists"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1044"})