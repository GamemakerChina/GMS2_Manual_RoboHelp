rh._.exports({"0":[[" ","xboxlive_matchmaking_create"]],"1":[["xboxlive_matchmaking_create,xboxlive_match_visibility_open,xboxlive_match_visibility_private,xboxlive_match_visibility_usetemplate"]],"2":[["xboxlive_matchmaking_create,xboxlive_match_visibility_open,xboxlive_match_visibility_private,xboxlive_match_visibility_usetemplate"]],"3":[[" ","xboxlive_matchmaking_create"]],"4":[[" ","This function will create a multi-player session using the Session Template, matchmaking hopper and Secure Device Association template, which you should have created beforehand in the XDP dashboard. The user ID you can retrieve for a particular game pad by calling the ","xboxlive_user_for_pad()"," function and visibility will be one of the following constants:"," ","Xbox Match Visibility Constant"," ","Constant"," ","Description"," ","xboxlive_match_visibility_open"," ","specifies that the session can be joined by the others."," ","xboxlive_match_visibility_private"," ","specifies that the session is not visible to users who are not session members."," ","xboxlive_match_visibility_usetemplate"," ","specifies that the value used in the session template should be used (this should normally be used as you can't override a template's value if one has been set in XDP)."," ","The function returns a unique Request ID value, which can then be used to identify the correct Social Asynchronous Event for this function. This event will be triggered when the session has been created and will contain a DS Map in the variable ","async_load"," with the following key/value pairs:"," ","\"requestid\" – contains the request ID as returned by the calling function"," ","\"status\" – contains the string \"session_created\" to inform you of what type of event has been triggered."," ","\"sessionid\" – contains the session ID, or -1 in case of failure"," ","\"error\" – contains 0 on success, or -1 in case of failure"," ","\"correlationid\" - the session handle for correlation with the function ","xboxlive_matchmaking_join_session()"],[" ","xboxlive_matchmaking_create(user_id, visibility, template, hopper, sdatemplate, [matchattributes]);"," ","Argument"," ","Type"," ","Description"," ","user_id"," ","Xbox User ID"," ","The user ID pointer to use"," ","visibility"," ","Xbox Match Visibility Constant"," ","One of the constants listed above"," ","template"," ","String"," ","The name of the session template"," ","hopper"," ","String"," ","The name of the matchmaking hopper"," ","sdatemplate"," ","String"," ","The name of the secure device association template"," ","matchattributes"," ","Real"," ","OPTIONAL"," The match attributes"],[" ","Async Request ID"],[" ","var userID = xboxlive_user_for_pad(global.PadIndex);","\n    result = xboxlive_matchmaking_create(userID, xboxlive_match_visibility_usetemplate, \"MatchTicketSession\", \"MatchTicketHopper\", \"PeerServerTraffic\");"," ","The above will retrieve the user ID for the user on the given gamepad and then initialise a matchmaking session for them."," ","Back: ","Match Making"," ","Next: ","xboxlive_matchmaking_find"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2432"})