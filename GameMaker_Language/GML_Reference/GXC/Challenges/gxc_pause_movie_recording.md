# gxc_pause_movie_recording

This function is used to pause a GXC recording that was previously
started with
[gxc_start_movie_recording()](gxc_start_movie_recording) .

#### Syntax:

``` gml
gxc_pause_movie_recording();
```

#### Returns:

``` gml
N/A
```

#### Example:

``` gml
if (keyboard_check_pressed(vk_escape))
{
    gxc_pause_movie_recording();
}
```

This will pause the GXC movie recording if the escape key is pressed.
