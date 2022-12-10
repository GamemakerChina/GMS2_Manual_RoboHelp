rh._.exports({"0":[["Set Audio Volume"]],"1":[["GML Visual Action - Set Audio Volume"]],"2":[["Set Audio Volume"]],"3":[["\n  ","\n  "],["\n  ","With this action you can set the volume of a given sound. You select the sound from the asset explorer and then set the volume value. The volume can be between 0 (silent) and 1 (full volume) and the scale is linear, such that a value of 0.5 would be half volume. Note that this action will affect all instances of the sound that are playing currently in the room, and will affect all future instances of the sound played.","\n  ","The \"Time\" field controls how long it takes for the volume change to take effect. A value of 0 results in an instant change, where a larger value will gradually change the volume over the given amount of milliseconds.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Sound","\n        ","The sound resource to set the volume of","\n      ","\n      ","\n        ","Volume","\n        ","The new volume for the sound (from 0 to 1, default 1)","\n      ","\n      ","\n        ","Time","\n        ","The amount of time over which to fade the volume (in milliseconds).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code checks a global variable to see if it is ","true"," or false. If it is ","true"," then the volume of the given sound is retrieved and stored in a temporary local variable. The value is then checked to see if it is not equal to 0.5, and if it is not, then the volume of the sound is set to fade to 0.5 in 1000 milliseconds (1 second). If the global variable evaluates to ","false",", then the sound has its volume set to 1. As the value for time is set to 0 here, the change in volume occurs immediately.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Actions","\n        ","Next: ","Get Audio Volume","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Set Audio Volume"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1842"})