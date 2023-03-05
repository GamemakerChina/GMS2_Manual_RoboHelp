rh._.exports({"0":[[" ","view_get_camera"]],"1":[["view_get_camera"]],"2":[["view_get_camera"]],"3":[[" ","view_get_camera"]],"4":[[" ","This function can be used to retrieve the unique camera ID value for the camera assigned to the given view port (from 0 - 7). If no camera is assigned, the function will return -1."],[" ","view_get_camera(view_port)"," ","Argument","Type"," ","Description"," ","view_port","Real"," ","The view port to target (0 - 7)"],[" ","Camera ID"],[" ","var cam = view_get_camera(0);","\n    var cw = camera_get_view_width(cam);","\n    var ch = camera_get_view_height(cam);","\n    camera_set_view_pos(cam, mouse_x - (cw / 2), mouse_y - (ch / 2));"," ","The above code will retrieve the camera ID for the camera assigned to view port[0] and then change its position."," ","Back: ","Cameras And View Ports"," ","Next: ","view_get_visible"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"364"})