rh._.exports({"0":[[" ","Declare Temporary Variable"]],"1":[["GML Visual Action - Declare Temporary Variable"]],"3":[[" "," Declare Temporary Variable"]],"4":[[" ","This action is used to declare and give an initial value to a ","temporary variable ","(also called a ","local variable","), which is a variable that ","only exists for the duration of the event or script that it was declared in",". Temporary variables\n    are very useful for storing values that are only needed for a single operation and prevent your objects becoming \"cluttered\" with variables that may only be used once. They are also very useful for breaking down complex operations, or for\n    setting values in other instances when you change the action scope. This is because variables declared as temporary are","not","scoped to any particular instance, but instead scoped to the event or script itself, so if you create a temporary variable\n    and then change the action scope using the ","Apply To..."," action, you can still check the temporary variable without issues and without changing its action scope."," ","It is worth noting that when we talk about \"values\", we don't just mean numeric values, as a variable can be a string, a pointer, a resource ID or anything else that a function can return or use, even an ","expression",". See the section on ","data types"," for more information."," ","Note that many action have a \"Temp\" check-box which enables you to create a new temporary local variable to hold the return value of the action, and this variable can be accessed in the action script or event as you would any other variable\n    thereafter. Also note that temporary local variables are scoped to the script or event in which they are created, and so they can be used by other instances in the same block when using ","Apply To","."," ","You can also add additional variables in the same action by clicking the plus icon "," beside the action, and giving another temporary local variable\n    name and value. For more advanced information on variables please see the section on ","Variables And Variable Scope","."],[" ","Argument"," ","Description"," ","Name"," ","The name of the new variable to assign, or the name of an existing variable to change."," ","Value"," ","The value that the variable should hold."],[" ","The above action block code creates two temporary variables, \" ","_dir","\"\n    and \"","_spd","\" and sets them to random values. It then uses these values to set the instance moving in a random direction at a random speed."," ","Back: ","Common Actions"," ","Next: ","Set Global Variable"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2183"})