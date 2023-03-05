rh._.exports({"0":[[" ","Physics Joint Constants"]],"1":[["phy_joint_anchor_1_x,phy_joint_anchor_1_y,phy_joint_anchor_2_x,phy_joint_anchor_2_y,phy_joint_reaction_force_x,phy_joint_reaction_force_y,phy_joint_reaction_torque,phy_joint_max_motor_force,phy_joint_max_motor_torque,phy_joint_motor_force,phy_joint_motor_speed,phy_joint_motor_torque,phy_joint_angle,phy_joint_angle_limits,phy_joint_upper_angle_limit,phy_joint_lower_angle_limit,phy_joint_translation,phy_joint_speed,phy_joint_damping_ratio,phy_joint_frequency,phy_joint_length_1,phy_joint_length_2,phy_joint_max_torque,phy_joint_max_force,phy_joint_max_length"]],"2":[["Joint Constants,phy_joint_anchor_1_x,phy_joint_anchor_1_y,phy_joint_anchor_2_x,phy_joint_anchor_2_y,phy_joint_reaction_force_x,phy_joint_reaction_force_y,phy_joint_reaction_torque,phy_joint_max_motor_force,phy_joint_max_motor_torque,phy_joint_motor_force,phy_joint_motor_speed,phy_joint_motor_torque,phy_joint_angle,phy_joint_angle_limits,phy_joint_upper_angle_limit,phy_joint_lower_angle_limit,phy_joint_translation,phy_joint_speed,phy_joint_damping_ratio,phy_joint_frequency,phy_joint_length_1,phy_joint_length_2,phy_joint_max_torque,phy_joint_max_force,phy_joint_max_length"]],"3":[[" ","Physics Joint Constants"]],"4":[[" ","There are a great number of constants included within the ","GameMaker"," GML that are specific to ","joints"," between fixtures in the physics world. These can be used in conjunction with many of the different joint functions to set or get information from them in real time while the physics simulation is running. You should be aware, however, that complex calculations are done when you call these, so they should be used with care and only when necessary and note that ","many are unique to a specific type of joint",". Also note that while you can get all these values with the appropriate function, you can only set those that are marked as not being read-only."," ","In general these constants would be used in conjunction with the following functions:"," ","physics_joint_get_value"," ","physics_joint_set_value"],[" ","The following constants can be applied to any of the available joint types:"," ","Physics Joint Constant"," ","Constant"," ","Description"," ","Read Only"," ","phy_joint_anchor_1_x"," ","The x coordinate of the first anchor point of the joint ","in the room"," ","Yes"," ","phy_joint_anchor_1_y"," ","The y coordinate of the first anchor point of the joint ","in the room"," ","Yes"," ","phy_joint_anchor_2_x"," ","The x coordinate of the second anchor point of the joint ","in the room"," ","Yes"," ","phy_joint_anchor_2_y"," ","The y coordinate of the second anchor point of the joint ","in the room"," ","Yes"," ","phy_joint_reaction_force_x"," ","This is the reaction force being applied to the second instance in a joint at the x anchor position"," ","Yes"," ","phy_joint_reaction_force_y"," ","This is the reaction force being applied to the second instance in a joint at the y anchor position"," ","Yes"," ","phy_joint_reaction_torque"," ","This is the torque being applied to the second instance in a joint at the anchor position"," ","Yes"],[" ","These constants are for those joints that have a ","motor"," attached to them (revolute, prismatic, wheel):"," ","Physics Joint Constant"," ","Constant"," ","Description"," ","Read Only"," ","phy_joint_max_motor_force"," ","The value specified when the joint was created for the maximum motor force"," ","No"," ","phy_joint_max_motor_torque"," ","The value specified when the joint was created for the maximum motor torque"," ","No"," ","phy_joint_motor_force"," ","The current motor force"," ","Yes"," ","phy_joint_motor_speed"," ","The current motor speed"," ","No"," ","phy_joint_motor_torque"," ","The current motor torque"," ","Yes"],[" ","For a revolute joint you can use the following constant (as well as the ","motor"," constants if one has been added):"," ","Physics Joint Constant"," ","Constant"," ","Description"," ","Read Only"," ","phy_joint_angle"," ","The angle that a line between the two anchor points of the joint makes. This is calculated using the ","physics world"," coordinates","\n          (","not"," the ","GameMaker"," room coordinates) in radians."," ","Yes"," ","phy_joint_angle_limits"," ","Enable or disable angle limiting for the joint. Set the value to ","true"," to enable or ","false"," to disable."," ","No"," ","phy_joint_upper_angle_limit"," ","The upper angle limit for the joint in degrees."," ","No"," ","phy_joint_lower_angle_limit"," ","The lower angle limit for the joint in degrees."," ","No"],[" ","For a prismatic joint you can use the following constant:"," ","Physics Joint Constant"," ","Constant"," ","Description"," ","Read Only"," ","phy_joint_translation"," ","Gets the distance between the anchor x/y coordinates and the local x/y coordinates."," ","Yes"," ","phy_joint_speed"," ","The current joint movement speed."," ","Yes"],[" ","For a distance, weld, and wheel joints you can use the following constants (as well as those for pulley joints):"," ","Physics Joint Constant"," ","Constant"," ","Description"," ","Read Only"," ","phy_joint_damping_ratio"," ","The damping ratio is non-dimensional and defines the \"springiness\" of the joint. The value for this constant is typically between 0 and 1, but can be larger, and at 1, the damping is critical meaning that all oscillations should vanish."," ","No"," ","phy_joint_frequency"," ","This will return (or set) the oscillation frequency for the joint, in hertz, and typically the frequency should be less than a half the frequency of the time step, as set by the function ","physics_world_update_speed()","."," ","No"," ","phy_joint_length_1"," ","This will return the length of the joint from the first local x/y coordinates to the first anchor x/y coordinates (Distance joints only, can only be read from)"," ","Yes"," ","phy_joint_length_2"," ","This will return the length of the joint from the second local x/y coordinates to the second anchor x/y coordinates (Distance joints only, can only be written to)"," ","No"],[" ","For a friction joint you can use the following constants:"," ","Physics Joint Constant"," ","Constant"," ","Description"," ","Read Only"," ","phy_joint_max_torque"," ","The maximum torque value for the joint."," ","No"," ","phy_joint_max_force"," ","The maximum force value for the joint."," ","No"],[" ","For a rope joint you can use the following constant:"," ","Physics Joint Constant"," ","Constant"," ","Description"," ","Read Only"," ","phy_joint_max_length"," ","The maximum extension for the connection between the two anchor points."," ","No"," ","Back: ","Joints"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"11":[[" ","General"],[" ","Motors"],[" ","Revolute Joints"],[" ","Prismatic Joints"],[" ","Distance Joints, Weld Joints and Wheel Joints"],[" ","Friction Joints"],[" ","Rope Joints"]],"id":"2705"})