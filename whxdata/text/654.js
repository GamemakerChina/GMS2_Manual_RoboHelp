rh._.exports({"0":[[" ","sequence_create"]],"1":[["sequence_create"]],"2":[[" ","sequence_create"]],"3":[[" ","With this function you can create a new sequence object which you can then add tracks to. The function returns a ","struct"," which you can then access to setup the new sequence you have created. The contents of this struct are detailed on ","this page",". The sequence object struct can then be used to create instances of the sequence on a room layer using the function ","layer_sequence_create()",". Note that when creating sequence objects in this way you should remove them again by calling the function ","sequence_destroy()"," when they are no longer required, otherwise you will have a memory leak which can slow down and eventually crash your game."],[" ","sequence_create();"],[" ","Sequence Object Struct"],[" ","myseq = sequence_create();","\n    myseq.length = 120;","\n    myseq.loopmode = seqplay_pingpong;"," ","The above code creates a new sequence object struct and sets its playback length and loop mode."," ","Back: ","Sequences"," ","Next: ","sequence_destroy"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["sequence_create"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"654"})