rh._.exports({"0":[["file_text_eof"]],"1":[["file_text_eof"]],"2":[["file_text_eof"]],"3":[["\n  ","\n  "],["\n  ","This function returns ","true"," when the end of a given opened text file has been reached or ","false"," if not.","\n  "," ","\n  "],["\n  ","file_text_eof(fileid);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","fileid","Text File ID","\n        ","The id of the file to check.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","var num = 0;","\n    var file = file_text_open_read(working_directory + \"Game_Data.txt\");","\n    while (!file_text_eof(file))","\n    {","\n        str[num++] = file_text_readln(file);","\n    }","\n    file_text_close(file);","\n  ","The above code opens a file for writing then loops through the lines of text already written to the file until it reaches the end, storing each line in the array \"str\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text Files","\n        ","Next: ","file_text_close","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["file_text_eof"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"420"})