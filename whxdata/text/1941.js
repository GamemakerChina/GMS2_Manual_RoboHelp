rh._.exports({"0":[[" ","xboxlive_pad_for_user"]],"1":[["xboxlive_pad_for_user"]],"2":[["xboxlive_pad_for_user"]],"3":[[" ","xboxlive_pad_for_user"]],"4":[[" ","Xbox users can have various pads assigned to their user ID, with each one filling a \"slot\". These slots are numbered from 0, and can hold any pad index, so slot 0 could be assigned to pad 3 and slot 1 could be assigned to pad 2. This function can be used to get the pad that is assigned to any given slot, and is particularly useful should a user leave a gamepad without input for a certain length of time as it will switch itself off, so you can check any given User ID using this function to make sure that they have an active gamepad, and if they do not then react accordingly by (for example) pausing your game. If the pad its active, it's index value will be returned, but if not then the function will return -1."," ","Note that if a pad in any slot becomes inactive, later slots will \"slide\" into the vacant position, so if you have three active pads assigned to slots 0, 1 and 2, and the pad in slot 0 is inactive, slots 1 and to will now become slots 0 and 1, so slot 0 should always contain an active pad unless all pads are switched off (in which case it will return -1)."],[" ","xboxlive_pad_for_user(user_id, slot);"," ","Argument"," ","Type"," ","Description"," ","user_id"," ","Xbox User ID"," ","The User ID (a pointer) to check"," ","slot"," ","Real"," ","The index (an integer) of the gamepad slot to check"],[" ","Xbox Pad ID"],[" ","if (xboxlive_pad_for_user(user_id, 0) == -1)","\n    {","\n        for(var i = 0; i < gamepad_get_device_count(); i++;)","\n        {","\n            var u_id = xboxlive_user_for_pad(i);","\n            if (u_id == -1)","\n            {","\n                async_ID = xboxlive_pad_for_user(i, u_id);","\n            }","\n        }","\n    }"," ","The above code checks the slot 0 for the given User ID pointer to see if any gamepads have been assigned, and if not then one is assigned."," ","Back: ","Users And Accounts"," ","Next: ","xboxlive_pad_count_for_user"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1941"})