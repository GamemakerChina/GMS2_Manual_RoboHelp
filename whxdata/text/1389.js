rh._.exports({"0":[["sequence_get_objects"]],"1":[["sequence_get_objects"]],"2":[["sequence_get_objects"]],"3":[["\n  ","\n  "],["\n  ","With this function you can retrieve an ","array"," of all the object indices that have instances being created within the given sequence. You supply either the sequence object struct (as returned by the function ","sequence_create()"," or ","sequence_get()",") or the sequence ID (as returned by the function ","layer_sequence_get_sequence()"," or from the sequence instance struct property ","sequence",") and the function will return an array, where each item in the array is an ","object_index"," for the different objects being used by the sequence to create instances.","\n  "," ","\n  "],["\n  ","sequence_get_objects(sequence_struct_or_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","sequence_struct_or_id","\n        ","Sequence Asset"," or ","Sequence Object Struct","\n        ","The sequence object struct or ID to get the objects from.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Array","\n  "," ","\n  "," ","\n  "],["\n  ","var _seq = sequence_get(seq_Logo);","\n    obj_array = sequence_get_objects(_seq);","\n  ","The above code gets the struct for a sequence object and then retrieves the objects that it uses and stores the array in a variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n        ","Next: ","sequence_instance_override_object","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["sequence_get_objects"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1389"})