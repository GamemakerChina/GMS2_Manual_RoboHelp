rh._.exports({"0":[["file_bin_size"]],"1":[["file_bin_size"]],"2":[["file_bin_size"]],"3":[["\n  ","\n  "],["\n  ","This function will return the size (in bytes) of a file that has been opened for reading and/or writing. The File ID is the value returned by the function ","file_bin_open()",".","\n  ","NOTE",": These functions ","do not"," work when the target module is HTML5.","\n  "," ","\n  "],["\n  ","file_bin_size(binfile);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","binfile","Binary File ID","\n        ","The ID of the file to get the size of.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","file = file_bin_open(\"myfile.bin\", 2);"," size = file_bin_size(file);"," file_bin_close(file);\n  ","\n  ","This would open a file from the local directory of the game, and assign its index to the variable \"file\". It would then get the size of that file and close it again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Binary Files","\n        ","Next: ","file_bin_position","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["file_bin_size"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"518"})