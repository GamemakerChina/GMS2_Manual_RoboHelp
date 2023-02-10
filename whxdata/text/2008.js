rh._.exports({"0":[[" ","camera_set_update_script"]],"1":[["camera_set_update_script"]],"2":[["camera_set_update_script"]],"3":[[" ","camera_set_update_script"]],"4":[[" ","This function can be used to set a ","script function"," that will be called every game frame that the camera is assigned to a visible and active view port. You give the unique camera ID value (as returned by the different ","camera_create"," functions) and the ID of the function to be called. The order in which functions attached to cameras and the actual rendering of the camera view is as follows:"," ","The cameras for all visible and active view ports have their ","update function ","called"," ","Then for each view:\n      "," ","The ","begin function "," for the camera for that view is called"," ","The draw events are executed for that view"," ","The ","end function ","for the camera is called"," ","Move to the next active visible view and repeat..."," ","Applying a custom update function to a camera overrides its default update behaviour. For example, if you set your camera to follow an object (say, ","obj_player",") when calling ","camera_create_view",", or set it so in the Room Properties, it will stop following that object once a custom update script is set."],[" ","camera_set_update_script","(camera_id, script);"," ","Argument"," ","Type"," ","Description"," ","camera_id"," ","Camera ID"," ","The unique camera ID value returned when you created the camera."," ","script"," ","Script Function"," ","The script function to run each game frame (or -1 for no update script)"],[" ","N/A"],[" ","camera_set_update_script","(view_camera[0], updateCamera);"," ","The above code sets the update function for the camera assigned to view port [0]."," ","Back: ","Cameras And View Ports"," ","Next: ","camera_set_begin_script"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2008"})