rh._.exports({"0":[["part_system_exists"]],"1":[["part_system_exists"]],"2":[["part_system_exists"]],"3":[["\n  ","\n  "],["\n  ","With this function you can check to see if the given particle system indexed exists in the game or not. Note that if the variable being checked is an uninitialised variable (that a particle system would otherwise have its index assigned to) this will throw an error.","\n  "," ","\n  "],["\n  ","part_system_exists(ind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","Particle System ID","\n        ","The index of the particle system to check for.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if !part_system_exists(global.Sname)","\n    {","\n        global.Sname = part_system_create();","\n    }","\n  ","The above code checks to see if the particle system referenced in the global variable exists and if it does not it is created.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Systems","\n        ","Next: ","part_system_create","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["part_system_exists"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"450"})