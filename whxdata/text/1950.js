rh._.exports({"0":[[" ","audio_queue_sound"]],"1":[["audio_queue_sound"]],"2":[["audio_queue_sound"]],"3":[[" ","audio_queue_sound"]],"4":[[" ","This function will add the data from a buffer into the audio queue that you previously created using the function ","audio_create_play_queue()",". You specify the queue index to add to, and the buffer ID to get the data from as well as the position (offset) within the buffer and the number of bytes to add. Once you have added audio from a buffer to a queue, the buffer cannot be deleted until you have first freed the queue using the function ","audio_free_play_queue()",", and the buffer properties should match those of the queue that you are adding the sound to."],[" ","audio_queue_sound(queueIndex, bufferId, bufferOffset, bufferLength);"," ","Argument"," ","Type"," ","Description"," ","queueIndex"," ","Audio Queue ID"," ","The index of the queue to add to."," ","bufferId"," ","Buffer ID"," ","The buffer to add to the queue."," ","bufferOffset"," ","Real"," ","The offset within the source buffer to start from."," ","bufferLength"," ","Real"," ","The length of the buffer (the number of the bytes in the buffer)."],[" ","N/A"],[" ","len = async_load[? \"data_len\"];","\n    audio_buff = buffer_create(len, buffer_fast, 1);","\n    buffer_copy(async_load[? \"buffer_id\"], 0, len, buff, 0);","\n    audio_queue_sound(audio_queue, audio_buff, 0, len);","\n    audio_play_sound(audio_queue, 10, 0);"," ","The above code would be called in the asynchronous ","Audio Recording"," event and assigns some recorded data to a buffer, which is then added to an audio queue. This is then played."," ","Back: ","Audio Buffers"," ","Next: ","audio_start_recording"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1950"})