rh._.exports({"0":[[" ","Gesture Events"]],"1":[["Objects - Gesture Events,event_data"]],"2":[["flick,pan,rotate,gesture,gesture events,tap"]],"3":[[" ","The Gesture Events"]],"4":[[" ","Events in the Gesture Event category will be triggered whenever ","GameMaker"," detects a \"gesture\" of the mouse or a touch screen event (while these gesture events are designed specifically for mobile use, they can also be used on other targets to detect the mouse, although they will not detect multiple touches in this case). The goal of the gesture system is to try and recognise inputs at a higher level than the direct mouse\\touch reading functions, and is designed to simplify the implementation of commonly used inputs on touch-based devices."," ","NOTE"," These events will not be triggered on the HTML5 platform due to lack of support for multi-touch using these events on that platform. If you are looking for gestures on that target then you should be using the ","device functions","."," ","You can choose to detect either ","instance ","gestures or ","global ","gestures, where instance gesture events will only be triggered when the initial touch/click is on an instance within the room. Note that the instance must have a valid collision mask (see ","The Sprite Editor - Collision Mask"," and ","The Object Editor - Collision Mask"," sections for more details) for this event to be triggered. Global events, however, will be triggered by touching/clicking anywhere within the game room, and for all instances that have the event."," ","When a gesture is recognised, it will trigger one or more of the available events, and the event triggered will depend on the type of gesture that has been detected. In every case, however, a ","DS Map"," will be generated for you and stored in the built-in variable ","event_data",". The keys available will depend on which kind of event it has been created by and are shown in each of the sub-sections below."," ","NOTE",": The variable ","event_data"," is only valid in these events, as the DS map that it points to is automatically created at the start of the event, then destroyed again at the end, with this variable being reset to a value of -1 at all other times."," ","It is worth noting that if you have multiple instances under the position being touched and they all have a gesture event, then ","all ","of them will trigger, not just the \"topmost\" instance. Also note that when using multiple camera views and dragging an instance, the values returned will be based on the view you were in when the initial touch/click was received - this is true for all subsequent events in that gesture for that instance. So touching and dragging an instance in one view then releasing the touch in another view, will return values relative to the initial view where the gesture was first detected."," "," ","Tap, Drag, And Flick Events"," "," ","The \"Tap\", \"Drag\" and \"Flick\" events are all based on a single touch or mouse click on the screen and the ","event_data"," DS Map will contain the following keys:"," ","Key"," ","Description"," ","\"","gesture","\""," "," This is an ID value that is ","unique"," to the gesture that is in play. This allows you to link the different parts of multi-part gestures (such as drag start, dragging and drag end) together."," ","\"","touch","\""," "," This is the index of the touch that is being used for the gesture. In general this will start at 0 and increase for each finger that is held down, then reset back to 0 when all fingers are removed, but if the user is touching the screen\n            anywhere else when this event is triggered by another touch, then the value will be greater than 0."," ","\"","posX","\""," "," This is the room-space X position of the touch."," ","\"","posY","\""," "," This is the room-space Y position of the touch."," ","\"","rawposX","\""," "," This is the ","raw"," window-space X position of the touch (equivalent to getting the mouse position using ","device_mouse_raw_x()",")."," ","\"","rawposY","\""," "," This is the ","raw"," window-space Y position of the touch (equivalent to getting the mouse position using ","device_mouse_raw_y()",")."," ","\"","guiposX","\""," "," This is the gui-space X position of the touch (equivalent to getting the mouse position using ","device_mouse_x_to_gui()",")."," ","\"","guiposY","\""," "," This is the gui-space Y position of the touch (equivalent to getting the mouse position using ","device_mouse_y_to_gui()",")."," ","\"","diffX","\""," "," This is the room-space X difference between the position of the current touch and the position of the last touch in this gesture."," ","\"","diffY","\""," "," This is the room-space Y difference between the position of the current touch and the position of the last touch in this gesture."," ","\"","rawdiffX","\""," "," This is the raw X difference between the position of the current touch and the position of the last touch in this gesture."," ","\"","rawdiffY","\""," "," This is the raw Y difference between the position of the current touch and the position of the last touch in this gesture."," ","\"","guidiffX","\""," "," This is the gui-space X difference between the position of the current touch and the position of the last touch in this gesture."," ","\"","guidiffY","\""," "," This is the gui-space Y difference between the position of the current touch and the position of the last touch in this gesture."," ","\"","viewstartposX","\""," "," This is the room X start position of the current gesture."," ","\"","viewstartposY","\""," "," This is the room Y start position of the current gesture."," ","\"","rawstartposX","\""," "," This is the raw X start position of the current gesture."," ","\"","rawstartposY","\""," "," This is the raw Y start position of the current gesture."," ","\"","guistartposX","\""," "," This is the gui-space X start position of the current gesture."," ","\"","guistartposY","\""," "," This is the gui-space Y start position of the current gesture."," ","\"","isflick","\""," ","\n              Only available in the Drag End event",". This is set to 1 if the end of the drag is detected as a flick, meaning that you don't need a separate ","Flick Event"," if you're handling dragging anyway."," "," ","Tap"," "," ","The Tap event will be triggered when an instance has been touched or clicked or - if it is a global event - when the game registers a touch or click anywhere in the room. A tap is considered a quick touch and release, and if the touch lasts too\n        long then it will be considered a Drag (and trigger the Drag gesture events instead of the Tap event). This event will generate an ","event_data"," DS map which you can then use to get information about the event. For example:"],[" ","x_goto = x;"," y_goto = y;"],[" ","x_goto = event_data[? \"posX\"];"," y_goto = event_data[? \"posY\"];"],[" ","var _pd = point_distance(x, y, x_goto, y_goto);"," move_towards_point(x_goto, y_goto, clamp(_pd, 0, 5);"," ","The above code will detect a tap on the screen and then get the position of the tap to move the instance to that position. Note that if you want to have a longer or shorter tap detection time then you can set it with the function ","gesture_drag_time()",".\n        This sets the time between the initial detection and the tap becoming a drag, so set it to a higher value to make tap detection longer or a lower value to make it shorter (value is in seconds and defaults to 0.16)."," "," ","Double Tap"," "," ","The Double Tap event will be triggered when an instance has been touched or clicked twice in quick succession (or - if it is a global event - when the game registers two quick touches or clicks anywhere in the room). A double tap is considered two\n        quick touches and releases, but if any of the touches lasts too long then it will be considered a Drag (and trigger the Drag gesture events instead of the Double Tap event). This event will generate an ","event_data"," DS\n        map which you can then use to get information about the event. For example:"],[" ","x_goto = x;"," y_goto = y;"],[" ","instance_destroy();"," ","The above code simply detects a double tap and then destroys the instance. Note that you can set the time between taps to trigger a double tap using the function ","gesture_double_tap_time()"," (which\n        has a default value - in seconds - of 0.16) and you can also set the distance for detection between taps with the function ","gesture_double_tap_distance()"," (if\n        a second tap is detected outside of this distance it will be considered a regular tap event)."," "," ","Drag Start"," "," ","The Drag Start event will be triggered when the user maintains a touch or click without releasing it. It will be triggered once when a set time has passed after the initial touch, which is 0.16 seconds by default (although you can set this to any\n        other value in seconds using the function ","gesture_drag_time()","). After this event has been triggered, and as long as\n        the user has a touch/click held down, then the Dragging event will be triggered every step until the touch/click has been released. This event will generate an ","event_data"," DS map which you can then use to get information\n        about the event. For example:"],[" ","drag_offsetX = 0;"," drag_offsetY = 0;"],[" ","drag_offsetX = x - event_data[?\"posX\"];"," drag_offsetY = y - event_data[?\"posY\"];"," ","The above code uses the Drag Start event to get the position of the touch/click and use it to set an offset value for the x and y axis. This can then be used when dragging the instance to ensure that it doesn't \"jump\" to the position\n        that the touch/click was detected at (see the Dragging event below for a continuation of this example)."," "," ","Dragging"," "," ","The Dragging event is triggered after the Drag Start event, and will be triggered for every step that the user maintains the touch/click on the instance (or the screen, if it's a global event) and moves more than the defined dragging threshold.\n        This distance is 0.1 inches by default but can be set using the function ","gesture_drag_distance()",". If there is no\n        movement or the movement is under the defined threshold, the event will not be triggered. This event will generate an ","event_data"," DS map which you can then use to get information about the event. For example:"],[" ","drag_offsetX = 0;"," drag_offsetY = 0;"],[" ","drag_offsetX = x - event_data[?\"posX\"];"," drag_offsetY = y - event_data[?\"posY\"];"],[" ","x = event_data[?\"posX\"] + drag_offsetX;"," y = event_data[?\"posY\"] + drag_offsetY;"," ","The example code above uses the offset variables set in the Drag Start event to move the instance when the Dragging event is triggered."," "," ","Drag End"," "," ","The Drag End event is triggered when the user releases the touch/click on the instance (or the screen if the event is global). This event will generate an ","event_data"," DS map which you can then use to get information about\n        the event, but in this event the map will have an extra key: \"","isflick","\". Flick is calculated as the distance per second that the drag has occurred over, and the value for the \"","isflick","\"\n        key will be true if it is greater than the defined distance per second value, or false otherwise. Note that the default is 2 inches per second, but you can set it to another value using the function ","gesture_flick_speed()",".\n        Also note that there is a dedicated Flick event which will also be triggered if the \"isflick\" variable is true. An example of use would be:"],[" ","flickVelX = 0.0;"," flickVelY = 0.0;"],[" ","isFlick = event_data[?\"isflick\"];"," if (isFlick)","     {","     flickVelX = event_data[?\"diffX\"];","     flickVelY = event_data[?\"diffY\"];","     }"," else\n        ","     {","     flickVelX = 0;","     flickVelY = 0;","     }\n      "],[" ","x += flickVelX;"," y += flickVelY;"," flickVelX *= 0.7;"," flickVelY *= 0.7;"," ","The above code simply gets the difference in x and y position of the last Dragging event and the current Drag End event, and if the movement has been greater than the flick threshold, it sets some variables that are use to the move the instance\n        in the step event."," "," ","Flick"," "," ","The Flick event is only triggered when a touch/click has been held, dragged and then released and the distance between the last drag position and the release position is greater than 2 inches per second (this is the default setting, although this\n        can be changed using the function ","gesture_flick_speed()","). This event will generate an ","event_data"," DS map which you can then use to get information about the event. For example:"],[" ","flickVelX = 0.0;"," flickVelY = 0.0;"],[" ","flickVelX = event_data[?\"diffX\"];"," flickVelY = event_data[?\"diffY\"];"],[" ","x += flickVelX;"," y += flickVelY;"," flickVelX *= 0.7;"," flickVelY *= 0.7;"," ","The above code simply gets the difference in x and y position of the last Dragging event and the current Flick event, and if the movement has been greater than the flick threshold, it sets some variables that are use to the move the instance in\n        the step event."," "," ","Pinch Events"," "," ","The \"Pinch\" events are based on two touches to the devices screen being recognised at once, where one (or both) have moved more than a certain distance. The angle of movement of the touches along with the movement of each touch is what will\n      determine the detection of a Pinch or Rotate event, where (in the case of the Pinch Event type):"," ","If one of the touches isn't moving, the other must be moving towards it or away from it within a threshold angle (which can be set using the functions ","gesture_pinch_angle_towards()"," and\n        - ","gesture_pinch_angle_away()",")."," ","If both touches are moving, their velocities must be in approximately opposite directions and the same angular threshold check is also done to ensure the touches are moving in approximate alignment."," ","When two touches and a movement are detected with the above criteria, a Pinch Event will be triggered, and in each of the events the ","event_data"," DS Map will be populated with the following keys:"," ","Key"," ","Description"," ","\"gesture\""," "," This is an ID value that is ","unique"," to the gesture that is in play. This allows you to link the different parts of multi-part gestures (such as drag start, dragging and drag end) together."," ","\"touch1\""," "," This is the index of the first touch that is being used as part of the pinch gesture. In general this will be 0, but if the user is touching the screen anywhere else when this event is triggered by another touch, then the value will be\n            greater than 0."," ","\"touch2\""," "," This is the index of the second touch that is being used as part of the pinch gesture. In general this will be 1 more than the value for touch1, but may be some other value depending on the number of touches being detected elsewhere."," ","\"posX1\""," "," This is the room-space X position of the first touch."," ","\"posY1\""," "," This is the room-space Y position of the first touch."," ","\"rawposX1\""," "," This is the ","raw"," window-space X position of the first touch (equivalent to getting the mouse position using ","device_mouse_raw_x()",")."," ","\"rawposY1\""," "," This is the ","raw"," window-space Y position of the first touch (equivalent to getting the mouse position using ","device_mouse_raw_y()",")."," ","\"guiposX1\""," "," This is the gui-space X position of the first touch (equivalent to getting the mouse position using ","device_mouse_x_to_gui()",")."," ","\"guiposY1\""," "," This is the gui-space Y position of the second touch (equivalent to getting the mouse position using ","device_mouse_y_to_gui()",")."," ","\"posX2\""," "," This is the room-space X position of the second touch."," ","\"posY2\""," "," This is the room-space Y position of the second touch."," ","\"rawposX2\""," "," This is the ","raw"," window-space X position of the first touch."," ","\"rawposY2\""," "," This is the ","raw"," window-space Y position of the second touch."," ","\"guiposX2\""," "," This is the gui-space X position of the second touch."," ","\"guiposY2\""," "," This is the gui-space Y position of the second touch."," ","\"midpointX\""," "," The X position of the mid point between the two touches in room space."," ","\"midpointY\""," "," The Y position of the mid point between the two touches in room space."," ","\"rawmidpointX\""," "," This is the raw window-space X position of the mid point."," ","\"rawmidpointY\""," "," This is the raw window-space Y position of the mid point."," ","\"guimidpointX\""," "," This the gui-space X position of the mid point."," ","\"guimidpointY\""," "," This the gui-space Y position of the mid point."," ","\"relativescale\""," "," This is difference in scale compared to the last event in this gesture (so for ","Pinch In"," events this will always be smaller than 1.0, whereas for ","Pinch Out"," events it will always be larger than 1.0)"," ","\"absolutescale\""," "," This is the scale compared to where the fingers were when the gesture started (so if the distance between the fingers has halved then this will be 0.5 whereas if the distance has doubled it will be 2.0)."," "," ","Pinch Start"," "," ","The Pinch Start event will be triggered when an instance (or the screen if the event is global) has been touched by two \"fingers\" (and the touch is maintained) and then one or both of the \"fingers\" is moved. If the touches move\n        away from each other or towards each other more than the minimum check distance (which is 0.1 inches by default, but it can be set using the function ","gesture_pinch_distance()","),\n        and the angle between them is within the defined value (this defaults to 45° but can be set using ","gesture_pinch_angle_towards()"," and\n        ","gesture_pinch_angle_away()","), then a Pinch Start event will be triggered. In this event you can set variables or store position date for future use. For example:\n      "],[" ","pinching = true;"," pinch_x = event_data[? \"midpointX\"]; pinch_y = event_data[? \"midpointY\"];"," ","The above code will detect a pinch and store the midpoint position for that pinch."," "," ","Pinch In / Pinch Out"," "," ","The Pinch In and Pinch Out events will be triggered every step that the distance between the two touches that make up the pinch changes over the minimum threshold (set to +/- 0.1 inches by default, but you can change it using the function gesture_pinch_distance).\n        If there is no movement of the pinch touches then these events will not trigger. These events will generate an ","event_data"," DS map which you can then use to get information about the event. For example:"],[" ","var _scale = event_data[? \"relativescale\"];"," var _w = camera_get_view_width(view_camera[0]);"," var _h = camera_get_view_height(view_camera[0]);"," var _x = camera_get_view_x(view_camera[0]) + (_w / 2);"," var _y = camera_get_view_y(view_camera[0])\n        + (_h / 2);"," "," _w *= _scale;"," _h = _w * (room_height / room_width);"," _x -= _w / 2;"," _y -= _h / 2;"," "," camera_set_view_pos(view_camera[0], _x, _y);"," camera_set_view_size(view_camera[0], _w, _h);\n      "," ","The above code will scale the view based on the relative scale of the pinch touches."," "," ","Pinch End"," "," ","The Pinch End event will be triggered when the user releases one (or both) of the touches from the device. This events will generate an ","event_data"," DS map which you can then use to get information about the event. For\n        example:"],[" ","var _pinchx = event_data[? \"midpointX\"];"," var _pinchy = event_data[? \"midpointY\"];"," var _w = camera_get_view_width(view_camera[0]);"," var _h = camera_get_view_height(view_camera[0]);"," var _x = _pinchx - (_w / 2);"," var _y = _pinchy - (_h / 2);"," "," camera_set_view_pos(view_camera[0], _x, _y);\n      "," ","The above code will set the view position to be centered on the midpoint of the two touches that made up the pinch when the touches are released."," "," ","Rotate Events"," "," ","The \"Rotate\" events are based on two touches to the devices screen being recognised at once, and where there has been a consistent angular rotation between the two within a specific time. The angle of movement of the touches along with the\n      movement of each touch is what will determine the detection of a Pinch or Rotate event, where (in the case of the Rotate Event type):"," ","Two touches must be held down for a specified minimum time (the default time is 0.16 seconds, but you can change it using the function ","gesture_rotate_time()",")."," ","Within this minimum time period they must rotate in a consistent direction (if the rotation direction changes within that time then no rotate is started)."," ","The rotation amount must exceed the minimum threshold angle (which is set to 5° by default, but this can be changed using the function ","gesture_rotate_angle()",")."," ","When two touches and a movement are detected with the above criteria, a Rotate Event will be triggered, and in each of the events the ","event_data"," DS Map will be populated with the following keys:"," ","Key"," ","Description"," ","\"gesture\""," "," This is an ID value that is ","unique"," to the gesture that is in play. This allows you to link the different parts of multi-part gestures (such as drag start, dragging and drag end) together."," ","\"touch1\""," "," This is the index of the first touch that is being used as part of the pinch gesture. In general this will be 0, but if the user is touching the screen anywhere else when this event is triggered by another touch, then the value will be\n            greater than 0."," ","\"touch2\""," "," This is the index of the second touch that is being used as part of the pinch gesture. In general this will be 1 more than the value for touch1, but may be some other value depending on the number of touches being detected elsewhere."," ","\"posX1\""," "," This is the room-space X position of the first touch."," ","\"posY1\""," "," This is the room-space Y position of the first touch."," ","\"rawposX1\""," "," This is the ","raw"," window-space X position of the first touch (equivalent to getting the mouse position using ","device_mouse_raw_x()",")."," ","\"rawposY1\""," "," This is the ","raw"," window-space Y position of the first touch (equivalent to getting the mouse position using ","device_mouse_raw_y()",")."," ","\"guiposX1\""," "," This is the gui-space X position of the first touch (equivalent to getting the mouse position using ","device_mouse_x_to_gui()",")."," ","\"guiposY1\""," "," This is the gui-space Y position of the second touch (equivalent to getting the mouse position using ","device_mouse_y_to_gui()",")."," ","\"posX2\""," "," This is the room-space X position of the second touch."," ","\"posY2\""," "," This is the room-space Y position of the second touch."," ","\"rawposX2\""," "," This is the ","raw"," window-space X position of the first touch."," ","\"rawposY2\""," "," This is the ","raw"," window-space Y position of the second touch."," ","\"guiposX2\""," "," This is the gui-space X position of the second touch."," ","\"guiposY2\""," "," This is the gui-space Y position of the second touch."," ","\"pivotX\""," "," The X position of the rotation pivot point in room space."," ","\"pivotY\""," "," The Y position of the rotation pivot point in room space."," ","\"rawpivotX\""," "," This is the raw window-space X position of the rotational pivot point."," ","\"rawpivotY\""," "," This is the raw window-space Y position of the rotational pivot point."," ","\"guipivotX\""," "," This the gui-space X position of the rotational pivot point."," ","\"guipivotY\""," "," This the gui-space Y position of the rotational pivot point."," ","\"relativeangle\""," "," This is difference in rotation compared to the last event in this gesture, measured in degrees"," ","\"absoluteangle\""," "," This is the difference in angle compared to where the fingers were when the gesture started, measured in degrees. So, for example, if the fingers have rotated a quarter-circle since the start of the gesture then this value will be 90°\n            or -90°, depending on the direction of rotation."," "," ","Rotate Start"," "," ","The Rotate Start event will be triggered when an instance (or the screen if the event is global) has been touched by two \"fingers\" (and the touch is maintained) and then one or both of the \"fingers\" is rotated from its start\n        position. The rotation of the touches needs to have started within a short period of time (0.16 seconds by default, but it can be set using the function ","gesture_rotate_time()",")\n        and be greater than the minimum angular threshold (by default 5°, but, this can be changed using the function ","gesture_rotate_angle()",").\n        If these checks are true, then a Rotate Start event will be triggered and you can use it to store values or set variables for use with the rest of the rotate events. For example:"],[" ","rotating = false;"," view_a = camera_get_view_angle(view_camera[0]);"],[" ","rotating = true;"," ","The above code simply sets up some variables for rotating the view camera, and then in the Rotate Start event, it sets one of them to true."," "," ","Rotating"," "," ","The Rotating event will be triggered every step that the touches on the screen rotate around each other, as long as the movement is greater than the minimum angular threshold (by default 5°, but, this can be changed using the function ","gesture_rotate_angle()",").\n        This event can be used to set variables and manipulate instances, for example:"],[" ","var _relangle = event_data[?\"relativeangle\"];"," var _a = camera_get_view_angle(view_camera[0]);"," _a += _relangle;"," camera_set_view_angle(view_camera[0], _a);"," ","The above code rotates the camera view depending on the rotational movement of the touches in the event."," "," ","Rotate End"," "," ","The Rotate End event will be triggered when one (or both) touches that comprise the gesture are released from the device screen. This event can be used to set variables and manipulate instances, for example:"],[" ","rotating = false;"],[" ","if (!rotating) ","     {","     var _a = camera_get_view_angle(view_camera[0]);","     var _adif = angle_difference(view_a, _a);","     _a += median(-5, _adif, 5);","     camera_set_view_angle(view_camera[0], _a);","     }"," ","The above code uses the Rotate End event to detect when the user stops the gesture and then sets a variable. This variable is then used in the step event to rotate the view camera back to its original position."," ","Back: ","Object Events"," ","Next: ","Event Order"]],"5":[[" ","Create Event"],[" ","Tap Event"],[" ","Step Event"],[" ","Create Event"],[" ","Double Tap Event"],[" ","Create Event"],[" ","Drag Start Event"],[" ","Create Event"],[" ","Drag Start Event"],[" ","Dragging Event"],[" ","Create Event"],[" ","Drag End Event"],[" ","Step Event"],[" ","Create Event"],[" ","Flick Event"],[" ","Step Event"],[" ","Pinch Start Event"],[" ","Global Pinch In /Pinch Out Event"],[" ","Pinch End Event"],[" ","Create Event"],[" ","Rotate Start Event"],[" ","Rotating Event"],[" ","Rotate End Event"],[" ","Step Event"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2819"})