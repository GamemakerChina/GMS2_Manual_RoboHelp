rh._.exports({"0":[[" ","video_set_volume"]],"1":[["video_set_volume"]],"2":[["video_set_volume, video volume"]],"3":[[" ","video_set_volume"]],"4":[[" ","This function changes the audio volume of the video that is currently loaded. It takes a value between ","0"," and ","1",", where ","0"," is silent and ","1"," is the maximum volume."," ","Ensure that this is only called after a ","video_open()"," call but before a ","video_close()"," call, otherwise it will not do anything (as there will not be a video loaded)."," ","On some platforms, this function will only work after the video has been loaded completely, so use ","Async Callbacks"," to find out when the video is ready and then change the volume."],[" ","video_set_volume(value);"," ","Argument"," ","Type"," ","Description"," ","value"," ","Real"," ","Volume value between 0 and 1"],[" ","N/A"],[" ","my_video = video_open(\"splash.mp4\");","\n    video_set_volume(0.5);"," ","The code above loads ","splash.mp4"," from the Included Files of the game, and changes its volume to ","0.5"," (50% of its maximum volume)."," ","Back: ","Video Playback"," ","Next: ","video_pause"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1272"})