rh._.exports({"0":[["network_create_socket"]],"1":[["network_create_socket,network_socket_tcp,network_socket_udp,network_socket_ws,network_socket_wss"]],"2":[["network_create_socket,network_socket_tcp,network_socket_udp,network_socket_ws,network_socket_wss, WebSocket, web socket"]],"3":[["\n  ","\n  "],["\n  ","This function is used to create a new client socket for your game to communicate over the network. You must define the socket type (see the list of constants below) and the function will return a unique ","id"," for that socket, which should be used in all further function calls for that socket, or a value of less than 0 if the connection fails.","\n  ","TIP"," You can use the IP \"127.0.0.1\" to connect back to the same device that is running the game.","\n  ","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Socket Type Constant","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","network_socket_tcp","\n        ","Create a socket using TCP.","\n      ","\n      ","\n        ","network_socket_udp","\n        ","Create a socket using UDP.","\n      ","\n      ","\n        ","network_socket_ws","\n        ","Create a WebSocket using TCP. (","NOTE",": Use ","Async"," functions for connecting through WebSockets",")","\n      ","\n      ","\n        ","network_socket_wss"," *","\n        ","Create a secure WebSocket using TCP.","\n      ","\n    ","\n  ","\n  ","NOTE 1"," It is also possible to secure your simple WebSocket (","network_socket_ws",") by using the ","wss://"," protocol in your URLs.","\n  ","NOTE 2"," * Secure WebSockets will not work on UWP and Xbox One when using the legacy XDK platform, however they will work on those targets when using GDK.","\n\n","\n  "," ","\n  ","\n  ","IMPORTANT"," iOS 14 and later require that you request the multicast entitlement (","com.apple.developer.networking.multicast",") and enable it in order to ","send and receive"," multicasts and broadcasts.","\n    Moreover, iOS 14 does not show the consent modal dialog to the user until a packet is first sent. So the alert will not be shown if the UDP socket only receives.","\n    A way to work around this is to send an empty \"dummy\" packet so that the consent modal is triggered.","\n\n","\n  "," ","\n  "],["\n  ","network_create_socket(type);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","type","\n        ","Socket Type Constant","\n        ","The type of socket connection to create (see the constants listed above).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Network Socket ID","\n  "," ","\n  "],["\n  ","if os_browser == browser_not_a_browser","\n    {","\n        client = network_create_socket(network_socket_tcp);","\n        network_connect( client, \"192.134.0.1\", 6510 );","\n    }","\n    else","\n    {","\n        client = network_create_socket(network_socket_ws);","\n        network_connect_raw_async( client, \"192.134.0.1\", 6520 );","\n    }","\n  ","The above code will check whether the game is running in a browser or not and create a new TCP or Web socket before attempting to connect through that to the given IP address on the given port.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Networking","\n        ","Next: ","network_create_socket_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["network_create_socket"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1823"})