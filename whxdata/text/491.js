rh._.exports({"0":[[" ","ds_list_shuffle"]],"1":[["ds_list_shuffle"]],"2":[["ds_list_shuffle"]],"3":[[" ","ds_list_shuffle"]],"4":[[" ","With this function you can shuffle a list, which will re-order all the component values into random positions from those in which they were originally added to the list."," ","NOTE"," This function will shuffle the items to the same positions every time the game is run afresh due to the fact that ","GameMaker"," generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use ","randomise"," at the start of your game. This is only true when testing and debugging the game, as the final executable package will not show this behaviour and will be random every play."],[" ","ds_list_shuffle(id);"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS List ID"," ","The id of the list to shuffle."],[" ","N/A"],[" ","if restart","\n    {","\n        ds_list_shuffle(card_list);","\n    }"," ","The above code will shuffle the list indexed in the variable \"card_list\" if the variable \"restart\" is flagged as ","true","."," ","Back: ","DS Lists"," ","Next: ","ds_list_sort"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"491"})