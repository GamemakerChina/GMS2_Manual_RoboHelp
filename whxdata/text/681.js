rh._.exports({"0":[["camera_get_view_border_y"]],"1":[["camera_get_view_border_y"]],"2":[["camera_get_view_border_y"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to retrieve the border value for object/instance following of the given camera along the y axis (vertical border). The return value will be in pixels.","\n  "," ","\n  "],["\n  ","camera_get_view_border_y(camera_id)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","camera_id","Camera ID","\n        ","The unique camera ID value returned when you created the camera","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var xb = camera_get_view_border_x(view_camera[0]);","\n    var yb = camera_get_view_border_y(view_camera[0]);","\n    if xb != 200 || yb != 200","\n    {","\n        camera_set_view_border(view_camera[0], 200, 200);","\n    }","\n  ","The above code retrieves the xborder and yborder values of the camera assigned to view port[0] and then checks this to see if it matches the given value. If it does not then the view camera is set to the given value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_get_view_angle","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["camera_get_view_border_y"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"681"})