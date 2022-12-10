rh._.exports({"0":[["layer_sequence_xscale"]],"1":[["layer_sequence_xscale"]],"2":[["layer_sequence_xscale"]],"3":[["\n  ","\n  "],["\n  ","With this function you can set the X scale for the given sequence element. You supply the sequence element ID as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," along with the new scale to set on the X axis and the sequence will be scaled by this amount. A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the width of the sequence), larger values will scale up and negative values will mirror the sequence about its origin ","and"," scale it unless the value used is exactly -1 (in which case the sequence is just mirrored about its origin with no scaling).","\n  ","It is very important to note that applying ","uneven"," scaling (eg: scaling the X axis by 3 and the Y axis by 2) to sequence elements that contain any instance which uses ","rotation",", ","may cause issues with the instance drawing, collisions, culling, and many other things",". Basically, if your sequence relies on ","any"," instance properties then we do not recommend that you combine uneven scaling along with instance rotation.","\n  ","Also note that you shouldn't change the ","image_xscale"," \\ ","image_yscale"," \\ ","image_angle"," \\ ","x"," \\ ","y"," variables for any instances in a sequence that uses this function as they will be overwritten as soon as the sequence updates after calling the function.","\n  "," ","\n  "],["\n  ","layer_sequence_xscale(sequence_element_id, xscale)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","sequence_element_id","Sequence Element ID","\n        ","The unique ID value of the sequence element to target","\n     ","\n      ","\n        ","xscale","Real","\n        ","The new X axis scale value to apply to the sequence element","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if seq_scale < 2","\n    {","\n        seq_scale += 0.01;","\n        layer_sequence_xscale(my_seq, seq_scale);","\n        layer_sequence_yscale(my_seq, seq_scale);","\n    }","\n  ","The above code checks the value held in the ","seq_scale"," variable, and if it is less than 2 then it adds to it then uses the value to set the X and Y scale of the sequence element referenced in the variable ","my_seq",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_yscale","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_sequence_xscale"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1980"})