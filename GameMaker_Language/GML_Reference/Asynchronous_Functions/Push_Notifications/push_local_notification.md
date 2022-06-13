# push_local_notification

This function can be used to set a local notification to be shown on a
given date at a given time. The "fire_time" is the date/time that the
notification should be pushed to the user device (you can use the
GameMaker [Date and Time
Functions](../../Maths_And_Numbers/Date_And_Time/Date_And_Time) to
get this), and you can give the notification a title and a message text
as well as a payload string which will be passed to your game when the
users taps the notification. **NOTE** : The "title" argument is ignored
on iOS and the game name is shown instead. Tapping the notification will
start the game on the device and trigger an [Asynchronous Push
Notification](../../../../The_Asset_Editors/Object_Properties/Async_Events/Push_Notifications)
event where the [ async_load
](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load)
DS map can then be parsed to check the payload string and perform
whatever action is required. **NOTE** : This functionality is limited to
the **iOS** and **Android** target modules.

#### Syntax:

``` gml
push_local_notification(fire_time, title, message, data);
```

|           |                                                                                                                         |                                                  |
|-----------|-------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| Argument  | Type                                                                                                                    | Description                                      |
| fire_time |  [Datetime](../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/date_current_datetime)  | The date/time to fire the off the notification   |
| title     |  [String](../../../../../GameMaker_Language/GML_Overview/Data_Types)                                                | The notification title (a string)                |
| message   |  [String](../../../../../GameMaker_Language/GML_Overview/Data_Types)                                                | The notification message text (a string)         |
| data      |  [String](../../../../../GameMaker_Language/GML_Overview/Data_Types)                                                | The data package to send to your game (a string) |

#### Returns:

``` gml
N/A
```

#### Extended Example

In this example we will send a local push notification using the
following code:

``` gml
var fireTime = date_inc_day(date_current_datetime(), 1);
var data = "daily_reward";
push_local_notification(fireTime, "Ahoy!", "Catch The Haggis Has A Present", data);
```

This will set a timer to "push" a notification to the device when one
day has passed. When the day is up, if your game is either in the
background or not running, a notification will be shown to the user with
the given title and message (on iOS, the game name is shown and the
title is ignored), and then an asynchronous Push Notification Event will
be called. Note that if the game is in the foreground when the time for
the notification comes, it will *not* be shown, but the asynchronous
event **will still trigger** . In the event itself you would handle the
callback something like this:Async Event in the following way:

``` gml
var type = ds_map_find_value(async_load, "type");
var status = ds_map_find_value(async_load, "status");
if status == 0
{
    //error of some kind
    var error = ds_map_find_value(async_load, "error");
    show_debug_message("error=" + string(error));
}
else
{
    if type == "register"
    {
        global.reg_id = ds_map_find_value(async_load, "reg_id");
    }
    else
    {
        var data = ds_map_find_value(async_load, "data");
        if data == "daily_reward"
        {
            global.Gold += 1000;
        }
    }
}
```
