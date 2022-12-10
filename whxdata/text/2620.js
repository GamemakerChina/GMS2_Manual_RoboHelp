rh._.exports({"0":[["The Sequence Object Struct"]],"1":[["Sequence Object Struct"]],"2":[["The Sequence Object Struct,seqplay_oneshot,seqplay_loop,seqplay_pingpong,spritespeed_framespersecond,spritespeed_framespergameframe,name,loopmode,playbackSpeed,playbackSpeedType,length,volume,xorigin,yorigin,messageEventKeyframes,momentKeyframes,tracks"]],"3":[["\n  ","\n  "],["\n  ","A ","Sequence Object Struct"," is the name given to the struct retrieved from a Sequence asset. All the data for a Sequence is stored in this struct at runtime, and is referenced by any elements of the Sequence that are created in a room. This means that if any variables in this struct (or inside any of its nested structs) are modified, the original Sequence will change (until the game is closed and re-opened) and any of its existing Sequence elements will be affected.","\n  ","This ","struct"," will have the following properties that can be changed:","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Sequence Object Struct","\n      ","\n      ","\n        ","Variable","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","String","\n        ","This is the name of the sequence as a string and you can get or set this value as required. Note that sequences created using the function ","sequence_create()"," will not have a name and this will simply be an empty string \"\".","\n      ","\n      ","\n        ","loopmode","\n        ","Sequence Play Mode Constant","\n        ","This is the playback mode of the sequence object and can be get or set. This can be any one of the constants shown in the table below this one.","\n      ","\n      ","\n        ","playbackSpeed","\n        ","Real","\n        ","This specifies the playback speed of the sequence, which is interpreted as either frames-per-second or frames-per-game-frame depending on the ","playbackSpeedType"," (see below). You can get or set this value.","\n      ","\n      ","\n        ","playbackSpeedType","\n        ","Sprite Speed Constant","\n        ","This specifies how the ","playbackSpeed"," should be interpreted and you can get or set this value.","\n      ","\n      ","\n        ","length","\n        ","Real","\n        ","The length of the sequence in frames. You can get or set this value, but note that making a sequence shorter may cause issues if a sequence instance referencing this sequence has its playhead set to past the new length.","\n      ","\n      ","\n        ","volume","\n        ","Real","\n        ","This is a scalar value from 0 to 1 that is used to scale the volume of all audio tracks in the sequence. You can get or set this value and it will modify the global audio output for all tracks - for example, if you have an audio track with a volume of 0.8 and then set the sequence volume property to 0.5, the audio track will have a final volume of 0.4.","\n      ","\n      ","\n        ","xorigin","\n        ","Real","\n        ","This is the origin of the sequence along the X axis.","\n      ","\n      ","\n        ","yorigin","\n        ","Real","\n        ","This is the origin of the sequence along the Y axis.","\n      ","\n      ","\n        ","messageEventKeyframes","\n        ","Array"," of ","Sequence Keyframe Struct","s","\n        ","This allows access to the message event keyframes for the sequence. You can get or set these message events, and when getting this property an array of keyframe structs is returned, and for setting the property you should supply an array of keyframe structs. For more information, please see the page on ","Sequence Events and Moments",".","\n      ","\n      ","\n        ","momentKeyframes","\n        ","Array"," of ","Sequence Keyframe Struct","s","\n        ","This allows access to the moment event keyframes for the sequence. You can get or set these moment events, and when getting this property an array of keyframe structs is returned, and for setting the property you should supply an array of keyframe structs. For more information, please see the page on ","Sequence Events and Moments",".","\n      ","\n      ","\n        ","tracks","\n        ","Array"," of ","Sequence Track Struct","s","\n        ","This allows access to the list of ","asset tracks"," on the top level of the sequence. You can get or set this property, and when getting this property an array of track structs is returned, and for setting the property you should supply an array of track structs. For more information, please see the section on ","Track Structs",".","\n      ","\n    ","\n  ","\n  "," ","\n  ","loopMode"," can be any one of the following constants:","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Sequence Play Mode Constant","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Value","\n      ","\n      ","\n        ","seqplay_oneshot","\n        ","The sequence will play once then stop when finished.","\n        ","0","\n      ","\n      ","\n        ","seqplay_loop","\n        ","The sequence will loop, with the playhead going back to the start when it reaches the end of the playback region.","\n        ","1","\n      ","\n      ","\n        ","seqplay_pingpong","\n        ","The sequence will loop, with the playhead reversing direction when it reaches the end of the playback region.","\n        ","2","\n      ","\n    ","\n  ","\n  ","\n     ","\n  "],["\n  ","Note that if you want to access the properties of a sequence that has been created in the asset browser, you must first call the function ","sequence_get()"," on the asset index to retrieve the sequence object struct. Also note that any changes made to this sequence struct will mean that all further instances of this sequence asset will also have these changes, and they will be maintained as long as the game is running, even if you call the ","game_restart()"," function.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n        ","Next: ","The Sequence Instance Struct","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Sequence Object Struct"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"11":[["Remarks"]],"id":"2620"})