rh._.exports({"0":[["file_text_open_write"]],"1":[["file_text_open_write"]],"2":[["file_text_open_write"]],"3":[["\n  ","\n  "],["\n  ","This function opens the text file with the indicated filename for ","writing only"," (if the file does not exist, it is created), returning the unique ","id"," of the file that which should be stored in a variable as it will be used for all further actions to do with that file.","\n  ","Note that if the file ","can't"," be created (because of an illegal filename, for example) the function will return -1.","\n  ","If the file already exists, using this function will cause it to be overwritten when data is saved. If you want to add data to a file while keeping its existing contents intact, use ","file_text_open_append()",".","\n  ","NOTE",": You can only have a maximum of 32 files open at any one time. You should also ","always"," close files when finished as this writes the information and frees the memory associated with the file.","\n  ","WARNING!"," This function may not work as you expect due to ","GameMaker"," being sandboxed! Please see the section on the ","File System"," for more information.","\n  "," ","\n  "],["\n  ","file_text_open_write(fname);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","fname","\n        ","String","\n        ","The name of the file to write to.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Text File ID"," or -1","\n  "," ","\n  "],["\n  ","var file;","\n    file = file_text_open_write(working_directory + \"level.txt\");","\n    file_text_write_string(file, level_data);","\n    file_text_close(file);","\n  ","The above code will open the file \"level.txt\" for writing and then write the string stored in the variable \"level_data\" before finally closing the file again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text Files","\n        ","Next: ","file_text_open_append","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["file_text_open_write"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1800"})