rh._.exports({"0":[["File System"]],"2":[["File System"]],"3":[["\n  ","\n  "],["\n  ","There exists in ","GameMaker"," a number of functions that enable you to manipulate files of all types in different ways:","\n  ","\n    ","file_exists","\n    ","file_delete","\n    ","file_rename","\n    ","file_copy","\n    ","file_find_first","\n    ","file_find_next","\n    ","file_find_close","\n    ","file_attributes","\n  ","\n  "," ","\n  ","The following functions can be used to change file names:","\n  ","NOTE"," These functions do not work on the actual files! They only deal with the strings related to the different path elements and should be used in conjunction with the other file functions.","\n  ","\n    ","filename_name","\n    ","filename_path","\n    ","filename_dir","\n    ","filename_drive","\n    ","filename_ext","\n    ","filename_change_ext","\n  ","\n  "," ","\n  ","Finally there are some special functions for getting filenames that can be used for loading and saving files with file-type filters. These functions will open an explorer window, and therefor cause the game to lose focus. This means that any input the game is depending on may not be correctly registered, and as such we recommend that (if using these functions in a keyboard event) you use the key ","up"," event and not the pressed or down events.","\n  ","NOTE"," These functions are ","Windows"," and ","macOS"," only.","\n  ","WARNING"," These function may not work as you expect due to ","GameMaker"," being sandboxed! Please see the section on ","The File System"," for more information.","\n  ","\n    ","get_open_filename","\n    ","get_open_filename_ext","\n    ","get_save_filename","\n    ","get_save_filename_ext","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Handling","\n        ","Next: ","Ini Files","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["File System"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1857"})