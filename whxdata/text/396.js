rh._.exports({"0":[[" ","file_bin_read_byte"]],"1":[["file_bin_read_byte"]],"2":[["file_bin_read_byte"]],"3":[[" ","file_bin_read_byte"]],"4":[[" ","This function will return a byte of data from current position within the file with the given file ID. You supply the file ID value, as returned by the function ","file_bin_open()","."," ","NOTE",": These functions ","do not"," work when the target module is HTML5."],[" ","file_bin_read_byte(binfile);"," ","Argument","Type"," ","Description"," ","binfile","Binary File ID"," ","The ID of the file to get the data from."],[" ","Real"],[" ","file = file_bin_open(\"myfile.bin\", 2);"," data = file_bin_read_byte(file);"," file_bin_close(file);\n  "," ","This would open a file from the same directory as the game, and get a byte of data from it before closing it again."," ","Back: ","Binary Files"," ","Next: ","file_bin_open"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"396"})