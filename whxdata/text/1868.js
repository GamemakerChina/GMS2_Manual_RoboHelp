rh._.exports({"0":[["buffer_load"]],"1":[["buffer_load"]],"2":[["buffer_load"]],"3":[["\n  ","\n  "],["\n  ","This function is used to load a buffer that was previously saved using the ","buffer_save()"," functions, as well as any ","Included Files"," or files loaded externally. It will return a new buffer's ID which is created by the function as a \"grow\" buffer (see ","here",") with a byte alignment of 1. This ID should be stored in a variable and used in all further function calls to this buffer. If the load fails for whatever reason, the function will return -1 and a message will be shown in the compiler output window saying that the load has failed.","\n  ","NOTE"," It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again using ","buffer_delete()",".","\n  "],["\n  ","\n    ","On HTML5, any buffers loaded from the ","local storage"," will be decoded using base64 (since they are saved as base64 strings), however, using this function on Included Files or any external files will not use base64 decoding, as they are not expected to be in a base64 format.","\n    ","On HTML5, all Included Files are stored as UTF-8 encoded text, which may result in an increase in the size of the loaded buffer when compared to the original file, as the UTF-8 encoded version of the file may have a different size than your original one (due to the change in format).","\n  ","\n  "," ","\n  "," ","\n  "],["\n  ","buffer_load(filename);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","filename","String","\n        ","The name of the file to load from.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Buffer ID","\n  "," ","\n  "],["\n  ","player_buffer = buffer_load(\"Player_Save.sav\");","\n  ","The above code will load a previously saved buffer into memory, creating a new buffer. The index of this new buffer is stored in the variable \"player_buffer\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_load_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["buffer_load"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"11":[["Platform-specific notes"]],"id":"1868"})