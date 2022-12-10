rh._.exports({"0":[["camera_set_default"]],"1":[["camera_set_default"]],"2":[["camera_set_default"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to set the default camera to use a custom camera that you have previously created using one of the ","camera_create()"," functions. When you create a room with ","no"," active view ports\n    or view cameras, ","GameMaker"," still uses a camera to show the action in the game. This camera is called the ","default"," camera and can be set and manipulated (and even destroyed) just like any other camera.","\n  "," ","\n  "],["\n  ","camera_set_default(camera_id)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","camera_id","Camera ID","\n        ","The unique camera ID value returned when you created the camera","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var new_cam = camera_create_view(0, 0, 640, 480, 0, obj_Player, 5, 5, -1, -1);"," camera_set_default(new_cam);\n  ","\n  ","The above code creates a new camera and then assigns it as the default camera to use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_get_view_mat","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["camera_set_default"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"640"})