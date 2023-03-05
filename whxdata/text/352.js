rh._.exports({"0":[[" ","view_set_hport"]],"1":[["view_set_hport"]],"2":[["view_set_hport"]],"3":[[" ","view_set_hport"]],"4":[[" ","This function can be used to set the height of the given view port. You give the view port index (from 0 to 7) and the new height to use."],[" ","view_set_hport(view_port, h)"," ","Argument","Type"," ","Description"," ","view_port","Real"," ","The view port to target (0 - 7)"," ","h","Real"," ","The new height (in pixels)"],[" ","Real"],[" ","if view_get_hport(0) != (display_get_height () / 2)","\n    {","\n        view_set_hport(0, display_get_height() / 2);","\n    }"," ","The above code will check the height of the view port[0] and if it is not half of the display height it is set to that value."," ","Back: ","Cameras And View Ports"," ","Next: ","view_set_surface_id"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"352"})