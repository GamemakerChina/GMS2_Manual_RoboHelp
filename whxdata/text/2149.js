rh._.exports({"0":[[" ","Asynchronous Functions"]],"2":[["Asynchronous Functions,Async Functions"]],"3":[[" ","Asynchronous Functions"]],"4":[[" ","In the context of ","GameMaker",", an asynchronous function is one that sends out to a web server, or asks for user input, or even streams data, while letting ","GameMaker"," continue to run without blocking the game being run. When the information ","callback"," is received a special ","Async Event"," is fired which, in turn, allows any instance with an Async Event assigned to it to execute further functions (although this does not have to be the case). So, basically, it's a way to communicate with some external resource (server, user or device) without the game or project stopping while waiting for a reply."," ","Why is this important? Well, since it allows ","GameMaker"," to continue functioning while sending or receiving data, and this means that you can do many things all without blocking the game loop like:"," ","stream data from the device into your game without the player waiting for things to load"," ","have callback events to do things only when the correct information is received"," ","communicate and interchange data with a web server"," ","This makes everything function in a much more fluid and unobtrusive way. It should be noted that the Async Events will be triggered for ","all ","instances that have them, so you can use an async function in one instance, and have the Asynchronous Event that deals with the reply in another one, or even various other ones. You can go here for more information on how the Asynchronous event works - ","Asynchronous Events","."," ","The different type of asynchronous functions are listed in the sections below:"," ","HTTP"," ","Dialog"," ","Cloud Saving"," ","Push Notifications"," ","Facebook"," ","There are also a number of ","Buffer"," functions that can be used for loading and saving buffers in an asynchronous manner, which are required when working on the different consoles that ","GameMaker"," supports, although they can also be used on the other target platforms:"," ","buffer_save_async"," ","buffer_load_async"," ","buffer_async_group_begin"," ","buffer_async_group_option"," ","buffer_async_group_end"," ","Back: ","GML Reference"," ","Next: ","Networking"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2149"})