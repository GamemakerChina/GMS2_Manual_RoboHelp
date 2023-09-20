rh._.exports({"0":[[" ","xboxlive_matchmaking_join_session"]],"1":[["xboxlive_matchmaking_join_session,MATCHMAKING_SESSION"]],"2":[[" ","xboxlive_matchmaking_join_session"]],"3":[[" ","This function permits you to join a specific session via a session handle. This is similar to joining a session invite but is useful when you have your own server performing the matchmaking rather than relying on xbox live matchmaking."," ","The function requires you to provide the user ID - which you can retrieve for a particular game pad by calling the ","xboxlive_user_for_pad()"," function - as well as the Secure Device Association template, which you should have created beforehand in the XDP dashboard."," ","For the session handle, you will need to have first retrieved the \"correlation id\" from the session you wish to join. When the original session is created the Asynchronous Social event will be \"","session_created","\" and it will include a \"","correlationid","\" entry in the returned map (see ","xboxlive_matchmaking_create()","). You will need to have this ID passed back to the server for it to then be passed out when receiving a matchmaking request. Once the joining game has received the \"correlation id\" back from the server they can then call this function passing the correlation ID as the session handle argument."," ","The function will return -1 if there has been an error (in which case there should be console output detailing the issue), or a Request ID value otherwise. The Request ID value can then be used to identify the correct ","Social Asynchronous Event"," for this function. This event will be triggered when the session has been created and will contain a DS Map in the variable ","async_load"," with the following key/value pairs:"," ","\"","requestid","\" - contains the request ID as returned by the calling function"," ","\"","status","\" - contains the string \"session_player_joined\" to inform you of what type of event has been triggered."," ","\"","sessionid","\" - contains the session ID, or -1 in case of failure."," ","\"","sessionOwner<","index",">","\" - contains the ID of the session host if a session has been found (<","index","> is a value from 0 to \"num_results\" - 1)"," ","\"","id","\" - contains the constant ","MATCHMAKING_SESSION"," ","\"","error","\" - will be 0 if everything is fine, or -1 if something failed"," ","When a new player joins the session, the DS map will have these key/value pairs:"," ","\"","id","\" - contains the constant ","MATCHMAKING_SESSION"," ","\"","sessionid","\" - contains the session ID"," ","\"","status","\" - contains the string \"session_player_joined\""," ","\"","requestid","\" - The ID value that was returned by the function that created the request"],[" ","xboxlive_matchmaking_join_session(user_id, session_handle, sdatemplate);"," ","Argument","Type"," ","Description"," ","user_id","Xbox User ID"," ","The User ID pointer to use"," ","session_handle","Real"," ","The \"correlation id\" to use for the session ID (see description, above)"," ","sdatemplate","String"," ","The name of the secure device association template to use"],[" ","Async Request ID"],[" ","Request_ID = xboxlive_matchmaking_join_session(global.UserID, global.SessionID, \"PeerServerTraffic\");"," ","The above will send a request to join the given multiplayer session, storing the request ID value in a variable so it can be checked in the asynchronous event."," ","Back: ","Match Making"," ","Next: ","xboxlive_matchmaking_session_leave"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["xboxlive_matchmaking_join_session,MATCHMAKING_SESSION"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2341"})