# push_cancel_local_notification

This function cancels the given push notification. You can get the ID
for the notification to cancel using the functions [
push_get_first_local_notification()
](push_get_first_local_notification) and [
push_get_next_local_notification()
](push_get_next_local_notification) and the function will return
true on success or false otherwise (for example if the notification does
not exist or has already been triggered). **NOTE** : This function is
limited to the **iOS** and **Android** target modules.

#### Syntax:

``` gml
push_cancel_local_notification(ID);
```

|          |                                                                                                                                                           |                                       |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| Argument | Type                                                                                                                                                      | Description                           |
| ID       |  [Push Notification ID](../../../../../GameMaker_Language/GML_Reference/Asynchronous_Functions/Push_Notifications/push_get_first_local_notification)  | The ID of the notification to cancel. |

#### Returns:

``` gml
 Boolean
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
string. If the string is found, the notification is canceled and moves
on to check the next notification until all in the queue have been
checked.
