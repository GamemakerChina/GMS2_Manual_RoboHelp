rh._.exports({"0":[[" ","ds_list_clear"]],"1":[["ds_list_clear"]],"2":[["ds_list_clear"]],"3":[[" ","ds_list_clear"]],"4":[[" ","With this function you can clear all data from the given list data-structure. This does ","NOT"," destroy the data-structure (for that you should use ","ds_list_destroy()",") it only wipes all data from it and makes the list empty (zero in size). Note that clearing a list will de-reference any data structures stored in it giving a memory leak, so you would need to go through the list and destroy all data structure items manually before clearing it to prevent this. The only time this is not required is when you have flagged any items in the list as another ","DS list"," or as a ","DS map",", in which case these items will be destroyed (not cleared!) and their memory cleaned up automatically when the parent is cleared."],[" ","ds_list_clear(id);"," ","Argument","Type"," ","Description"," ","id","DS List ID"," ","The id of the data structure to clear."],[" ","N/A"],[" ","if (count == 15) && (!ds_list_empty(command_list))","\n    {","\n        ds_list_clear(command_list);","\n        alarm[0] = room_speed;","\n        ai_count = 0;","\n    }"," ","The above code checks a variable to see if it has reached a specific value and if it has it clears the DS list indexed in the variable \"command_list\", sets an alarm, and resets the variable to 0."," ","Back: ","DS Lists"," ","Next: ","ds_list_empty"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1147"})