rh._.exports({"0":[[" ","ds_set_precision"]],"1":[["ds_set_precision"]],"2":[["ds_set_precision"]],"3":[[" ","ds_set_precision"]],"4":[[" ","When comparing values, for example when searching in a map or sorting a list, ","GameMaker"," must decide when two values are equal. For strings and integer values this is clear but for real numbers, due to floating point round-off errors, seemingly equal numbers can easily become unequal. For example, it's possible that ","(5 / 3) * 3"," will ","not"," be equal to 5! To help avoid this, a precision value is used on all real number functions, and when the ","difference between two numbers is smaller"," than this precision they are considered equal. The default a precision of 0.0000001 is used for all data structure functions unless changed by this function."," ","NOTE",": This precision is used in all data structures but not in other comparisons in GML!"],[" ","ds_set_precision(prec);"," ","Argument"," ","Type"," ","Description"," ","prec"," ","Real"," ","The precision value (default 0.0000001)"],[" ","N/A"],[" ","ds_set_precision(0.0001);"," ","The above code will change the default precision setting for all data structure functions."," ","Back: ","Data Structures"," ","Next: ds_exists"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"889"})