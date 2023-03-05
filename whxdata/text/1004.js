rh._.exports({"0":[[" ","Set Audio Loop State"]],"1":[["GML Visual Action - Set Audio Loop State"]],"2":[["set audio loop state"]],"3":[[" ","Set Audio Loop State"]],"4":[[" ","This action is used to set the loop state of an already playing sound, i.e. one played with the ","Play Audio"," action."],[" ","Argument"," ","Description"," ","Sound"," ","The sound, played with ","Play Audio",", to set the loop state of"," ","Loop"," ","Whether to loop the sound between its loop start and end or not (","true"," or ","false",")"],[" ","The above action block code plays a sound looped upon first pressing the Space key (","vk_space",") and turns off looping of the sound the second time the key is pressed. If the sound reaches the end of the track, another press of the Space key plays another instance of the ","snd_Loop"," ","Sound Asset"," looped."," ","The first action block checks for a key press of the Space key. The next block checks if any instances of the sound asset ","snd_Loop"," are playing. If not (indicated by the Not checkbox ","checked","), the loop start and end position (Offset) are first set for the ","snd_Loop"," asset. The loop start offset is set to 3 seconds, the end offset to 8 seconds. A new instance of the sound is then played looped (Loop checked) using the ","Play Audio"," action and its ID stored in an ","instance"," variable ","ins_snd_loop"," (Target) of the calling instance."," ","When Space is pressed again, the ","If Audio Is Playing"," block returns ","true"," and the part under the ","Else"," block is executed. ","Set Audio Loop State"," turns off looping for the playing sound ","ins_snd_loop"," so it will continue playing to the end when it reaches the loop end position."," ","Back: ","Audio Actions"," ","Next: ","Get Audio Loop State"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1004"})