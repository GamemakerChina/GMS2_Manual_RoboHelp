rh._.exports({"0":[[" ","The Sound Editor"]],"1":[["Sound Editor"]],"2":[["Sounds,Sound Editor,wav,ogg,mp3,compressed,streamed"]],"3":[[" ","The Sound Editor"]],"4":[[" ","The ","Sound Editor"," is where you can load sounds into a new audio resource as well as set its properties. To load a sound, press the ","Load Sound"," button to the right of the sound name. A file selector dialogue pops up in which you can select the sound file. This be either a ","WAV",", an ","MP3"," file or an ","OGG"," file. In general ","*.wav"," are used for the short sound effects as even though they are generally larger files they will play instantaneously due to the fact that they do not need any type of decoding for playing. ","*.mp3"," or ","*.ogg"," format files should be used for background music or for sound effects that are longer or larger in size. These files are much smaller than a wave file would be but have a small CPU overhead as they have to be decoded before being played."," ","Once you have loaded your file you can preview the sound by using the play button which will loop it continuously. This is very handy as it means you can make changes to the volume using the slider at the bottom of the window and hear what the effect it will have on the sound. There is a stop button too, so you can stop the preview at any time."," ","TIP"," Use ","the Inspector"," to view the waveform for the selected sound."," ","The sound window also has other options which are explained below:"," "," ","Name And File"," "," ","Here you can click the ","Open"," button to open the file explorer and choose an audio file to load. You can also set the name of the new resource from the \"Name\" field on the left. Names can only be alpha-numeric and may only use the underbar \"_\" symbol, and they cannot start with a number."," "," ","Volume & Playback"," "," ","Here you can set the playback volume for the given sound. This is value is simply the ","default"," value where if the slider is in the middle - for example - then volume for that sound when used in the game will be 0.5. However, this will be overridden by any change to the gain using the audio functions in your project."," ","Beside the volume controls you also have the Playback controls where you can preview the sound, set it to loop or rewind. You can also click the "," Icon to open the sound in the ","Sound Mixer","."," "," ","OGG Conversion"," "," ","This option is only available for sounds that are in the ","OGG"," format and allows you to select one of these two options:"," ","With the ","\"Automatic\""," option, the ","OGG"," sound file will not be converted by the asset compiler and will be copied into the game executable as is. This may cause issues if the attributes of the source file and the sound asset are mismatched, e.g. the source audio file being mono (having only one channel) but the asset's attributes specifies that it has two channels."," ","The ","\"Required\""," option can be used to avoid such issues and ensure that the source audio file is always converted by the asset compiler into a new OGG file using the attributes specified in the Sound Editor."," "," ","Attributes"," "," ","This section is for setting the sound attributes. These are the attributes that will be set when you export your game and will affect how the sound is played back at runtime. For sound effects (","WAV ","format) you will want them to be ","uncompressed ","so that they play quickly and don't require decoding. Note that using this option will convert your audio to the ","WAV"," format during compile time (however if the attributes set in the Sound Editor match the attributes of the source ","WAV"," file, then it will simply be copied over). For ","OGG"," and ","MP3",", you'd generally want one of the other three options available."," ","Compressed ","audio will force all your sound files (irrespective of whether they are ","WAV"," or ","MP3",") to be compressed down to Ogg Vorbis ","OGG"," format files for ","all ","platforms (however, if the source audio is already ","OGG"," it will simply be copied over without being recompressed if the ","Conversion"," option is set to ","Automatic","). These sounds are smaller on disc, but will have a slight CPU overhead due to the need to be uncompressed and loaded into memory before being played, so you should keep that in mind if you wish to use ","compression"," in an already CPU intensive game."," ","You can mitigate this CPU overhead somewhat by choosing to ","uncompress on load",", which will place all the sounds into the device memory for faster playback, at the expense of increased memory use."," ","If you have chosen compressed audio, you can then also choose to have your sound ","streamed from disk",". A streamed sound will be one that is uncompressed and played in real time, streamed from the disk rather than loaded into memory. Streaming is ideal for music as it reduces the one-off overhead of uncompressing the whole file - which may cause a pause in the game - but is not recommended for simple sound effects where the hit on the CPU is much less. If you select streamed audio, you will ","not"," be able to assign the sound to an ","Audio Group"," and this option will be disabled, as streamed sounds are not packaged in the same way as other sounds and you have full control over when they are loaded, played and unloaded using code. These sounds will, however, be assigned to the default audio group ","audiogroup_default","."," ","It is important to note that when targeting the HTML5 platform, streamed audio will not play when the play request does not directly originate from a user interaction (i.e: a touch event, etc.). However, since ","GameMaker"," queues up click events and only handles them on the next frame, it is impossible to play streamed audio without the browser blocking it. To get around this, any HTML5 game run will treat all streamed audio as unstreamed in the engine, with the exception of streamed audio not being preloaded."," ","What this means is that if your game is running on a browser, and - for example - you have 10 music tracks that are all set as streamed ","mp3 ","files, all 10 will be initialised like unstreamed audio would, but they won't be decoded immediately before the game loads, unlike normal streamed audio which would get preloaded/decoded immediately during the load screen phase."," ","While this bypasses the issue and prevents any huge increase in initial load times, it does mean that it may result in a state where your game has loaded, but certain streamed sounds may still be downloading or decoding. To deal with this you can use the GML function ","audio_sound_is_playable()"," which checks to see if a given sound can actually be played. On HTML5 this will return ","false ","if the sound is not fully loaded or decoded yet, and ","true ","if it is and can be played (on all other platforms it will always return true)."," "," ","Target Options"," "," ","The Target Options panel is where you set the conversion rates for your game. These settings will affect how the sound is exported for the target platform, and ","GameMaker"," will automatically convert your sound files for you - you simply control the final quality of those sounds when converted. Generally the default settings of 16 bit quality (or ","bit depth","), 44100kHz ","sample rate"," and 128kbps ","bit rate"," are perfectly adequate, but it may be that you wish sound effects (for example) to have a lower quality and music to have a higher quality, in which case these settings can be changed."," ","You can also choose whether the conversion should be ","mono",", ","stereo"," or ","3D",". If you plan on using the ","audio emitter functions"," to create 3D sound effects,"," then you should pick mono or 3D, and not stereo, otherwise your sounds in-game may not come out of the speakers you expected. ","Note that there is no difference between “3D” and “mono” - “3D” is simply an IDE label used to help people new to audio to not pick stereo when they want positional audio."," If you choose to use the 3D output, it will be exported as a mono sound."," ","NOTE"," The higher the quality of the sound, the larger the file, and this should be taken into account when deciding what bitrate and sample rate to choose."," "," ","Audio Group"," "," ","You can assign your audio file to a specific ","Audio Group",". These are created from the ","Audio Groups"," window and are used to group audio assets together for easier memory management and volume control."," ","Once an audio file has been assigned to a group you can then use the specific audio group functions to change them and to load/unload them from memory. See the reference section on ","Audio Functions"," for further information."," ","If you have selected ","streamed ","audio then this option will be ","disabled",", as streamed sounds are not packaged in the same way as other sounds and will be not be loaded into memory, but instead streamed directly from the storage medium."," ","NOTE"," While the rest of the audio properties are configuration specific, the audio group setting is ","not ","and a sound will belong to the same group on ","all configurations that you use","."," ","Back: ","The Asset Editors"," ","Next: ","The Sprite Editor"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2682"})