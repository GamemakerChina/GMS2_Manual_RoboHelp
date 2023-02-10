rh._.exports({"0":[[" ","alarm_get"]],"1":[["alarm_get"]],"2":[["alarm_get"]],"3":[[" ","alarm_get"]],"4":[[" ","This function can be used to get the current value of the given alarm. You supply the alarm number from 0 to 11 and this function will return the value that the alarm is currently on. This is an alternative method to getting the ","alarm array"," value directly."],[" ","alarm_get(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Real"," ","The alarm index to get, from 0 to 11."],[" ","Real"," (integer)"],[" ","for (var i = 0; i < 12; i++)","\n    {","\n        if alarm_get(i) > 0 alarm_set(i, -1);","\n    }"," ","The above code checks all the alarms in the calling instance and if they are greater than 0 it sets them to -1, stopping them from counting down any further."," ","Back: ","Instances"," ","Next: ","alarm_set"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"382"})