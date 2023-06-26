rh._.exports({"0":[[" ","move_contact_all"]],"1":[["move_contact_all"]],"2":[[" ","move_contact_all"]],"3":[[" ","This function will move the instance running the code a set number of pixels in the specified direction until it meets ","any"," other instance with a valid mask. You can use -1 or 0 for the maxdist being a default 1000px, ie: ","GameMaker"," will move the instance continually up 1000 pixels until it is out of collision."],[" ","move_contact_all(dir, maxdist);"," ","Argument","Type"," ","Description"," ","dir","Real"," ","The direction to move in."," ","maxdist","Real"," ","The maximum distance the object can travel (-1 or 0 a default value of 1000 pixels)."],[" ","N/A"],[" ","if !place_meeting(x, y + 1, all)","\n    {","\n        move_contact_all(270, -1);","\n    }"," ","The above code will check beneath the instance for a collision, and if there is none, then it will move it down until there is or until 1000pixels have been covered."," ","Back: ","Movement"," ","Next: ","move_contact_solid"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["move_contact_all"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"641"})