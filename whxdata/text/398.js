rh._.exports({"0":[["ini_key_delete"]],"1":[["ini_key_delete"]],"2":[["ini_key_delete"]],"3":[["\n  ","\n  "],["\n  ","With this function you can remove the selected key (and its corresponding value) from an ini file.","\n  "," ","\n  "],["\n  ","ini_key_delete(section, key);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","section","String","\n        ","The section to delete a key from.","\n     ","\n      ","\n        ","key","String","\n        ","The key to delete.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","ini_open(\"savedata.ini\");"," ini_write_real(\"save1\",\"Score\",score);\n    "," ini_key_delete(\"save1\",\"Score\");\n    "," ini_close();\n  ","\n  ","This example will open \"savedata.ini\" and write a value to \"save1\" > \"Score\". It will then delete the \"Score\" key and close the .ini file.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Ini Files","\n        ","Next: ","ini_section_delete","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ini_key_delete"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"398"})