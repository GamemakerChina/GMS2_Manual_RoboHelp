rh._.exports({"0":[["date_is_today"]],"1":[["date_is_today"]],"2":[["date_is_today"]],"3":[["\n  ","\n  "],["\n  ","This function will return ","true"," if the given datetime value is the day it is being checked on (ie: today), or ","false"," otherwise. This can be a handy function for things like Easter Eggs in your games, or for unlocking seasonal content. Note that this function will be affected by the time zone set (default is local time) which you can change using the ","date_set_timezone()"," function.","\n  "," ","\n  "],["\n  ","date_is_today(date);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","date","Datetime","\n        ","The datetime to use.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if date_is_today(global.Halloween)","\n    {","\n        global.Max_Levels = 200;","\n    }","\n  ","The above code will check the datetime stored in the global variable \"Halloween\" to see if it is today, and if it is it sets another global variable to a new value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Date And TIme","\n        ","Next: ","date_leap_year","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["date_is_today"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"622"})