rh._.exports({"0":[["layer_sequence_create"]],"1":[["layer_sequence_create"]],"2":[["layer_sequence_create"]],"3":[["\n  ","\n  "],["\n  ","With this function you can create an instance of a sequence asset on the given layer. You supply the layer ID which can be a string of the layer name - as defined in the room editor - or the unique layer ID - as returned by the function ","layer_get_id()",", as well as the X and Y position in the room to create the sequence at, and finally the ID of the sequence to create. The sequence ID is the name constant that you defined in the Asset Browser for the sequence. The function will return the unique ID of the sequence element, which can then be used in all further layer functions for sequences, or it can be used to retrieve the sequence instance struct using the function ","layer_sequence_get_instance()",".","\n  ","It is worth noting that if the sequence contains any object tracks, their instances will be created as soon as the sequence element itself is created, regardless of where their asset keys are positioned on the ","Dope Sheet",". The Sequence controller simply toggles the ","visibility"," of the instance to hide and show it depending on the position and duration of the track's asset key and does ","not ","repeatedly create and destroy it. As a result, instances will run their Create events when the sequence element is created and not when their asset keys begin.","\n  ","NOTE"," All instances that are created for the object tracks are created on the same layer as the sequence instance.","\n  "],["\n  ","layer_sequence_create","(layer_id, x, y, sequence_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","String"," or ","Layer ID","\n        ","The unique ID value of the layer to target","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x position in the room to create the sequence at","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y position in the room to create the sequence at","\n      ","\n      ","\n        ","sequence_id","\n        ","Sequence Asset","\n        ","The sequence asset to use, as defined in the Asset Browser","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Sequence Element ID","\n  "," ","\n  "],["\n  ","var _s = ","layer_sequence_create","(\"Background\", 0, 0, seq_AnimatedBackground);","\n    layer_sequence_pause(_s);","\n  ","The above code creates a new sequence on the layer \"Background\" then pauses it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_destroy","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_sequence_create"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2371"})