rh._.exports({"0":[[" ","ds_map_secure_load"]],"1":[["ds_map_secure_load"]],"2":[["ds_map_secure_load"]],"3":[[" ","ds_map_secure_load"]],"4":[[" ","This function will load a previously saved DS map from the given file. This file must have been previously created using the ","ds_map_secure_save"," function, and, when loaded, the function will return the ","index"," of the DS map that has been created from the loaded data. This DS map index should be stored in a variable and used for all further function calls to this map. Note that if the DS map being loaded was saved with an array as one of the key values, this array will have been converted into a DS list on load."," ","IMPORTANT"," One of the features of a secure saved file is that it is locked to the device that it was created on, so you cannot load a file saved on one device into a project running on another device."],[" ","ds_map_secure_load","(filename);"," ","Argument"," ","Type"," ","Description"," ","filename"," ","String"," ","The name of the file to load the map data from."],[" ","DS Map ID"],[" ","p_map = ","ds_map_secure_load","(\"p_data.dat\");"," ","The above code will load a securely saved DS map and store its index value in a variable for future use."," ","Back: ","DS Maps"," ","Next: ","ds_map_secure_load_buffer"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1742"})