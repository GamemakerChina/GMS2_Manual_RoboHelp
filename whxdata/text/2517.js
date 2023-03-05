rh._.exports({"0":[[" ","Declare A New Function"]],"1":[["GML Visual Action - Declare A New Function"]],"2":[["Declare A New Function"]],"3":[[" "," Declare A New Function"],[" ","Extended Examples"]],"4":[[" ","This action can be used to create a new user-defined function, which can later be called at any time in your code. A user-defined function is one that you define to do a task that isn't covered by the built-in GML Visual actions or GML runner functions, and can be global, instance or local in scope (see ","here"," for more information on scope); they can also be used as ","constructors"," to create ","structs",". To find out more about using this action to create global functions, please see the section on ","Creating Action Functions","."," ","To use this action, you can add it to an event or a script and give the new function a name. You then provide the required arguments/parameters that the function will take, and the default values for any optional arguments."," ","If the function is to be used as a constructor (which is used to create a struct), then you need to check the ","Constructor ","option and later use the ","New"," action to create a struct from the function. You may also flag the function as being ","static",", which means that it will only be defined once no matter how many times this action is executed. Finally, if the function is only going to be used locally in the same event and nowhere else, then you can enable the ","Temp ","option."," ","Once you have defined the name and the parameters, you can attach the actions that you want the function to run when it is called in your code, by dropping them to the side of the action as shown in the image below:"," ","You can see examples of using this action as both a regular function and a constructor function in the \"Extended Examples\" section given below."],[" ","Argument"," ","Description"," ","Name"," ","The name of the new function."," ","Argument [+]"," ","The different arguments that can be passed into the function, and their default values if optional."," ","Constructor"," ","Whether this function is a constructor."," ","Static"," ","Whether this function is static."," ","Temp"," ","Whether the function is temporary (meaning that it's only used within the current event)."],[" ","The above action block would go in the ","Create Event"," of an instance or a script, and declares a new function called ","set_vec"," with three arguments: ","_x",", ","_y"," and ","spd",". These arguments are then used in the actions that the function contains to set the direction and speed of the instance, which happens when the function is called. You would later call the function using the ","Function Call"," action in any subsequent events, like this:"," ","In the above image, the ","set_vec"," function is called which changes the instance's direction to point towards the mouse's X/Y position and sets the speed to 5."],[" ","The above action block would go in the ","Create Event"," of an instance or a script, and declares a new ","constructor"," function called ","init_char_struct"," with four arguments: ","_name",", ","_location",", ","_hp"," and ","_mana",", with the last two being optional with a default value of 100 (this means that if those arguments are not specified when the function is called, their default values will be used instead). These arguments are then used to create some variables within the struct that the function is creating."," ","You would later call this function using the ","New"," action to create a struct, like this:"," ","The function is called and will return a new struct which is stored in the array ","char",", and the struct will be populated with the variables ","name",", ","location",", ","hp"," and ","mana",", set to the values that were passed into the corresponding arguments in the function call."," ","Back: ","Common Actions"," ","Next: ","Assign Variable"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Extended Example 1"],[" ","Extended Example 2"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2517"})