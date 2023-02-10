rh._.exports({"0":[[" ","Audio Recording"]],"1":[["Objects - Async Audio Recording Event"]],"2":[["Audio Recording,ev_audio_recording"]],"3":[[" ","Audio Recording"]],"4":[[" ","This event can only be triggered by the ","audio_start_recording()"," function\n    and will return a ","DS Map"," stored in the variable ","async_load",",\n    containing different key/value pairs depending on the ","callback"," from the function that has triggered the event."," ","The following keys will be available in the ds_map:"," ","\"","buffer_id","\" - the ID of the temporary ","buffer"," you can use to retrieve the audio data"," ","\"","channel_index","\" - the recording channel index as returned by the calling function that this data came from"," ","\"","data_len","\" - the length of data (in bytes) you've received"," ","NOTE",": As mentioned at the start of this page, the variable ","async_load ","is only valid in the asynchronous events, as the DS map that is points to is created at the start of the event,\n    then deleted again at the end. However, note that the temporary buffer in which all audio is stored with the map will also be removed at the end of the event so you should copy it to a custom buffer if you want to keep it for later use."," ","In the usage example below we will create a custom buffer to store our recorded audio, and also set our game to record from input source 0:"," ","channel_index = audio_start_recording(0);"," audio_buffer = buffer_create(len, buffer_fast, 1);"," ","Every game step now that the recording is detected will trigger an asynchronous Audio Recording event where you can deal with the recorded input something like this:"," ","var channel = async_load[? \"channel_index\"];"," if channel == channel_index","    {","    len = async_load[? \"data_len\"];","    buffer_copy(async_load[? \"buffer_id\"], 0, len, audio_buffer, 0);","    }"," ","Here we simply check the \"channel_index\" key to make sure it matches the value returned when we started recording, and if it does we copy the contents of the temporary buffer created for this event into our custom buffer. After that you can\n    do what you want with the custom buffer - you could play it using the dedicated buffer audio functions, you could process it and send it over the network, you could save it to disk... Once you have your recorded audio in a buffer, you can do basically\n    anything you want."," ","Back: ","Async Events"," ","Next: ","Cloud"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2099"})