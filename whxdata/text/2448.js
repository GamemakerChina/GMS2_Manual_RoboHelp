rh._.exports({"0":[[" ","for"]],"1":[["for"]],"2":[["for"]],"3":[[" ","for"]],"4":[[" ","One of the most used ways to iterate over a ","statement"," (or statements) multiple times is to use a ","for"," loop, which has this form:"," ","for (<assignment>; <expression>; <operation>;)","\n    {","\n        <statement>;","\n        <statement>;","\n        ...","\n    }"," ","This works as follows - First the assignment is executed which assigns a value to a variable, then the ","expression","  is evaluated and, if it is ","true",", the statements in the curly brackets{} are executed executed. Next the operation is performed on the assigned variable and then the expression is evaluated again. This loop will continue until the expression is found to be ","false","."," ","Now, this may sound complicated when written like that, but you should interpret it as:"," ","The first assignment initializes the for-loop"," ","The expression tests whether the loop should be ended"," ","The statement is performed"," ","The operation is performed"," ","Go back to step 2 and perform the expression again and continue or exit the loop"," ","This is extremely useful for doing repetitive tasks that would involve multiple lines of code in any other way, and is commonly used as a counter for evaluating arrays, drawing things, setting incremental values, etc... The following code example illustrates a typical use for this type of statement:"," ","for (var i = 0; i < 10; i += 1)","\n    {","\n        draw_text(32, 32 + (i * 32), string(i) + \". \"+ string(scr[i]));","\n    }"," ","The above code initialises a ","for"," loop, starting at 0 and counting up to (and including) 9, and then uses the loop value of ","i"," to draw the values stored in an array down the screen. Note how the ","for"," loop variable ","i"," is used to not only loop through the array, but to draw a number as well as tell ","GameMaker"," where to draw the values to in the room. This flexibility is one of the main reasons why ","for"," loops are so important in programming."," ","When should you use a ","for"," loop?"," Anytime you need to perform a fixed number of iterations over one or more statements while keeping track of the ","iteration"," that is currently being run and using that iteration value."," ","NOTE",": You will see multiple examples when working with other people of the variables \"","i","\" and \"","j","\" being used for the loop counter variable. These are ","not"," obligatory variable names and you can use anything like \"","a","\" or \"","foo","\" or whatever. The use of \"","i","\" and \"","j","\" is simply a standard convention in programming."," ","It is worth noting that you can use the special ","break"," and ","continue"," statements within a ","for"," loop too. Using ","break"," will immediately exit the loop and move on to any code that is in the event or function after the loop should have finished, e.g.:"," ","var _inst = noone;","\n    for (var i = 0; i < 10; i += 1)","\n    {","\n        _inst = instance_find(obj_Enemy_Parent, i);","\n        if instance_exists(_inst)","\n        {","\n            if _inst.object_index == obj_Enemy_Melee","\n            {","\n                break;","\n            }","\n        }","\n    }","\n    target = _inst;"," ","The above code loops through the 10 nearest instances of the given \"parent\" object, and if an instance is found it checks the instance object ID, and if it is an instance of ","obj_Enemy_Melee"," then the loop is ended using ","break"," and the ID value assigned to a variable (if no instance is found, then the keyword ","noone"," will be added to the variable)."," ","An example of using ","continue"," in a ","for"," loop would be:"," ","var _val = 0;","\n    for (var i = 0; i < 10; i += 1)","\n    {","\n        if (val_array[i] <= 0)","\n        {","\n            continue;","\n        }","\n        _val += val_array[i];","\n    }","\n    draw_text(32, 32, \"Positive Values Total = \" + string(_val));"," ","This code will check the value stored in each array position of a 10 length 1D ","array",", and if any are less than or equal to 0 it will ","continue"," the loop, meaning that the current iteration will end, ","i"," will be incremented, and the next loop iteration will be started. If the value is greater than 0, then it is added to the local variable ","_val",", and after the loop is finished the total value is drawn to the screen."," ","For more examples of loop keywords please see the sections on ","repeat",", ","while",", and ","do / until","."," ","Back: ","Language Features"," ","Next: ","switch"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2448"})