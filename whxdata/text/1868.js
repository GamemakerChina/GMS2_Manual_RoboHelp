rh._.exports({"0":[["gamepad_get_guid"]],"1":[["gamepad_get_guid"]],"2":[["gamepad_get_guid"]],"3":[["\n    "],["\n    ","With this function you can retrieve the GUID for the gamepad connected to the given slot index. You supply the gamepad slot to check (from 0 - 11), and the function will return one of the following strings:","\n    ","\n      ","\"","none","\" if no GUID is available or no gamepad is connected","\n      ","\"","device index out of range","\" if the gamepad slot index is out of range","\n      ","The GUID string, something like \"050000005e040000fd020000ffff3f00\", if the slot has a gamepad assigned and can get the GUID for it","\n    ","\n    ","This function would usually be used in conjunction with ","gamepad_get_description()"," to generate part of the SDL string required for remapping controllers on Windows, Android and macOS.","\n    ","\n      ","\n        ","\n        ","\n      ","\n      ","\n        ","\n          "," Platform-Specific Notes","\n        ","\n        ","\n          ","Platform","\n          ","Note","\n        ","\n        ","\n          ","GX.games","\n          ","On the GX.games target platform, this function will always return ","\"none\""," for non-DirectInput devices","\n        ","\n      ","\n    ","\n    "," ","\n    "],["\n    ","gamepad_get_guid(index);","\n    ","\n      ","\n        ","\n          ","Argument","\n          ","Type","\n          ","Description","\n        ","\n        ","\n          ","index","\n          ","Real","\n          ","Which gamepad \"slot\" index to check","\n        ","\n      ","\n    ","\n    "," ","\n    "],["\n    ","String","\n    "," ","\n    "],["\n    ","var _guid = gamepad_get_guid(global.PadIndex);\n      ","\n      var _desc = gamepad_get_description(global.PadIndex);\n      ","\n      global.GamepadID = _guid + \",\" + _desc;","\n    ","The above code gets the GUID and name description strings, then concatenates them and stores the final string in a global variable for future reference.","\n    "," ","\n    "," ","\n    "," ","\n    ","\n      ","\n        ","\n          ","Back: ","Gamepad Input","\n          ","Next: "," gamepad_get_device_count ","\n        ","\n      ","\n      "],["\n    ","\n    ","\n"]],"4":[["gamepad_get_guid"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1868"})