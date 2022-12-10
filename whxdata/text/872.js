rh._.exports({"0":[["timeline_size"]],"1":[["timeline_size"]],"2":[["timeline_size"]],"3":[["\n  ","\n  "],["\n  ","With this function you can get the total number of active moments for a timeline (an \"active\" moment is one which has code or GML Visual added to it). This can be handy when creating dynamic timelines using the ","timeline_moment_add_script()"," and ","timeline_moment_clear()"," functions, as you can check to see if a given timeline has the correct number of active moments or none at all.","\n  "," ","\n  "],["\n  ","timeline_size(ind);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","ind","Timeline Asset","\n        ","The index of the timeline get the information from.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if timeline_size(global.tl) == 0","\n    {","\n        timeline_moment_add_script(global.tl, room_speed + irandom(room_speed), spawn_enemy);","\n    }","\n  ","The above code check the given timeline size, and if it returns 0 (ie: the timeline has no active moments) it will add a script function to be used at a random moment within the timeline indexed in the global variable \"tl\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Timelines","\n        ","Next: ","timeline_max_moment","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["timeline_size"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"872"})