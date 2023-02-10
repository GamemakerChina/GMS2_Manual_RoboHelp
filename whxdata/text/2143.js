rh._.exports({"0":[[" ","If Score"]],"1":[["GML Visual Action - If Score"]],"2":[["If Score"]],"3":[[" "," If Score"]],"4":[[" ","This action is used to check the value of the instance variable ","score"," using a specific expression. You give the type of expression to check with and the value to check the current ","score"," against, and the \"if\" statement will\n    always return either ","true"," or ","false"," depending on the expressions and values used. The available expressions are:"," ","Equals to"," - The variable and the value are both exactly equal"," ","Less than"," - The variable is less than the value"," ","Greater than"," - The variable is greater than the value"," ","Less than or Equal to"," - The variable is less than ","or"," equal to the value"," ","Greater than or Equal to"," - The variable is greater than ","or"," equal to the value"," ","If you flag the ","Not"," argument, then the above will be ","negated expressions",", for example \"equals to\" becomes \"","not"," equals to\", so you would be checking if the ","score"," value is not equals to the given value."," ","IMPORTANT NOTE",": Due to ","floating point precision issues",", checking to see if two values are exactly equal may return ","false",", since one may be exactly 1, while\n    the other may be 1.00000000000001. This can be avoided by using the ","Decimal to Integer"," action before checking or using the \"greater than\" or \"less than\" expressions."," ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:"," ","These actions will now be run if the \"if\" evaluates to ","true",", while any\n    actions dropped elsewhere will be performed after the \"if\" block."],[" ","Argument"," ","Description"," ","Not"," ","Set to check if the expression does ","not"," evaluate to true."," ","Expression"," ","The type of expression to use for the check."," ","Value"," ","The value to check the ","score"," against."],[" ","The above action block code will add 1 onto the score value and then check it to see if it is equal\n    to 1000. If it is then 1 is added on to the global scope variable \"Level\"."," ","Back: ","Instance Variable Actions"," ","Next: ","If Lives"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2143"})