rh._.exports({"0":[["Sequence Events, Moments and Broadcast Messages"]],"2":[["Sequence Events,Sequence Momements,Sequence Messages,broadcast messages,event_create,event_destroy,event_clean_up,event_step,event_step_begin,event_step_end,event_async_system,event_broadcast_message"]],"3":[["\n  ","\n  "],["\n  ","Apart from all the properties listed ","here"," for a sequence struct, you also have the possibility of adding in special \"action\" properties to a sequence. There are three different types of these \"action\" properties that can be added to a sequence object - ","Events",". ","Moments"," and ","Broadcast Messages"," - and each of these is explained in more detail in the sections below.","\n  "],["\n  ","Sequence objects can have ","events"," added to them, and these events are analogous to the events used by object assets. The events you assign to a sequence object will occur in a specific order, either once at a defined moment in the sequence life-cycle, or every frame that the sequence is running. In this section, we discuss how these events are handled using code, but they can also be added using the ","Sequence Editor",". Note that that the order of events listed here is not influenced by the ","playhead"," direction, and even if the sequence is playing backwards, the events will still be run in the order given below.","\n  ","The available events are:","\n  ","\n    ","Create",": this is triggered when a sequence instance is created on a layer.","\n    ","Destroy",": this is triggered when a sequence instance on a layer is destroyed.","\n    ","Clean-up",": this is triggered when a sequence instance is garbage collected.","\n    ","Step",": triggered just before the usual object step event. ","Important!"," If the sequence is paused then this event will not be triggered until the next step after the sequence starts playing again.","\n    ","Begin Step",": triggered just before the object begin-step event. ","Important!"," If the sequence is paused then this event will not be triggered until the next step after the sequence starts playing again.","\n    ","End Step",": triggered just before the object end-step event. ","Important!"," If the sequence is paused then this event will not be triggered until the next step after the sequence starts playing again.","\n    ","Async System",": triggered the same as any object ","Asynchronous System Event"," handlers. ","Important!"," If the sequence is paused then this event will not be triggered.","\n    ","Broadcast Message",": triggered during sequence update as a broadcast message keyframe is encountered.","\n  ","\n  ","All events need to be associated with functions that are defined in a script, so to set up an event a ","method variable"," must be assigned to a property with the correct name that tells the sequence which event should call the function. The syntax for this is as follows:","\n  ","<sequence_struct>.<event_property> = method(<sequence_struct>, <function_name>);","\n  ","The sequence struct properties for the different events are as follows:","\n  ","\n    ","event_create","\n    ","event_destroy","\n    ","event_clean_up","\n    ","event_step","\n    ","event_step_begin","\n    ","event_step_end","\n    ","event_async_system","\n    ","event_broadcast_message","\n  ","\n  ","To give an example of use, let's say we want the sequence to reverse direction when a left mouse button click is detected. We would first need to create a script with the function that we want to call, something like this:","\n  ","/// @function seq_reverse();","\n    ","\n    function seq_reverse()","\n    {","\n        if mouse_check_button_pressed(mb_left)","\n        {","\n            if self.headDirection == seqdir_right","\n            {","\n                self.headDirection = seqdir_left;","\n            }","\n            else self.headDirection = seqdir_right;","\n        }","\n    }\n  ","\n  ","In this function all we're doing is listening for a mouse press and then reversing the playback direction of the sequence that the method has been bound to. You'll notice that currently you are not able to pass any parameters to the functions which are linked to these properties, and in all cases the ","self"," variable within the scope of the function is assigned to be the sequence instance.","\n  ","NOTE",": It's worth noting that in the above script the ","self"," identifier can be omitted and is only used to explicitly show the scope of the method variable being used for this example.","\n  ","To assign this to a sequence you would then do something like this:","\n  ","var _seq = sequence_get(Sequence1);","\n    _seq.event_step = method(_seq, seq_reverse);","\n  ","We have now assigned a step event to the sequence ","object"," with a function to detect when a mouse is pressed and then change the playhead direction of the sequence ","instance"," after it has been created in a room.","\n  "],["\n  ","A sequence ","moment"," is a unique code action that is fired on one or more specified frames as the sequence plays. These code moments are - like with events (explained above) - simply predefined ","method variables"," that are triggered on the given frame. For example, say you want a sequence to create a \"bullet\" instance on a specific frame of the animation - first you'd need to create the function that is to be used for this action, something like this:","\n  ","/// @function seq_shoot();","\n    ","\n    seq_shoot = function()","\n    {","\n        instance_create_layer(sequence.xorigin, sequence.yorigin, \"Instances\", obj_Bullet);","\n    }\n  ","\n  ","You would then add this to a frame in the ","momentKeyframes"," property of the sequence struct. This is essentially a \"special\" track that is only used for this purpose and so can only take keyframe data that is associated with moment actions that you want the sequence to have. This track is created in much the same way as you would create any other track, by creating keyframe structs and filling them with keyframe data, where channel 0 is the only channel that you can use and the track type is ","seqtracktype_moment",". Below is an example of how this would be created, using the function we defined above to fire on the given moments (frames):","\n  ","var _seq = sequence_get(my_Seq);","\n    var _k = array_create(3);","\n    _k[0] = sequence_keyframe_new(seqtracktype_moment);","\n    _k[0].frame = 60;","\n    _k[1] = sequence_keyframe_new(seqtracktype_moment);","\n    _k[1].frame = 120;","\n    _k[2] = sequence_keyframe_new(seqtracktype_moment);","\n    _k[2].frame = 180;","\n    var _d = array_create(1);","\n    _d[0] = sequence_keyframedata_new(seqtracktype_moment);","\n    _d[0].channel = 0;","\n    _d[0].event = method(_d[0], seq_shoot);","\n    _k[0].channels = _d;","\n    _k[1].channels = _d;","\n    _k[2].channels = _d;","\n    _seq.momentKeyframes = _k;","\n  ","The above code will simply set frames 60, 120, and 180 of the \"moment\" track to call the method ","seq_shoot",". You'll notice that currently you are not able to pass any parameters to the functions which are used for each moment, and in all cases the ","self"," variable within the scope of the function is assigned to be the sequence instance (you generally don't need to use ","self"," but under some special cases it may be useful).","\n  "],["\n  ","Sequences can be made to generate ","broadcast messages",", which simple strings that are added to specific frames along the animation timeline, and when that point in the timeline is reached, then the string will be broadcast out to all object instances that listen for it. You can add these messages in the IDE using the ","Sequence editor",", but they can also be created and edited using code.","\n  ","To create a broadcast message on a sequence using GML, you need to add them to a frame in the ","messageEventKeyframes"," property of the sequence struct. This is essentially a \"special\" track that is only used for this purpose and so can only take keyframe data that is associated with the broadcast messages that you want the sequence to have. This track is created in much the same way as you would create any other track, by creating keyframe structs and filling them with keyframe data, where channel 0 is the only channel that you can use and the track type is ","seqtracktype_message",". Below is an example of how this would be created:","\n  ","var _seq = sequence_get(my_Seq);","\n    var _k = array_create(2);","\n    _k[0] = sequence_keyframe_new(seqtracktype_message);","\n    _k[0].frame = 60;","\n    _k[1] = sequence_keyframe_new(seqtracktype_message);","\n    _k[1].frame = 120;","\n    var _m1 = array_create(2);","\n    _m1[0] = \"Hello\";","\n    _m1[1] = \"World\";","\n    var _m2 = array_create(1);","\n    _m2[0] = \"This is a Broadcast Message\";","\n    var _d1 = array_create(1);","\n    _d1[0] = sequence_keyframedata_new(seqtracktype_message);","\n    _d1[0].channel = 0;","\n    _d1[0].events = _m1;","\n    var _d2 = array_create(1);","\n    _d2[0] = sequence_keyframedata_new(seqtracktype_message);","\n    _d2[0].channel = 0;","\n    _d2[0].events = _m2;","\n    _k[0].channels = _d1;","\n    _k[1].channels = _d2;","\n    _seq.messageEventKeyframes = _k;","\n  ","You'll notice that the message text is passed to the keyframe data channel as an array. This is because you can broadcast multiple messages on the same frame, and have different object instances listen for them and react differently depending on the message they are actually expecting.","\n  ","Once a broadcast message has been emitted by the sequence, you can parse it using the ","Other"," > ","Broadcast Message"," event in object instances, which is explained in detail ","here",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Events, Moments and Broadcast Messages"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Sequence Events"],["Moments"],["Broadcast Messages"]],"id":"2593"})