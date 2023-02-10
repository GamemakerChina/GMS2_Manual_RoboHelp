rh._.exports({"0":[[" ","camera_get_view_height"]],"1":[["camera_get_view_height"]],"2":[["camera_get_view_height"]],"3":[[" ","camera_get_view_height"]],"4":[[" ","This function can be used to retrieve the height (in pixels) of the given camera. Note that this function is ","only"," valid for cameras created using ","camera_create_view()"," or for those added in the room\n    editor."],[" ","camera_get_view_height(camera_id)"," ","Argument","Type"," ","Description"," ","camera_id","Camera ID"," ","The unique camera ID value returned when you created the camera"],[" ","Real"],[" ","var vw = camera_get_view_width(view_camera[0]) / 2;"," var vh = camera_get_view_height(view_camera[0]) / 2;"," camera_set_view_pos(view_camera[0], x - vw, y - vh);"," ","The above code retrieves the width and height of the camera assigned to view port[0] and then sets its position relative to the center."," ","Back: ","Cameras And View Ports"," ","Next: ","camera_get_view_speed_x"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"582"})