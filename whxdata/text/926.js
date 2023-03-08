rh._.exports({"0":[[" ","application_get_position"]],"1":[["application_get_position"]],"2":[["application_get_position"]],"3":[[" ","application_get_position"]],"4":[[" ","When you have \"maintain aspect ratio\" ticked in the Game Options for a target platform, ","GameMaker"," will automatically set the draw position for the application surface so that it is displayed correctly centered and scaled on\n    the given display. However if you are manipulating this surface and wish to draw it yourself, then this function gives you an easy way to find exactly ","where"," within the display or window that the surface was being drawn so that you can then\n    draw it there yourself, or align GUI images or post draw images to it."," ","The function will return an ","array"," with four keys, where key 0 and 1 are the x and y position of the top lefthand corner of the surface, and keys 2 and 3 are the x and y of the bottom righthand corner of\n    the surface, all relative to the size of the display or window."],[" ","application_get_position();"],[" ","Array"],[" ","var a = application_get_position();"," xx = a[0];"," yy = a[1];"," ww = a[2] - a[0];"," hh = a[3] - a[1];"," ","The above code will get the position of the application surface, as well as the absolute width and height in relation to the display window, and store them in four variables for future use."," ","Back: ","Surfaces"," ","Next: ","application_surface_draw_enable"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"926"})