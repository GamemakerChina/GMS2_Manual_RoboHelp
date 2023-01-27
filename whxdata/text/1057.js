rh._.exports({"0":[[" ","network_set_timeout"]],"1":[["network_set_timeout"]],"2":[["network_set_timeout"]],"3":[[" ","network_set_timeout"]],"4":[[" ","With this function you can set the timeout for reading and writing data to/from a server through the given socket. Note that the timeout does not generate any type of event, so you will need to deal with timeouts yourself using alarms (for example).\n    Note that this value only affects the sending and receiving of data, and should you wish to change the connection timeout value then you should be using the function ","network_set_config()","."],[" ","network_set_timeout(socket, read_timeout, write_timeout);"," ","Argument","Type"," ","Description"," ","socket","Network Socket ID"," ","The id of the socket to use."," ","read_timeout","Real"," ","The milliseconds in which a transfer from a server will timeout."," ","write_timeout","Real"," ","The milliseconds in which a transfer to a server will timeout."],[" ","N/A"],[" ","network_set_timeout(sock, 3000, 3000);"," ","The above code will set the timeout for reading and writing data through the socket indexed in the variable \"sock\" to 3 seconds."," ","Back: ","Networking"," ","Next: ","network_send_broadcast"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1057"})