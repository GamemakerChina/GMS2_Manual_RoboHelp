rh._.exports({"0":[[" ","file_text_open_read"]],"1":[["file_text_open_read"]],"2":[["file_text_open_read"]],"3":[[" ","file_text_open_read"]],"4":[[" ","This function opens the text file with the indicated filename for ","reading only",", returning the unique id of the file that which should be stored in a variable as it will be used for all further actions to do with that file. If the file does not exists then the function will return the value -1."," ","NOTE",": You can only have a maximum of 32 files open at any one time. You should also ","always"," close files when finished as this writes the information and frees the memory associated with the file."," ","WARNING!"," This function may not work as you expect due to ","GameMaker"," being sandboxed! Please see the section on the ","File System"," for more information."],[" ","file_text_open_read(fname);"," ","Argument","Type"," ","Description"," ","fname","String"," ","The name of the file to read from."],[" ","Text File ID"," or -1"],[" ","file = file_text_open_read(working_directory + \"level.txt\");"," ","This would open \"level.txt\" from the same directory as the game and store the file id in the variable \"file\"."," ","Back: ","Text Files"," ","Next: ","file_text_open_write"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1082"})