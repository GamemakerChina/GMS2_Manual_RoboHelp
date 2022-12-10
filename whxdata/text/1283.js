rh._.exports({"0":[["camera_set_view_speed"]],"1":[["camera_set_view_speed"]],"2":[["camera_set_view_speed"]],"3":[["\n  ","\n  "],["\n  ","You can use this function to update the speed of the view camera within the room. You give the unique camera ID value (as returned by the different ","camera_create()"," functions) and then give the x and y (horizontal\n    and vertical) speed that it should move when set to follow a given instance. The speed is calculated as pixels per step and can be set to \"-1\" to make the camera move instantly, but if the camera is not set to follow any instance then the\n    values set here will have no visible effect.","\n  "," ","\n  "],["\n  ","camera_set_view_speed(camera_id, xspeed, yspeed)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","camera_id","Camera ID","\n        ","The unique camera ID value returned when you created the camera.","\n     ","\n      ","\n        ","xspeed","Real","\n        ","The speed (number of pixels per game frame) that the view should move on the horizontal (x) axis","\n     ","\n      ","\n        ","yspeed","Real","\n        ","The speed (number of pixels per game frame) that the view should move on the vertical (y) axis","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","camera_set_view_speed(view_camera[0], 5, 5);","\n  ","The above code will set the view camera speed for the camera assigned to view port[0].","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_set_view_border","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["camera_set_view_speed"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1283"})