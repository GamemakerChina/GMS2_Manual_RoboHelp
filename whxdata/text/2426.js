rh._.exports({"0":[["Create Time Source"]],"1":[["GML Visual Action - Create Time Source"]],"2":[["Create Time Source"]],"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","This action creates a new ","Time Source",", and stores it in the ","Target"," variable. Read ","Time Sources"," for an overview.","\n  ","This is based on the ","time_source_create()"," function. Read its page for detailed information on the arguments.","\n  ","You need to use ","Start Time Source"," to activate a ","Time Source"," after it's created.","\n  ","You must destroy a ","Time Source"," using ","Destroy Time Source"," when you no longer need it.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Target","\n        ","The variable where the new ","Time Source"," will be stored","\n      ","\n      ","\n        ","Parent","\n        ","The parent ","Time Source",": either a ","built-in Time Source"," or a custom one","\n      ","\n      ","\n        ","Period","\n        ","The period length of the ","Time Source",", how long it takes to expire","\n      ","\n      ","\n        ","Units","\n        ","The ","units"," that the period is expressed in (seconds or frames)","\n      ","\n      ","\n        ","Callback","\n        ","The ","method"," or ","script function"," to call when the ","Time Source"," expires","\n      ","\n      ","\n        ","Arguments","\n        ","OPTIONAL"," An ","array"," containing the arguments to pass into the callback function","\n      ","\n      ","\n        ","Repetitions","\n        ","OPTIONAL"," How many times the ","Time Source"," should run in total, or -1 for indefinite repetition","\n      ","\n      ","\n        ","Expiry Type","\n        ","OPTIONAL"," The ","expiry type"," for the ","Time Source","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","This code block does the following:","\n  ","\n    ","It creates a new function, with the \"Temp\" option enabled. This creates a local method variable.\n      ","\n        "," This method takes one argument, ","msg",", which it prints to the Output Log.","\n      ","\n    ","\n    ","It then creates a new ","Time Source"," with a 1-second period length.\n      ","\n        ","It specifies the ","callback_method"," variable as the \"Callback\", and an array with one argument for the function.","\n        ","This ","Time Source"," is set to repeat indefinitely, as -1 is specified in \"Repetitions\".","\n      ","\n    ","\n    ","The ","Time Source"," is then started.","\n  ","\n  ","This ","Time Source"," will execute its callback every second, printing ","\"A second has passed!\""," to the Output Log.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Time Source Actions","\n        ","Next: ","Destroy Time Source","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[[" Create Time Source"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2426"})