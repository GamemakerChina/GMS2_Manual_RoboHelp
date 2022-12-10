rh._.exports({"0":[["camera_apply"]],"1":[["camera_apply"]],"2":[["camera_apply"]],"3":[["\n  ","\n  "],["\n  ","This function will apply the given camera settings to the current camera view being rendered immediately. While you can set any view camera using the specific ","camera_set_*"," functions, the new settings will not be used for rendering until the ","next"," game frame, but with this function you can make those changes immediately. If you are using multiple views then the function should be used in the ","Draw Event"," and you can use the variable ","view_current"," to selectively apply the given camera only to the camera view currently being rendered. Note that this does NOT change the camera ID value, only the settings for that camera, and that if you use this function on the default camera (ie: the internal camera ","GameMaker"," uses when no view cameras are active) the changes will be overwritten the very next game frame by the internal settings for drawing the room.","\n  "," ","\n  "],["\n  ","camera_apply(camera_id)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","camera_id","Camera ID","\n        ","The unique camera ID value returned when you created the camera.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if view_current == 0","\n    {","\n        camera_apply(cutscene_cam);","\n    }","\n  ","The above code (in a Draw Event) checks to see which camera view is currently being rendered and if it is camera view[0] then the settings for the camera referenced by the variable \"cutscene_cam\" are applied to it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_set_view_mat","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["camera_apply"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1368"})