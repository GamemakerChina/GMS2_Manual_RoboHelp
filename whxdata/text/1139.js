rh._.exports({"0":[[" ","ds_map_secure_save"]],"1":[["ds_map_secure_save"]],"2":[["ds_map_secure_save"]],"3":[[" ","ds_map_secure_save"]],"4":[[" ","This function will save the contents of the given DS map to a file that is linked to the device it was created on (meaning it can't be read if transferred to any other device). The file itself can have almost any extension (for example, ","*.dat",",\n    ","*.json",", ","*.bin",", etc...) and will be obfuscated and stored to local storage on the target platform. You can then re-load the ds_map using the function ","ds_map_secure_load()",". Note that if\n    the DS map being saved contains an array, this array will be converted into a DS list instead when saved."," ","IMPORTANT!"," One of the features of a secure saved file is that it is locked to the device that it was created on, so you cannot load a file saved on one device into a project running on another device."],[" ","ds_map_secure_save(map, filename);"," ","Argument","Type"," ","Description"," ","map","DS Map"," ","The id of the data structure to use"," ","filename","String"," ","The name of the file to save the map to"],[" ","Boolean"],[" ","ds_map_secure_save(purchase_map, \"p_data.dat\");"," ","The above code will save the DS map indexed in the variable \"p_data\" to the given file for later retrieval."," ","Back: ","DS Maps"," ","Next: ","ds_map_secure_save_buffer"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1139"})