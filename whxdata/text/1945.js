rh._.exports({"0":[["get_save_filename_ext"]],"1":[["get_save_filename_ext"]],"2":[["get_save_filename_ext"]],"3":[["\n  ","\n  "],["\n  ","This function opens a dialogue and asks the player for a filename to save to with the given filter. The filter has the form \"","name1|mask1|name2|mask2|...","\", where the mask may contain the different options with a semicolon between them and you can also use a \"*\" to mean any string. For example: \"","bitmaps|*.bmp;*.wmf","\", would ask the user to select the name of a bitmap file from the system, but only those that have the two specified extensions (","bmp"," and ","png","). this function does ","not"," save the file itself! It only returns a string with the full name and path of the file. If the user presses \"","Cancel","\" an empty string \"\" is returned. You may also add in a directory to start the search from, and a caption to be shown at the top of the window instead of the default one.","\n  ","An important thing to note when using this function is that it grants you certain permissions for that file, for the duration of your game. So, once you get the file path from the user, you can access it again and again without having to ask, and the permission applies to reading ","and"," writing equally.","\n  ","NOTE",": This function is only valid on the Windows and macOS targets.","\n  "," ","\n  "],["\n  ","get_save_filename_ext(filter, fname, directory, caption);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","filter","String","\n        ","The file type filter and/or name.","\n     ","\n      ","\n        ","fname","String","\n        ","The suggested filename to use.","\n     ","\n      ","\n        ","directory","String","\n        ","The directory to start the search from.","\n     ","\n      ","\n        ","caption","String","\n        ","The caption for the window.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","String","\n  "," ","\n  "],["\n  ","var file;","\n    file = get_save_filename_ext(\"screenshot|*.png\", \"\", working_directory, \"Save a level here\");","\n    if file != \"\"","\n    {","\n        screen_save(file);","\n    }","\n  ","The above code will ask the user to select an image file name file for saving in the working directory and then check the returned file name and path If it is not an empty string it takes a screen shot and saves it using the given name.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File System","\n        ","Next: ","file_exists","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["get_save_filename_ext"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1945"})