rh._.exports({"0":[[" ","animcurve_channel_evaluate"]],"1":[["animcurve_channel_evaluate"]],"2":[["animcurve_channel_evaluate"]],"3":[[" ","animcurve_channel_evaluate"]],"4":[[" ","This function can be used to get the value at a specific point in time from a channel ","struct",". You supply the struct pointer for the channel (as returned by the function ","animcurve_get_channel()",", or as returned in the animation curve struct from the function ","animcurve_get()",") and the \"x\" (time) position along the curve channel to evaluate. This position should be between 0 and 1, and the function will return the curve value at that position, or it will return 0 if the channel struct supplied is invalid."],[" ","animcurve_channel_evaluate(channel_struct, posx);"," ","Argument"," ","Type"," ","Description"," ","channel_struct"," ","Animation Curve Channel Struct"," ","The struct pointer for the channel to evaluate."," ","posx"," ","Real"," ","The position in time to check (from 0 to 1)."],[" ","Real"],[" ","var _channel = animcurve_get_channel(ac_AlphaCurve, 0);","\n    var _val = animcurve_channel_evaluate(_channel, sin(current_time/1000));","\n    image_alpha = _val;"," ","The above code gets the channel struct for the animation curve asset \"ac_AlphaCurve\". It then uses the returned evaluation value to set the image alpha for the instance."," ","Back: ","Animation Curves"," ","Next: ","animcurve_create"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1423"})