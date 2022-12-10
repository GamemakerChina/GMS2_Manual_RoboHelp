rh._.exports({"0":[["skeleton_animation_get_position"]],"1":[["skeleton_animation_get_position"]],"2":[["skeleton_animation_get_position"]],"3":[["\n  ","\n  "],["\n  ","This function will return the position of the animation on the specified animation track as a value ranging from 0 to 1. This way you can get the track position as a percentage where the value 0 corresponds to 0% and the value 1 to 100%.","\n  ","It will return -1 if no animation is assigned to the specific track given or if the instance has no sprite set.","\n  "," ","\n  "],["\n  ","skeleton_animation_get_position","(track);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","track","\n        ","Real","\n        ","The animation track to get the position of.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var _position = ","skeleton_animation_get_position","(0);","\n    var _position_percent = _position * 100;","\n    show_debug_message(\"The skeleton animation position on track 0 is at \" + string(_position_percent) + \"%.\");","\n  ","The above code checks the current position of the skeleton animation assigned to track 0 and stores it in a temporary variable ","_position",". It then converts that value to a percentage by multiplying it by 100 and stores the result of that in another temporary variable ","_position_percent",".","\n    Finally it shows a debug message that displays the percent value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Animation","\n        ","Next: ","skeleton_animation_set_position","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["skeleton_animation_get_position"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1761"})