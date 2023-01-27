rh._.exports({"0":[[" ","http_post_string"]],"1":[["http_post_string"]],"2":[["http_post_string"]],"3":[[" ","http_post_string"]],"4":[[" ","In computing, a ","post"," request is used when the client needs to send data to the server as part of the retrieval request, such as when uploading a file or submitting a completed form, and the same is true of this function in ","GameMaker",". In contrast to the ","http_get()"," request method where only a URL is sent to the server, ","http_post_string()"," also includes a string that is sent to the server and may result in the creation of a new resource or the update of an existing resource or both. It should be noted that HTTP request parameters (the bits sometimes \"tacked on\" to the end of a URL when you submit a form on a web page) are perfectly acceptable when using this function too."," ","NOTE"," ","You should be aware that due to XSS protection in browsers, requests to and attempts to load resources from across domains are blocked and may appear to return blank results. Please see ","Cross Domain Issues"," for further details."," ","This event will generate a \"call back\" which is picked up by any ","HTTP Events",", in which case it will generate a ","DS Map"," (more commonly known as a \"dictionary\") that is exclusive to this event and is stored in the special variable ","async_load",". This DS map  will contain different values depending on whether there is data being returned or not. For example, if you have requested a file, the event will trigger multiple times as each packet of data is received so that you can show a progress bar, for example. The general structure for the DS map will be as follows:"," ","id: ","The ID which was returned from the command. If you fire off a series of ","http_"," requests then you need to know which one you are getting the reply to, and so you would use this value to compare to the value you stored when you originally sent the request to find the right one."," ","status: ","Returns a value of less than 0 for an error, 0 for complete and 1 for receiving packets (see below for more details)."," ","result: ","The data received (string only)."," ","url: ","The complete URL you requested."," ","http_status: ","The raw http status code (if available). This returns the standard web status code for most browsers, eg: 304 for \"Not Modified\" or 204 for \"No Content\", etc..."," ","If there are multiple packets being returned to your game, the callback \"status\" key will return 1, in which case the DS map will have the following additional keys:"," ","\"contentLength\": ","This is the size of file that the web server has said you should expect to receive (may be -1 if the server does not return this data)."," ","\"sizeDownloaded\": ","The size of the data that has already been downloaded."],[" ","http_post_string(url, string);"," ","Argument"," ","Type"," ","Description"," ","url"," ","String"," ","The web address of the server that you wish to get information from"," ","string"," ","String"," ","The string you wish to send to the specified URL"],[" ","Async Request ID"],[" ","The ","http_post_string()"," function can be called from any event, and since it is asynchronous the callback can be almost instantaneous or could take several seconds. Calling the function is simple and would look something like this:"," ","var str = \"name=\" + global.player_name + \"&score=\" + string(global.player_score);","\n    post = http_post_string(\"http://www.angusgames.com/game?game_id=\" + string(global.game_id), str);"," ","The above code sends a retrieval request to the specified URL with the given parameters as well as sending the additional data (player name and score in URL-encoded form) stored in the variable str. This will trigger all defined asynchronous ","Http Events"," if a callback is received, and you can check the \"id\" returned against that stored in the variable ","post"," to make sure that you run the correct code should you have used various ","http_post_string()"," functions. The following example code shows how this would be done:"," ","var r_str = \"null\";","\n    if ds_map_find_value(async_load, \"id\") == post","\n    {","\n        if ds_map_find_value(async_load, \"status\") == 0","\n        {","\n            r_str = ds_map_find_value(async_load, \"result\");","\n        }","\n    }"," ","The above code will first check the id of the DS map that has been created, then check the status of the callback. If the value is equal to 0 (signalling success) the result from the callback will then be stored in a variable for future use, otherwise the variable will simply hold a default value (in this case \"null\")."," ","Back: ","HTTP"," ","Next: ","http_get_request_crossorigin"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Extended Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2554"})