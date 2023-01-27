rh._.exports({"0":[[" ","ds_list_destroy"]],"1":[["ds_list_destroy"]],"2":[["ds_list_destroy"]],"3":[[" ","ds_list_destroy"]],"4":[[" ","This function will remove the given list data-structure from memory, freeing up the resources it was using and removing all values that it contained. This function should always be used when you are finished using the ds_list to prevent memory leaks that can slow down and crash your game. Note that destroying a list will de-reference any data structures stored in it giving a memory leak, so you would need to go through the list and destroy all data structure items manually before destroying it to prevent this. The only time this is not required is when you have flagged any items in the list as another ","DS list"," or as a ","DS map",", in which case these items will be destroyed and their memory cleaned up automatically as well."," ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that data structures of different types can have the ","same"," index value, so if in doubt you should be using the ","ds_exists()"," function before accessing them. Also note that indices are re-used, so a destroyed data structure index value may be used by a newly created one afterwards so we recommend always setting the variable that held the DS index to -1 after destroying."],[" ","ds_list_destroy(id);"," ","Argument","Type"," ","Description"," ","id","DS List ID"," ","The id of the data structure to remove."],[" ","N/A"],[" ","if (lives == 0)","\n    {","\n        ds_list_destroy(AI_list);","\n        AI_list = -1;","\n        room_goto(rm_Menu);","\n    }"," ","The above code will check the value of the built in global variable \"lives\" and if it is 0, it destroys the DS list indexed in the variable \"AI_list\" and then changes rooms."," ","Back: ","DS Lists"," ","Next: ","ds_list_clear"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1687"})