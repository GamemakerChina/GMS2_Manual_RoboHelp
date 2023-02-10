rh._.exports({"0":[[" ","buffer_create"]],"1":[["buffer_create,buffer_fixed,buffer_grow,buffer_wrap,buffer_fast,buffer_vbuffer"]],"2":[["buffer_create,buffer_fixed,buffer_grow,buffer_wrap,buffer_fast,buffer_vbuffer"]],"3":[[" ","buffer_create"]],"4":[[" ","You use this function to allocate a portion of memory as a buffer in your game, with the function returning the unique ","buffer id"," that should be stored in a variable and used for all further function calls to the buffer. The buffer can then be used to store different types of data (specified when you write to the buffer using the ","buffer_write()"," function, with the following constants being used to define the buffer type:"," ","Buffer Type Constant"," ","Constant"," ","Description"," ","buffer_fixed"," ","A buffer of fixed size."," ","buffer_grow"," ","A buffer that will \"grow\" dynamically as data is added"," ","buffer_wrap"," ","A buffer where the data will \"wrap\". When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point."," ","buffer_fast"," ","Special \"stripped\" buffer that is extremely fast to read/write to. Can only be used with ","buffer_u8"," ","data types",", and ","must"," be 1 byte aligned."," ","buffer_vbuffer"," ","This type of buffer is to be used as a vertex buffer only."," ","Apart from the buffer type, you will also have to set the ","byte alignment"," for the buffer. This value will vary depending on the data that you wish to store in the buffer, and in most cases a value of 1 is perfectly fine. However, be aware that for some operations a specific alignment is ","essential",", and an incorrect alignment may cause errors (for further details on alignment see ","Buffers","). The following is a general guide to show which values are most appropriate for each data type (when in doubt, use an alignment of 1):"," ","Strings should be aligned to 1 byte."," ","Signed or unsigned 8bit integers can be aligned to any value, but note that for a fast buffer (see ","buffer_write()",") it ","must"," be aligned to 1."," ","Signed or unsigned 16bit integers should be aligned to 2 bytes."," ","Signed or unsigned 32bit integers should be aligned to 4 bytes"," ","Floats of up to 16bits should be aligned to 2 bytes. ","(Not currently supported!)"," ","Floats of up to 32bits should be aligned to 4 bytes."," ","Floats of up to 64bits should be aligned to 8 bytes."," ","NOTE",": Byte alignment can be very important as the wrong choice may adversely affect performance."," ","NOTE",": It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again using ","buffer_delete()","."],[" ","buffer_create(size, type, alignment)"," ","Argument"," ","Type"," ","Description"," ","size"," ","Real"," ","The size (in bytes) of the buffer."," ","type"," ","Buffer Type Constant"," ","The type of buffer to create (see the constants list above)."," ","alignment"," ","Real"," ","The byte alignment for the buffer"],[" ","Buffer ID"],[" ","player_buffer = buffer_create(16384, buffer_fixed, 2);"," ","The above code allocates 16384 bytes of memory to a buffer and returns the index of that buffer, which is stored in the variable \"player_buffer\", for future use. The buffer is aligned to a two byte boundary."," ","Back: ","Buffers"," ","Next: ","buffer_create_from_vertex_buffer"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2437"})