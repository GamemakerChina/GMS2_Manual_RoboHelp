rh._.exports({"0":[["xboxlive_generate_player_session_id"]],"1":[["xboxlive_generate_player_session_id"]],"2":[["xboxlive_generate_player_session_id"]],"3":[["\n  ","\n  "],["\n  ","This function will generate a unique string (containing a GUID) for the current player session. This can then be used with the function ","xboxlive_fire_event()",".","\n  "," ","\n  "],["\n  ","xboxlive_generate_player_session_id();","\n  "," ","\n  "],["\n  ","String","\n  "," ","\n  "],["\n  ","if !xboxlive_user_is_signed_in()","\n    {","\n        if !xboxlive_user_is_signing_in()","\n        {","\n            xboxlive_show_account_picker();","\n        }","\n    }","\n    else","\n    {","\n        global.GamerTag = xboxlive_gamertag_for_user();","\n    }","\n  ","The above code checks to see if a user is signed-in to XBox Live and if they are signed-in, the code will get the gamertag for the user and store it in a global variable for future use. If they are not signed-in then the code checks to see if they are in the process of signing-in, in which case nothing further will happen, and if they are not, then it will open the account picker, prompting them to sign-in.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Users And Accounts","\n        ","Next: ","xboxlive_user_is_signed_in","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["xboxlive_generate_player_session_id"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"709"})