rh._.exports({"0":[["view_surface_id"]],"1":[["view_surface_id"]],"2":[["view_surface_id"]],"3":[["\n  ","\n  "],["\n  ","With this variable you can set the contents of a given view port to draw to a surface, or get the current surface id if one has been assigned to a view port. When working with surfaces, it is often required that you capture the ","whole"," visible region of the screen to the surface, and so you would assign it to a view port using this variable. This means that everything that is shown in the chosen view will now be drawn to the assigned surface. The view will now ","not"," be drawn to the screen, meaning that you will need to either:","\n  ","\n    ","Enable a new view and draw the surface only in that view (using ","view_current"," to check which view is being drawn)","\n    ","Draw the surface in the Draw GUI or Post Draw event of an instance, since these events are independent of views.","\n  ","\n  ","You can also read this variable to get the index of the surface that has been assigned to the chosen view or it will return -1 if no surface has been assigned, and generally the surface used for this function should be the size of the view camera itself (not the view port). The extended example below shows a basic setup for capturing a view and drawing it in the ","Draw GUI"," event, and for more information on surfaces see the section ","Surfaces",".","\n  ","Note that you can also set a view port to a surface using the function ","view_set_surface_id()",".","\n  ","\n  ","IMPORTANT"," Care must be taken when drawing surfaces or textures to a view with a surface assigned to it, because if you try to draw the view's assigned surface (or its texture) inside that same view, you will get an error as you are essentially trying to draw a texture onto itself.","\n\n","\n  "," ","\n  "],["\n  ","view_surface_id[0...7];","\n  "," ","\n  "],["\n  ","Surface ID"," or -1 (if no surface has been assigned)","\n  "," ","\n  "],["\n  ","In this extended example, we will create a surface and assign it to view port[0] so it captures the camera view assigned to that port, then draw that to the screen in the Draw GUI event. To start with we need to initialise our surface variable in the ","Create Event"," of a controller instance:","\n  ","surf = -1;","\n  ","We set the surface variable to -1, as all surface functions should really be used in the ","Draw"," events to prevent odd errors or undefined behaviours. So, with that done, we would then have this in the main ","Draw"," event:","\n  ","if !surface_exists(surf)","\n    {","\n        surf = surface_create(camera_get_view_width(view_camera[0]), camera_get_view_height(view_camera[0]));","\n        view_surface_id[0] = surf;","\n    }","\n  ","Surfaces are ","volatile"," meaning that they could be removed from memory at any time due to OS memory management and other things, so here we check to see if our surface exists and if it doesn't we create it and assign it to the view 0. With that done, everything that would appear in view 0 will now be drawn to the surface we have created instead. If you do nothing else at this point, when you run your game you will simply get a blank screen as all drawing is being done on the surface, but the surface itself is not being drawn anywhere. Therefore we now need to draw the surface to the screen in the ","Draw GUI"," event like this:","\n  ","if surface_exists(surf)","\n    {","\n        draw_surface_stretched(surf, 0, 0, display_get_gui_width(), display_get_gui_height());","\n    }","\n  ","This code will now draw the surface that we have created from the view camera stretched to fill the entire GUI layer.","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","view_get_camera","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["view_surface_id"]],"5":[["Syntax:"],["Returns:"],["Extended Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2177"})