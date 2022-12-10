rh._.exports({"0":[["Play Audio"]],"1":[["GML Visual Action - Play Audio"]],"2":[["Play Audio"]],"3":[["\n  ","\n  "],["\n  ","This action will set the given sound playing. You select the sound from the Asset Explorer and then set whether you would like the sound to be looped or not (a looped sound will play again and again until stopped) by setting the \"Loop\" flag.","\n  ","Additionally you can set the gain, the offset (the track position to start playing from) and the pitch to play the sound with.","\n  ","The final value for gain and pitch for the sound being played is the product of the values for gain and pitch set for the sound asset. The offset value is the value provided in the \"Offset\" field ","or"," the offset value of the sound ","asset"," being played when the field is left empty (see Example 2).","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Sound","\n        ","The sound asset to play","\n      ","\n      ","\n        ","Loop","\n        ","Whether to loop the sound or not (off by default)","\n      ","\n      ","\n        ","Target","\n        ","The target variable to store the return value","\n      ","\n      ","\n        ","Gain","\n        ","Value for the gain multiplier (default 1). The gain multiplier set here is multiplied with the sound asset's gain multiplier","\n      ","\n      ","\n        ","Offset","\n        ","The time (in seconds) to set the start point to (default 0). Values beyond the end of the sound are clamped to its length.","\n          The sound asset's offset (track position) is used when this field if left blank.","\n      ","\n      ","\n        ","Pitch","\n        ","The pitch multiplier (default 1). The gain multiplier set here is multiplied with the sound asset's gain multiplier","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code checks for a mouse button press and if one is detected it then checks a global variable to see if it is not ","true",". If it is not ","true",", then a sound is played (and looped) and the global variable set to ","true",", otherwise the sound is stopped and the global variable is set to ","false",".","\n    The sound is played with default settings: a gain and pitch multiplier of 1 and an offset of 0 (the default offset of the sound asset).","\n  "],["\n  ","The above action block code first sets the track position of sound asset \"snd_MusicBoss\" to 20 seconds. It then checks if the instance variable \"skip_intro\" is set to ","true",". If it is, it starts playing \"snd_MusicBoss\" at 20 seconds, the value for track position set earlier (this is because the \"Offset\" field is left blank so the ","asset"," offset is used). The first 20 seconds of the audio are skipped.","\n    If the instance variable \"skip_intro\" is set to ","false",", it also starts playing \"snd_MusicBoss\" but, because the \"Offset\" has been set to 0, the sound will start playing from the start. The track position of 20 seconds as defined earlier for the sound ","asset"," is ignored.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Actions","\n        ","Next: ","Stop Audio","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" ","Play Audio"]],"5":[["Action Syntax:"],["Arguments:"],["Example 1:"],["Example 2:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2370"})