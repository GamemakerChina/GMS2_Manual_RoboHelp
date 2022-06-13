# push_get_next_local_notification

This function will populate a pre-made [DS
map](../../Data_Structures/DS_Maps/DS_Maps) with a series of
key/value pairs for the next local push notification in the queue to be
shown. It returns -1 if there are no further notifications queued, or a
real value otherwise representing the ID for the notification. This ID
can then be used to cancel the notification using the function [
push_cancel_local_notification() ](push_cancel_local_notification) .
You should call the function [ push_get_first_local_notification()
](push_get_first_local_notification) to get the first notification
in the queue and then use this function to continue through it. **NOTE**
: This function is limited to the **iOS** and **Android** target
modules. he DS map will hold the following key/value pairs:

-   " **title** " - The title of the notification (this will only be
    available on the *Android* platform as iOS does not store the title
    information)
-   " **message** " - The message body text
-   " **data** " - The data package string

#### Syntax:

``` gml
push_get_next_local_notification(map);
```

|          |                                                                                                          |                         |
|----------|----------------------------------------------------------------------------------------------------------|-------------------------|
| Argument | Type                                                                                                     | Description             |
| map      |  [DS Map ID](../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_create)  | The DS Map ID to use.   |

#### Returns:

``` gml
 Push Notification ID

or -1
```

#### Example :

``` gml
var map = ds_map_create();
var ntf = push_get_first_local_notification(map);
while(ntf >= 0)
{
    var data = ds_map_find_value(map, "data");
    if data == "Daily_Reward"
    {
        push_cancel_local_notification(ntf);
    }
    ntf = push_get_next_local_notification(map);
}
ds_map_destroy(map);
```

The above code creates a DS Map and then requests data for the first
available notification in the queue. If a notification exists, the map
is populated and the code then checks the "data" key for a specific
string. If the string is found, the notification is cancelled and moves
on to check the next notification until all in the queue have been
checked.
