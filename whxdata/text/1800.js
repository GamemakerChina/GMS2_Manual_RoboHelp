rh._.exports({"0":[[" ","get_open_filename"]],"1":[["get_open_filename"]],"2":[["get_open_filename"]],"3":[[" ","get_open_filename"]],"4":[[" ","This function opens a dialogue and asks the player for a filename to open with the given filter. The filter has the form \"","name1|mask1|name2|mask2|...","\", where the mask may contain the different options with a semicolon between them and you can also use a \"*\" to mean any string. For example: \"","bitmaps|*.bmp;*.wmf","\", would ask the user to select the name of a bitmap file from the system, but only those that have the two specified extensions (","bmp"," and ","png","). this function does ","not"," open the file itself! It only returns a string with the full name and path of the file. If the user presses \"","Cancel","\" an empty string \"\" is returned."," ","An important thing to note when using this function is that it grants you certain permissions for that file, for the duration of your game. So, once you get the file path from the user, you can access it again and again without having to ask. However, since this function is for reading a file, the permissions granted are ","only for reading"," and saving will not be permitted by the OS. Should you need to read and write to the file, you can get permission using the function ","get_save_filename()","."," ","NOTE",": This function is only valid on the Windows and macOS targets."],[" ","get_open_filename(filter, fname);"," ","Argument","Type"," ","Description"," ","filter","String"," ","The file type filter and/or name."," ","fname","String"," ","The suggested filename to use."],[" ","String"],[" ","var file;","\n    file = get_open_filename(\"text file|*.txt\", \"\");","\n    if (file != \"\") ","\n    {","\n        file_text_open_read(file);","\n    }"," ","The above code will ask the user to select a text file for opening and then check the returned file name and path, and if it exists will open the file for reading."," ","Back: ","File System"," ","Next: ","get_open_filename_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1800"})