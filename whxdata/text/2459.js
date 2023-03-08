rh._.exports({"0":[[" ","Networking"]],"1":[["Objects - Async Networking Event"]],"2":[["networking,network_type_connect,network_type_disconnect,network_type_data,network_type_non_blocking_connect,ev_web_networking"]],"3":[[" ","Networking"]],"4":[[" ","The Networking event is one which will be triggered by any incoming network traffic, and is linked to the ","Network Functions",". This event generates a special ","DS Map"," that is exclusive to this event and is stored in the special variable ","async_load",". This DS map will contain different information depending on the type of network event that generated it."],[" ","The following keys are common to all received network functions and will always be present in the ","async_load"," map:"," ","\"","type","\": This will have one of the constants listed in the table below as its return value, and designates the network event type."," ","\"","id","\": The socket id (a real number, as returned by the network_create_server or network_create_socket function) that is receiving the event. In most cases the socket ID returned is the ID of TCP or UDP socket that triggered the event, however if the event is triggered in a server and it's a Data Event (see below) then the socket ID is that of the client that sent the data."," ","\"","ip","\": The IP address of the socket (as a string)."," ","\"","port","\": The port associated with the IP address (useful when working with UDP)."," ","The possible return values for the \"type\" key can be any of the four constants listed below:"," ","Constant"," ","Description"," ","network_type_connect"," ","The event was triggered by a connection."," ","network_type_disconnect"," ","The event was triggered by a disconnection."," ","network_type_data"," ","The event was triggered by incoming data."," ","network_type_non_blocking_connect"," ","The event was triggered by a connection configured as non-blocking (you can use the function ","network_set_config()"," for this, or connect using ","network_connect_async()"," or ","network_connect_async_raw()",")."],[" ","When you have an event of the type ","network_type_connect"," or ","network_type_disconnect",", the ","async_load ","map will have the following additional key:"," ","\"","socket","\": This key will hold the connecting/disconnecting socket id."," ","If the event is of the type ","network_type_non_blocking_connect",", then additionally there will be the following key:"," ","\"","succeeded","\": This key will be either 0 or 1, where 0 means the connection timed out and 1 means it succeeded and the socket is ready to use."," ","It is worth noting that the Networking Event does not get triggered in clients when the server disconnects, and that neither of the ","network_type_*"," events will be triggered in clients when the server they are connected to disconnects, even if the connection is TCP based."],[" ","When you have a ","network_type_data"," type event, which signifies that your network has received data, the map created will have the following keys:"," ","\"","buffer","\": This is the unique \"buffer ID\" which is generated by the event. A \"grow\" type buffer, byte aligned to 1, is created to hold the ID should be stored in a variable and used for all further function calls to the buffer in this event. Just like the ","async_load"," map, the buffer created is automatically removed from memory at the end of this event. For more information on buffers, please see ","Reference - Buffers","."," ","\"","size","\": This is the size (in bytes) of the buffer data that is being received."," ","\"","message_type","\":"," (WebSockets only)"," - This will be ","network_send_binary"," if the message received was in binary form, or ","network_send_text"," if it was received in text form."," ","NOTE"," The buffer created is only valid in these events and will be automatically freed when the event is over."," ","Back: ","Async Events"," ","Next: ","Push Notifications"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"8":[[" ","Common Networking Events"],[" ","Connecting / Disconnecting"],[" ","Receiving Data"]],"id":"2459"})