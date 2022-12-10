rh._.exports({"0":[["ds_queue_read"]],"1":[["ds_queue_read"]],"2":[["ds_queue_read"]],"3":[["\n  ","\n  "],["\n  ","With this function you can recreate a saved DS queue (one that has previously been written as a string using ","ds_queue_write()","). You must first create a new DS queue to read the string into, and if the DS queue already exists and has information stored in it, then this will be cleared before reading. This function is of vital importance when creating save/load mechanisms for your game.","\n  ","Note that if the specified DS string was written by the GameMaker: Studio 1.2.x runtime (or older), you should specify the optional argument \"legacy\", setting it to ","true"," as the string format changed after that.","\n  "," ","\n  "],["\n  ","ds_queue_read(id, str [, legacy]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","DS Queue ID","\n        ","The id of the data structure to read into.","\n      ","\n      ","\n        ","str","\n        ","String","\n        ","The string to read from.","\n      ","\n      ","\n        ","legacy","\n        ","Boolean","\n        ","OPTIONAL"," Can be either ","true"," or ","false"," or omitted completely.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","queue = ds_queue_create();","\n    ini_open(\"save.ini\");","\n    var str = ini_read_string(\"Queues\", \"0\", \"\");","\n    if (str != \"\")","\n    {","\n        ds_queue_read(queue, str);","\n    }","\n    ini_close();","\n  ","The above code creates a queue and stores the index in the variable \"queue\". It then opens an ","ini"," file and reads a string from that, checking to make sure that the string is not returned as empty first. This string is then read into the newly created DS queue.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Queues","\n        ","Next: ","ds_queue_write","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_queue_read"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1683"})