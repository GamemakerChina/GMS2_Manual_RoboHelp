rh._.exports({"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","This function returns a struct containing the input values for a player. It takes an optional argument specifying the ID of the player for which inputs will be returned.","\n  ","When used in a player instance that was created by ","rollback_define_player()",", you do not need to specify a player ID, so you can call this function without any arguments.","\n  ","When used in any other instances, or player instances that were created manually, you must specify a player ID.","\n  ","For information on what inputs are returned and how they can be changed, see ","Defining Inputs",".","\n  "," ","\n  "],["\n  ","rollback_get_input(player_id);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","player_id","\n        ","Real","\n        ","OPTIONAL"," The ID of the player for which inputs will be returned.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Struct","\n  "," ","\n  "],["\n  ","var _input = rollback_get_input();","\n    ","\n    if (_input.left) x -= 2;","\n    if (_input.right) x += 2;","\n    if (_input.up) y -= 2;","\n    if (_input.down) y += 2;\n  ","\n  ","The code above gets the input struct in a player instance that was automatically created by the Rollback system. Based on the returned values, it moves the instance by 2 pixels in each direction.","\n  ","For an extended example, see ","Create a Multiplayer Game",".","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rollback Functions","\n        ","Next: ","rollback_sync_on_frame","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["rollback_get_input"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["rollback_get_input"]],"8":[["rollback_get_input"]],"9":[["rollback_get_input"]],"id":"1787"})