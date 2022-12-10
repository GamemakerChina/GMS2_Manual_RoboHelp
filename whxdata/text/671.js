rh._.exports({"0":[["move_contact_all"]],"1":[["move_contact_all"]],"2":[["move_contact_all"]],"3":[["\n  ","\n  "],["\n  ","This function will move the instance running the code a set number of pixels in the specified direction until it meets ","any"," other instance with a valid mask. You can use -1 or 0 for the maxdist being a default 1000px, ie: ","GameMaker"," will move the instance continually up 1000 pixels until it is out of collision.","\n  "," ","\n  "],["\n  ","move_contact_all(dir, maxdist);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","dir","Real","\n        ","The direction to move in.","\n     ","\n      ","\n        ","maxdist","Real","\n        ","The maximum distance the object can travel (-1 or 0 a default value of 1000 pixels).","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if !place_meeting(x, y + 1, all)","\n    {","\n        move_contact_all(270, -1);","\n    }","\n  ","The above code will check beneath the instance for a collision, and if there is none, then it will move it down until there is or until 1000pixels have been covered.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement","\n        ","Next: ","move_contact_solid","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["move_contact_all"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"671"})