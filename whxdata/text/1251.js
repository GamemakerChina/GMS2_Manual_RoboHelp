rh._.exports({"0":[[" ","event_number"]],"1":[["event_number"]],"2":[["event_number"]],"3":[[" ","event_number"]],"4":[[" ","This ","read-only"," variable returns the number of the event currently being called, where the number is actually referring to the \"sub event\" of the event, i.e.: for the step event the event number could be any one of the constants ","ev_step_normal",", ","ev_step_begin",", or ","ev_step_end",". For a full list of constants that are available for the specific sub-events see ","event_perform",", and if you should need to know the main event itself, you should be checking the ","event_type","."],[" ","event_number",";"],[" ","Event Number Constant"],[" ","switch (","event_number",")","\n    {","\n        case ev_step_normal: show_debug_message(\"Step event!\"); break;","\n        case ev_game_start: show_debug_message(\"Game Start\"\"); break;","\n        case ev_room_start: show_debug_message(\"Room Start!\"); break;","\n    }"," ","The above code could be called form a script and used to show debug messages informing you which event is currently being triggered."," ","Back: ","Generating Object Events"," ","Next: ","event_object"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1251"})