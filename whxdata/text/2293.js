rh._.exports({"0":[[" ","os_device"]],"1":[["os_device,device_ios_ipad,device_ios_ipad_retina,device_ios_iphone6,device_ios_iphone6plus,device_ios_iphone5,device_ios_iphone,device_ios_iphone_retina,device_emulator,device_tablet,device_ios_unknown"]],"2":[["os_device,device_ios_ipad,device_ios_ipad_retina,device_ios_iphone6,device_ios_iphone6plus,device_ios_iphone5,device_ios_iphone,device_ios_iphone_retina,device_emulator,device_tablet,device_ios_unknown"]],"3":[[" ","os_device"]],"4":[[" ","This ","read-only"," variable holds one of various constant values listed below to tell you which device you are currently running the game on. Note this variable is deprecated in favour of the function ","os_get_info()"," which returns more accurate information on the device running the game."],[" ","os_device"],[" ","Device Type Constant"," ","Device Type Constant"," ","Constant"," ","Description"," ","device_ios_ipad"," ","iPad"," ","device_ios_ipad_retina"," ","Newer iPad with Retina display size of 2048 x 1536"," ","device_ios_iphone6"," ","iPhone6 with display size 1334 x 750"," ","device_ios_iphone6plus"," ","Larger iPhone 6 with display 1920 x 1080"," ","device_ios_iphone5"," ","iPhone5 with display size 640 x 1136)"," ","device_ios_iphone"," ","Older iPhone/iPod Touch (480 x 320 screen) ","or"," Android phone"," ","device_ios_iphone_retina"," ","Newer iPhone/iPod Touch with Retina display of 960 x 640"," ","device_emulator"," ","The device is actually an emulator (Windows Phone or Android)"," ","device_tablet"," ","Android tablet"," ","device_ios_unknown"," ","Unknown or not iOS"],[" ","if (os_browser = browser_not_a_browser)","\n    {","\n        switch (os_device)","\n        {","\n            case device_ios_ipad: global.Config = 2; break;","\n            case device_ios_iphone: global.Config = 3; break;","\n            case device_ios_iphone_retina: global.Config = 4; break;","\n            case device_ios_unknown: global.Config = 5; break;","\n        }","\n    }","\n    else","\n    {","\n        global.Config = 1;","\n    }"," ","The above code checks to see if the game is running in a browser or not and sets a global variable to a value depending on the result of the check."," ","Back: ","OS And Compiler"," ","Next: ","os_type"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2293"})