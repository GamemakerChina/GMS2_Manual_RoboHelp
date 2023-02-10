rh._.exports({"0":[[" ","ds_queue_empty"]],"1":[["ds_queue_empty"]],"2":[["ds_queue_empty"]],"3":[[" ","ds_queue_empty"]],"4":[[" ","With this function you can check the given DS queue to see if it is empty (returns ","true",") or not (returns ","false",")."],[" ","ds_queue_empty(id);"," ","Argument","Type"," ","Description"," ","id","DS Queue ID"," ","The id of the data structure to check."],[" ","Boolean"],[" ","if (count == 15) && (!ds_queue_empty(command_queue))","\n    {","\n        ds_queue_clear(command_queue);","\n        alarm[0] = room_speed;","\n        ai_count = 0;","\n    }"," ","The above code checks a variable to see if it has reached a specific value and if it has it clears the DS queue indexed in the variable \"command_queue\", sets an alarm, and resets the variable to 0."," ","Back: ","DS Queues"," ","Next: ","ds_queue_size"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"409"})