rh._.exports({"0":[[" ","date_get_timezone"]],"1":[["date_get_timezone,timezone_local,timezone_utc"]],"2":[["date_get_timezone,timezone_local,timezone_utc"]],"3":[[" ","date_get_timezone"]],"4":[[" ","This function gets the base time zone being used for all the rest of the date and time functions. This time zone can either be ","local"," (as set by the system) or ","UTC",", and the function will return one of the following constants:"," ","Time Zone Constant"," ","Constant"," ","Description"," ","timezone_local"," ","use the local time zone as set by the system"," ","timezone_utc"," ","use Coordinated Universal Time"],[" ","date_get_timezone();"],[" ","Time Zone Constant"],[" ","if (date_get_timezone() != timezone_utc)","\n    {","\n        date_set_timezone(timezone_utc);","\n    }"," ","This code checks the base time zone setting for the game and if it is not UTC it then changes it."," ","Back: ","Date And TIme"," ","Next: ","current_time"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1153"})