rh._.exports({"0":[["part_emitter_exists"]],"1":[["part_emitter_exists"]],"2":[["part_emitter_exists"]],"3":[["\n  ","\n  "],["\n  ","With this function you can check to see if the given particle emitter indexed exists in the given system or not. Note that if the variable being checked is an uninitialised variable (that a particle emitter would otherwise have its index assigned to) this will throw an error.","\n  "," ","\n  "],["\n  ","part_emitter_exists(ps, ind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","ps","\n        ","Particle System ID","\n        ","The particle system to check for an emitter.","\n      ","\n      ","\n        ","ind","\n        ","Particle Emitter ID","\n        ","The index of the emitter to search for.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if part_emitter_exists(sname, p_emit1)","\n    {","\n        part_emitter_burst(sname, p_emit1, part_1, 30);","\n    }","\n  ","The above code will check for the emitter indexed in the variable \"permit\" and if it exists, it will burst 30 particles from it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Emitters","\n        ","Next: ","part_emitter_create","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["part_emitter_exists"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"793"})