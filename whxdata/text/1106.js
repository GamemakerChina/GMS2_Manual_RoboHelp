rh._.exports({"0":[["show_question"]],"1":[["show_question"]],"2":[["show_question"]],"3":[["\n  ","\n  "],["\n  ","This function creates a pop-up message box with two buttons for \"Yes\" and \"No\". It returns ","true"," or ","false"," depending on which one of the two buttons the user presses.","\n  ","NOTE"," This function is for ","debug use only"," on the Windows target, but is ","deprecated"," on all other targets.","\n  "," ","\n  "],["\n  ","show_question(str);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","str","\n        ","String","\n        ","The string to show in the pop-up question.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if (score > 500) && debug_mode","\n    {","\n        if show_question(\"Continue to next room?\")","\n        {","\n            room_goto(rm_Level2);","\n        }","\n        else game_end();","\n    }","\n  ","The above code will check the score and if it is over 500, it will ask the user if they wish to continue or not and if the \"yes\" button is clicked it will go to another room, but if the \"no\" button is selected it will end the game.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Debugging","\n        ","Next: ","show_debug_message","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["show_question"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1106"})