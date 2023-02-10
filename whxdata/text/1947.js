rh._.exports({"0":[[" ","layer_sequence_play"]],"1":[["layer_sequence_play"]],"2":[["layer_sequence_play"]],"3":[[" ","layer_sequence_play"]],"4":[[" ","With this function you can start the playback of the given sequence. You supply the sequence element ID as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," and the function will play the sequence, which you can then pause if required using the function ","layer_sequence_pause()","."," ","IMPORTANT!"," If your sequence has any instances in it, these instances shouldn't change their ","image_xscale","  / ","image_yscale"," / ","image_angle"," / ","x"," / ","y"," variables as they will be overwritten when the sequence updates each step after starting to be played."],[" ","layer_sequence_play(sequence_element_id)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","N/A"],[" ","if keyboard_check_pressed(ord(\"P\"))","\n    {","\n        global.Pause = !global.Pause;","\n        var a = layer_get_all_elements(layer);","\n        for (var i = 0; i < array_length(a); i++;)","\n        {","\n            if layer_get_element_type(a[i]) == layerelementtype_sequence","\n            {","\n                if global.Pause","\n                {","\n                    layer_sequence_pause(a[i]);","\n                }","\n                else","\n                {","\n                    layer_sequence_play(a[i]);","\n                }","\n            }","\n        }","\n    }"," ","The above code checks to see if the game has been paused or not when a key is pressed. If the game is paused, then it loops through all sequence elements on the current layer (the layer of the calling instance) and pauses their playback, and if the game is not paused, then the loop will start their playback again."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_speedscale"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1947"})