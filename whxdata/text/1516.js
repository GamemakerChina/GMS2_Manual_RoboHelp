rh._.exports({"0":[[" ","network_create_socket_ext"]],"1":[["network_create_socket_ext,network_socket_tcp,network_socket_udp,network_socket_ws"]],"2":[["network_create_socket_ext,network_socket_tcp,network_socket_udp,network_socket_ws"]],"3":[[" ","network_create_socket_ext"]],"4":[[" ","This function is used to create a new client socket for your game to communicate over the network. You must define the socket type (see the list of constants below) and give a port to use, and the function will return a unique ","id"," which should be used in all further function calls for that socket, or a value of less than 0 if the connection fails."," ","Socket Type Constant"," ","Constant"," ","Description"," ","network_socket_tcp"," ","Create a socket using TCP."," ","network_socket_udp"," ","Create a socket using UDP."," ","network_socket_ws"," ","Create a WebSocket using TCP. (","NOTE",": Use ","Async"," functions for connecting through WebSockets",")"," ","network_socket_wss"," *"," ","Create a secure WebSocket using TCP."," ","NOTE 1"," It is also possible to secure your simple WebSocket (","network_socket_ws",") by using the ","wss://"," protocol in your URLs."," ","NOTE 2"," * Secure WebSockets will not work on UWP and Xbox One when using the legacy XDK platform, however they will work on those targets when using GDK."," ","IMPORTANT"," iOS 14 and later require that you request the multicast entitlement (","com.apple.developer.networking.multicast",") and enable it in order to ","send and receive"," multicasts and broadcasts.","\n    Moreover, iOS 14 does not show the consent modal dialog to the user until a packet is first sent. So the alert will not be shown if the UDP socket only receives.","\n    A way to work around this is to send an empty \"dummy\" packet so that the consent modal is triggered."],[" ","network_create_socket_ext(protocol, port);"," ","Argument"," ","Type"," ","Description"," ","protocol"," ","Socket Type Constant"," ","The network protocol to use"," ","port"," ","Real"," ","The port to use"],[" ","Network Socket ID"],[" ","client = network_create_socket_ext(network_socket_udp, 6510);"," ","The above code will create a new UDP socket on port 6510."," ","Back: ","Networking"," ","Next: ","network_connect"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1516"})