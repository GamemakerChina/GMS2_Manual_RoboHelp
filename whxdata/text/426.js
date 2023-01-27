rh._.exports({"0":[[" ","room_get_name"]],"1":[["room_get_name"]],"2":[["room_get_name"]],"3":[[" ","room_get_name"]],"4":[[" ","This function can be used to return the name of the specified room as a string. Please note that this is ","only"," a string and cannot be used to reference the room directly - for that you would need the ","room index",". You can, however, use this string to get the ","room index"," using the returned string along with the function ","asset_get_index()","."],[" ","room_get_name(index);"," ","Argument","Type"," ","Description"," ","index","Room Asset"," ","The index of the room to check the name of."],[" ","String"],[" ","var roomname = room_get_name(room);"," ","\n    draw_text(32, 32, roomname);\n  "," ","The above code will get the name of the current room and draw it on the screen."," ","Back: ","Rooms"," ","Next: ","room_goto"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"426"})