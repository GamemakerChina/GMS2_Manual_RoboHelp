rh._.exports({"0":[[" ","ds_queue_clear"]],"1":[["ds_queue_clear"]],"2":[[" ","ds_queue_clear"]],"3":[[" ","With this function you can clear all data from the given queue data-structure. This does ","NOT"," destroy the data-structure (for that you should use ","ds_queue_destroy()",") it only wipes all data from it and returns an empty queue."],[" ","ds_queue_clear(id);"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Queue"," ","The id of the data structure to clear."],[" ","N/A"],[" ","if (count = 15) && (!ds_queue_empty(command_queue))","\n    {","\n        ds_queue_clear(command_queue);","\n        alarm[0] = game_get_speed(gamespeed_fps);","\n        ai_count = 0;","\n    }"," ","The above code checks a variable to see if it has reached a specific value and if it has it clears the DS queue indexed in the variable \"command_queue\", sets an alarm, and resets the variable to 0."," ","Back: ","DS Queues"," ","Next: ","ds_queue_empty"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_queue_clear"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"647"})