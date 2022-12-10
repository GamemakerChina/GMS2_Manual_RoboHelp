rh._.exports({"0":[["room_next"]],"1":[["room_next"]],"2":[["room_next"]],"3":[["\n  ","\n  "],["\n  ","With this function you can retrieve the index of the room ","after"," the room input into the function. For example you can use the variable ","room"," to get the index of the current room and then use this function to find the room that follows it, as listed in the ","Room Manager",". If there is no room after the one you input then -1 is returned. Note that this function will not recognise or take into consideration rooms that have been added dynamically using ","room_add()"," or ","room_duplicate()",".","\n  "," ","\n  "],["\n  ","room_next(numb);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","numb","Real","\n        ","The index of the room to get the next one after.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Room Asset","\n  "," ","\n  "],["\n  ","if room_next(room) != -1","\n    {","\n        room_goto_next();","\n    }","\n  ","The above code will check to see if the next room exists and if so, it will go to it.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_previous","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["room_next"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"677"})