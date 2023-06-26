rh._.exports({"0":[[" ","Sequence Layers"]],"1":[["Sequence Layers"]],"2":[[" ","Sequence Layers"]],"3":[[" ","In this section we have the functions that are used for adding, removing and editing how ","Sequences"," behave in a game room in relation to the ","layer"," they are on. It should be noted that sequences are similar to objects, in that when one is created on a layer in a room, it is considered an ","instance"," of the main sequence ","object"," from the ","Asset Browser",". So, when you add a sequence to a layer in a room, you are creating an ","instance"," of the base sequence object, and this sequence instance is added as an ","element"," within a room layer. The sequence instance is what controls things like playback speed and direction, and will itself contain another sequence data ","struct"," which is what contains the actual sequence track data. This is important, as the functions listed below will reference the sequence ","element ID"," (the ID of the sequence ","on the layer",") as well as the sequence ","instance ID"," (the actual ID of the sequence that is being referenced by the element) and the sequence data ","struct"," (which contains all the sequence data)."," ","Below is a list of all the functions that can be used for creating new sequence instances or editing existing ones:"," ","layer_sequence_exists"," ","layer_sequence_create"," ","layer_sequence_destroy"," ","layer_sequence_x"," ","layer_sequence_y"," ","layer_sequence_angle"," ","layer_sequence_xscale"," ","layer_sequence_yscale"," ","layer_sequence_headpos"," ","layer_sequence_headdir"," ","layer_sequence_pause"," ","layer_sequence_play"," ","layer_sequence_speedscale"," ","layer_sequence_get_x"," ","layer_sequence_get_y"," ","layer_sequence_get_angle"," ","layer_sequence_get_xscale"," ","layer_sequence_get_yscale"," ","layer_sequence_get_headpos"," ","layer_sequence_get_headdir"," ","layer_sequence_get_speedscale"," ","layer_sequence_get_length"," ","layer_sequence_get_instance"," ","layer_sequence_get_sequence"," ","layer_sequence_is_paused"," ","layer_sequence_is_finished"," ","There are also additional functions available for dealing with the contents of sequences and for defining your own. You can find a complete list of these functions in the following section:"," ","Sequences"," ","Back: ","Rooms"," ","Next: ","Filter and Effect Functions"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2276"})