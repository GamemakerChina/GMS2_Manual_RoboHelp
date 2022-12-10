rh._.exports({"0":[["part_system_clear"]],"1":[["part_system_clear"]],"2":[["part_system_clear"]],"3":[["\n  ","\n  "],["\n  ","With this function you can clear the indexed system to its default state, removing all emitters and resetting the depth and position (if they had been changed). Be careful using this function as if you have any instance setting or bursting or any other action using an emitter associated with this system, you will get an error unless you are using the ","part_emitter_exists()"," function to check. There is also no need to call the ","part_emitter_destroy()"," function as this is taken care of automatically too.","\n  ","NOTE",": this function will clear the visible particles in the room, but it does ","not"," clear the particle properties, nor does it remove them from memory. For that you should use the functions ","part_type_clear()"," and ","part_type_destroy()",".","\n  "," ","\n  "],["\n  ","part_system_clear(ind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","Particle System ID","\n        ","The index of the particle system to clear.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","part_system_clear(global.Sname);","\n  ","The above code will clear the particle system indexed in the global variable \"Sname\" to its default state.","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Systems","\n        ","Next: ","part_system_destroy","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["part_system_clear"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1381"})