rh._.exports({"0":[[" ","Set View Variable"]],"1":[["GML Visual Action - Set View Variable"]],"2":[["Set View Variable"]],"3":[[" "," Set View Variable"]],"4":[[" ","This action permits you to set certain built in variables related to how the ","view port"," will display camera views of the room. You select the view port variable to edit, then give the view port to target (from 0 to 7) and finally the new value\n    for the variable. The view port is the area of the screen that will be used to draw a given camera view (as set up in the room editor), and the different variables that you are able to set in this way are outlined in the table below:"," ","Variable"," ","Description"," ","Camera"," ","This is for setting the viewport to show a different Camera View. You need to supply the unique ID value of the camera to change to (see ","here"," for\n          more information)."," ","Visibility"," ","This is the visibility toggle for the view port and expects a value of ","true"," or ","false"," where setting it to ","true"," will make the view port visible (ie: it will draw to the screen), and a value of ","false"," will not draw\n          anything to the screen."," ","View Port X Coordinate"," ","This is the X position of the view port within the game window. Note though that is is only really required when more than one view port is active - for example to create a split screen effect - and if used when only one port is active you get\n          unexpected results."," ","View Port Y Coordinate"," ","This is the Y position of the view port within the game window. Note though that is is only really required when more than one view port is active - for example to create a split screen effect - and if used when only one port is active you get\n          unexpected results."," ","View Port Width"," ","This is the width (in pixels) of the view port. The width of the view port (or combined view ports if more than one are active) define the width of the game window or background canvas at the start of the game, so changing this value after the\n          game has started ","will have no visible effect on the game window size"," unless called along with the GML function ","window_set_size()",".\n          Also note that if you have a larger or smaller port size than that assigned to the camera, then the camera view will be scaled down - or up - to fit."," ","View Port Height"," ","This is the height (in pixels) of the view port. The height of the view port (or combined view ports if more than one are active) define the height of the game window or background canvas at the start of the game, so changing this value after\n          the game has started ","will have no visible effect on the game window size"," unless called along with the GML function ","window_set_size()",".\n          Also note that if you have a larger or smaller port size than that assigned to the camera view, then the camera view will be scaled down - or up - to fit."," ","View Port Surface ID"," ","With this variable you can set the contents of a given view port to draw to a surface, with the value you supply being that of the surface to use for drawing the view port to. For more information please see ","here","."],[" ","Argument"," ","Description"," ","Variable"," ","The built in view variable to set"," ","View"," ","The view port to target (from 0 - 7)"," ","Value"," ","The new value for the built in variable"],[" ","The above action block code will check for a key press and if one is detected it will\n    make the view port [0] visible, otherwise it will make it invisible."," ","Back: ","Camera Actions"," ","Next: ","Get View Variable"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2431"})