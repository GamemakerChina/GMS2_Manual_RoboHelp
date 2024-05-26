rh._.exports({"0":[[" ","uwp_license_trial_user"]],"1":[["uwp_license_trial_user"]],"2":[["uwp_license_trial_user"]],"3":[[" ","uwp_license_trial_user ","OBSOLETE"]],"4":[[" ","This function will return the User ID pointer whose trial license is currently being used, or it will return ","pointer_null"," if the user is not currently active or if the game is not currently in trial mode."],[" ","uwp_license_trial_user();"],[" ","Xbox User ID"],[" ","if (gamepad_button_check_pressed(0, gp_start)) ","\n    {","\n        if (uwp_license_trial_version()) ","\n        {","\n            var _uid = uwp_license_trial_user();","\n            uwp_show_help(_uid);","\n        }","\n    }"," ","The above code checks to see if a button is pressed and then checks the app to see if it is running with a trial licence. If it is, then it gets the User ID for licence and opens the help file for that user."," ","Back: ","UWP And XBox Live"," ","Next: ","uwp_license_trial_time_remaining"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2838"})