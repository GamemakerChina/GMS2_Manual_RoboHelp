rh._.exports({"0":[["view_set_surface_id"]],"1":[["view_set_surface_id"]],"2":[["view_set_surface_id"]],"3":[["\n  ","\n  "],["\n  ","With this variable you can set the contents of a view port to draw to a surface. When working with surfaces, it is often required to capture the ","whole"," visible region of the screen to the surface, and so you would assign it to a view port using this function. This means that everything that is shown in the chosen view port will now be drawn to the assigned surface and the contents of that view port will no longer be displayed, meaning that you will need to either:","\n  ","\n    ","Enable a new view and draw the surface only in that view (using ","view_current"," to check which view is being drawn)","\n    ","Draw the surface in the Draw GUI or Post Draw event of an instance, since these events are independent of views.","\n  ","\n  ","When using this function you give the view port index (from 0 to 7) and a surface index (either the ","application_surface"," or the unique index value returned by the function ","surface_create()",") or, if a surface has previously been assigned and you want to remove it, a value of -1. For more examples on setting the view port to a surface see the variable ","view_surface_id",".","\n  ","\n  ","IMPORTANT"," Care must be taken when drawing surfaces or textures to a view with a surface assigned to it, because if you try to draw the view's assigned surface (or its texture) inside that same view, you will get an error as you are essentially trying to draw a texture onto itself.","\n\n","\n  "," ","\n  "],["\n  ","view_set_surface_id(view_port, surf)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","view_port","\n        ","Real","\n        ","The view port to target (0 - 7)","\n      ","\n      ","\n        ","surf","\n        ","Surface ID","\n        ","The surface to apply to the view","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","if view_get_surface_id(0) == -1","\n    {","\n        view_set_surface_id(0, global.vSurf);","\n    }","\n  ","The above code will check to see if a surface has been assigned to the view port[0] and if it has not then one is assigned.","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_create","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["view_set_surface_id"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1994"})