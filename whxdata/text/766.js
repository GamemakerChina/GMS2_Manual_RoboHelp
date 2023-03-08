rh._.exports({"0":[[" ","layer_sequence_get_y"]],"1":[["layer_sequence_get_y"]],"2":[["layer_sequence_get_y"]],"3":[[" ","layer_sequence_get_y"]],"4":[[" ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return the current Y position in the game room for the sequence."],[" ","layer_sequence_get_y(sequence_element_id)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","Real"],[" ","if layer_sequence_get_y(title_sequence) != room_height / 2","\n    {","\n        layer_sequence_y(title_sequence, room_height / 2);","\n    }"," ","The above code checks the Y position of the sequence element ID stored in the variable \"title_sequence\", and if it's not set to half the room height, it is set to this value."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_get_angle"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"766"})