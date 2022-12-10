rh._.exports({"0":[["physics_fixture_set_angular_damping"]],"1":[["physics_fixture_set_angular_damping"]],"2":[["physics_fixture_set_angular_damping"]],"3":[["\n  ","\n  "],["\n  ","If you think about any rotating object in the \"real world\", unless it has a motor or is in space, it slows down over time due to the influence of external forces (like friction with the air around it). We can use the function ","physics_fixture_set_angular_damping()","    in ","GameMaker"," to simulate this effect and reduce the velocity of rotation of instances in the physics world, as, without it, any rotating instance would continue to rotate infinitely. Damping parameters should be between 0 and infinity,\n    with 0 meaning no damping, and infinity meaning full damping. Normally you will use a damping value between 0 and 1, but you can use any non-negative value if required.","\n  "," ","\n  "],["\n  ","physics_fixture_set_angular_damping(fixture, damping)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","fixture","Physics Fixture ID","\n        ","the index of the fixture","\n     ","\n      ","\n        ","damping","Real","\n        ","the angular damping of the fixture, usually between 0 and 1","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","physics_fixture_set_angular_damping(fix_Ball, 0.1);","\n  ","The code above will set the angular damping of the fixture indexed in \"fix_ball\" to 0.1.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fixtures","\n        ","Next: ","physics_fixture_set_restitution","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_fixture_set_angular_damping"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1214"})