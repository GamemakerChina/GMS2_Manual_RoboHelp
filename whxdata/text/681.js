rh._.exports({"0":[[" ","sequence_get"]],"1":[["sequence_get"]],"2":[["sequence_get"]],"3":[[" ","sequence_get"]],"4":[[" ","With this function you can retrieve the ","Sequence Object Struct"," from a sequence asset index. You supply the asset index for the sequence as defined in the asset browser, and the function will return the sequence object struct that can then be accessed, or -1 if the sequence doesn't exist or the asset index given is not a sequence."],[" ","sequence_get(sequence_index);"," ","Argument"," ","Type"," ","Description"," ","sequence_index"," ","Sequence Asset"," ","The sequence asset as defined in the Asset Browser."],[" ","Sequence Object Struct"," or -1"],[" ","var _seq = sequence_get(seq_Logo);","\n    seq.loopmode = seqplay_pingpong;"," ","The above code retrieves the sequence object struct from the sequence object \"seq_Loop\" and then sets the loop mode for the sequence (all subsequently created sequence instances will now use this loop mode)."," ","Back: ","Sequences"," ","Next: ","sequence_track_new"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"681"})