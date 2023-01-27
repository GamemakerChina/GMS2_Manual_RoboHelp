rh._.exports({"0":[[" ","Instance Variables"]],"1":[["Instance Variables"]],"2":[["instance variables"]],"3":[[" ","Instance Variables"]],"4":[[" ","An ","instance ","variable is created within an instance of an object and is considered unique to that instance - ie: many instances of the same object can have the same variable, but each variable can hold a different value as they are ","unique ","to\n    each instance. But ","how"," is an instance variable created? Well, you create new variables by simply assigning a value to them as shown in this small example (this is called ","declaring"," the variable):"," ","potions = 12;"," life = 100;"," name = \"Jock MacSweeney\";"," strength = 5.5;"," armour = -2;"," ","As you can see you just have to give the name and then a value (the value can be any ","data type",") to set that variable and have it ready for use within an instance of the object you are coding for (note that the value can\n    come from the return value of a function or the result of an operation between other variables, etc...). These variables can then be used and modified in a number of ways from within the instance, for example this code could be in a collision event\n    and used to take an amount off of the variable \"","life","\":"," ","life -= 5 + armour;"," ","If \"","life","\" is at 100 it will now have a value of 97 (100 - (5 + -2) = 97). Now, that's a simple example, and you ","could"," replace \"","armour","\" for the actual value of -2,\n    but what happens if that value is ","hard-coded"," in multiple places and then you decide to change it? You would have to go through ALL your code and change every -2 to whatever the new value\n    is, which is time consuming and very error prone! But if you use a variable, all you have to do is reassign it a new value and the code will automatically use that new value from then onwards, making things far more flexible and far easier to fix\n    should there be a problem. It should also be noted that even if a value is not going to change it is far easier to remember what a variable called \"","life","\" means rather than just looking at a number."," ","GameMaker"," has a collection of \"built in\" instance variables too, so you should be aware of them as you may name one of your own instance variables the same or wish to have your own global variable with the same name and wonder why\n    you are getting errors. They are easy to spot, however, as they are shown in a different colour in the code editor and also come up in auto-complete and are shown in bar at the bottom of the ","code editor","."," ","There are quite a few ","runtime functions"," designed to help you when dealing with instance variables, which are all listed in the following section:"," ","Variable Functions"," ","Back: ","Variables And Variables Scope"," ","Next: ","Global Variables"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2121"})