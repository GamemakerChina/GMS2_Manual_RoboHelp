rh._.exports({"0":[["physics_mass_properties"]],"1":[["physics_mass_properties"]],"2":[["physics_mass_properties"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to set custom mass and rotational inertia values for a physics enabled instance. Normally the mass, centre of mass, and rotational inertia for an instance are calculated using a combination the surface area of the bound fixtures and their density. However, in very special occasions, you may need to offset the centre of mass or change the inertia, and that is when you would use this function.","\n  "],["\n  ","The mass is calculated in real world weight (i.e.: kilograms), so you should always try and keep values realistic for what you are modelling. So if your physics object is meant to represent a person, their mass could be, say, 70 kg, instead of something like 2 kg.","\n  ","The mass cannot be negative.","\n  "],["\n  ","The centre of mass is calculated automatically for you based on the shape of the fixture (or fixtures) you have defined. To get a general idea of where this could be, if you have a sprite that is the same shape as the fixtures you wish to create, then select the \"centre origin\" option and you will see approximately where the centre of mass will be too.","\n  ","However, this may not be correct or you may be looking for a specific effect from your physics object, in which case this function can also be used to change the x and y coordinates for the centre of mass. These are ","local/relative"," values, so ","0,0"," is the point at which the fixtures are bound to the instance (the origin of the instance). So a centre of mass of ","-4,0"," would shift the centre of mass to the left of the origin, by 4 pixels.","\n  "],["\n  ","The inertia value defines how resistant this instance is to changes in its rotational velocity. A higher inertia makes it more resistant and a low inertia makes it less resistant.","\n  ","The rotational inertia cannot be negative.","\n  ","NOTE"," This function does not set mass and inertia for individual fixtures, but rather for the whole physics enabled instance, no matter how many fixtures are bound to it.","\n  ","NOTE"," This function should only be used when necessary, as the physics simulation is designed for the mass and inertia to be optimal based on the density and size of the fixture. Changing these values may produce unexpected results.","\n  "," ","\n  "],["\n  ","physics_mass_properties(mass, local_center_x, local_center_y, inertia)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","mass","Real","\n        ","The new mass that you want the fixture to have.","\n     ","\n      ","\n        ","local_center_x","Real","\n        ","The local x coordinate of the new center of mass.","\n     ","\n      ","\n        ","local_center_y","Real","\n        ","The local y coordinate of the new center of mass.","\n     ","\n      ","\n        ","inertia","Real","\n        ","The rotational inertia for the fixture.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","physics_mass_properties(phy_mass, -10, -10, phy_inertia);","\n  ","The above code will shift the center of mass of the physical body to the left.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Physics","\n        ","Next: ","physics_test_overlap","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_mass_properties"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"10":[["Mass"],["Centre of Mass"],["Rotational Inertia"]],"id":"2262"})