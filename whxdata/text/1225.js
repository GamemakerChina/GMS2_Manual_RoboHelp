rh._.exports({"0":[[" ","irandom"]],"1":[["irandom"]],"2":[["irandom"]],"3":[[" ","irandom"]],"4":[[" ","This function returns a random value as an integer (whole number). So, for example, to get a random number from 0 to 9 you can use ","irandom(9)"," and it will return a number from 0 to 9 ","inclusive","."," ","Floats can also be used but the upper value after the point will be excluded, so ","irandom(9.7)"," will return a value from 0 to 9 only. The function has an upper bound of $7fffffffffffffffLL, so care should be taken if using very large numbers."," ","NOTE"," This function will return the same value every time the game is run afresh due to the fact that ","GameMaker"," generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use ","randomise"," at the start of your game."],[" ","irandom","(n);"," ","Argument"," ","Type"," ","Description"," ","n"," ","Real"," ","The upper range from which the random number will be selected."],[" ","Real"],[" ","if (","irandom","(9) == 1)","\n    {","\n        score += 100;","\n    }"," ","This will produce a one in ten (since 0 is included) chance of adding 100 to the score."," ","Back: ","Number Functions"," ","Next: ","irandom_range"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1225"})