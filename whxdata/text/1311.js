rh._.exports({"0":[[" ","layer_sequence_speedscale"]],"1":[["layer_sequence_speedscale"]],"2":[["layer_sequence_speedscale"]],"3":[[" ","layer_sequence_speedscale"]],"4":[[" ","With this function you can change the playback speed of the given sequence. You supply the sequence element ID as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," and then a speed scale value. This value is a ","multiplier",", where 1 is the default playback speed and values less than 1 will slow the playback and values larger than 1 will speed it up, eg: a value of 0.5 would be half playback speed, while a value of 2 would be double playback speed."],[" ","layer_sequence_speedscale(sequence_element_id, speedscale)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"," ","speedscale"," ","Real"," ","The speed scale to use (a multiplier), default is 1"],[" ","N/A"],[" ","var _seq = layer_sequence_create(\"Background\", 0, 0, seq_AnimatedBackground);","\n    layer_sequence_speedscale(_seq, 0.75);"," ","The above code creates a new sequence on the layer of the calling instance and then sets its speed scale value to 0.75 (three-quarters default playback speed)."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_get_x"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1311"})