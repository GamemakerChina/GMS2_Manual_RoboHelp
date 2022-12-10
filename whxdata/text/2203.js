rh._.exports({"0":[["xboxlive_matchmaking_find"]],"1":[["xboxlive_matchmaking_find"]],"2":[["xboxlive_matchmaking_find"]],"3":[["\n  ","\n  "],["\n  ","This function will search for a multi-player session using the Session Template, matchmaking hopper and Secure Device Association template, which you should have created beforehand in the XDP dashboard. The user ID you can retrieve for a particular game pad by calling the ","xboxlive_user_for_pad()"," function. The function will return a unique Request ID value, which can then be used to identify the correct ","Social Asynchronous Event"," for this function. This event will be triggered when the session has been created and will contain a DS Map in the variable ","async_load"," with the following key/value pairs:","\n  ","\n    ","\"requestid\" – contains the request ID as returned by the calling function","\n    ","\"status\" – contains the string \"session_created\" to inform you of what type of event has been triggered.","\n    ","\"num_results\" – contains 1 or more if a session has been found, otherwise contains 0.","\n    ","\"sessionid","<index>","\" – contains the session ID, or -1 in case of failure  (","<index/gt;"," is a value from 0 to \"num_results\" - 1).","\n    ","\"sessionOwner","<index>","\" – contains the ID of the session host if a session has been found  (","<index>"," is a value from 0 to \"num_results\" - 1).","\n    ","\"error\" – contains 0 on success, or -1 in case of failure","\n  ","\n  "," ","\n  "],["\n  ","xboxlive_matchmaking_find(user_id, template, hopper, sdatemplate, [matchattributes]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","Xbox User ID","\n        ","The user ID pointer to use","\n      ","\n      ","\n        ","template","\n        ","String","\n        ","The name of the session template","\n      ","\n      ","\n        ","hopper","\n        ","String","\n        ","The name of the matchmaking hopper","\n      ","\n      ","\n        ","sdatemplate","\n        ","String","\n        ","The name of the secure device association template","\n      ","\n      ","\n        ","matchattributes","\n        ","Real","\n        ","OPTIONAL"," The match attributes","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Async Request ID","\n  "," ","\n  "],["\n  ","var userID = xboxone_user_for_pad(global.PadIndex);","\n    result = xboxone_matchmaking_find(userID, \"MatchTicketSession\", \"MatchTicketHopper\", \"PeerServerTraffic\");","\n  ","The above will retrieve the user ID for the user on the given gamepad and then try to find a matchmaking session for them.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Match Making","\n        ","Next: ","xboxlive_matchmaking_session_get_users","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["xboxlive_matchmaking_find"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2203"})