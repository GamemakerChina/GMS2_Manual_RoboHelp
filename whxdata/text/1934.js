rh._.exports({"0":[[" ","gpu_get_zfunc"]],"1":[["gpu_get_zfunc,cmpfunc_never,cmpfunc_less,cmpfunc_equal,cmpfunc_lessequal,cmpfunc_greater,cmpfunc_notequal,cmpfunc_greaterequal,cmpfunc_always"]],"2":[["gpu_get_zfunc,cmpfunc_never,cmpfunc_less,cmpfunc_equal,cmpfunc_lessequal,cmpfunc_greater,cmpfunc_notequal,cmpfunc_greaterequal,cmpfunc_always"]],"3":[[" ","gpu_get_zfunc"]],"4":[[" ","This function can be used to retrieve the z comparison mode. The value returned will be one of the following constants (the default value is ","cmpfunc_lessequal","):"," ","Comparison Function Constant"," ","Constant"," ","Description"," ","cmpfunc_never"," ","Never"," ","cmpfunc_less"," ","Less"," ","cmpfunc_equal"," ","Equal"," ","cmpfunc_lessequal"," ","Less or Equal"," ","cmpfunc_greater"," ","Greater"," ","cmpfunc_notequal"," ","Not Equal"," ","cmpfunc_greaterequal"," ","Greater or Equal"," ","cmpfunc_always"," ","Always"],[" ","gpu_get_zfunc();"],[" ","Comparison Function Constant"," (see table above)"],[" ","if gpu_get_zfunc() != cmpfunc_greater","\n    {","\n        gpu_set_zfunc(cmpfunc_greater);","\n    }"," ","The above code checks to see if the z-testing method is set to ","cmpfunc_greater"," and if not then it is set to that constant."," ","Back: ","GPU Control"," ","Next: ","gpu_get_zwriteenable"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1934"})