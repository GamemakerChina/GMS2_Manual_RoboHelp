rh._.exports({"0":[[" ","ds_list_read"]],"1":[["ds_list_read"]],"2":[["ds_list_read"]],"3":[[" ","ds_list_read"]],"4":[[" ","With this function you can recreate a saved DS list (one that has previously been written as a string using ","ds_list_write()","). You must first create a new DS list to read the string into, and if the DS list already exists and has information stored in it, then this will be cleared before reading. This function is of vital importance when creating save/load mechanisms for your game."," ","Note that if the specified DS string was written by the GameMaker: Studio 1.2.x runtime (or older), you should specify the optional argument \"legacy\", setting it to ","true"," as the string format changed after that."],[" ","ds_list_read(id, str [, legacy]);"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS List ID"," ","The id of the data structure to read into."," ","str"," ","String"," ","The string to read from."," ","legacy"," ","Boolean"," ","OPTIONAL"," Can be either ","true"," or ","false"," or omitted completely."],[" ","N/A"],[" ","list = ds_list_create();","\n    ini_open(\"save.ini\");","\n    var str = ini_read_string(\"Lists\", \"0\", \"\");","\n    if str != \"\"","\n    {","\n        ds_list_read(list, str);","\n    }","\n    ini_close();"," ","The above code creates a list and stores the index in the variable \"list\". It then opens an ","ini"," file and reads a string from that, checking to make sure that the string is not returned as empty first. This string is then read into the newly created ds_list."," ","Back: ","DS Lists"," ","Next: ","ds_list_write"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1673"})