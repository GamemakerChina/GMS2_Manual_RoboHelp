rh._.exports({"0":[["effect_create_below"]],"1":[["effect_create_below,ef_cloud,ef_ellipse,ef_explosion,ef_firework,ef_flare,ef_rain,ef_ring,ef_smoke,ef_smokeup,ef_snow,ef_spark,ef_star"]],"2":[["effect_create_below,ef_cloud,ef_ellipse,ef_explosion,ef_firework,ef_flare,ef_rain,ef_ring,ef_smoke,ef_smokeup,ef_snow,ef_spark,ef_star"]],"3":[["\n  ","\n  "],["\n  ","With this function you can create a simple effect beneath all instances of your room (it is actually created at a depth of 100000). If the effect is anything other ","ef_rain"," or ","ef_snow"," then you can define an x/y position to create the effect, and the size can be a value of 0, 1, or 2, where 0 is small, 1 is medium and 2 is large.","\n  ","It is worth noting that these effects can have their drawing toggled on and off, as well as have their drawing paused, by using the functions ","part_system_automatic_draw()"," and ","part_system_automatic_update()"," with the appropriate value for the particle system index (where 0 is for effects below and 1 is for effects above).","\n  ","The available constants for the different particle kinds are:","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Example","\n        ","Description","\n      ","\n      ","\n        ","ef_cloud","\n        ","\n        ","An effect that creates random cloud particles of varying sizes","\n      ","\n      ","\n        ","ef_ellipse","\n        ","\n        ","An effect that creates expanding ellipses","\n      ","\n      ","\n        ","ef_explosion","\n        ","\n        ","An effect that creates expanding fading explosions","\n      ","\n      ","\n        ","ef_firework","\n        ","\n        ","An effect that creates multiple small particles to generate a firework explosion","\n      ","\n      ","\n        ","ef_flare","\n        ","\n        ","An effect that generates a brilliant point that flares up and fades out","\n      ","\n      ","\n        ","ef_rain","\n        ","\n        ","An effect that generates rain particles coming down from the top of the screen","\n      ","\n      ","\n        ","ef_ring","\n        ","\n        ","An effect that generates expanding and fading circles","\n      ","\n      ","\n        ","ef_smoke","\n        ","\n        ","An effect that generates little puffs of smoke","\n      ","\n      ","\n        ","ef_smokeup","\n        ","\n        ","An effect that creates a smoke plume that rises up the screen","\n      ","\n      ","\n        ","ef_snow","\n        ","\n        ","An effect that generates multiple snow particles falling down the screen","\n      ","\n      ","\n        ","ef_spark","\n        ","\n        ","An effect that generates a small spark","\n      ","\n      ","\n        ","ef_star","\n        ","\n        ","An effect that generates star particles","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","effect_create_below(kind, x, y, size, colour);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","kind","\n        ","Effect Type Constant","\n        ","The kind of effect (use one of the constants listed above).","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x positioning of the effect if relevant.","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y positioning of the effect if relevant.","\n      ","\n      ","\n        ","size","\n        ","Real","\n        ","The size of the effect.","\n      ","\n      ","\n        ","colour","\n        ","Colour","\n        ","The colour of the effect.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if speed > 0","\n    {","\n        effect_create_below(ef_smoke, x, y, 0, c_gray);","\n    }","\n  ","The above code will create a small puff of gray smoke every step that the instance speed is greater than 0 at the instance x,y coordinates.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particles","\n        ","Next: ","effect_create_above","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["effect_create_below"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2515"})