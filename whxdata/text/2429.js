rh._.exports({"0":[[" ","File Handling"]],"2":[["File Handling"]],"3":[[" ","File Handling"]],"4":[[" ","At some point while creating your game it will be necessary to store information externally and be able to retrieve this information. For example, you may wish to store login details, or hi-scores, or maybe the progression of the player through your levels. Whatever the reason, you will need to know how to use the different file functions that are available to you when working with ","GameMaker","."," ","It is very important to realise that ","GameMaker"," is ","Sandboxed ","by default, meaning that there are a number of limits and minor complications when using the file system functions that are available, and it is worth noting too that the file system will work slightly differently depending on the platform you are targeting. For more information this, please see the following section:"," ","The File System"," ","You can turn off sandboxing on the desktop targets (Windows, macOS and Ubuntu (Linux)) from the Game Options for the chosen platform, meaning that you can then save and load from anywhere, within the limits of the OS permissions."," ","If you have been granted permission by Steam to use their dedicated API with your game, you will find that there is also a new set of file functions available to you. These are explained in the ","Steam API"," section of this manual."," ","Finally, you should also note that there are some distinct differences between certain target platforms which would be taken into account when using the file functions. These are:"," ","iOS",": On iOS, if you are loading an included file from a folder, ie: with a path something like \"","Backgrounds/background1.png","\", you do NOT need to include the folder as part of the path and simply supplying the file name is sufficient. On all other platforms you must supply the folder(s) as part of the path to the file."," ","macOS and Ubuntu (Linux)",": On the macOS and Ubuntu, filenames and paths are case sensitive on these platforms, and so to prevent any potential issues, ","GameMaker"," will automatically make all names/paths use lower case by default."," ","HTML5",": On HTML5, saving and loading to and from ","local storage"," will work as explained within the different function pages, however if you are loading a file from a server, you ","must only use the function ","buffer_load_async()"," as loading synchronously has been deprecated on most browsers and will eventually be obsoleted. Also note that you cannot create or destroy directories in the browser local storage."," ","Information on the different file functions can be found in the following pages:"," ","File System"," ","Ini Files"," ","Text Files"," ","Binary Files"," ","File Directories"," ","GameMaker"," also includes a number of functions for ","encoding"," and ","hashing"," files and data, which you can find here:"," ","Encoding And Hashing"," ","Also note that there are some basic file functions for saving games available from the following pages (be aware that these functions are designed for beginners to get a basic save system up and running as quickly as possible, but for more complex projects, you should create your own save system using the functions listed in the sections above):"," ","game_load"," ","game_load_buffer"," ","game_save"," ","game_save_buffer"," ","Finally you can find more advanced ","buffer"," functions that can be used for loading and saving data on the following pages:"," ","buffer_save"," ","buffer_save_ext"," ","buffer_save_async"," ","buffer_load"," ","buffer_load_ext"," ","buffer_load_async"," ","buffer_load_partial"," ","buffer_async_group_begin"," ","buffer_async_group_option"," ","buffer_async_group_end"," ","Back: ","GML Reference"," ","Next: ","Buffers"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2429"})