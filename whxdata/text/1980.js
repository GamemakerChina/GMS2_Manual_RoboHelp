rh._.exports({"0":[[" ","os_version"]],"1":[["os_version"]],"2":[["os_version"]],"3":[[" ","os_version"]],"4":[[" ","This variable will tell you the version number for the OS that is running your game. For example, if you are running it on Windows 10, ","os_version"," will be equal to 655360."," ","The following table outlines the values that are returned for the most recent versions of the different OS:"," ","Operating System"," ","Version Name","\n          (version Number)"," ","Return Value (examples)"," ","Android"," ","Nougat (7.0 - 7.11)","\n          Oreo (8.0 - 8.11)","\n          Pie (9.0)","\n          Android X (10.0)"," ","24 - 25","\n          26 - 27","\n          28","\n          29"," ","iOS","\n          The return value is calculated as:","\n          (major_version * 16777216) + (minor_version * 4096) + build_number"," ","iOS 10 (10.3)","\n          iOS 11 (11.4)","\n          iOS 12 (12.0)","\n          iOS 13 (13.0) iPhone","\n          iOS 13 (13.5) iPhone/Ipad"," ","167784448","\n          184565760","\n          201326592","\n          218103808"," ","\n          218124288\n        "," ","macOS X","\n          The return value is calculated as:","\n          (major_version * 16777216) + (minor_version * 4096) + build_number"," ","El Capitan (10.11)","\n          Sierra (10.12)","\n          High Sierra (10.13)","\n          Mojave (10.14)","\n          Catalina (10.15)"," ","167817216","\n          167821312","\n          167825408","\n          167829504","\n          167833600"," ","Windows","\n          (the return value is calculated as:","\n          majorVersion * 65536 + minorVersion)"," ","Windows 7 (6.1)","\n          Windows 8 (6.2)","\n          Windows 8.1 (6.3)","\n          Windows 10 (10.0)"," ","393217","\n          393218","\n          393219","\n          655360"," ","NOTE",": Should you require further information about the Windows OS you can use the ","environment_get_variable()","."],[" ","os_version"],[" ","Real"],[" ","if (os_type == os_android) && (os_version > 10)","\n    {","\n        global.GFX = 1;","\n    }"," ","The above code checks the os type and version number and they are both correct then the global variable is set to 1."," ","Back: ","OS And Compiler"," ","Next: ","os_is_paused"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1980"})