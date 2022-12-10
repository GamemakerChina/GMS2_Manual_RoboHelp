rh._.exports({"0":[["camera_get_end_script"]],"1":[["camera_get_end_script"]],"2":[["camera_get_end_script"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to retrieve the ID of the ","script function"," assigned as the end function for the given camera. If no script function is assigned then the function will return -1.","\n  "," ","\n  "],["\n  ","camera_get_end_script(camera_id)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","camera_id","Camera ID","\n        ","The unique camera ID value returned when you created the camera","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Script Function"," or -1 if no function is assigned","\n  "," ","\n  "],["\n  ","var scr = camera_get_end_script(camera_view[0]);","\n    if scr != cutScene","\n    {","\n        camera_set_update_script(camera_view[0], cutScene);","\n    }","\n  ","The above code checks the script function assigned as the begin script for the camera assigned to view port[0] and if it is not \"cutScene\" it is set to that function.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_get_view_x","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["camera_get_end_script"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"668"})