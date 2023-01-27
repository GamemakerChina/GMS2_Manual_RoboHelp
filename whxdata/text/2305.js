rh._.exports({"0":[[" ","buffer_async_group_option"]],"1":[["buffer_async_group_option"]],"2":[["buffer_async_group_option"]],"3":[[" ","buffer_async_group_option"]],"4":[[" ","With this function you can set some platform specific options for the buffer group being saved/loaded. The options available are as follows:"," ","\"","subtitle","\" or \"","slottitle","\" - The value for this option would be a string, which will be shown to the user when managing their save data in the OS. This is only important when saving data, not when loading again."," ","\"","showdialog","\" - The value for this option is a boolean ","true"," or ","false",". If set to ","true",", when you save ","or"," load ","GameMaker"," will show the System UI, otherwise it will do a quicksave/quickload with no UI shown. You normally only need this if you're supporting multiple save slots to allow the user to pick a slot, but if you just support one slot per user, set this to ","false","."," ","\"","savepadindex","\" - For this option you would specify the ","pad index"," of the player who is saving ","or"," loading and the system will write data to and read data from this player's save folder."," ","\"","saveslotsize","\" - This option requires that you specify the actual size in bytes you want to save (so you can do a ","buffer_seek()"," and ","buffer_tell()"," to get that, for example). Note that it is not obligatory to supply this value as all saves are pre-assigned a minimum space, which usually varies with the target platform."," ","These are some options for PlayStation only. Please refer to ","this Helpdesk article"," for information (you'll need to be logged in with your developer access account)."," ","IMPORTANT"," This function is only valid for PlayStation, Xbox and Nintendo Switch targets. On all the other targets it will do nothing."],[" ","buffer_async_group_option(option, value);"," ","Argument"," ","Type"," ","Description"," ","option"," ","String"," ","The option to set."," ","value"," ","Real"," or ","String"," ","The value to set (can be a real or string, depending on the option)."],[" ","N/A"],[" ","buffer_async_group_begin(\"save_folder_name\");","\n    buffer_async_group_option(\"showdialog\", false);","\n    buffer_async_group_option(\"slottitle\", \"Catch The Haggis Save\");","\n    buffer_async_group_option(\"subtitle\", \"All your haggis are saved here!\");","\n    save = buffer_save_async(buff, \"Player_Save.sav\", 0, 16384);","\n    buffer_async_group_end();"," ","The above code starts a buffer group then sets the group options before it sets 4 files to save asynchronously. The group definition is then ended (at which point saving will begin)."," ","Back: ","Buffers"," ","Next: ","buffer_async_group_end"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2305"})