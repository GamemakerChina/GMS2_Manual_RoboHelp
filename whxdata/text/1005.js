rh._.exports({"0":[[" ","Get Audio Loop State"]],"1":[["GML Visual Action - Get Audio Loop State"]],"2":[["get audio loop state"]],"3":[[" ","Get Audio Loop State"]],"4":[[" ","This action is used to get the loop state of a sound. You supply a sound, played with ","Play Audio"," and the target variable in which to store the result."],[" ","Argument"," ","Description"," ","Sound"," ","The sound of which to get the loop state"," ","Target"," ","The name of the variable in which to store the state"," ","Temp"," ","Whether the target variable should be a temporary variable"],[" ","The above action block code first checks if the Space key (","vk_space",") is pressed. If it is, and no instance of the existing sound asset ","snd_Loop"," is playing yet, it is played using the ","Play Audio"," action. It is played looped (Loop checked) and the sound instance's ID is stored in an instance variable ","ins_snd_loop","."," ","Next all properties of the playing sound related to audio looping are stored in instance variables: ","looping",", ","loop_start"," and ","loop_end","."," ","Finally the ","Show Debug Message"," action is used to output the values of each of these variables. If loop start and end of the sound asset haven't been changed, it will output: "," ","1","\n    0","\n    0"," ","Back: ","Audio Actions"," ","Next: ","Set Audio Loop Start"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1005"})