rh._.exports({"0":[["os_is_network_connected"]],"1":[["os_is_network_connected"]],"2":[["os_is_network_connected"]],"3":[["\n  ","\n  "],["\n  ","With this function you can check and see if your device currently has an internet connection.","\n  ","It will return ","true"," if it does, or ","false"," if it does not. Depending on the value of the ","attempt_connection"," argument and the OS, it may attempt to make a connection before returning a value.","\n  ","The function has an optional argument to enable/disable it attempting to make a connection when called, and this option is currently ","only"," for the Nintendo Switch target. When set to anything other than ","network_connect_none"," the function will attempt to make a connection, and when set to ","network_connect_none"," it will simply be limited to checking the connection. Note that attempting to make a connection using ","network_connect_blocking"," may cause the Switch OS to hang for a few seconds.","\n  ","NOTE"," This function checks the internal device API that controls connections and so may return ","true"," if there is a bluetooth connection, a Wi-Fi connection, or even just a normal network connection that permits internet access.","\n  "],["\n  ","os_is_network_connected","([attempt_connection]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","attempt_connection","\n        ","Attempt Connection Constant","\n        ","OPTIONAL"," For the Nintendo Switch target ","only",". Set this parameter to a value other than ","network_connect_none"," / ","false"," to attempt an OS level connection when called.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n    ","Attempt Connection Constant","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","network_connect_none"," / ","false","\n        ","This does not attempt to connect.","\n      ","\n      ","\n        ","network_connect_blocking"," / ","true","\n        ","This attempts to connect and blocks execution while trying.","\n      ","\n      ","\n        ","network_connect_active"," / ","network_connect_nonblocking","\n        ","This will actively prompt the user to fix the connection.","\n      ","\n      ","\n        ","network_connect_passive","\n        ","This will try to connect and silently fail if no succesful connection could be established.","\n      ","\n    ","\n  ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if ","os_is_network_connected","()","\n    {","\n        global.connected = true;","\n    }","\n  ","The above code checks to see if the device has a connection to the internet and if so it sets a global variable.","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","os_get_config","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["os_is_network_connected"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2407"})