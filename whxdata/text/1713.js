rh._.exports({"0":[["path_endaction"]],"1":[["path_endaction"]],"2":[["path_endaction,path_action_stop,path_action_restart,path_action_continue,path_action_reverse"]],"3":[["\n  ","\n  "],["\n  ","This variable can be used to get or to change the reaction of an instance when it reaches the end of the current path. Normally you would set this when you start the path using ","path_start()"," but you may wish to change this behaviour depending on any number of events in your game. The available values are expressed using the following constants:","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Path End Action Constant","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","path_action_stop","\n        ","Stop the path","\n      ","\n      ","\n        ","path_action_restart","\n        ","Continue from start position, jumping to the start if the path is not closed","\n      ","\n      ","\n        ","path_action_continue","\n        ","Start the path again from the current position","\n      ","\n      ","\n        ","path_action_reverse","\n        ","Reverse the speed of the path (run the path in reverse)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","path_endaction;","\n  "," ","\n  "],["\n  ","Path End Action Constant","\n  "," ","\n  "],["\n  ","if (path_endaction == path_action_stop)","\n    {","\n        path_endaction = path_action_reverse;","\n    }","\n  ","The above code will check the path end action and if it's set to stop, then the end action will be changed to reverse.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Variables","\n        ","Next: ","path_start","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["path_endaction"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1713"})