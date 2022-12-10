rh._.exports({"0":[["layer_sequence_get_headpos"]],"1":[["layer_sequence_get_headpos"]],"2":[["layer_sequence_get_headpos"]],"3":[["\n  ","\n  "],["\n  ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return the current ","playhead"," position (the current frame the playhead is on).","\n  "," ","\n  "],["\n  ","layer_sequence_get_headpos(sequence_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","sequence_element_id","Sequence Element ID","\n        ","The unique ID value of the sequence element to target","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","if layer_sequence_get_headpos(title_sequence) != 0","\n    {","\n        layer_sequence_headpos(title_sequence, 0);","\n    }","\n  ","The above code checks the current playhead position of the sequence element ID stored in the variable \"title_sequence\", and if it's not set to 0, it is set to this value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_get_headdir","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_sequence_get_headpos"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"897"})