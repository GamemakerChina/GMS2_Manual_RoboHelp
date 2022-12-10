rh._.exports({"0":[["os_check_permission"]],"1":[["os_check_permission,os_permission_granted,os_permission_denied,os_permission_denied_dont_request"]],"2":[["os_check_permission,os_permission_granted,os_permission_denied,os_permission_denied_dont_request"]],"3":[["\n  ","\n  "],["\n  ","With this function you can check to see if a specific permission has been granted to the game by the user. You supply the permission to check as a string using the format \"","android.permission.<permission>","\", so to check the ","RECORD_AUDIO"," permission (for example) you would call","\n  ","os_check_permission(\"android.permission.RECORD_AUDIO\");","\n  ","The function will return will return one of three constants - shown below - to tell the game how the state of the permission. For more information on app permissions, please see the ","Android Documentation",".","\n  ","IMPORTANT!"," This function is for the ","Android"," target only.","\n  "," ","\n  "],["\n  ","os_check_permission(permission)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","permission","\n        ","String","\n        ","The permission to check (a string)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Permission State Constant","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Permission State Constant","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","os_permission_granted","\n        ","This indicates that the permission has been granted","\n      ","\n      ","\n        ","os_permission_denied","\n        ","This indicates that the permission has not been granted","\n      ","\n      ","\n        ","os_permission_denied_dont_request","\n        ","This indicates that the permission has either been blocked by the phone settings, or that the user has previously denied the request and selected \"Don't ask again\".","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","if (os_type == os_android)","\n    {","\n        if (os_check_permission(\"android.permission.INTERNET\") == os_permission_denied)","\n        {","\n            os_request_permission(\"android.permission.INTERNET\");","\n        }","\n    }","\n  ","The above code checks the OS type and if is Android, it performs a check on the permissions and if the \"INTERNET\" permission has not yet been granted, it requests it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","os_request_permission","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["os_check_permission"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2185"})