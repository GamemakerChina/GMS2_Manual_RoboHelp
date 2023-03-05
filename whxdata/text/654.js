rh._.exports({"0":[[" ","camera_get_view_border_x"]],"1":[["camera_get_view_border_x"]],"2":[["camera_get_view_border_x"]],"3":[[" ","camera_get_view_border_x"]],"4":[[" ","This function can be used to retrieve the border value for object/instance following of the given camera along the x axis (horizontal border). The return value will be in pixels."],[" ","camera_get_view_border_x(camera_id)"," ","Argument","Type"," ","Description"," ","camera_id","Camera ID"," ","The unique camera ID value returned when you created the camera"],[" ","Real"],[" ","var xb = camera_get_view_border_x(view_camera[0]);","\n    var yb = camera_get_view_border_y(view_camera[0]);","\n    if xb != 200 || yb != 200","\n    {","\n        camera_set_view_border(view_camera[0], 200, 200);","\n    }"," ","The above code retrieves the xborder and yborder values of the camera assigned to view port[0] and then checks this to see if it matches the given value. If it does not then the view camera is set to the given value."," ","Back: ","Cameras And View Ports"," ","Next: ","camera_get_view_border_y"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"654"})