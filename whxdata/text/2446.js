rh._.exports({"0":[["physics_joint_wheel_create"]],"1":[["physics_joint_wheel_create"]],"2":[["physics_joint_wheel_create"]],"3":[["\n  ","\n  "],["\n  ","A wheel joint simply combines a piston and a revolute joint, like a wheel mounted on the shock absorber of a car. You specify the anchor point for the joint well as the two physics enabled instances to joint, and the first instance will act as the \"body\" for the joint, while the second will be the \"wheel\", and be permitted to move freely around the joint axis. You can also set an axis vector, which is the imaginary line along which the joint will act as a \"spring\" permitting the wheel to bounce up and down along it as it encounters obstacles (much like the piston joint). The following image illustrates this:","\n  ","If you choose to enable a motor, then the second instance will rotate around the anchor position, and you can set the maximum motor torque used to achieve the desired motor speed (N/m) as well as the speed at which the motor should turn. Since the wheel joint also has an axis along which it may move, you can set the oscillation frequency (in Hz) as well as the damping ratio for the joint - you may need to play with these values to fine tune them and it is recommended that you start off with smaller values and increment them until you get the effect that you desire.","\n  ","As with all the joints, if you set the \"col\" value to ","true"," then the two instances can interact and collide with each other but ","only"," if they have collision events, however if it is set to ","false",", they will not collide no matter what.","\n  "," ","\n  "],["\n  ","physics_joint_wheel_create(inst1, inst2, anchor_x, anchor_y, axis_x, axis_y, enableMotor, max_motor_torque, motor_speed, freq_hz, damping_ratio, col)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","inst1","\n        ","Instance ID","\n        ","The first instance to connect with the joint","\n      ","\n      ","\n        ","inst2","\n        ","Instance ID","\n        ","The second instance to connect with the joint","\n      ","\n      ","\n        ","anchor_x","\n        ","Real","\n        ","The x coordinate where the joint is anchored, within the game world","\n      ","\n      ","\n        ","anchor_y","\n        ","Real","\n        ","The y coordinate where the joint is anchored, within the game world","\n      ","\n      ","\n        ","axis_x","\n        ","Real","\n        ","The x component of the wheel axis vector","\n      ","\n      ","\n        ","axis_y","\n        ","Real","\n        ","The y component of the wheel axis vector","\n      ","\n      ","\n        ","enableMotor","\n        ","Boolean","\n        ","Whether the motor should be active (true) or not (false)","\n      ","\n      ","\n        ","max_motor_torque","\n        ","Real","\n        ","Sets the maximum motor torque used to achieve the desired motor speed (in Newtons per meter)","\n      ","\n      ","\n        ","motor_speed","\n        ","Real","\n        ","This is the speed at which the motor should rotate","\n      ","\n      ","\n        ","freq_hz","\n        ","Real","\n        ","This is the oscillation frequency for the joint, in hertz","\n      ","\n      ","\n        ","damping_ratio","\n        ","Real","\n        ","This damping ratio for the joint","\n      ","\n      ","\n        ","col","\n        ","Colour","\n        ","Whether the two instances can collide (true) or not (false)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Physics Joint ID","\n  "," ","\n  "],["\n  ","var mainFixture = physics_fixture_create();","\n    physics_fixture_set_box_shape(mainFixture, 128, 32);","\n    var wheelFixture = physics_fixture_create();","\n    physics_fixture_set_circle_shape(wheelFixture, 32);","\n    var o_id = instance_create_layer(x+25, y + 100, \"Instances\", obj_Wheel);","\n    physics_fixture_bind(mainFixture, id);","\n    physics_fixture_bind(wheelFixture, o_id);","\n    physics_joint_wheel_create(id, o_id, o_id.x, o_id.y, 0, 1, true, 10, 1, 15, 6, false);","\n    physics_fixture_delete(mainFixture);","\n    physics_fixture_delete(wheelFixture);","\n  ","The above code creates and defines two new fixtures. These are then bound to the calling instance and a new instance that is created before having a wheel joint applied to connect them, after which the fixtures are deleted from memory.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Joints","\n        ","Next: ","physics_joint_weld_create","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_joint_wheel_create"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2446"})