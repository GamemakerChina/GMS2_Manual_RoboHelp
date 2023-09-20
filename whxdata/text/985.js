rh._.exports({"0":[[" ","ds_priority_write"]],"1":[["ds_priority_write"]],"2":[[" ","ds_priority_write"]],"3":[[" ","This function returns a string which can then be stored or transferred to another data structure using the ","ds_priority_read()"," function."," ","NOTE"," The returned string is not a human readable string, but rather a dump of the contents of the data structure."],[" ","ds_priority_write(id);"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Priority"," ","The id of the data structure to check."],[" ","String"],[" ","var str;","\n    ini_open(\"save.ini\");","\n    str = ds_priority_write(p_queue);","\n    ini_write_string(\"P_Queues\", \"0\", str);","\n    ds_priority_clear(p_queue);","\n    ini_close();"," ","The above code opens an ini file and then writes a string containing the information stored in the DS priority queue indexed in the variable \"p_queue\". The priority queue is then cleared and the ini file closed."," ","Back: ","DS Priority Queues"," ","Next: ","ds_priority_create"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_priority_write"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"985"})