# gxc_start_movie_recording

This function is used to start recording your challenge on GXC. You
specify the width, height and frame rate of the recording, and a boolean
for whether the audio should be recorded or not.

#### Syntax:

``` gml
gxc_start_movie_recording(width, height, fps, record_audio);
```

|              |                                                                            |                                                                |
|--------------|----------------------------------------------------------------------------|----------------------------------------------------------------|
| Argument     | Type                                                                       | Description                                                    |
| width        |  [Real](../../../../../GameMaker_Language/GML_Overview/Data_Types)     | The width of the recording                                     |
| height       |  [Real](../../../../../GameMaker_Language/GML_Overview/Data_Types)     | The height of the recording                                    |
| fps          |  [Real](../../../../../GameMaker_Language/GML_Overview/Data_Types)     | The frame rate (frames-per-second) of the recording            |
| record_audio |  [Boolean](../../../../../GameMaker_Language/GML_Overview/Data_Types)  | Whether audio should be recorded ( true ) or not ( false )     |

#### Returns:

``` gml
N/A
```

#### Example:

``` gml
gxc_start_movie_recording(320, 240, 4, false);
```

This will start a video recording at a resolution of 320x240 at 4
frames-per-second, without any audio being recorded.
