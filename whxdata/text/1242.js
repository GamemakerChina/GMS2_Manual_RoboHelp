rh._.exports({"0":[[" ","date_current_datetime"]],"1":[["date_current_datetime"]],"2":[["date_current_datetime"]],"3":[[" ","date_current_datetime"]],"4":[[" ","Returns the date-time value of the current moment. The time returned is based on UTC, which is only converted to your ","selected time zone"," when used in another function (such as ","date_get_day",", ","date_datetime_string",", etc.)."],[" ","date_current_datetime();"],[" ","Datetime"],[" ","myhour = date_get_hour(date_current_datetime());","\n    myday = date_get_day(date_current_datetime());"," ","This would set the local variable ","myhour"," to the hour of the current time, and ","myday"," to the day of the current date. Even though ","date_current_time()"," returns time in UTC, what you get from the ","date_get_hour"," and ","date_get_day"," functions is converted to the local time by default (unless changed in ","date_set_timezone",")."," ","Back: ","Date And TIme"," ","Next: ","date_compare_date"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1242"})