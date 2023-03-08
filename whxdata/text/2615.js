rh._.exports({"0":[[" ","Instance Variables"]],"2":[["Instance Variables"]],"3":[[" ","Instance Variables"]],"4":[[" ","When you create a new object, it will come with certain variables already initialised with default values. These variables we call ","instance variables",", since they will be created for every instance you place of the object in your game rooms, and once an instance is created the values of these variables are unique to that instance and ","only"," that instance. Some of these variables you will use a lot, like ","x"," and ","y",", while others are required less depending on what you want to do, but in general they are very useful and where possible you should be looking to use them rather than creating your own custom variables."," ","Most instance variables can be set as well as read, permitting you to change the properties and behaviour of an instance simply by tweaking the value of a certain variable - you can prevent an instance from drawing, for example, by simply setting the ","visible"," built-in variable to ","false",". Below you can find the different variables that are initialised for all instances of all objects in your game."," ","IMPORTANT"," If an instance is in a ","sequence"," then some of these variables - like ","image_xscale","  / ","image_yscale"," / ","image_angle"," / ","x"," / ","y"," - will be overwritten when the sequence updates each step after starting to be played."],[" ","These variables deal with general instance properties:"," ","id"," ","visible"," ","solid"," ","persistent"," ","depth"," ","layer"," ","alarm"," ","Instances also have one general variable, or rather ","method",", that can be defined to change how this instance is converted to ","string",": "," ","toString Method"],[" ","These variables deal with the instance position and movement:"," ","direction"," ","friction"," ","gravity"," ","gravity_direction"," ","hspeed"," ","vspeed"," ","speed"," ","xstart"," ","ystart"," ","x"," ","y"," ","xprevious"," ","yprevious"],[" ","The following variable holds the unique index ID of the object that the instance was created from:"," ","object_index"],[" ","These variables are all related to the sprite assigned to the instance and can be used to change what is drawn and how:"," ","sprite_index"," ","sprite_width"," ","sprite_height"," ","sprite_xoffset"," ","sprite_yoffset"," ","image_alpha"," ","image_angle"," ","image_blend"," ","image_index"," ","image_number"," ","image_speed"," ","image_xscale"," ","image_yscale"],[" ","These variables deal with the collision mask:"," ","mask_index"," ","bbox_bottom"," ","bbox_left"," ","bbox_right"," ","bbox_top"],[" ","These variables are related to paths and how the instance interacts with one, if assigned:"," ","path_index"," ","path_position"," ","path_positionprevious"," ","path_speed"," ","path_scale"," ","path_orientation"," ","path_endaction"],[" ","These variables are for setting an instance to use a timeline:"," ","timeline_index"," ","timeline_running"," ","timeline_speed"," ","timeline_position"," ","timeline_loop"],[" ","The following variables store information regarding the Sequence that may be controlling the instance at any given time:"," ","in_sequence"," ","sequence_instance"],[" ","There are a great number of built in variables for use with the physics functions of ","GameMaker",", and so to keep things clearer, they can be found in the section of the manual that covers everything related to the physics simulation:"," ","Physics"," ","Back: ","Instances"," ","Next: ","Deactivating Instances"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"8":[[" ","General Variables"],[" ","Movement And Position"],[" ","Object Properties"],[" ","Sprite Properties"],[" ","Mask And Bounding Box"],[" ","Paths"],[" ","Timelines"],[" ","Sequences"],[" ","Physics"]],"id":"2615"})