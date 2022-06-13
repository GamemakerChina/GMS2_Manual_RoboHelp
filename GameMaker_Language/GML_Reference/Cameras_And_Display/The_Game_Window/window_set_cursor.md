# window_set_cursor

With this function you can set the cursor for the game window to any one
of the constants listed below (to find the current cursor being used you
can use the function [ window_get_cursor()
](../The_Game_Window/window_get_cursor) which will also return one
of these constants):

|                |                                                                                                             |
|----------------|-------------------------------------------------------------------------------------------------------------|
| Constant       | Cursor                                                                                                      |
|  cr_none       |                                                                                                             |
|  cr_default    | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_Default.png)   |
|  cr_arrow      | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_Arrow.png)     |
|  cr_cross      | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_Cross.png)     |
|  cr_beam       | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_Beam.png)      |
|  cr_size_nesw  | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_SizeNeSw.png)  |
|  cr_size_ns    | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_SizeNS.png)    |
|  cr_size_nwse  | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_SizeNwSe.png)  |
|  cr_size_we    | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_SizeWE.png)    |
|  cr_uparrow    | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_Up.png)        |
|  cr_hourglass  | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_Hourglass.png) |
|  cr_drag       | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_Drag.png)      |
|  cr_appstart   | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_AppStart.png)  |
|  cr_handpoint  | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_Hand.png)      |
|  cr_size_all   | ![](/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/cr_SizeAll.png)   |

#### Syntax:

``` gml
window_set_cursor(cursor);
```

|          |                                                                                                                                |                                        |
|----------|--------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| Argument | Type                                                                                                                           | Description                            |
| cursor   |  [Cursor Constant](../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_get_cursor)  | The cursor to set for the game window. |

#### Returns:

``` gml
N/A
```

#### Example:

``` gml
if mouse_check_button_pressed(mb_left)
{
    window_set_cursor(cr_drag);
}
```

The above code will change the window cursor to the standard windows
drag cursor if the left mouse button has been pressed.
