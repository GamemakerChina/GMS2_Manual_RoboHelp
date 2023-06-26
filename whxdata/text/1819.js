rh._.exports({"0":[[" ","room_set_viewport"]],"1":[["room_set_viewport"]],"2":[[" ","room_set_viewport"]],"3":[[" ","With this function you can set the view port properties for any room in your game ","except the current one",". You supply the room index to set the view port in, the view port index (from 0 to 7) and then whether the view port should be visible at the start of the room or not (set to ","true"," to make the port visible, and ","false"," otherwise). After that you set the x and y coordinate (corresponding to the top left position of the view port) and then the width and height in pixels."],[" ","room_set_viewport(rm, vind, vis, xport, yport, wport, hport);"," ","Argument"," ","Type"," ","Description"," ","rm"," ","Room Asset"," ","The index of the room to set"," ","vind"," ","Real"," ","The index of the view port to set"," ","vis"," ","Boolean"," ","The visibility of the view port (","true"," is visible, ","false"," is invisible)"," ","xport"," ","Real"," ","The x position for the view port in the room"," ","yport"," ","Real"," ","The y position of the view port in the room"," ","wport"," ","Real"," ","The width (in pixels) of the view port"," ","hport"," ","Real"," ","The height (in pixels) of the view port"],[" ","N/A"],[" ","global.myroom = room_add();","\n    room_set_width(global.myroom, 640);","\n    room_set_height(global.myroom, 480);","\n    room_set_viewport(global.myroom, 0, true, 0, 0, 640, 480);"," ","This will set the view port [0] properties in the room indexed in the variable \"global.myroom\"."," ","Back: ","Rooms"," ","Next: ","room_get_viewport"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["room_set_viewport"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1819"})