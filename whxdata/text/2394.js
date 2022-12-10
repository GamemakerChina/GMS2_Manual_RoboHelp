rh._.exports({"0":[["buffer_read"]],"1":[["buffer_read,buffer_u8,buffer_s8,buffer_u16,buffer_s16,buffer_u32,buffer_s32,buffer_u64,buffer_f16,buffer_f32,buffer_f64,buffer_bool,buffer_string,buffer_text"]],"2":[["buffer_read,buffer_u8,buffer_s8,buffer_u16,buffer_s16,buffer_u32,buffer_s32,buffer_u64,buffer_f16,buffer_f32,buffer_f64,buffer_bool,buffer_string,buffer_text"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to read data from a previously created buffer. The return value will depend on the type of data that you are reading, which in itself is defined by the following constants:","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","buffer_u8","\n        ","An unsigned, 8bit integer. This is a positive value from 0 to 255.","\n      ","\n      ","\n        ","buffer_s8","\n        ","A signed, 8bit integer. This can be a positive or negative value from -128 to 127 (0 is classed as positive).","\n      ","\n      ","\n        ","buffer_u16","\n        ","An unsigned, 16bit integer. This is a positive value from 0 - 65,535.","\n      ","\n      ","\n        ","buffer_s16","\n        ","A signed, 16bit integer. This can be a positive or negative value from -32,768 to 32,767 (0 is classed as positive).","\n      ","\n      ","\n        ","buffer_u32","\n        ","An unsigned, 32bit integer. This is a positive value from 0 to 4,294,967,295.","\n      ","\n      ","\n        ","buffer_s32","\n        ","A signed, 32bit integer. This can be a positive or negative value from -2,147,483,648 to 2,147,483,647 (0 is classed as positive).","\n      ","\n      ","\n        ","buffer_u64","\n        ","An unsigned 64bit integer.","\n      ","\n      ","\n        ","buffer_f16","\n        ","A 16bit float. This can be a positive or negative value within the range of +/- 65504. ","(Not currently supported!)","\n      ","\n      ","\n        ","buffer_f32","\n        ","A 32bit float. This can be a positive or negative value within the range of +/-16777216.","\n      ","\n      ","\n        ","buffer_f64","\n        ","A 64bit float.","\n      ","\n      ","\n        ","buffer_bool","\n        ","A boolean value. Can only be either 1 or 0 (","true"," or ","false",")","\n      ","\n      ","\n        ","buffer_string","\n        ","A string of any size.","\n      ","\n      ","\n        ","buffer_text","\n        ","A string of any size, without the final null terminating character.","\n      ","\n    ","\n  ","\n  ","If the function succeeds it will return a value of the given type, however if it fails then it will cause a runner error.","\n  ","NOTE"," Using the incorrect data type for the data being read will result in erroneous values being returned.","\n  "," ","\n  "],["\n  ","buffer_read(buffer, type)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","Buffer ID","\n        ","The index of the buffer to read from.","\n      ","\n      ","\n        ","type","\n        ","Buffer Data Type Constant","\n        ","The type of data that is to be read from the buffer (see the list of constants above).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real",", ","Boolean"," or ","String","\n  "," ","\n  "],["\n  ","var cmd = buffer_read(buff, buffer_s16);","\n  ","The above code reads from the buffer with the id stored in the variable \"buff\" a signed 16bit value into the local variable \"cmd\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_write","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["buffer_read"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2394"})