rh._.exports({"3":[[" ","rollback_confirmed_frame"]],"4":[[" ","This global variable stores the last frame number where inputs for all players were synchronised and confirmed."," ","You can compare this to ","rollback_current_frame"," to check if the current frame has confirmed inputs for all players."," ","You can also use the function ","rollback_sync_on_frame()"," to check if the current frame is synchronised."],[" ","rollback_confirmed_frame"],[" ","Real"],[" ","var _is_frame_confirmed = (rollback_current_frame == rollback_confirmed_frame);"," ","\n    if (_is_frame_confirmed)","\n    {","\n        evaluate_game_over();","\n    }\n  "," ","This code checks if the current frame has confirmed inputs from all players, by checking if the ","current frame value"," is equal to the ","confirmed frame value","."," ","If that is true, it runs a function to check if the game over condition has been satisfied, so it can end the game."," ","This is done to avoid a prediction-based state ending the game, and waits for a fully synchronised frame before attempting to check game over conditions."," ","Back: ","Rollback Variables"," ","Next: ","rollback_current_frame"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"7":[[" ","rollback_confirmed_frame"]],"8":[["rollback_confirmed_frame"]],"9":[["rollback_confirmed_frame"]],"id":"1269"})