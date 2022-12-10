rh._.exports({"0":[["ds_queue_dequeue"]],"1":[["ds_queue_dequeue"]],"2":[["ds_queue_dequeue"]],"3":[["\n  ","\n  "],["\n  ","This function will ","dequeue"," the head value off of the DS queue, removing it from the queue and returning the value to be stored in a variable. If the queue is empty then the function will return the constant ","undefined",", otherwise it will return the value contained in the queue.","\n  "," ","\n  "],["\n  ","ds_queue_dequeue(id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","id","DS Queue ID","\n        ","The id of the queue to dequeue from.","\n     ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "],["\n  ","Any"," (Data type value stored in the queue) or ","undefined","\n  "," ","\n  "],["\n  ","if !ds_queue_empty(move_queue)","\n    {","\n        var xx = ds_queue_dequeue(move_queue);","\n        var yy = ds_queue_dequeue(move_queue);","\n        move_towards_point(xx, yy, 4);","\n    }","\n  ","The above code checks the DS queue indexed in the variable \"move_queue\" to see if it is empty, and if it is not, it then dequeues the two values from the head of the queue and use them to set a direction for movement.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Queues","\n        ","Next: ","ds_queue_enqueue","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_queue_dequeue"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"776"})