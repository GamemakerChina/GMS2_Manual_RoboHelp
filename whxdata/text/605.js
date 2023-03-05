rh._.exports({"0":[[" ","timeline_exists"]],"1":[["timeline_exists"]],"2":[["timeline_exists"]],"3":[[" ","timeline_exists"]],"4":[[" ","With this function you can check and see whether a time line exists (returns ","true",") or not (returns ","false","). This is particularly useful when creating Timelines dynamically using the ","timeline_add()"," function, but you should note that if you search for an uninitialised variable (that would otherwise be assigned to a time line's index) an error will be thrown."],[" ","timeline_exists(ind);"," ","Argument","Type"," ","Description"," ","ind","Timeline Asset"," ","The index of the time line to check for."],[" ","Boolean"],[" ","if timeline_exists(global.tl)","\n    {","\n        timeline_delete(global.tl);","\n    }"," ","The above code checks to see if a time line exists and is indexed in the global variable \"tl\" and if so it then deletes that time line."," ","Back: ","Timelines"," ","Next: ","timeline_get_name"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"605"})