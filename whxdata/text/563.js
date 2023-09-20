rh._.exports({"0":[[" ","camera_get_view_speed_y"]],"1":[["camera_get_view_speed_y"]],"2":[[" ","camera_get_view_speed_y"]],"3":[[" ","This function can be used to retrieve the movement speed of the given camera along the y axis (vertical movement). The return value will be in pixels per game frame."],[" ","camera_get_view_speed_y(camera_id)"," ","Argument","Type"," ","Description"," ","camera_id","Camera ID"," ","The unique camera ID value returned when you created the camera"],[" ","Real"],[" ","var xs = camera_get_view_speed_x(view_camera[0]);","\n    var ys = camera_get_view_speed_y(view_camera[0]);","\n    if xs != 5 || ys != 5","\n    {","\n        camera_set_view_speed(view_camera[0], 5, 5);","\n    }"," ","The above code retrieves the xspeed and yspeed of the camera assigned to view port[0] and then checks this to see if it matches the given value. If it does not then the view camera is set to that speed."," ","Back: ","Cameras And View Ports"," ","Next: ","camera_get_view_border_x"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["camera_get_view_speed_y"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"563"})