rh._.exports({"0":[[" ","http_request"]],"1":[["http_request"]],"2":[["http_request"]],"3":[[" ","http_request"]],"4":[[" ","With this function, you can create an HTTP header request to define the operating parameters of an HTTP transaction, which can be used for many things like (for example) authentication via HTTP headers if you use RESTful APIs. The function requires the full IP address of the server to request from as well as the type of request to make (as a string, see the note below): \"GET\", \"HEAD\", \"POST\", \"PUT\", \"DELETE\", \"TRACE\", \"OPTIONS\", or \"CONNECT\". You will also need to supply a ","DS map"," of key/value pairs (as strings, where the key is the header field and the value is the required data for the header), and the final argument is an optional data string that you can add to the request, and if it's not needed then it can be either 0 or an empty string \"\". Note that you can also send a buffer (see the section on ","Buffers"," for more details), in which case the last argument would be the index of the buffer to send."," ","NOTE",": HTTP headers normally follow the format \"key:value\", but since ","GameMaker"," creates these pairs for you from the ds_map, there is no need to include the colon \":\" in your map key or value strings."," ","NOTE",": When using a buffer for the body argument, if the buffer seek position is at the start (0) then no body is sent and the buffer is filled with the response from the http call, but if the buffer seek position is non-zero, then the buffer string content is sent as the body."," ","NOTE",": You should be aware that due to XSS protection in browsers, requests to and attempts to load resources from across domains are blocked and may appear to return blank results. Please see the part on ","Cross Domain Issues"," for further details."," ","This function returns an ","Async Request ID"," which can be used to identify its callback, as described below."],[" ","This event will generate a \"callback\" which is picked up by any ","Async HTTP Events",", in which case it will generate a ","DS Map"," that is exclusive to this event and is stored in the special variable ","async_load",". This DS map has the following two keys related to the request function:"," ","id: ","The ID which was returned from the function. If you fire off a series of ","http_"," requests then you need to know which one you are getting the reply to, and so you would use this value to compare to the value you stored when you originally sent the request to find the right one."," ","response_headers:"," If this has a value greater than or equal to 0, it holds a DS map that contains the HTTP headers returned with the response to the HTTP request."],[" ","http_request(url, method, header_map, body);"," ","Argument"," ","Type"," ","Description"," ","url"," ","String"," ","The web address of the server that you wish to get information from"," ","method"," ","String"," ","The request method (normally ","\"POST\""," or ","\"GET\"",", but all methods are supported)"," ","header_map"," ","DS Map ID"," ","A ds_map with the required header fields"," ","body"," ","Real",", ","String",", or ","Buffer ID"," ","The data to be transmitted following the headers (can be a binary buffer handle)"],[" ","Async Request ID"],[" ","var map = ds_map_create();","\n    ds_map_add(map, \"Host\", \"225.0.0.97:3000\");","\n    ds_map_add(map, \"Connection\", \"keep-alive\");","\n    ds_map_add(map, \"Content-Length\", \"169\");","\n    ds_map_add(map, \"Cache-Control\", \"max-age=0\");","\n    ds_map_add(map, \"Authorization\", \"Basic eW95b19hZG1pbjpjNG5lZmllbGQ=\");","\n    ds_map_add(map, \"Accept\", \"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\");","\n    ds_map_add(map, \"User-Agent\", \"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36\");","\n    ds_map_add(map, \"Content-Type\", \"application/x-www-form-urlencoded\");","\n    ds_map_add(map, \"Accept-Encoding\", \"gzip,deflate,sdch\");","\n    ds_map_add(map, \"Accept-Language\", \"en-GB,en-US;q=0.8,en;q=0.6\");","\n    ds_map_add(map, \"Cookie\", \"request_method=GET; _InAppPurchases_session=69bb6ef6eec2b\");","\n    var data=\"utf8=%E2%9C%93&authenticity_token=kPmS14DcYcuKgMFZUsN3XFfj3mhs%3D&product%5Bname%5D=CatchTheHaggis&product%5Bproduct_id%5D=http_test&commit=Create+Product\";","\n    request = http_request(\"http:225.0.0.97:3000/products\", \"POST\", map, data);"," ","The above code creates a DS map with the relevant HTTP headers for the function, then creates a data string for use as this is a POST request. Finally the function is called, with it's ID value being stored in the variable \"request\" for checking in the HTTP asynchronous event."," ","Back: ","HTTP"," ","Next: ","http_get"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"11":[[" ","Async Callback"]],"id":"2579"})