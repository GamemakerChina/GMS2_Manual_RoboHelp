rh._.exports({"0":[["physics_fixture_set_linear_damping"]],"1":[["physics_fixture_set_linear_damping"]],"2":[["physics_fixture_set_linear_damping"]],"3":[["\n  ","\n  "],["\n  ","Damping is used to reduce the physics world velocity of instances, and differs from friction in that friction only occurs when two instances with fixtures are in contact. Damping is also much cheaper to simulate than friction, but please note that damping\n    is not a replacement for friction; the two effects can, and should, be used together. Here is an image to illustrate damping:","\n  ","Damping parameters should be between 0 and infinity, with 0 meaning no damping,\n    and infinity meaning full damping. Normally you will use a damping value between 0 and 1, but you can use any non-negative value if required.","\n  "," ","\n  "],["\n  ","physics_fixture_set_linear_damping(fixture, damping)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","fixture","Physics Fixture ID","\n        ","the index of the fixture","\n     ","\n      ","\n        ","damping","Real","\n        ","the damping of the fixture, usually between 0 and 1","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","physics_fixture_set_linear_damping(fix_Ball, 0.1);","\n  ","The code above will set the linear damping of the fixture indexed in \"fix_ball\" to 0.1.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fixtures","\n        ","Next: ","physics_fixture_set_angular_damping","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_fixture_set_linear_damping"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1280"})