rh._.exports({"0":[[" ","move_random"]],"1":[["move_random"]],"2":[[" ","move_random"]],"3":[[" ","With this function you can set the instance to a position anywhere in the room, but aligned to an \"invisible\" grid. So a value of 32 for the hsnap and vsnap will set the instance to a random position that is aligned to a grid of 32x32 squares. you can set these values to 1 to get a position anywhere in the room."," ","NOTE"," This function will snap to the same positions every time the game is run afresh due to the fact that ","GameMaker"," generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use ","randomise"," at the start of your game. This is only true when testing and debugging the game, as the final executable package will not show this behaviour and will be random every play."],[" ","move_random","(hsnap, vsnap);"," ","Argument"," ","Type"," ","Description"," ","hsnap"," ","Real"," ","The horizontal snapping (the size in pixels between 'cells')."," ","vsnap"," ","Real"," ","The vertical snapping (the size in pixels between 'cells')."],[" ","N/A"],[" ","if keyboard_check(vk_space)","\n    {"," ","move_random","(1, 1);","\n    }"," ","This will move the instance to a random position anywhere in the room when the space key is pressed."," ","Back: ","Movement"," ","Next: ","move_snap"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["move_random"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1752"})