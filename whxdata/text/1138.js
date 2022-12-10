rh._.exports({"0":[["layer_sequence_get_speedscale"]],"1":[["layer_sequence_get_speedscale"]],"2":[["layer_sequence_get_speedscale"]],"3":[["\n  ","\n  "],["\n  ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return the current playback speed scale. This is the ","multiplier"," value used to slow down or speed up the playback speed. A value of 1 is the default value, and values lower than 1 mean that playback is slowed down and values greater than 1 mean that playback is sped up.","\n  "," ","\n  "],["\n  ","layer_sequence_get_speedscale(sequence_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","sequence_element_id","Sequence Element ID","\n        ","The unique ID value of the sequence element to target","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","if layer_sequence_get_speedscale(title_sequence) != 1","\n    {","\n        layer_sequence_speedscale(title_sequence, 1);","\n    }","\n  ","The above code checks the the current playhead speed scale of the sequence element ID stored in the variable \"title_sequence\", and if it's not set to 1 it is set to this value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_get_length","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_sequence_get_speedscale"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1138"})