rh._.exports({"0":[["xboxlive_show_profile_card_for_user"]],"1":[["xboxlive_show_profile_card_for_user"]],"2":[["xboxlive_show_profile_card_for_user"]],"3":[["\n  ","\n  "],["\n  ","With this function you can request that the XBox shows the profile card for the target user ID pointer. The function requires both the user ID pointer for the user that is ","requesting"," the information as well as the user ID pointer of the user to ","target"," and get the profile card of.","\n  "," ","\n  "],["\n  ","xboxlive_show_profile_card_for_user(requesting_user_id, target_user_id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","requesting_user_id","Xbox User ID","\n        ","The user ID (a pointer) of the requesting user","\n     ","\n      ","\n        ","target_user_id","Xbox User ID","\n        ","The user ID (a pointer) of the user to get the profile card of","\n     ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if (gamepad(0, gp_start))","\n    {","\n        xboxlive_show_profile_card_for_user(user[0], user[1]);","\n    }","\n  ","The above code checks for a gamepad button press and if one is detected it shows the profile card for the given user.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Users And Accounts","\n        ","Next: ","xboxlive_reputation_for_user","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["xboxlive_show_profile_card_for_user"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"884"})