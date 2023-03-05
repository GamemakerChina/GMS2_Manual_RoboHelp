rh._.exports({"0":[[" ","time_source_start"]],"1":[["time_source_start"]],"2":[["time_source_start"]],"3":[[" ","time_source_start"]],"4":[[" ","This function starts the given ","Time Source",", changing its ","state"," to ","time_source_state_active","."," ","The specified ","Time Source"," may be a new ","Time Source"," that was never started, was paused, stopped or expired with no repetitions."," ","This function will \"soft-reset\" the given ","Time Source",", resetting its ","expiry time"," and ","reps remaining"," to the values that were configured for it."],[" ","time_source_start(id);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Time Source ID"," ","The ","Time Source"," to start"],[" ","N/A"],[" ","var _my_method = function()","\n    {","\n        instance_destroy();","\n    }"," ","\n    var _time_source = time_source_create(time_source_game, 300, time_source_units_frames, _my_method);"," ","\n    time_source_start(_time_source);\n  "," ","In this example, we want the instance to destroy itself 300 frames later."," ","The code first creates a method that simply calls ","instance_destroy()","."," ","It then creates a ","Time Source",", inheriting from the Game ","Time Source",". It sets its period to ","300 frames","."," ","Finally, it starts the ","Time Source","."," ","Back: ","Time Sources"," ","Next: ","time_source_stop"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2034"})