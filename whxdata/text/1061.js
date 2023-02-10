rh._.exports({"0":[[" ","matrix_build_projection_perspective_fov"]],"1":[["matrix_build_projection_perspective_fov"]],"2":[["matrix_build_projection_perspective_fov"]],"3":[[" ","matrix_build_projection_perspective_fov"]],"4":[[" ","This function builds a perspective projection matrix matrix based on field of view, using the specified parameters listed below."],[" ","matrix_build_projection_perspective_fov(fov_y, aspect, znear, zfar);"," ","Argument","Type"," ","Description"," ","fov","Real"," ","The angle of the field of view."," ","aspect","Real"," ","The aspect ratio of the field of view."," ","znear","Real"," ","The near clipping plane."," ","zfar","Real"," ","The far clipping plane."],[" ","Matrix Array"],[" ","projmat = matrix_build_projection_perspective_fov(60, 320/240, 1.0, 32000.0);","\n    camera_set_proj_mat(view_camera[0], projmat);"," ","The above code creates a field of view projection matrix which is then stored in a variable. This matrix is then used to set up the camera assigned to view port[0]."," ","Back: ","Matrix Functions"," ","Next: ","matrix_transform_vertex"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1061"})