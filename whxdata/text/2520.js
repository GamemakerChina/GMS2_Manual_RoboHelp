rh._.exports({"0":[["Instance Variables"]],"2":[["Instance Variables"]],"3":[["\n  ","\n  "],["\n  ","When you create a new object, it will come with certain variables already initialised with default values. These variables we call ","instance variables",", since they will be created for every instance you place of the object in your game rooms, and once an instance is created the values of these variables are unique to that instance and ","only"," that instance. Some of these variables you will use a lot, like ","x"," and ","y",", while others are required less depending on what you want to do, but in general they are very useful and where possible you should be looking to use them rather than creating your own custom variables.","\n  ","Most instance variables can be set as well as read, permitting you to change the properties and behaviour of an instance simply by tweaking the value of a certain variable - you can prevent an instance from drawing, for example, by simply setting the ","visible"," built-in variable to ","false",". Below you can find the different variables that are initialised for all instances of all objects in your game.","\n  ","IMPORTANT"," If an instance is in a ","sequence"," then some of these variables - like ","image_xscale","  / ","image_yscale"," / ","image_angle"," / ","x"," / ","y"," - will be overwritten when the sequence updates each step after starting to be played.","\n  "," ","\n  "],["\n  ","These variables deal with general instance properties:","\n  ","\n    ","id","\n    ","visible","\n    ","solid","\n    ","persistent","\n    ","depth","\n    ","layer","\n    ","alarm","\n  ","\n  ","Instances also have one general variable, or rather ","method",", that can be defined to change how this instance is converted to ","string",": ","\n     ","\n  ","\n    ","toString Method","\n  ","\n  "],["\n  ","These variables deal with the instance position and movement:","\n  ","\n    ","direction","\n    ","friction","\n    ","gravity","\n    ","gravity_direction","\n    ","hspeed","\n    ","vspeed","\n    ","speed","\n    ","xstart","\n    ","ystart","\n    ","x","\n    ","y","\n    ","xprevious","\n    ","yprevious","\n  ","\n  "," ","\n  "],["\n  ","The following variable holds the unique index ID of the object that the instance was created from:","\n  ","\n    ","object_index","\n  ","\n  "," ","\n  "],["\n  ","These variables are all related to the sprite assigned to the instance and can be used to change what is drawn and how:","\n  ","\n    ","sprite_index","\n    ","sprite_width","\n    ","sprite_height","\n    ","sprite_xoffset","\n    ","sprite_yoffset","\n    ","image_alpha","\n    ","image_angle","\n    ","image_blend","\n    ","image_index","\n    ","image_number","\n    ","image_speed","\n    ","image_xscale","\n    ","image_yscale","\n  ","\n  "," ","\n  "],["\n  ","These variables deal with the collision mask:","\n  ","\n    ","mask_index","\n    ","bbox_bottom","\n    ","bbox_left","\n    ","bbox_right","\n    ","bbox_top","\n  ","\n  "," ","\n  "],["\n  ","These variables are related to paths and how the instance interacts with one, if assigned:","\n  ","\n    ","path_index","\n    ","path_position","\n    ","path_positionprevious","\n    ","path_speed","\n    ","path_scale","\n    ","path_orientation","\n    ","path_endaction","\n  ","\n  "," ","\n  "],["\n  ","These variables are for setting an instance to use a timeline:","\n  ","\n    ","timeline_index","\n    ","timeline_running","\n    ","timeline_speed","\n    ","timeline_position","\n    ","timeline_loop","\n  ","\n  "," ","\n  "],["\n  ","The following variables store information regarding the Sequence that may be controlling the instance at any given time:","\n  ","\n    ","in_sequence","\n    ","sequence_instance","\n  ","\n  "," ","\n  "],["\n  ","There are a great number of built in variables for use with the physics functions of ","GameMaker",", and so to keep things clearer, they can be found in the section of the manual that covers everything related to the physics simulation:","\n  ","\n    ","Physics","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instances","\n        ","Next: ","Deactivating Instances","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Instance Variables"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["General Variables"],["Movement And Position"],["Object Properties"],["Sprite Properties"],["Mask And Bounding Box"],["Paths"],["Timelines"],["Sequences"],["Physics"]],"id":"2520"})