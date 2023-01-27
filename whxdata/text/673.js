rh._.exports({"0":[[" ","camera_get_begin_script"]],"1":[["camera_get_begin_script"]],"2":[["camera_get_begin_script"]],"3":[[" ","camera_get_begin_script"]],"4":[[" ","This function can be used to retrieve the ID of the ","script function"," assigned as the begin script for the given camera. If no script function is assigned then the function will return -1."],[" ","camera_get_begin_script(camera_id)"," ","Argument","Type"," ","Description"," ","camera_id","Camera ID"," ","The unique camera ID value returned when you created the camera"],[" ","Script Function"," or -1 if no function is assigned"],[" ","var scr = camera_get_begin_script(camera_view[0]);","\n    if scr != cutScene","\n    {","\n        camera_set_update_script(camera_view[0], cutScene);","\n    }"," ","The above code checks the script function assigned as the begin script for the camera assigned to view port[0] and if it is not \"cutScene\" it is set to that function."," ","Back: ","Cameras And View Ports"," ","Next: ","camera_get_end_script"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"673"})