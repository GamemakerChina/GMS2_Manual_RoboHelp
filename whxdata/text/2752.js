rh._.exports({"0":[[" ","The Keyframe Data Struct"]],"1":[["The Keyframe Data Struct,seqaudiokey_loop,seqaudiokey_oneshot,channel,spriteIndex,soundIndex,playbackMode,curve,value,colour,sequence,objectIndex,events,event,seqtextkey_left,seqtextkey_right,seqtextkey_center,seqtextkey_justify,seqtextkey_top,seqtextkey_bottom,seqtextkey_middle"]],"2":[[" ","The Keyframe Data Struct"]],"3":[[" ","When you define a ","keyframe struct"," for a track, you need to also define the data that will be associated with it. This is comprised of different ","channels",", where each channel is simply a Keyframe Data Struct. A channel can be given specific type of data depending on what type of track you are setting the keyframe data for."," ","A Keyframe Data Struct contains the following variables:"," ","Sequence Keyframe Data Struct"," ","Variable"," ","Type"," ","Description"," ","channel"," ","Real"," ","This is the channel that the keyframe data should be applied to. It is a positive integer value starting at 0, and it's worth noting that when creating parameter tracks for \"position\" or \"scale\" keyframes, then you need to use very specific channel values. These are: channel 0 is the X position or the X scale, channel 1 is the Y position or Y scale."," ","spriteIndex"," ","Sprite Asset"," ","The index of the sprite asset to use for the track. This property is only available for tracks of the type ","seqtracktype_graphic"," and you can get or set it."," ","soundIndex"," ","Sound Asset"," ","The index of the audio asset to use for the track. This property is only available for tracks of the type ","seqtracktype_audio"," and you can get or set it."," ","playbackMode"," ","Sequence Audio Key Constant"," ","The playback mode for the sound. This property is only available for tracks of the type ","seqtracktype_audio"," and you can get or set it. The property should be one of the constants given in the table below this one."," ","curve"," ","Animation Curve Struct"," ","This property requires an animation curve struct (see ","here"," for more information) and is only available for tracks of the type ","seqtracktype_real",". If no curve struct is used then the value for this property will be -1."," ","value"," ","Real"," ","This property is simply a value that is associated with the keyframe data channel, and is only available for tracks of the type ","seqtracktype_real"," when no ","curve"," struct is supplied. This can be, for example, the X or Y position of the track if placed inside a ","\"position\""," parameter track."," ","colour"," ","Array"," of ","Real","s"," ","This property returns (or requires, if being set) an ","array"," for the colour value of the keyframe with the format [A, R, G, B]. This is only available for tracks of the type ","seqtracktype_colour",". Note that the values for each component should be expressed as between 0 and 1, where 0 corresponds to the HEX value #00 and 1 corresponds to the HEX value #FF (0 - 255 as shown in the colour picker for colour tracks in the Sequences Editor)."," ","sequence"," ","Sequence Object Struct"," ","This property will return (or requires, if being set) a ","sequence object struct"," and is only available for tracks of the type ","seqtracktype_sequence","."," ","objectIndex"," ","Object Asset"," ","This property will return (or requires, if being set) an object index and is only available for tracks of the type ","seqtracktype_instance","."," ","events"," ","Array"," of ","String","s"," ","This property allows access to the ","events"," and ","broadcast messages"," associated with the keyframe data struct. You can get or set this property, and when getting it an array of strings is returned, and when setting it an array of strings should be specified. For more information on events, please see the section ","Sequence Events And Moments",". This property is only available for tracks of the type ","seqtracktype_message","."," ","event"," ","Method"," ","This property will return (or can be set to) the ","method"," associated with the keyframe data struct. If no method has been specified or you wish to remove the method, then the property should be -1. This property is only available for tracks of the type ","seqtracktype_moment","."," ","Any additional variables listed in the table(s) below"," ","The ","playbackMode"," variable can be one of the following constants:"," ","Sequence Audio Key Constant"," ","Constant"," ","Description"," ","Value"," ","seqaudiokey_loop"," ","The sound will loop when played."," ","0"," ","seqaudiokey_oneshot"," ","The sound will only play once then stop."," ","1"],[" ","The struct will contain the following additional variables if assigned to a ","text track"," (","seqtracktype_text","):"," ","Sequence Keyframe Data Struct"," ","Variable"," ","Type"," ","Description"," ","text"," ","String"," ","This is the text string that is drawn on the track."," ","wrap"," ","Boolean"," ","This is a boolean that indicates whether the text should be wrapped (","true",") or not (","false",")."," ","alignmentH"," ","Sequence Text Alignment Constant"," ","This is the horizontal alignment of the text, and will be one of the ","Sequence Text Alignment Constant","s given below."," ","alignmentV"," ","Sequence Text Alignment Constant"," ","This is the vertical alignment of the text, and will be one of the ","Sequence Text Alignment Constant","s given below."," ","fontIndex"," ","Font Asset"," ","This is the ","Font Asset"," used by the text track."," ","alignmentH"," can be any of the following constants:"," ","Sequence Text Alignment Constant"," (","alignmentH",")"," ","Constant"," ","Description"," ","seqtextkey_left"," ","The text will be aligned to the left of the frame"," ","seqtextkey_right"," ","The text will be aligned to the right of the frame"," ","seqtextkey_center"," ","The text will be centred horizontally within the frame"," ","seqtextkey_justify"," ","The text will be justified within the frame"," ","alignmentV"," can be any of the following constants:"," ","Sequence Text Alignment Constant"," (","alignmentV",")"," ","Constant"," ","Description"," ","seqtextkey_top"," ","The text will be aligned to the top of the frame"," ","seqtextkey_bottom"," ","The text will be aligned to the bottom of the frame"," ","seqtextkey_middle"," ","The text will be centred vertically within the frame"," ","Back: ","Sequences"," ","Next: ","The Sequence Object Struct"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["Sequence Keyframe Data Struct,seqaudiokey_loop,seqaudiokey_oneshot,seqtextkey_left,seqtextkey_center,seqtextkey_right,seqtextkey_justify,seqtextkey_top,seqtextkey_middle,seqtextkey_bottom"]],"7":[[" ","Text Track Data"]],"id":"2752"})