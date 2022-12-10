rh._.exports({"0":[["ini_section_delete"]],"1":[["ini_section_delete"]],"2":[["ini_section_delete"]],"3":[["\n  ","\n  "],["\n  ","With this function you can delete a whole section of an ini file, which will also remove all key-value pairs that are associated with it.","\n  "," ","\n  "],["\n  ","ini_section_delete(section);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","section","String","\n        ","The section to delete.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","ini_open(\"savedata.ini\");"," ini_write_real(\"save1\", \"Score\", score );"," ini_section_delete(\"save1\");\n    "," ini_close();\n  ","\n  ","This example will open \"savedata.ini\" and write a value to \"save1\" > \"Score\". It will then delete the \"save1\" section and close the .ini file.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Ini Files","\n        ","Next: ","ini_open_from_string","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ini_section_delete"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"337"})