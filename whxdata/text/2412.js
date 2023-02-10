rh._.exports({"0":[[" ","file_find_first"]],"1":[["file_find_first,fa_readonly,fa_hidden,fa_sysfile,fa_volumeid,fa_directory,fa_archive"]],"2":[["file_find_first,fa_readonly,fa_hidden,fa_sysfile,fa_volumeid,fa_directory,fa_archive"]],"3":[[" ","file_find_first"]],"4":[[" ","This function will return the name of the first file that satisfies the mask and the attributes. If no such file exists, then an empty string is returned."," ","The mask can contain a path with wildcards, for example ","C:\\temp\\*.doc","."," ","The attributes give the additional files you want to see, so the normal files are always returned when they satisfy the mask. You can add up the following constants to see the type of files you want (using ","|","). If you do not wish to add any attributes, use 0 or ","fa_none","."," ","File Attribute Constant"," ","Constant"," ","Description"," ","fa_none"," ","No file attributes"," ","fa_readonly"," ","Read-only files"," ","fa_hidden"," ","Hidden files"," ","fa_sysfile"," ","System files"," ","fa_volumeid"," ","Volume-id files"," ","fa_directory"," ","Directories"," ","fa_archive"," ","Archived files"," ","Attributes can only be used on Windows. For all other platforms, use 0 or ","fa_none","."," ","WARNING"," This function may not work as you expect due to ","GameMaker"," being sandboxed! Please see the section on the ","File System"," for more information."," ","NOTE"," This function will not work at all on the HTML5 target."],[" ","file_find_first","(mask, attr);"," ","Argument"," ","Type"," ","Description"," ","mask"," ","String"," ","The mask to use for searching."," ","attr"," ","File Attribute Constant","(s)"," ","The specific file attribute to look for."],[" ","String"],[" ","if directory_exists(\"\\User Content\")","\n    {","\n        fileA = file_find_first(\"/User Content/*.doc\", fa_readonly);","\n        fileB = file_find_next();","\n        fileC = file_find_next();","\n        file_find_close();","\n    }"," ","This code checks if the specified directory exists and if it does, goes there and returns the first \"read only\" ",".doc"," file found. It then looks for two more files and closes the file finder."," ","You can look for any number of files using a ","while"," loop:"," ","var files = [];","\n    var file_name = file_find_first(\"/User Content/*.doc\", fa_readonly);"," ","\n    while (file_name != \"\")","\n    {","\n        array_push(files, file_name);"," ","\n        file_name = file_find_next();","\n    }"," ","\n    file_find_close();\n  "," ","The above code creates an empty array to store all the file names that were found, and starts looking for read only ",".doc"," files. If that file name is not an empty string, it pushes it into the ","files"," array, and then attempts to find the next file. The loop will keep repeating until an empty string is found (meaning there are no more matching files), which is when it ends the loop and closes the file finder at the end."," ","Back: ","File System"," ","Next: ","file_find_next"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2412"})