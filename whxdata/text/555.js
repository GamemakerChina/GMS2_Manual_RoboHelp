rh._.exports({"0":[["room_get_camera"]],"1":[["room_get_camera"]],"2":[["room_get_camera"]],"3":[["\n  ","\n  "],["\n  ","With this function you can get the unique index ID of the camera assigned to a specific view in a room other than the current one. You give the room to use, the view port to use (from 0 to 7) and the function will return a camera index.","\n  "," ","\n  "],["\n  ","room_get_camera(rm, vind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","rm","\n        ","Room Asset","\n        ","The index of the room to get the view camera of","\n      ","\n      ","\n        ","vind","\n        ","Real","\n        ","The index of the view port to get the camera of","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Camera ID","\n  "," ","\n  "],["\n  ","var cam = room_get_camera(rm_Game, 0);","\n    if cam != global.MainCam","\n    {","\n        room_set_camera(rm_Game, 0, global.MainCam);","\n    }","\n  ","The above code assigns a camera in a newly created room to view port [0].","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_first","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["room_get_camera"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"555"})