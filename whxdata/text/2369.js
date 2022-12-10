rh._.exports({"0":[["switch"]],"1":[["switch,case"]],"2":[["switch,default"]],"3":[["\n  ","\n  "],["\n  ","In a number of situations you want to let your instances perform different actions depending on a particular value. You can do this using a number of consecutive ","if / else"," statements, but when the possible choices gets above two or three it is usually easier to use the ","switch"," statement.","\n  ","A ","switch"," statement has the following syntax:","\n  ","switch (<expression>)","\n    {","\n        case <constant1>:","\n            <code>","\n        break;","\n    ","\n        case <constant2>:","\n            <code>","\n        break;","\n        ","\n        // more cases (with breaks)","\n    ","\n        default:","\n            <code>;","\n    }\n  ","\n  ","This works as follows:","\n  ","\n    ","First the ","expression"," is executed.","\n    ","Next, its result is compared with the different constants after each of the ","case"," ","statement","s",". When we say \"constant\" what we mean is that the value in the case cannot be a variable expression and must be a fixed value of any ","data type",", like ","\"fight\""," or ","3"," or the keyword ","noone",". ","\n    ","The execution begins from the first ","case"," statement with the matching value, ","until a ","break"," statement is encountered",".","\n    ","If no ","case"," statement has the matching value, then the ","default"," statement will be executed. It is not required to have a ","default"," statement, and if none is supplied then no action will be taken when there are no matching cases. The ","default"," statement can be placed anywhere in a switch block, however it's traditionally placed at the bottom, after all the cases.","\n  ","\n  ","NOTE"," The switch statement will continue to execute code within a ","case",", until a ","break"," is encountered. If you do not use ","break","s at the end of your cases, it will cause the switch to \"leak\" to the next ","case",", and even to a ","default"," section, if there are no ","break","s in the way. This can cause unintended behaviour as the execution of one ","case"," can result in multiple ","case","s being executed, so ensure to use ","break"," where appropriate.","\n  ","A simple example of using a switch statement would be something like this:","\n  ","switch (player_lives)","\n    {","\n        case 3:","\n            draw_sprite(20, 20, spr_face_healthy);","\n        break;","\n    ","\n        case 2:","\n            draw_sprite(20, 20, spr_face_hurt);","\n        break;","\n    ","\n        case 1:","\n            draw_sprite(20, 20, spr_face_fatal);","\n        break;","\n    ","\n        default:","\n            draw_sprite(20, 20, spr_face_fainted);","\n        break;","\n    }\n  ","\n  ","Note that multiple ","case"," statements can be used to execute the same statement, as the ","break"," is not always required for each and every ","case",". If there is no ","break"," statement for a particular ","case",", the execution simply continues with the code for the next case, e.g.:","\n  ","switch (keyboard_key)","\n    {","\n        case vk_left:","\n        case ord(\"A\"):","\n            x -= 4;","\n        break;","\n    ","\n        case vk_right:","\n        case ord(\"D\"):","\n            x += 4;","\n        break;","\n    ","\n        case vk_up:","\n        case ord(\"W\"):","\n            y -= 4;","\n        break;","\n    ","\n        case vk_down:","\n        case ord(\"S\"):","\n            y += 4;","\n        break;","\n    }\n  ","\n  ","The above code uses ","switch"," to check for a keyboard event and then compares that to each ","case"," listed. If it meets any of the required values then the corresponding code is executed. Note how the ","switch"," can check multiple ","cases"," and execute code until the next ","break",", to permit various keys to be used to get the same result.","\n  ","Each ","case"," can have its own code, so you can set up a sort of \"inheritance\" system where a case executes its own code and then the code for the next case as well.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Language Features","\n        ","Next: ","break","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["switch"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2369"})