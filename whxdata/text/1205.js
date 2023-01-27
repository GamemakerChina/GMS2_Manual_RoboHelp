rh._.exports({"0":[[" ","ini_read_real"]],"1":[["ini_read_real"]],"2":[["ini_read_real"]],"3":[[" ","ini_read_real"]],"4":[[" ","You can use this function to read a number from an ini data file. Ini Files are split into ","sections"," and then each section is subsequently split into ","key"," - ","value"," pairs. So a typical ini file would look something like this:"],[" ","ini_read_real(section, key, default);"," ","Argument","Type"," ","Description"," ","section","String"," ","The section of the .ini to read from."," ","key","String"," ","The key within the relevant section of the .ini to read from."," ","default","Real"," ","The value to return if a value is not found in the defined place (or the .ini file does not exist). Must be a real number."],[" ","Real"],[" ","ini_open(\"savedata.ini\");"," score = ini_read_real(\"save1\", \"score\", 0 );"," ini_close();\n  "," ","This will open \"savedata.ini\" and set score to the value under \"save1\" > \"score\" in it, then close the .ini again. Should there be no value under \"save1\" > \"score\", or there no \"savedata.ini\"\n    file present, score will be set to 0."," ","Back: ","Ini Files"," ","Next: ","ini_read_string"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1205"})