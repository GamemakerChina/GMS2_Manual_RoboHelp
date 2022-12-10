rh._.exports({"0":[["Get View Variable"]],"1":[["GML Visual Action - Get View Variable"]],"2":[["Get View Variable"]],"3":[["\n  ","\n  "],["\n  ","This action permits you to get the value of certain built in variables related to a given ","view port",". You select the view port variable to retrieve, then give the view port to target (from 0 to 7) and finally the target variable to hold the returned\n    value (this can be flagged as being a temporary local variable). The view port is the area of the screen that will be used to draw a given camera view (as set up in the room editor), and the different variables that you are able to get in this way\n    are outlined in the table below:","\n  ","\n    ","\n      ","\n        ","Variable","\n        ","Description","\n      ","\n      ","\n        ","Camera","\n        ","The value returned will be the unique ID value of the camera to assigned to the port (see ","here"," for more information).","\n      ","\n      ","\n        ","Visibility","\n        ","This will return a value of ","true"," or ","false"," where ","true"," is that the view port is visible (ie: it being drawn to the screen), and ","false"," meaning that nothing is being drawn.","\n      ","\n      ","\n        ","View Port X Coordinate","\n        ","This is the X position of the view port within the game window.","\n      ","\n      ","\n        ","View Port Y Coordinate","\n        ","This is the Y position of the view port within the game window.","\n      ","\n      ","\n        ","View Port Width","\n        ","This is the width (in pixels) of the view port.","\n      ","\n      ","\n        ","View Port Height","\n        ","This is the height (in pixels) of the view port.","\n      ","\n      ","\n        ","View Port Surface ID","\n        ","This will return the unique ID value for the surface assigned to the view port or -1 if no surface has been assigned.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Variable","\n        ","The built in view variable to get","\n      ","\n      ","\n        ","View","\n        ","The view port to target (from 0 - 7)","\n      ","\n      ","\n        ","Target","\n        ","The target variable to hold the returned value (can be flagged as a temporary local variable)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code gets the current camera ID assigned to view\n    port [0] and then checks to see if it is the same as the one stored in a global variable. If it is not, the camera is set to the new one.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Camera Actions","\n        ","Next: ","Set View Variable","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Get View Variable"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2258"})