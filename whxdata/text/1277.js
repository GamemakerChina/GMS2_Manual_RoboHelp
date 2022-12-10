rh._.exports({"0":[["ini_write_real"]],"1":[["ini_write_real"]],"2":[["ini_write_real"]],"3":[["\n  ","\n  "],["\n  ","You can use this function to write a value (numeric) to an ini data file. Ini Files are split into ","sections"," and then each section is subsequently split into ","key"," - ","value"," pairs. So a typical ini file would look something like this:","\n  ","\n  "," ","\n  "],["\n  ","ini_write_real(section, key, value);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","section","String","\n        ","The section of the .ini to write to.","\n     ","\n      ","\n        ","key","String","\n        ","The key within the relevant section of the .ini to write to.","\n     ","\n      ","\n        ","value","Real","\n        ","The real value to write to the relevant destination.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","score = 1000;"," ini_open(\"savedata.ini\");\n    "," ini_write_real(\"save1\", \"Score\", score );"," score2 = ini_read_real(\"save1\", \"Score\", 0 );"," ini_close();\n  ","\n  ","This will set score to 1000, then open \"savedata.ini\" and write this value to \"save1\" > \"Score\". Then, it will set score2 to the real value under \"save1\" > \"score\" in it, 1000, and close the .ini\n    again. Had it not found this value, score2 would have ended up set as 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Ini Files","\n        ","Next: ","ini_write_string","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ini_write_real"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1277"})