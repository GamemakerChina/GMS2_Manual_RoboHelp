rh._.exports({"0":[["event_data"]],"1":[["event_data"]],"2":[["event_data"]],"3":[["\n  ","\n  "],["\n  ","This variable is ","global"," in scope and is used to hold a ","DS Map"," when used in the appropriate event (e.g. ","Gesture Events"," and ","Broadcast Messages","), and -1 at all other times. The actual contents of the DS map will depend on the type of event that triggered it, so refer to the individual sections for those events.","\n  "," ","\n  "],["\n  ","event_data;","\n  "," ","\n  "],["\n  ","DS Map ID","\n  "," ","\n  "],["\n  ","isFlick = event_data[?\"isflick\"];","\n    ","\n    if (isFlick)","\n    {","\n        flickVelX = event_data[?\"diffX\"];","\n        flickVelY = event_data[?\"diffY\"];","\n    }","\n    else","\n    {","\n        flickVelX = 0;","\n        flickVelY = 0;","\n    }\n  ","\n  ","The above code is taken from the ","Drag End"," gesture event and checks to see if the vent is a \"flick\" event, and if it is it extracts the required data from the ","event_data"," DS map and uses it to set some variables. If a \"flick\" event is not detected, then the same variables are set to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Global Variables","\n        ","Next: ","score","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["event_data"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"998"})