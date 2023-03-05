rh._.exports({"0":[[" ","animcurve_channel_new"]],"1":[["animcurve_channel_new,animcurvetype_linear,animcurvetype_catmullrom"]],"2":[["animcurve_channel_new,animcurvetype_linear,animcurvetype_catmullrom"]],"3":[[" ","animcurve_channel_new"]],"4":[[" ","This function can be used to create a new animation curve channel ","struct",". A channel struct has the following variables:"," ","Animation Curve Channel Struct"," ","Variable Name"," ","Data Type"," ","Description"," ","name"," ","string"," ","This is the name of the channel."," ","type"," ","Animation Curve Interpolation Type Constant"," ","This will be one of the constants given in the table below."," ","iterations"," ","integer"," ","If the channel is using catmull-rom (\"smooth\") interpolation this holds how many points have been generated for each segment of the curve (note that these extra points are internal to the function and only used for the runtime calculations). If the channel is using linear interpolation, this value will still exist but can be ignored as it has no bearing on how the curve is interpolated."," ","points"," ","array"," ","This is an array, where each item in the array is an ","Animation Curve Point Struct","."," ","Animation Curve Interpolation Type Constant"," ","Constant"," ","Description"," ","animcurvetype_linear"," ","Used for linear interpolation between points."," ","animcurvetype_catmullrom"," ","Used for smooth interpolation between points using catmull-rom interpolation."," ","animcurvetype_bezier"," ","Used for Bezier interpolation between points."," ","\n    By default when you create a new channel struct, the \"name\" variable will be an empty string, the \"type\" will be ","animcurvetype_linear"," and the \"iterations\" will be 16. All these variables can be set to the values that you require (note that the \"iterations\" value has no effect on linear curve types). Once created you need to add points to the curve, which is done by adding different point structs to the \"points\" ","array",". These point structs can be created using the function ","animcurve_point_new()","."],[" ","animcurve_channel_new();"],[" ","Animation Curve Channel Struct"],[" ","my_curve = animcurve_create();","\n    my_curve.name = \"My_Curve\";","\n    var _channels = array_create(1);","\n    _channels[0] = animcurve_channel_new();","\n    _channels[0].name = \"alpha\";","\n    _channels[0].type = animcurvetype_catmullrom;","\n    _channels[0].iterations = 8;","\n    var _points = array_create(3);","\n    _points[0] = animcurve_point_new();","\n    _points[0].posx = 0;","\n    _points[0].value = 0;","\n    _points[1] = animcurve_point_new();","\n    _points[1].posx = 0.5;","\n    _points[1].value = 1;","\n    _points[2] = animcurve_point_new();","\n    _points[2].posx = 1;","\n    _points[2].value = 0;","\n    _channels[0].points = _points;","\n    my_curve.channels = _channels;"," ","The above code creates a new animation curve struct and stores it in the variable \"my_curve\". This struct is then populated with a name and a channel array. The channel array contains a single channel with three points."," ","Back: ","Animation Curves"," ","Next: ","animcurve_point_new"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2498"})