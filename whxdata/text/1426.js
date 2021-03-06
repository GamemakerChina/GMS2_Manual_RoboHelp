rh._.exports({"0":[["date_valid_datetime"]],"1":[["date_valid_datetime"]],"2":[["date_valid_datetime"]],"3":[["\n  ","\n  "],["\n  ","With this function you can check a datetime value to see if it is valid (returns ","true",") or not (returns ","false","). Note that this function will only consider a valid datetime as being ","after"," 1/1/1970 and anything before that will return ","false",", so the earliest you can check would be:","\n  ","date_valid_datetime(1970, 01, 01, 0, 0, 0);","\n  "," ","\n  "],["\n  ","date_valid_datetime(year, month, day, hour, minute, second);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","year","Real","\n        ","The year to check.","\n     ","\n      ","\n        ","month","Real","\n        ","The month to check.","\n     ","\n      ","\n        ","day","Real","\n        ","The day to check.","\n     ","\n      ","\n        ","hour","Real","\n        ","The hour to check.","\n     ","\n      ","\n        ","minute","Real","\n        ","The minute to check.","\n     ","\n      ","\n        ","second","Real","\n        ","The second to check.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if date_valid_datetime(2011, 9, 15, 10, 3, 30)","\n    {","\n        mydatetime = date_create_datetime(2011, 9, 15, 10, 3, 30);","\n    }","\n  ","This will set \"mydatetime\" to 15th September 2011, 10:03.30, if it is a valid value (which it is).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Date And TIme","\n        ","Next: ","date_date_of","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["date_valid_datetime"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1426"})