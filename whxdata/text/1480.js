rh._.exports({"0":[["object_set_solid"]],"1":[["object_set_solid"]],"2":[["object_set_solid"]],"3":[["\n  ","\n  "],["\n  ","With this function you can flag a specific object as being solid or not (for more information on the \"solid\" flag see the section on the ","Object Editor","). This means that all instances of this object that are created ","after solid has been changed"," will be created with this new state, while instances that are already in the room may not be affected.","\n  ","Please note that this is not an instance function! You can set the solid flag of individual instances using the ","solid"," variable and so have ten instances all flagged as solid even though the object in question has the flag set to false in the IDE, and even if you change the solid flag of the object to true using this function, all instances that currently in the room will remain as they were, and only instances created after calling the function will start with solid flagged as true.","\n  "," ","\n  "],["\n  ","object_set_solid( index, solid );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","Object Asset","\n        ","The index of the object to change.","\n      ","\n      ","\n        ","solid","\n        ","Boolean","\n        ","The new solidity of the object (","true","=solid, ","false","=not solid).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if !object_get_solid(obj_Block)","\n    {","\n        object_set_solid(obj_Block, true);","\n    }","\n  ","The above code checks the solid flag of the object \"obj_Block\" and if it is false then it is changed to be flagged as true.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Objects","\n        ","Next: ","object_set_sprite","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["object_set_solid"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1480"})