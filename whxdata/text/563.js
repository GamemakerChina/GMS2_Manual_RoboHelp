rh._.exports({"0":[[" ","ds_queue_write"]],"1":[["ds_queue_write"]],"2":[[" ","ds_queue_write"]],"3":[[" ","This function returns a string which can then be stored or transferred to another data structure using the ","ds_queue_read()"," function."," ","NOTE",": The returned string is not a human readable string, but rather a dump of the contents of the data-structure"],[" ","ds_queue_write(id);"," ","Argument","Type"," ","Description"," ","id","DS Queue ID"," ","The id of the data structure to write."],[" ","String"],[" ","ini_open(\"save.ini\");"," var str =ds_queue_write(queue);"," ini_write_string(\"Queues\", \"0\", str);"," ds_queue_clear(queue);\n    "," ini_close();\n  "," ","The above code opens an ini file and then writes a string containing the information stored in the DS queue indexed in the variable \"queue\". The queue is then cleared and the ini file closed."," ","Back: ","DS Queues"," ","Next: ","ds_queue_create"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_queue_write"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"563"})