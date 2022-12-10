rh._.exports({"0":[["physics_fixture_set_density"]],"1":[["physics_fixture_set_density"]],"2":[["physics_fixture_set_density"]],"3":[["\n  ","\n  "],["\n  ","The density of something is defined as its mass per unit volume, which basically means ","how much mass is crammed into the space it takes up in the world",". So, a balloon would have a low density as it has little mass that occupies a large space,\n    while a lead bar would have a high density as it has a great mass, yet occupies little space.","\n  ","In the ","GameMaker"," 2D physics world, mass is calculated automatically\n    for you from the values you input for the ","density"," and by the ","surface area"," of the shape you define for the fixture. This will have a direct impact on how much inertia a fixture has as well as how it reacts to collisions and forces, so\n    if you make a small shape with a high density it will have a very large mass (like a bar of lead), but if you define a large shape with a low density it will have a much smaller mass (like a balloon).","\n  ","NOTE",": If you wish the instance that is going to receive the fixture to be ","static ","(ie: immobile in the game world) then the density should be set to 0, essentially giving it an infinite density.","\n  ","NOTE"," A static fixture can be made ","kinematic"," (ie: it can move but without the effects of force or gravity) by making it have a density of 0 and then setting the ","phy_speed_x","\n    ",", ","phy_speed_y","\n    ",", or ","phy_angular_velocity","\n    "," variables.","\n  "," ","\n  "],["\n  ","physics_fixture_set_density(fixture, density)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","fixture","Physics Fixture ID","\n        ","the index of the fixture","\n     ","\n      ","\n        ","density","Real","\n        ","the density of the fixture calculated as kg/m²","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","physics_fixture_set_density(fix_Balloon, 0.1);","\n  ","The code above will set the density of the fixture indexed in \"fix_Ballon\" to 0.1.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fixtures","\n        ","Next: ","physics_fixture_set_friction","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_fixture_set_density"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1975"})