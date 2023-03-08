rh._.exports({"0":[[" ","file_find_close"]],"1":[["file_find_close"]],"2":[["file_find_close"]],"3":[[" ","file_find_close"]],"4":[[" ","This function must be called after handling files opened using ","file_find_first()"," and ","file_find_next()"," functions to free memory. The file find functions open handles into the file directory and these take up a minimal amount of memory, which (over time) adds up. Therefore you should always call this function after you have found the files you require to \"close\" these handles."],[" ","file_find_close();"],[" ","N/A"],[" ","if directory_exists(\"\\User Content\")","\n    {","\n        fileA = file_find_first(\"/User Content/*.doc\", fa_readonly);","\n        fileB = file_find_next();","\n        fileC = file_find_next();","\n        file_find_close();","\n    }"," ","This code checks if the specified directory exists and if it does, goes there and returns the first \"read only\" ",".doc"," file found. It then looks for two more files and closes the file finder."," ","You can look for any number of files using a ","while"," loop:"," ","var files = [];","\n    var file_name = file_find_first(\"/User Content/*.doc\", fa_readonly);"," ","\n    while (file_name != \"\")","\n    {","\n        array_push(files, file_name);"," ","\n        file_name = file_find_next();","\n    }"," ","\n    file_find_close();\n  "," ","The above code creates an empty array to store all the file names that were found, and starts looking for read only ",".doc"," files. If that file name is not an empty string, it pushes it into the ","files"," array, and then attempts to find the next file. The loop will keep repeating until an empty string is found (meaning there are no more matching files), which is when it ends the loop and closes the file finder at the end."," ","Back: ","File System"," ","Next: ","file_attributes"]],"5":[[" ","Syntax:"],[" ","Returns"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1623"})