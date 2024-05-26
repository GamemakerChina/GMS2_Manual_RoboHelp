rh._.exports({"0":[[" ","scheduler_resolution_set"]],"1":[["scheduler_resolution_set"]],"2":[["scheduler_resolution_set"]],"3":[[" ","scheduler_resolution_set"]],"4":[[" ","This function is used to change the resolution of the Windows thread scheduler. The resolution value supplied in the argument needs to be in ","milliseconds","."," ","By default, ","GameMaker"," uses a resolution of 1 millisecond, which is the smallest resolution allowed and gives the best performance. Changing the resolution to a higher value may affect performance negatively, but it may also reduce power consumption."," ","You can supply -1 as the argument to revert the resolution to its default value (as set by Windows). Note that changing the scheduler's resolution will impact all processes running at the same time as your game."," ","NOTE",": This function is for ","Windows ","only."],[" ","scheduler_resolution_set(milliseconds);"," ","Argument"," ","Type"," ","Description"," ","milliseconds"," ","Real"," ","The new resolution value (in milliseconds) or -1 for default"],[" ","N/A"],[" ","scheduler_resolution_set(2);"," ","This example sets the resolution of the Windows thread scheduler to 2 milliseconds."," ","Back: ","OS And Compiler"," ","Next: ","clipboard_has_text"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1182"})