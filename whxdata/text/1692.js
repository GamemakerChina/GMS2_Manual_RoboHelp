rh._.exports({"0":[[" ","path_endaction"]],"1":[["path_endaction"]],"2":[["path_endaction,path_action_stop,path_action_restart,path_action_continue,path_action_reverse"]],"3":[[" ","path_endaction"]],"4":[[" ","This variable can be used to get or to change the reaction of an instance when it reaches the end of the current path. Normally you would set this when you start the path using ","path_start()"," but you may wish to change this behaviour depending on any number of events in your game. The available values are expressed using the following constants:"," ","Path End Action Constant"," ","Constant"," ","Description"," ","path_action_stop"," ","Stop the path"," ","path_action_restart"," ","Continue from start position, jumping to the start if the path is not closed"," ","path_action_continue"," ","Start the path again from the current position"," ","path_action_reverse"," ","Reverse the speed of the path (run the path in reverse)"],[" ","path_endaction;"],[" ","Path End Action Constant"],[" ","if (path_endaction == path_action_stop)","\n    {","\n        path_endaction = path_action_reverse;","\n    }"," ","The above code will check the path end action and if it's set to stop, then the end action will be changed to reverse."," ","Back: ","Path Variables"," ","Next: ","path_start"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1692"})