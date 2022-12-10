rh._.exports({"0":[["Social"]],"1":[["Objects - Async Social Event"]],"2":[["Social,ev_social"]],"3":[["\n  ","\n  "],["\n  ","This event can only be triggered by the ","callback","s"," from various specific ","Social Functions"," and ","Xbox Live Functions"," and will return a ","DS Map"," stored in the variable ","async_load",", containing different key/value pairs depending on the callback from the function that has triggered the event.","\n  ","This event may also be triggered by ","Video Playback",".","\n  ","The DS map will contain a number of keys, the most important of which is the \"","id","\" key. This will return a constant which can then be checked in code to determine which of the many callbacks the event has received. Once you have parsed this key and compared the value returned with the available constants, you can then continue to extract the rest of the information from the map.","\n  ","The function pages on ","Achievements and Leaderboards"," in the Reference section detail the functions and callbacks as well as the constants used to trigger this event, but there are also certain circumstances in which it will be triggered without a function call from the game that is running:","\n  ","\n    ","when your game is launched from the OS dashboard","\n    ","when you complete a challenge","\n    ","when another player completes a challenge","\n    ","when the game is started from the OS dashboard by selecting a challenge","\n  ","\n  ","Any of the above callbacks will trigger the Social Event and an ","async_load"," map will be generated with the following details (note that there is a different \"","id","\" key value to define each of the different reasons that the event was called, but all other contents of the map are the same):","\n  ","\n    ","\"","id","\" - The value of this key will depend on the type of callback triggering the event (mostly used by extensions).","\n    ","\"","playerid","\" - The player id for the challenge.","\n    ","\"","issuerid","\" - The id of the person that issued the challenge.","\n    ","\"","state","\" - The state of the challenge, which will have a value of 0 - 3 (as a string) for invalid, pending, completed or declined.","\n    ","\"","message","\" - The text message for challenge.","\n    ","\"","issueddate","\" - The issue date for challenge","\n    ","\"","completeddate","\" - The completion date for challenge.","\n    ","\"","type","\" - The type of challenge given.","\n    ","\"","identifier","\" - The identifying string for the challenge.","\n    ","\"","score","\" - The score tied in with the challenge.","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Async Events","\n        ","Next: ","Steam","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Social"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2244"})