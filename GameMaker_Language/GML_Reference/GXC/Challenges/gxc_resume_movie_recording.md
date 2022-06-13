# gxc_resume_movie_recording

This function is used to resume a GXC recording that was previously
paused with [gxc_pause_movie_recording()](gxc_pause_movie_recording)
.

#### Syntax:

``` gml
gxc_resume_movie_recording();
```

#### Returns:

``` gml
N/A
```

#### Example:

``` gml
if (keyboard_check_pressed(vk_enter))
{
    gxc_resume_movie_recording();
}
```

This will resume the currently paused GXC movie recording if the enter
key is pressed.
