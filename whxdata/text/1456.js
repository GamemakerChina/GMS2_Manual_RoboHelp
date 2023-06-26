rh._.exports({"0":[[" ","physics_fixture_set_kinematic"]],"1":[["physics_fixture_set_kinematic"]],"2":[[" ","physics_fixture_set_kinematic"]],"3":[[" ","There will be certain instances in a physics based game which you want to move around but do not wish to be acted on by forces such as gravity, nor forces incurred by collisions with dynamic objects (think of moving platforms in a platform game, for\n    example). For such objects simply setting the density of a fixture to 0 will mean that the physics will assume that the object is intended to be static. However, should you set the ","phy_speed_x",",\n    ","phy_speed_y"," or ","phy_angular_velocity"," variables for an instance that has had such a fixture bound to it, it will be converted\n    into a kinematic object and begin movement. Change the instance from static to kinematic mid-simulation can be expensive in terms of processing (depending on the state of the instances in the physics world) and therefore it is recommended to set the\n    fixture to be kinematic using this function prior to binding it to an instance, so that it will be unaffected by collisions and forces (such as gravity) but may move with constant linear and/or angular velocity."],[" ","physics_fixture_set_kinematic(fixture)"," ","Argument","Type"," ","Description"," ","fixture","Physics Fixture ID"," ","the index of the fixture"],[" ","N/A"],[" ","physics_fixture_set_kinematic(fix_Cloud);"," ","The code above will indicate that the fixture indexed in \"fix_Cloud\" should be marked as kinematic."," ","Back: ","Fixtures"," ","Next: ","physics_fixture_set_awake"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_fixture_set_kinematic"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1456"})