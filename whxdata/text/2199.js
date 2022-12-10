rh._.exports({"0":[["os_device"]],"1":[["os_device,device_ios_ipad,device_ios_ipad_retina,device_ios_iphone6,device_ios_iphone6plus,device_ios_iphone5,device_ios_iphone,device_ios_iphone_retina,device_emulator,device_tablet,device_ios_unknown"]],"2":[["os_device,device_ios_ipad,device_ios_ipad_retina,device_ios_iphone6,device_ios_iphone6plus,device_ios_iphone5,device_ios_iphone,device_ios_iphone_retina,device_emulator,device_tablet,device_ios_unknown"]],"3":[["\n  ","\n  "],["\n  ","This ","read-only"," variable holds one of various constant values listed below to tell you which device you are currently running the game on. Note this variable is deprecated in favour of the function ","os_get_info()"," which returns more accurate information on the device running the game.","\n  "," ","\n  "],["\n  ","os_device","\n  "," ","\n  "],["\n  ","Device Type Constant","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Device Type Constant","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","device_ios_ipad","\n        ","iPad","\n      ","\n      ","\n        ","device_ios_ipad_retina","\n        ","Newer iPad with Retina display size of 2048 x 1536","\n      ","\n      ","\n        ","device_ios_iphone6","\n        ","iPhone6 with display size 1334 x 750","\n      ","\n      ","\n        ","device_ios_iphone6plus","\n        ","Larger iPhone 6 with display 1920 x 1080","\n      ","\n      ","\n        ","device_ios_iphone5","\n        ","iPhone5 with display size 640 x 1136)","\n      ","\n      ","\n        ","device_ios_iphone","\n        ","Older iPhone/iPod Touch (480 x 320 screen) ","or"," Android phone","\n      ","\n      ","\n        ","device_ios_iphone_retina","\n        ","Newer iPhone/iPod Touch with Retina display of 960 x 640","\n      ","\n      ","\n        ","device_emulator","\n        ","The device is actually an emulator (Windows Phone or Android)","\n      ","\n      ","\n        ","device_tablet","\n        ","Android tablet","\n      ","\n      ","\n        ","device_ios_unknown","\n        ","Unknown or not iOS","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","if (os_browser = browser_not_a_browser)","\n    {","\n        switch (os_device)","\n        {","\n            case device_ios_ipad: global.Config = 2; break;","\n            case device_ios_iphone: global.Config = 3; break;","\n            case device_ios_iphone_retina: global.Config = 4; break;","\n            case device_ios_unknown: global.Config = 5; break;","\n        }","\n    }","\n    else","\n    {","\n        global.Config = 1;","\n    }","\n  ","The above code checks to see if the game is running in a browser or not and sets a global variable to a value depending on the result of the check.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","os_type","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["os_device"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2199"})