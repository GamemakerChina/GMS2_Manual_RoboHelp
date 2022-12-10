rh._.exports({"0":[["layer_sequence_angle"]],"1":[["layer_sequence_y"]],"2":[["layer_sequence_angle"]],"3":[["\n  ","\n  "],["\n  ","With this function you can set the angle of rotation for the given sequence element. You supply the sequence element ID as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," along with the new angle to set and the sequence will be rotated about its origin to the new position. Angles in GameMaker are calculated with 0º to the right, and go anti-clockwise - so 90º is up, 180º is left and 270º is down - and the default angle for a sequence would be 0º.","\n  ","Note that you shouldn't change the ","image_xscale"," \\ ","image_yscale"," \\ ","image_angle"," \\ ","x"," \\ ","y"," variables for any instances in a sequence that uses this function as they will be overwritten as soon as the sequence updates after calling the function.","\n  "," ","\n  "],["\n  ","layer_sequence_angle(sequence_element_id, angle)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","sequence_element_id","\n        ","Sequence Element ID","\n        ","The unique ID value of the sequence element to target","\n      ","\n      ","\n        ","angle","\n        ","Real","\n        ","The new angle to rotate the sequence element to","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if current_angle < 90","\n    {","\n        current_angle += 1;","\n        layer_sequence_angle(my_seq, current_angle);","\n    }","\n  ","The above code checks the value held in the ","current_angle"," variable, and if it is less than 90 then it adds to it then uses the value to set the angle of the sequence element referenced in the variable ","my_seq",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_xscale","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_sequence_angle"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1693"})