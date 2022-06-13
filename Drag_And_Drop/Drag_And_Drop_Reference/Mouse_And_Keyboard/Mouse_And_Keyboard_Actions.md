# Mouse And Keyboard Action Library

  
![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/Lib_KeyboardMouse.png)  
The **Mouse and Keyboard** action library is where you can find the
actions required to poll and process input from the keyboard or mouse
devices. The available actions are all listed below:

|                                                                                                                                         |                                            |
|-----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_KeyboardMouse_Pressed.png)     | [If Mouse Pressed](If_Mouse_Pressed)   |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_KeyboardMouse_Down.png)        | [If Mouse Down](If_Mouse_Down)         |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_KeyboardMouse_Released.png)    | [If Mouse Released](If_Mouse_Released) |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_KeyboardMouse_KeyPressed.png)  | [If Key Pressed](If_Key_Pressed)       |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_KeyboardMouse_KeyDown.png)     | [If Key Down](If_Key_Down)             |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_KeyboardMouse_KeyReleased.png) | [If Key Released](If_Key_Released)     |

The rest of the actions here refer to the **virtual keyboard** . If you
require text or numeric input in your game on a touchscreen device, then
you can use the virtual keyboard actions provided to use the device OS
keyboard. These actions will call up or hide the OS keyboard and accept
input from it just the same as a physical keyboard, so the regular
GameMaker keyboard actions should all work with virtual keyboards (for
example, the "If Key Released" action), and any input from the virtual
keyboard will be stored in the different keyboard variables, like [
keyboard_string
](../../../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_string)
or [ keyboard_last_char
](../../../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_lastchar)
, etc...). Opening or closing the virtual keyboard will generate [System
Asynchronous
Events](../../../The_Asset_Editors/Object_Properties/Async_Events) ,
in which the
[async_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load)
[DS
map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps)
will be populated with the following key/value pairs:

-   " **event_type** " - the type of system event received, which will
    be " **virtual keyboard status** " for virtual keyboards.
-   " **screen_height** " - the height of the virtual keyboard (in
    pixels). This will be 0 if the keyboard is invisible.
-   " **keyboard_status** " - the current status of the keyboard,
    returned as one of the following strings:
    -   "hiding"
    -   "hidden"
    -   "showing"
    -   "visible"

The available virtual keyboard actions are:

|                                                                                                                                         |                                                                      |
|-----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_VirtualKeyboard_Show.png)      | [Show Virtual Keyboard](Show_Virtual_Keyboard)                   |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_VirtualKeyboard_Hide.png)      | [Hide Virtual Keyboard](Hide_Virtual_Keyboard)                   |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_VirtualKeyboard_GetHeight.png) | [Get Virtual Keyboard Height](Get_Virtual_Keyboard_Height)       |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Mouse_And_Keyboard/i_VirtualKeyboard_IfShowing.png) | [If Virtual Keyboard Is Showing](If_Virtual_Keyboard_Is_Showing) |
