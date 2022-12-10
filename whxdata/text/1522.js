rh._.exports({"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","This function is used to define custom inputs for all players. It takes a struct which should contain all inputs with their assigned input constants.","\n  ","To know how to assign custom inputs, see ","Custom Controls",".","\n  ","If used, this function must run before the ","join","/","create"," function.","\n  "," ","\n  "],["\n  ","rollback_define_input(input_struct);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","input_struct","\n        ","Struct","\n        ","A struct containing input names as variables, and their assigned inputs as values.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","rollback_define_input({","\n        fire: mb_left,","\n        interact: vk_space,","\n        left: [ord(\"A\"), vk_left],","\n        right: [ord(\"D\"), vk_right]","\n    });","\n  ","The code above defines custom inputs for all players. The last two inputs use multiple controls, by listing them in an array.","\n  ","For an extended example, see ","Defining Inputs",".","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rollback Functions","\n        ","Next: ","rollback_define_input_frame_delay","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["rollback_define_input"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["rollback_define_input"]],"8":[["rollback_define_input"]],"9":[["rollback_define_input"]],"id":"1522"})