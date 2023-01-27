rh._.exports({"0":[[" ","os_powersave_enable"]],"1":[["os_powersave_enable"]],"2":[["os_powersave_enable"]],"3":[[" ","os_powersave_enable"]],"4":[[" ","With this function you can turn on or off the power saving features of the device. This is important as certain games (for example those that use the tilt functions) may not generate events that the OS can interpret as being user input and so shut down the screen or exit the game. By setting this function to ","false"," you can disable the power saving features and ensure that the screen (and game) are always functioning."," ","NOTE",": This is limited to iOS and Android targets."],[" ","os_powersave_enable(flag)"," ","Argument","Type"," ","Description"," ","flag","Boolean"," ","Set to ","true"," or ","false"," to enable or disable powersave functions."],[" ","N/A"],[" ","if (os_type == os_android) || (os_type == os_ios)","\n    {","\n        os_powersave_enable(false);","\n    }"," ","The above code checks the OS type and if it is either Android or an iOS then power saving features are deactivated."," ","Back: ","OS And Compiler"," ","Next: ","os_lock_orientation"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"804"})