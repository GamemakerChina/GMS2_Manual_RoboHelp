rh._.exports({"0":[["time_source_get_state"]],"1":[["time_source_get_state"]],"2":[["time_source_get_state"]],"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","This function returns the ","state"," of the given ","Time Source",".","\n  "," ","\n  "],["\n  ","time_source_get_state(id);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","Time Source ID","\n        ","The ","Time Source"," to get the state of","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Time Source State Constant","\n  "," ","\n  "],["\n  ","if (keyboard_check_pressed(vk_space))","\n    {","\n        var _state = time_source_get_state(time_source);","\n    ","\n        if (_state == time_source_state_active)","\n        {","\n            time_source_pause(time_source);","\n        }","\n        else if (_state == time_source_state_paused)","\n        {","\n            time_source_start(time_source);","\n        }","\n    }\n  ","\n  ","When the Space key is pressed, this code will get a ","Time Source","'s state.","\n  ","When the state is active, it will pause the ","Time Source",", and when it's paused, it will resume it.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Time Sources"," ","\n        ","Next: ","time_source_get_time_remaining","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["time_source_get_state"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1526"})