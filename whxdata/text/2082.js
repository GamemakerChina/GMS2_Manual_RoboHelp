rh._.exports({"0":[["network_send_udp"]],"1":[["network_send_udp"]],"2":[["network_send_udp"]],"3":[["\n  ","\n  "],["\n  ","With this function you can send data over the network using UDP to a server. The function takes the ","socket id"," to connect through, the URL to connect to and the port to use. You must then supply the ","buffer id"," which contains the data to be sent (for more information on buffers see ","Reference - Buffers",") and finally the size (in bytes) of the data. UDP is \"connectionless\" in that you don't actually do a connect, you just send a packet directly to an IP, and the server gets incoming data from an IP address and has to deal with it \"as is\". The function will return the number of bytes of data sent, or a number less than 0 if the send has failed. It is worth noting that the final size of the data being sent that is returned by this function will also include the GameMaker header information, which is an additional 12 bytes.","\n  ","NOTE"," This function will not work when used in a project running on the HTML5 target, and neither will HTML5 projects be able to receive UDP.","\n  "," ","\n  "],["\n  ","network_send_udp(socket, url, port, bufferid, size);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","socket","\n        ","Network Socket ID","\n        ","The id of the socket to use.","\n      ","\n      ","\n        ","url","\n        ","String","\n        ","The url or IP to connect to (a string).","\n      ","\n      ","\n        ","port","\n        ","Real","\n        ","The port to connect to.","\n      ","\n      ","\n        ","bufferid","\n        ","Buffer ID","\n        ","The id of the buffer to get the data from.","\n      ","\n      ","\n        ","size","\n        ","Real","\n        ","The size (in bytes) of the data.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","network_send_udp(sock, \"www.macsweeneygames.com\", 6510, buff, buffer_tell(buff));","\n  ","The above code will send a UDP packet to the server defined by the URL on the port 6510. The data is taken from the buffer indexed in the variable \"buff\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Networking","\n        ","Next: ","network_send_udp_raw","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["network_send_udp"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2082"})