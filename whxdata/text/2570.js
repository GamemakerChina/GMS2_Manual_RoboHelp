rh._.exports({"0":[[" ","Video Playback"]],"1":[["videos"]],"2":[["videos"]],"3":[[" ","Video Playback"]],"4":[[" ","Follow these steps to load videos at runtime and play them:"," ","Add a video file to the ","Included Files"," (","/datafiles"," directory) of your project."," ","Load the video using ","video_open()",".\n      "," ","Alternatively, load a video from a URL."," ","Draw it in a Draw event using ","video_draw()",".\n      "," ","This functions draws the video to an internal surface, which it returns as part of its return array."," ","You must draw that surface manually using ","draw_surface()"," for the video to appear.\n          "," ","Drawing ","YUV Videos"," will require extra steps."," ","When the video is finished, remove it from memory by calling ","video_close()",".\n      "," ","Use the ","Async Callbacks"," to run code when the video ends."],[" ","GameMaker"," does not ship with any codecs, and makes use of the codecs present on the platform that the game is running on. This means your videos must be encoded in a format that can be decoded on your intended target platform(s)."," ","Making use of certain formats may require you to pay licensing fees depending on the related codec's licence and your game's revenue, and in such a case, the developer will be legally liable for any fees that is to be paid to the codec owners. Codecs are also licensed differently on each platform and so care must be taken for games that are distributed on multiple platforms."," ","Note that video formats (such as ",".mp4",", ",".avi",", ",".mkv",", etc.) are simply containers that wrap ","video"," and ","audio"," streams, both of which may be encoded separately and may require separate licences."," ","For distribution on console platforms, check with your account representative to find out what formats you are allowed to use without having to pay extra licencing fees."],[" ","The video formats that you are able to load and play in your game will depend on your target platform, and the codecs that are supported on that platform."],[" ","You can load, play and manipulate video files at runtime using the following functions:"," ","video_open"," ","video_close"," ","video_draw"," ","video_set_volume"," ","video_pause"," ","video_resume"," ","video_enable_loop"," ","video_seek_to"," ","The following functions are used to get information about the currently loaded video:"," ","video_is_looping"," ","video_get_volume"," ","video_get_duration "," ","video_get_position"," ","video_get_status"," ","video_get_format "],[" ","The ","Async Social"," event is triggered at the stages given below, with the ","\"type\""," key in its ","async_load"," map set to the given value:"," ","\"video_start\"",": When the video starts playing, which is when its ","status"," changes from ","video_status_preparing"," to ","video_status_playing","."," ","\"video_end\"",": When the video ends. This does not trigger when the video is ","set to loop","."," ","Here is an example of an Async Social event listening to video callbacks:"," ","var _type = async_load[? \"type\"];"," ","\n    if (_type == \"video_start\")","\n    {","\n        obj_video.display_video = true;","\n    }","\n    else if (_type == \"video_end\")","\n    {","\n        obj_video.display_video = false;","\n        video_close();","\n    }\n  "," ","The above code reads the type from the ","async_load"," map. When the video starts, it sets a variable in an object to ","true",", so it can display the video."," ","When the video ends, it sets that same variable to ","false",", and then calls ","video_close()"," to remove the video from memory."," ","Back: ","Drawing"," ","Next: ","Colour And Alpha"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"11":[[" ","How to play videos?"],[" ","Video Codecs & Licensing"],[" ","Formats"],[" ","Functions"],[" ","Async Callbacks"]],"id":"2570"})