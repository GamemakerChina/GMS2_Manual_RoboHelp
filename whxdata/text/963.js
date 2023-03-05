rh._.exports({"0":[[" ","ds_priority_copy"]],"1":[["ds_priority_copy"]],"2":[["ds_priority_copy"]],"3":[[" ","ds_priority_copy"]],"4":[[" ","This function can be used to copy the contents of one priority queue into another. Note that this does ","NOT"," remove the contents from the original priority queue, nor does it destroy the original priority queue. When using this function the priority queue being copied to must have been previously created and if it contained any items before the copy, then these will be cleared first (meaning this information will be lost)."],[" ","ds_priority_copy(id, source);"," ","Argument","Type"," ","Description"," ","id","DS Priority ID"," ","The id of the priority queue to copy ","to","."," ","source","DS Priority ID"," ","The id of the priority queue to copy ","from","."],[" ","N/A"],[" ","with (instance_create_layer(x, y, \"Enemies\", obj_Enemy))","\n    {","\n        p_queue = ds_priority_create();","\n        ds_priority_copy(p_queue, other.p_queue);","\n    }"," ","The above function creates a new instance and then in that instance it creates a new DS priority queue and copies the contents of the priority queue in the instance running the code block, into the newly created instance priority queue."," ","Back: ","DS Priority Queues"," ","Next: ","ds_priority_read"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"963"})