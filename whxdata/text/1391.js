rh._.exports({"0":[["in_sequence"]],"1":[["in_sequence"]],"2":[["in_sequence"]],"3":[["\n  ","\n  "],["\n  ","This is a ","built-in variable"," that is part of the ","instance variables"," created for every object instance in your game. If the instance is being controlled by a sequence,\n    this variable will return ","true",", otherwise it will return ","false",". This is a ","read-only"," variable and cannot be changed.","\n  ","Note that this variable will become ","false"," after the controlling Sequence has ended, even if its Sequence Element still exists, and will become ","true"," if that Sequence element is ","played again",".","\n  ","You can use this variable in your player (or CPU) controlled objects to make sure that they're only moved by code when they're not in a Sequence. This can prove useful for cutscenes, when you need to use the same instances in a Sequence (using\n    the ","sequence_instance_override_object()"," function) and you need to make sure that they can't be moved by their usual code while that cutscene is active.","\n  "," ","\n  "],["\n  ","in_sequence","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if (!in_sequence)"," {\n    ","     x += move_x;","     y += move_y;"," }\n  ","\n  ","The above code checks the ","in_sequence"," variable, and if it is ","false"," (meaning the instance is not being controlled by a sequence) then it adds ","move_x"," and ","move_y"," to the instance's\n    position, making sure that it only moves when it's not in a Sequence.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n        ","Next: ","sequence_exists","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["in_sequence"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1391"})