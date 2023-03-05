rh._.exports({"0":[[" ","part_system_depth"]],"1":[["part_system_depth"]],"2":[["part_system_depth"]],"3":[[" ","part_system_depth"]],"4":[[" ","With this function you can set the draw depth for the particle system, much the same as you can set the ","render depth"," of different layers within the room, where a low draw depth means that it will appear on top of all things drawn with a higher depth, and a high draw depth placing it below everything with a lower draw depth."],[" ","part_system_depth( ind, depth );"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle System ID"," ","The index of the particle system to change."," ","depth"," ","Real"," ","The depth at which to set the particle system."],[" ","N/A"],[" ","global.Sname = part_system_create();","\n    part_system_depth(global.Sname, -1000 );"," ","The above code will create a particle system and store its index in the global variable \"Sname\". this system is then given a low depth of -1000, meaning that it will appear above everything with a higher draw depth."," ","Back: ","Particle Systems"," ","Next: ","part_system_position"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"790"})