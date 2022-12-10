rh._.exports({"0":[["Time Source Units"]],"1":[["Time Source, Time Source Units, time_source_units_seconds, time_source_units_frames"]],"2":[["Time Sources, Time Source Units, time_source_units_seconds, time_source_units_frames"]],"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Time Source Unit Constant","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Value","\n      ","\n      ","\n        ","time_source_units_seconds","\n        ","Use seconds for the ","Time Source"," period (frame-independent)","\n        ","0","\n      ","\n      ","\n        ","time_source_units_frames","\n        ","Use frames for the ","Time Source"," period (frame-dependent)","\n        ","1","\n      ","\n    ","\n  ","\n  ","These constants are used in ","time_source_create()"," and ","time_source_reconfigure()"," to set the units used for the ","Time Source","'s period, and are returned by ","time_source_get_units()",".","\n  ","If you use seconds, your ","Time Source"," will run independently from the game's framerate.","\n  ","If you use frames, your ","Time Source"," will be dependent on the game's framerate.","\n  ","You can also use BPM (beats-per-minute) as a unit by calling ","time_bpm_to_seconds()"," to convert your BPM value to a period in seconds, and then using ","time_source_units_seconds"," as the unit.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Time Sources"," ","\n        ","Next: ","Time Source Expiry Types","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["Time Source Units"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1784"})