rh._.exports({"0":[[" ","highscore_value"]],"1":[["highscore_value"]],"2":[["highscore_value"]],"3":[[" ","highscore_value"]],"4":[[" ","With this function you can retrieve the score value that has been stored in the high score list at the given position. If no score has been entered, the function will return 0."],[" ","highscore_value(place);"," ","Argument","Type"," ","Description"," ","place","Real"," ","The place on the table (1-10)."],[" ","N/A"],[" ","var i = 9;","\n    repeat(10)","\n    {","\n        scr[i] = highscore_value(i + 1);","\n        i -= 1;","\n    }"," ","The above code will loop through the high score list and store all the scores in an array."," ","Back: ","General Game Control"," ","Next: ","highscore_clear"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"188"})