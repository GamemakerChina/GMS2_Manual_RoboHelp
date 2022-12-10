rh._.exports({"0":[["ds_stack_clear"]],"1":[["ds_stack_clear"]],"2":[["ds_stack_clear"]],"3":[["\n  ","\n  "],["\n  ","With this function you can clear all data from the given stack data-structure. This does ","NOT"," destroy the data-structure (for that you should use ","ds_stack_destroy()",") it only wipes all data from it and returns an empty stack.","\n  "," ","\n  "],["\n  ","ds_stack_clear(id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","id","DS Stack ID","\n        ","The id of the data structure to clear.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if (ai_count = 15 && !ds_stack_empty(AI_stack))","\n    {","\n        ds_stack_clear(AI_stack);","\n        alarm[0] = room_speed;","\n        ai_count = 0;","\n    }","\n  ","The above code checks a variable to see if it has reached a specific value and if it has it clears the DS stack indexed in the variable \"AI_stack\", sets an alarm, and resets the variable to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","ds_stack_create","\n        ","Next: ","ds_stack_empty","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_stack_clear"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"526"})