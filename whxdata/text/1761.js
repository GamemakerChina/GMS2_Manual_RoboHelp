rh._.exports({"0":[[" ","layer_sequence_get_headdir"]],"1":[["layer_sequence_get_headdir"]],"2":[["layer_sequence_get_headdir,seq_dir_right,seq_dir_left"]],"3":[[" ","layer_sequence_get_headdir"]],"4":[[" ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create"," or by one of the ","layer element functions"," - and it will return the current ","playhead"," direction, which will be one of the constants listed below."," ","Sequence Direction Constant"," ","Constant"," ","Description"," ","Value"," ","seqdir_right"," ","The sequence will play frames in an incremental order from left to right"," ","1"," ","seqdir_left"," ","The sequence will play frames in a decremental order from right to left"," ","-1"],[" ","layer_sequence_get_headdir","(sequence_element_id)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","Constant"],[" ","if ","layer_sequence_get_headdir","(title_sequence) != seqdir_left","\n    {","\n        layer_sequence_headdir(title_sequence, seqdir_left);","\n    }"," ","The above code checks the the current playhead direction of the sequence element ID stored in the variable ","title_sequence",", and if it's not set to ","seqdir_left",", it is set to this value."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_get_speedscale"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1761"})