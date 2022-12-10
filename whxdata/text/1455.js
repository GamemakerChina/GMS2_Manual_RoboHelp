rh._.exports({"0":[["random_range"]],"1":[["random_range"]],"2":[["random_range"]],"3":[["\n  ","\n  "],["\n  ","This function returns a random floating-point (decimal) number between the specified lower limit (inclusive) and the specified upper limit (inclusive).","\n  ","For example, ","random_range(20,50)"," will return a random number from 20.00 to 50.00, but the value may be a real number like 38.65265. Real numbers can also be used as input arguments.","\n  ","NOTE"," This function will return the same value every time the game is run afresh due to the fact that ","GameMaker"," generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use ","randomise()"," at the start of your game.","\n  "," ","\n  "],["\n  ","random_range(n1, n2);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","n1","\n        ","Real","\n        ","The low end of the range from which the random number will be selected.","\n      ","\n      ","\n        ","n2","\n        ","Real","\n        ","The high end of the range from which the random number will be selected.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","score += random_range(500, 600);","\n  ","This will add anywhere between 500 and 600, to the total score.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Number Functions","\n        ","Next: ","irandom","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["random_range"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1455"})