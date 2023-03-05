rh._.exports({"0":[[" ","ds_map_read"]],"1":[["ds_map_read"]],"2":[["ds_map_read"]],"3":[[" ","ds_map_read"]],"4":[[" ","This function will take a string that has previously been created by the function ","ds_map_write()"," and then read it into a previously created DS map. If the map that the string is being read into contains any key/value pairs, these will be cleared first before the saved map is re-constructed."," ","Note that if the specified DS string was written by the GameMaker: Studio 1.2.x runtime (or older), you should specify the optional argument \"legacy\", setting it to ","true"," as the string format changed after that."],[" ","ds_map_read(id, str, [legacy]);"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Map ID"," ","The id of the data structure to read the string into"," ","str"," ","String"," ","The string to read"," ","legacy"," ","Boolean"," ","OPTIONAL"," Can be either ","true"," or ","false"," or omitted completely."],[" ","N/A"],[" ","inventory = ds_map_create();","\n    ini_open(\"map.ini\");","\n    var t_string = ini_read_string(\"Saved\", \"0\", \"\");","\n    if (t_string != \"\")","\n    {","\n        ds_map_read(inventory, t_string);","\n    }","\n    ini_close();"," ","The above code creates a new DS map and stores its id index in the variable \"inventory\". It then opens an ini file and reads a string from that file into the temporary variable \"t_string\". Finally, it checks to make sure that the string is valid (not the default ini value of \"\") and if it is it then reads the string into the newly created DS map before closing the ini again."," ","Back: ","DS Maps"," ","Next: ","ds_map_write"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1697"})