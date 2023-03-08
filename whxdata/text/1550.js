rh._.exports({"0":[[" ","buffer_base64_decode_ext"]],"1":[["buffer_base64_decode_ext"]],"2":[["buffer_base64_decode_ext"]],"3":[[" ","buffer_base64_decode_ext"]],"4":[[" ","With this function you can decode a base64 encoded string (created using the ","buffer_base64_encode()"," function) into a buffer. Unlike the function ","buffer_base64_decode()",",\n    this will ","not"," create a buffer for you, but rather you should already have created the buffer (see ","buffer_create()","), the id of which you would then use with this function. The \"offset\" is the\n    position within the buffer to decode the given string (in bytes)."],[" ","buffer_base64_decode_ext(buffer, string, offset);"," ","Argument","Type"," ","Description"," ","buffer","Buffer ID"," ","The index of the buffer to decode the string into."," ","string","String"," ","The base64 encoded string to decode."," ","offset","Real"," ","The data offset value."],[" ","N/A"],[" ","buff = buffer_create(16384, buffer_grow, 2);"," ini_open(\"Save.ini\");\n    "," var str = ini_read_string(\"Save\", \"Slot1\", \"\");"," buffer_base64_decode_ext(buff, str, 0);"," ini_close();\n  "," ","The above code will create a buffer and store the unique id for it in the variable \"buff\", then open an ini file and read a string from it into the local variable \"str\". This string is then decoded into the newly created buffer before\n    closing the ini file again."," ","Back: ","Buffers"," ","Next: ","buffer_set_used_size"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1550"})