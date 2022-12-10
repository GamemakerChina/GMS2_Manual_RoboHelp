rh._.exports({"0":[["If Health"]],"1":[["GML Visual Action - If Health"]],"2":[["If Health"]],"3":[["\n  ","\n  "],["\n  ","This action is used to check the value of the instance variable ","health"," using a specific expression. You give the type of expression to check with and the value to check the current ","health"," against, and the \"if\" statement will\n    always return either ","true"," or ","false"," depending on the expressions and values used. The available expressions are:","\n  ","\n    ","Equals to"," - The variable and the value are both exactly equal","\n    ","Less than"," - The variable is less than the value","\n    ","Greater than"," - The variable is greater than the value","\n    ","Less than or Equal to"," - The variable is less than ","or"," equal to the value","\n    ","Greater than or Equal to"," - The variable is greater than ","or"," equal to the value","\n  ","\n  ","If you flag the ","Not"," argument, then the above will be ","negated expressions",", for example \"equals to\" becomes \"","not"," equals to\", so you would be checking if the ","health"," value is not equals to the given value.","\n  ","IMPORTANT NOTE",": Due to ","floating point precision issues",", checking to see if two values are exactly equal may return ","false",", since one may be exactly 1, while\n    the other may be 1.00000000000001. This can be avoided by using the ","Decimal to Integer"," action before checking or using the \"greater than\" or \"less than\" expressions.","\n  ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:","\n  ","These actions will now be run if the \"if\" evaluates to ","true",", while any\n    actions dropped elsewhere will be performed after the \"if\" block.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Not","\n        ","Set to check if the expression does ","not"," evaluate to true.","\n      ","\n      ","\n        ","Expression","\n        ","The type of expression to use for the check.","\n      ","\n      ","\n        ","Value","\n        ","The value to check the ","health"," against.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code will add 25 onto the ","health"," variable and then check to see if\n    the variable is now greater than 100, and if it is it will be set to 100.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instance Variable Actions","\n        ","Next: ","Set Score","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" If Health"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2197"})