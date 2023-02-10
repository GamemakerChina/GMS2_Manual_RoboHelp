rh._.exports({"0":[[" ","cursor_sprite"]],"1":[["cursor_sprite"]],"2":[["cursor_sprite"]],"3":[[" ","cursor_sprite"]],"4":[[" ","Setting this variable will instruct ","GameMaker"," to use the designated sprite as a cursor (basically setting it to the current mouse x/y position every step). The default value is -1 which is no sprite for the cursor, but you can assign any sprite index from the game assets or that has been imported from an external resource. Please note that there is no way to control the animation speed or image_index, so if the sprite has sub-images, these will be cycled at the same speed as the room speed. To remove the cursor sprite, you can set this variable to -1 again."," ","It is also worth noting that this variable does ","not"," replace the game window cursor, and that it will still be drawn as normal. To avoid this you can use the function ","window_set_cursor()"," and set it to the constant ","cr_none"," which will make the standard cursor invisible."],[" ","cursor_sprite;"],[" ","Sprite Asset"],[" ","cursor_sprite = spr_CustomCursor;"," ","The above code will set the sprite indexed in the variable \"spr_CustomCursor\" to be the cursor sprite for the game."," ","Back: ","General Game Control"," ","Next: ","game_id"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"800"})