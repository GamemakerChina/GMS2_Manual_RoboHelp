rh._.exports({"0":[[" ","animcurve_get_channel"]],"1":[["animcurve_get_channel,animcurvetype_linear,animcurvetype_catmullrom"]],"2":[[" ","animcurve_get_channel"]],"3":[[" ","This function returns the ","struct"," containing the channel data for the channel specified in an animation curve asset or struct (as returned by ","animcurve_get",")."," ","You supply the animation curve ID or struct as well as the channel name or index, and the function will return a struct with the following format:"," ","Variable Name"," ","Data Type"," ","Description"," ","name"," ","String"," ","This is the name of the channel."," ","type"," ","Animation Curve Interpolation Type Constant"," ","This will be one of the constants ","animcurvetype_linear"," for linear interpolation between points, ","animcurvetype_catmullrom"," for \"smooth\" interpolation between the points using catmull-rom interpolation, or ","animcurvetype_bezier"," for Bezier interpolation."," ","iterations"," ","Real"," ","If the channel is using catmull-rom (\"smooth\") interpolation this holds how many points have been generated for each segment of the curve (note that these extra points are internal to the function and only used for the runtime calculations). If the channel is using linear interpolation, this value will still exist but can be ignored as it has no bearing on how the curve is interpolated."," ","points"," ","Array"," pointer"," ","This is an array, where each item in the array is a point struct."," ","The first required argument is the Animation Curve as it was defined in the Asset Browser, or the struct pointer as returned by the function ","animcurve_create()","."," ","The second required argument is a string that refers to the channel as it was defined in the Animation Curve asset, or you can supply an index value, which is from 0 to ","n",", where ","n"," is the last channel in the curve asset (eg: if an animation curve has 4 channels, they will be indexed from 0 to 3)."," ","Note that passing an index value will require less processing than passing in a channel name. If the function fails (ie: no channel exists with the given name or index) then you will get an error."],[" ","The ","points"," member of the returned struct contains an array, which contains all of the channel's points as structs."," ","One point struct has the following variables:"," ","Variable Name"," ","Data Type"," ","Description"," ","posx"," ","Real"," ","The position in time (normalised from 0 to 1) of the point."," ","value"," ","Real"," ","The value of the point."," ","The ","points"," member only allows you to get and set the array variable. You cannot run "," "," on the ","points"," array to modify it."," ","To modify the ","points"," array, store it in a variable, which will create a copy. Then modify that copy with the array functions, and apply that copy back to the ","points"," member in the struct."," ","var _points_copy = channel_struct.points;"," ","\n    array_delete(_points_copy, 0, 1);"," ","\n    channel_struct.points = _points_copy;\n  "],[" ","animcurve_get_channel(curve_struct_or_id, channel_name_or_index);"," ","Argument"," ","Type"," ","Description"," ","curve_struct_or_id"," ","Animation Curve Struct"," or ","Animation Curve Asset"," ","The ID or struct pointer of the animation curve to target"," ","channel_name_or_index"," ","String"," or ","Real"," ","The channel name (a string) or the channel index (an integer)."],[" ","Animation Curve Channel Struct"],[" ","var _channeldata = animcurve_get_channel(ac_ButtonTween, 0);","\n    var _points = _channeldata.points;","\n    for (var i = 0; i < array_length(_points); ++i;)","\n    {","\n        _points[i].value += 1;","\n    }"," ","The above code retrieves the channel struct for channel 0 in the curve asset \"ac_ButtonTween\", then loops through the points on the channel curve and adds one to their value."," ","Back: ","Animation Curves"," ","Next: ","animcurve_channel_evaluate"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["animcurve_get_channel"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"8":[[" ","'points' Array"]],"id":"2617"})