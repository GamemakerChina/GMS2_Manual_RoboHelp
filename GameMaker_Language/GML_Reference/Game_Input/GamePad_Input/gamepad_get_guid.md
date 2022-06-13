# gamepad_get_guid

With this function you can retrieve the GUID for the gamepad connected
to the given slot index. You supply the gamepad slot to check (from 0 -
11), and the function will return one of the following strings:

-   " **none** " if no GUID is available or no gamepad is connected
-   " **device index out of range** " if the gamepad slot index is out
    of range
-   The GUID string, something like "050000005e040000fd020000ffff3f00",
    if the slot has a gamepad assigned and can get the GUID for it

This function would usually be used in conjunction with [
gamepad_get_description() ](gamepad_get_description) to generate
part of the SDL string required for remapping controllers on Windows,
Android and macOS.

|                                                                                                                                       |                                                                                                          |
|---------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| ![](/assets/Images/Scripting_Reference/Additional_Information/i_Error_SyntaxWarning.png) Platform-Specific Notes |                                                                                                          |
| Platform                                                                                                                              | Note                                                                                                     |
| Opera GX                                                                                                                              | On the Opera GX target platform, this function will always return **"none"** for non-DirectInput devices |

#### Syntax:

``` gml
gamepad_get_guid(index);
```

|          |                                                                         |                                     |
|----------|-------------------------------------------------------------------------|-------------------------------------|
| Argument | Type                                                                    | Description                         |
| index    |  [Real](../../../../../GameMaker_Language/GML_Overview/Data_Types)  | Which gamepad "slot" index to check |

#### Returns:

``` gml
 String
```

#### Example:

``` gml
var _guid = gamepad_get_guid(global.PadIndex);
var _desc = gamepad_get_description(global.PadIndex);
global.GamepadID = _guid + "," + _desc;
```

The above code gets the GUID and name description strings, then
concatenates them and stores the final string in a global variable for
future reference.
