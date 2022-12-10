rh._.exports({"0":[["highscore_value"]],"1":[["highscore_value"]],"2":[["highscore_value"]],"3":[["\n  ","\n  "],["\n  ","With this function you can retrieve the score value that has been stored in the high score list at the given position. If no score has been entered, the function will return 0.","\n  "," ","\n  "],["\n  ","highscore_value(place);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","place","Real","\n        ","The place on the table (1-10).","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var i = 9;","\n    repeat(10)","\n    {","\n        scr[i] = highscore_value(i + 1);","\n        i -= 1;","\n    }","\n  ","The above code will loop through the high score list and store all the scores in an array.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Game Control","\n        ","Next: ","highscore_clear","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["highscore_value"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"210"})