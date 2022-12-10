rh._.exports({"0":[["physics_joint_set_value"]],"1":[["physics_joint_set_value"]],"2":[["physics_joint_set_value"]],"3":[["\n  ","\n  "],["\n  ","Certain joint properties can be changed and set even after the creation of the joint. There are a number of constants that can be used in this function and they can be found here: ","Physics Joint Constants",".","\n  "," ","\n  "],["\n  ","physics_joint_set_value(joint, field, value)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","joint","\n        ","Physics Joint ID","\n        ","The index of the joint that you wish to change","\n      ","\n      ","\n        ","field","\n        ","Physics Joint Constant","\n        ","The constant for the joint property that you wish to change","\n      ","\n      ","\n        ","value","\n        ","Real","\n        ","The new value for the joint property","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if physics_joint_get_value(revJoint, phy_joint_max_motor_torque) < 2","\n    {","\n        physics_joint_set_value(revJoint, phy_joint_max_motor_torque, 2);","\n    }","\n  ","The above code checks to see if the joints maximum motor torque is set to less than 2 and if it is it then sets it to 2.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Joints","\n        ","Next: ","physics_joint_distance_create","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_joint_set_value"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"983"})