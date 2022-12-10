rh._.exports({"0":[["video_draw"]],"1":[["video_draw"]],"2":[["video_draw, draw video, render video"]],"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","This function draws the current frame of the ","opened video"," to a surface (or two surfaces). It returns the surface(s) as part of its return array, which can be ","drawn manually",".","\n  ","The function also returns data regarding the status of the video, which is expanded upon below.","\n  ","Ensure that this is only called after a ","video_open()"," call but before a ","video_close()"," call, otherwise it will not do anything (as there will not be a video loaded).","\n  "],["\n  ","The function will return an array, the first element (","[0]",") of which will be a real value. This value tells the status of the video, and will be:","\n  ","\n    ","0",", if the video is playing without any issues","\n    ","-1",", if there was an error","\n    ","On some platforms, ","-2",", if the video finished playing (at which point it can be removed from memory with a ","video_close()"," call)\n      ","\n        ","It's recommended to use the ","Async Callbacks"," instead to know when a video ends","\n      ","\n    ","\n  ","\n  ","When this status value is ","0",", the array will contain more data, which will depend on the format of the video. You can know the video format by calling ","video_get_format()",".","\n  "],["\n  ","For RGBA videos, the position ","[1]"," will contain the surface where the video frame was drawn. You can get this surface and ","draw it"," manually.","\n  "],["\n  ","Some platforms (especially consoles) use the YUV colour format for videos, which makes use of two surfaces. In that case the array will have positions ","[1]"," and ","[2]"," with two surfaces:","\n  ","\n    ","[1]"," is the main video surface in black and white","\n    ","[2]"," is the chroma surface that contains all the colour data","\n  ","\n  ","Both these surfaces are then combined using a YUV shader before being used to texture a custom quad, which will draw the video to the screen.","\n  ","Read ","YUV Videos"," for steps on drawing these two surfaces using a shader.","\n  ","For the specific implementation details for a particular console, please refer to its documentation on the ","YoYo Games Helpdesk",".","\n  "," ","\n  "],["\n  ","video_draw();","\n  "," ","\n  "],["\n  ","Array","\n  "," ","\n  "],["\n  ","var _data = video_draw();","\n    var _status = _data[0];","\n    ","\n    if (_status == 0)","\n    {","\n        var _surface = _data[1];","\n    ","\n        draw_surface(_surface, x, y);","\n    }\n  ","\n  ","The above code calls ","video_draw()",", and checks if the returned status is 0, meaning the video is playing. In that case it gets the surface ID and draws it at the instance's position. This will only work for RGBA videos.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Video Playback","\n        ","Next: ","YUV Videos","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["video_draw"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Return Data"],["RGBA Videos"],["YUV Videos"]],"id":"2243"})