rh._.exports({"0":[[" ","ds_queue_create"]],"1":[["ds_queue_create"]],"2":[[" ","ds_queue_create"]],"3":[[" ","This function will create a new queue data-structure and return the index value. This value should be stored in a variable and used in all further function calls relating to the queue."," ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that data structures of different types can have the ","same"," index value, so if in doubt you should be using the ","ds_exists()"," function before accessing them. Also note that indices are re-used, so a destroyed data structure index value may be used by a newly created one afterwards."],[" ","ds_queue_create();"],[" ","DS Queue ID"],[" ","queue = ds_queue_create();"," ","This will create a new queue and assign its index id to the instance variable \"queue\"."," ","Back: ","DS Queues"," ","Next: ","ds_queue_destroy"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_queue_create"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"373"})