rh._.exports({"0":[[" ","array_shuffle_ext"]],"1":[["array_shuffle_ext"]],"2":[["array_shuffle_ext"]],"3":[[" ","array_shuffle_ext"]],"4":[[" ","This function shuffles the existing array ","in place",", i.e. it modifies (or ","mutates",") the existing array."," ","NOTE"," This function will shuffle the items to the same positions every time the game is run afresh due to the fact that ","GameMaker"," generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use ","randomise"," at the start of your game. This is only true when testing and debugging the game, as the final executable package will not show this behaviour and will be random every play."],[" ","array_shuffle_ext","(array, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to shuffle"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array to start shuffling. Defaults to 0. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to shuffle. Defaults to ","(array_length(array) - 1",". See: ","Offset And Length"],[" ","N/A"],[" ","var _numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];"," ","array_shuffle_ext","(_numbers);","\n    show_debug_message(_numbers);\n  "," ","The above code first creates an array ","_numbers"," with the numbers from 1 to 10. It then shuffles the array using ","array_shuffle_ext",". This changes the actual values in the array. Finally the shuffled version is shown in a debug message."," ","Back: ","Array Functions"," ","Next: ","array_create"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2016"})