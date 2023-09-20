rh._.exports({"0":[[" ","camera_create"]],"1":[["camera_create"]],"2":[[" ","camera_create"]],"3":[[" ","This function will create an \"empty\" camera, ie: a camera with no view or projection settings defined. Once you have created the camera you can then use the different ","matrix functions"," to set the view and projection matrices. You can also use this function to create the camera and then use the different ","camera_set_*"," functions to set up the view, however note that you ","must"," provide at least a position and view size, otherwise the resulting camera will not be valid and give odd results if applied to a view port (if you do not set the object following, borders or move speed these will be set to the default values for a view camera in the Room Editor)."," ","Note that cameras are like all dynamic resources and will occupy memory when created. This means that you need to take care not to create cameras unnecessarily and to destroy those that you don't need by calling the function ","camera_destroy()",". This also means that cameras will persist from room to room if assigned to a ","global"," variable (they will persist when assigned to instance or local variables too, but you can't access them after changing room, hence the memory leak), so that you can - for example - create a new camera, assign it to a global variable, and then at the start of each room set the required view and projection matrices and the view port you need to use."],[" ","camera_create();"],[" ","Camera ID"],[" ","view_camera[0] = camera_create();","\n    var viewmat = matrix_build_lookat(640, 240, -10, 640, 240, 0, 0, 1, 0);","\n    var projmat = matrix_build_projection_ortho(640, 480, 1.0, 32000.0);","\n    camera_set_view_mat(view_camera[0], viewmat);","\n    camera_set_proj_mat(view_camera[0], projmat);"," ","The above code creates a new camera and assigns its ID to view[0]. The view and projection matrices are then created and stored in local variables before being used to set the camera."," ","Back: ","Cameras And View Ports"," ","Next: ","camera_create_view"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["camera_create"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1665"})