rh._.exports({"0":[[" ","layer_sequence_get_x"]],"1":[["layer_sequence_get_x"]],"2":[[" ","layer_sequence_get_x"]],"3":[[" ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return the current X position in the game room for the sequence."],[" ","layer_sequence_get_x(sequence_element_id)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","Real"],[" ","if layer_sequence_get_x(title_sequence) != room_width / 2","\n    {","\n        layer_sequence_x(title_sequence, room_width / 2);","\n    }"," ","The above code checks the X position of the sequence element ID stored in the variable \"title_sequence\", and if it's not set to half the room width, it is set to this value."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_get_y"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_sequence_get_x"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"680"})