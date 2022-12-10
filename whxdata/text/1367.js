rh._.exports({"0":[["ds_priority_destroy"]],"1":[["ds_priority_destroy"]],"2":[["ds_priority_destroy"]],"3":[["\n  ","\n  "],["\n  ","This function will remove the given priority queue data-structure from memory, freeing up the resources it was using and removing all values that it contained. This function should always be used when you are finished using the DS priority queue to prevent memory leaks that can slow down and crash your game.","\n  ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that data structures of different types can have the ","same"," index value, so if in doubt you should be using the ","ds_exists()"," function before accessing them. Also note that indices are re-used, so a destroyed data structure index value may be used by a newly created one afterwards so we recommend always setting the variable that held the DS index to -1 after destroying.","\n  "," ","\n  "],["\n  ","ds_priority_destroy(id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","id","DS Priority ID","\n        ","The id of the data structure to remove.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if (lives == 0)","\n    {","\n        ds_priority_destroy(AI_queue);","\n        AI_queue = -1;","\n        room_goto(rm_Menu);","\n    }","\n  ","The above code will check the value of the built in global variable \"lives\" and if it is 0, it destroys the DS priority queue indexed in the variable \"AI_queue\" and then changes rooms.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Priority Queues","\n        ","Next: ","ds_priority_clear","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_priority_destroy"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1367"})