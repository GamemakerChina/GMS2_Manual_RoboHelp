rh._.exports({"0":[[" ","audio_get_name"]],"1":[["audio_get_name"]],"2":[["audio_get_name"]],"3":[[" ","audio_get_name"]],"4":[[" ","This function will return the name of a given audio asset as a string."," ","The \"index\" value can be that of the asset itself (as seen in ","The Asset Browser",") or the unique ID value that is given when you play the sound using, for example, ","audio_play_sound","."," ","NOTE"," The string returned is ","not"," the same as the resource ID and cannot be used to access the resource itself, so should only be used for displaying or error checking."],[" ","audio_get_name","(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sound Asset"," ","The index of the sound to check."],[" ","String"],[" ","var snd = audio_play_sound(choose(snd_One, snd_Two, snd_Three), 0, false);","\n    var name = ","audio_get_name","(snd);","\n    show_debug_message(\"Sound = \" + name);"," ","The above code plays a random sound chosen from three different sound resources then shows a debug message with its name."," ","Back: ","Audio"," ","Next: ","audio_get_type"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1492"})