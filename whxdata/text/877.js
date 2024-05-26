rh._.exports({"0":[[" ","physics_joint_set_value"]],"1":[["physics_joint_set_value"]],"2":[["physics_joint_set_value"]],"3":[[" ","physics_joint_set_value"]],"4":[[" ","Certain joint properties can be changed and set even after the creation of the joint. There are a number of constants that can be used in this function and they can be found here: ","Physics Joint Constants","."],[" ","physics_joint_set_value(joint, field, value)"," ","Argument"," ","Type"," ","Description"," ","joint"," ","Physics Joint ID"," ","The index of the joint that you wish to change"," ","field"," ","Physics Joint Constant"," ","The constant for the joint property that you wish to change"," ","value"," ","Real"," ","The new value for the joint property"],[" ","N/A"],[" ","if (physics_joint_get_value(revJoint, phy_joint_max_motor_torque) < 2) ","\n    {","\n        physics_joint_set_value(revJoint, phy_joint_max_motor_torque, 2);","\n    }"," ","The above code checks to see if the joints maximum motor torque is set to less than 2 and if it is it then sets it to 2."," ","Back: ","Joints"," ","Next: ","physics_joint_distance_create"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"877"})