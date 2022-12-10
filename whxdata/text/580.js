rh._.exports({"0":[["os_lock_orientation"]],"1":[["os_lock_orientation"]],"2":[["os_lock_orientation"]],"3":[["\n  ","\n  "],["\n  ","With this function you can \"lock\" your device to the current orientation until such time as you \"free\" it to allow all ","Game Options"," enabled orientations again for that target platform. Note that you likely want to confirm the orientation is as desired before locking.","\n  "," ","\n  "],["\n  ","os_lock_orientation(flag)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","flag","Boolean","\n        ","Set to ","true"," or ","false"," to enable or disable orientation locking.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if (os_type == os_android) || (os_type == os_ios)","\n    {","\n        os_lock_orientation(true);","\n    }","\n  ","The above code checks the OS type and if it is either Android or an iOS then the orientation locking is flagged as ","true",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","os_check_permission","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["os_lock_orientation"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"580"})