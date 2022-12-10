rh._.exports({"0":[["layer_sequence_get_angle"]],"1":[["layer_sequence_get_angle"]],"2":[["layer_sequence_get_angle"]],"3":[["\n  ","\n  "],["\n  ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return the current angle of the sequence element in the game room. Note that angles are returned in degrees, and 0º is to the right, 90º is up, 180º is to the left and 270º is down.","\n  "," ","\n  "],["\n  ","layer_sequence_get_angle(sequence_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","sequence_element_id","Sequence Element ID","\n        ","The unique ID value of the sequence element to target","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var _ang = layer_sequence_get_angle(title_sequence)","\n    if _ang > 0","\n    {","\n        _ang -= 1;","\n        layer_sequence_angle(title_sequence, _ang);","\n    }","\n  ","The above code retrieves the current angle of the the sequence element with the ID stored in the variable \"title_sequence\", and if it's not 0, then 1 is subtracted form the current angle.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_get_xscale","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_sequence_get_angle"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"975"})