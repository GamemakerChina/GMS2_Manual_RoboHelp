rh._.exports({"0":[[" ","gpu_get_texfilter"]],"1":[["gpu_get_texfilter"]],"2":[["gpu_get_texfilter"]],"3":[[" ","gpu_get_texfilter"]],"4":[[" ","With this function you can check to see whether texture filtering (linear interpolation) is enabled (returns ","true",") or not (returns ","false","). For more information on texture filtering, see the function ","gpu_set_texfilter()","."," ","NOTE",": On the HTML5 target, this function will only work with WebGL enabled."],[" ","gpu_get_texfilter();"],[" ","Boolean"],[" ","if gpu_get_texfilter()","\n    {","\n        gpu_set_texfilter(false);","\n    }","\n    else","\n    {","\n        gpu_set_texfilter(true);","\n    }"," ","The above code checks to see if texture filtering is on or off and switches it accordingly."," ","Back: ","GPU Control"," ","Next: ","gpu_get_texfilter_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"427"})