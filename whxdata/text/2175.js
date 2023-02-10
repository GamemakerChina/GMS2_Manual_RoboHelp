rh._.exports({"0":[[" ","Decimal To Integer"]],"1":[["GML Visual Action - Decimal To Integer"]],"2":[["Decimal To Integer"]],"3":[[" "," Decimal To Integer"]],"4":[[" ","This action will take a decimal number and convert it into an integer. You give the value to convert and then select the type of rounding that should be done to turn it into an integer value. The types of rounding available are:"," ","Round",": This takes a decimal number and rounds it up ","or"," down to the nearest integer number. In the special case where the number supplied is exactly half an integer (for example, 1.5, 17.5, -2.5, etc...) the number will be rounded to\n      the nearest ","even"," value, for example, 2.5 would be rounded to 2, while 3.5 would be rounded to 4. This type of rounding is called ","bankers rounding"," and over large numbers of iterations or when using floating point maths, it gives a statistically\n      better rounding than the more traditional \"round up if over .5 and round down otherwise\" approach."," ","Ceil",": This will take a decimal value and round it ","up"," to the nearest integer. Unlike round (above) this does not take into consideration the decimal part of the value, so a number like 5.0000001 would still be rounded up to 6. It is worth\n      noting that if you are using the Random action ","Get Random Number"," to generate a random decimal value and then calling this action to round it up, then you ","may"," get unexpected results. The random\n      action could potentially return 0, and using \"Ceil\" on that will not give 1 but 0, so if you get a random decimal from 0 to 9 and use this function you may expect to get integers from 1 to 10, but in reality you could get integers from\n      0 to 10. This is a remote possibility but should be taken into account when using this action."," ","Floor",": This will take a decimal value and round it ","down"," to the nearest integer value. Unlike round (above) this does not take into consideration the decimal part of the value, so a number like 5.9999999 would still be floored down to\n      5."," ","Once you have selected the rounding type, you must supply the number to round (this can be a variable), and then give a target variable to return the new integer value to (which can be flagged as a temporary local variable)."],[" ","Argument"," ","Description"," ","Rounding"," ","The type of rounding to use to get the integer (see description above)"," ","Number"," ","The decimal number to round to an integer"," ","Target"," ","The target variable to store the returned integer"],[" ","The above action block code takes a decimal value and converts it to an integer,\n    storing the returned value in a temporary local variable. This value is then turned into a string and drawn to the screen."," ","Back: ","Data Type Actions"," ","Next: ","String To Number"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2175"})