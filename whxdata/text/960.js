rh._.exports({"0":[[" ","buffer_save_ext"]],"1":[["buffer_save_ext"]],"2":[["buffer_save_ext"]],"3":[[" ","buffer_save_ext"]],"4":[[" ","With this function you can save part of the contents of a buffer to a file, ready to be read back into memory using the ","buffer_load()"," function. The \"offset\" defines the start position within the buffer\n    for saving (in bytes), and the \"size\" is the size of the buffer area to be saved from that offset onwards (also in bytes)."],[" ","buffer_save_ext(buffer, filename, offset, size);"," ","Argument","Type"," ","Description"," ","buffer","Buffer ID"," ","The index of the buffer to save."," ","filename","String"," ","The name of the file to save as."," ","offset","Real"," ","The offset within the buffer to save from (in bytes)."," ","size","Real"," ","The size of the buffer area to save (in bytes)."],[" ","N/A"],[" ","buffer_save_ext(buff, \"Player_Save.sav\", 0, 16384);"," ","Saves part of the current contents of the buffer with the id stored in the variable \"buff\" to a file."," ","Back: ","Buffers"," ","Next: ","buffer_save_async"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"960"})