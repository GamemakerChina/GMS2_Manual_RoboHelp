rh._.exports({"0":[[" ","network_create_server_raw"]],"1":[["network_create_server_raw,network_socket_tcp,network_socket_udp,network_socket_ws"]],"2":[["network_create_server_raw,network_socket_tcp,network_socket_udp,network_socket_ws"]],"3":[[" ","network_create_server_raw"]],"4":[[" ","This function is used to create a new network server for your game, using one of the permitted connection protocols (see the constants listed below). You supply the server type, then give it a port to use, and finally the number of maximum connections that should be permitted at any one time to the server (note that this number is up to you, but too many connected clients will saturate the network or the device CPU won't be able to handle the processing of that number of players, so use with care). The function returns a unique ","id"," which should be used stored in a variable and used to identify the server in all further network functions, or a value of less than 0 if the connection fails."," ","Socket Type Constant"," ","Constant"," ","Description"," ","network_socket_tcp"," ","Create a socket using TCP."," ","network_socket_udp"," ","Create a socket using UDP."," ","network_socket_ws"," ","Create a WebSocket using TCP. (","NOTE",": Use ","Async"," functions for connecting through WebSockets",")"," ","network_socket_wss"," *"," ","Create a secure WebSocket using TCP."," ","NOTE 1"," It is also possible to secure your simple WebSocket (","network_socket_ws",") by using the ","wss://"," protocol in your URLs."," ","NOTE 2"," * Secure WebSockets will not work on UWP and Xbox One when using the legacy XDK platform, however they will work on those targets when using GDK."," ","As this creates a \"raw\" server, it will not accept nor use any of the built in GameMaker data headers for communication, and so you should be using the functions ","network_send_raw()"," and ","network_send_udp_raw()"," to send unformatted data to the server created."],[" ","network_create_server_raw(type, port, max_client);"," ","Argument","Type"," ","Description"," ","type","Socket Type Constant"," ","The type of server to create (see the constants listed below)."," ","port","Real"," ","The port that the server will use."," ","max_client","Real"," ","The maximum number of clients that can connect at once."],[" ","Network Socket ID"],[" ","var port = 6510;","\n    server = network_create_server_raw(network_socket_tcp, port, 32);","\n    while (server < 0 && port < 65535)","\n    {","\n        port++","\n        server = network_create_server(network_socket_tcp, port, 32);","\n    }"," ","The above code will try and create a server using TCP through port 6510. If that port is unavailable, it will then loop through the ports to find one that is."," ","Back: ","Networking"," ","Next: ","network_create_socket"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1931"})