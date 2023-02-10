rh._.exports({"0":[[" ","gesture_tap_count"]],"1":[["gesture_tap_count"]],"2":[["gesture_tap_count"]],"3":[[" ","gesture_tap_count"]],"4":[[" ","This function is used to set whether tap counting is enabled or disabled. When set to ","true"," tap counting is enabled, and when set to ","false"," it is disabled, although you can check which state it is in using the function ","gesture_get_tap_count()",". When enabled, each tap event will have an additional \"tapcount\" DS map entry which will have registered the number of taps, and when enabled it means that ","all"," tap events will be triggered, ie: two taps will trigger both the single tap event and the double tap event, with the single tap event tap count being 1 and the double tap event tap count being 2. The tap count value will be reset to 0 after the time set for a double-tap detection has passed (see the function ","gesture_double_tap_time()","). If tap counting is disabled, then the initial tap won't be registered until the double-tap time has passed and no second tap has been detected. Note that this is ","enabled"," by default."],[" ","gesture_tap_count(enable);"," ","Argument","Type"," ","Description"," ","enable","Boolean"," ","Enable (set to ","true",") or disable (set to ","false",") tap counting."],[" ","N/A"],[" ","if !gesture_get_tap_count()","\n    {","\n        getsure_tap_count(true);","\n    }"," ","The above code checks to see if tap counting is enabled and if it is not then it is switched on."," ","Back: ","Gesture Input"," ","Next: ","gesture_pinch_distance"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1403"})