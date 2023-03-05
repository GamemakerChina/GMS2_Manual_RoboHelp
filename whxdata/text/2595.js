rh._.exports({"0":[[" ","Async Events"]],"1":[["Objects - Async Events"]],"2":[["Async Events,asynchronous,image loaded,audio playback,audio recording,cloud,dialog,http,in-app-purchase,networking,push notification,save/load,social,steam,system"]],"3":[[" ","The Async Events"]],"4":[[" ","An Asynchronous Event is one that is fired off when ","GameMaker"," receives a ","callback"," from some external source, which can be from the web or from the device running your game. Basically,\n    you tell ","GameMaker"," to do something - like load an image - and it'll start to do this but continue doing whatever it else it has to do meanwhile its working. Then, when the request has been completed, a callback will be sent to GameMaker\n    Studio 2 and any Asynchronous Events defined for that type of callback will be fired."," ","Please note that the Asynchronous Events are fired for ","all ","instances that have them, much like the keyboard events, so you can - for example - do an ","http_get()"," call in one instance, yet have the ","Asynchronous HTTP Event","    in another to deal with the callback."," ","NOTE",": You should be aware that due to XSS protection in browsers, requests and attempts to load resources from across domains are blocked and may appear to return blank results when using any of the following events."," ","There are various types of events associated with the Asynchronous event category, and they are all explained in the sections below:"," ","NOTE",": The variable ","async_load","  which is mentioned\n    in the following sections is ","only valid in these events",", as the DS map that it points to is created at the start of the event, then deleted again at the end, with this variable being reset to a value of -1 at all other times."," ","Audio Playback"," ","Audio Recording"," ","Cloud"," ","Dialog"," ","HTTP"," ","In App Purchase"," ","Image Loaded"," ","Networking"," ","Push Notifications"," ","Save / Load"," ","Social"," ","Steam"," ","System"," ","It may be that if you are making extensions for different platforms you would like to target one or more of these asynchronous events for callbacks from your extension functions. To that end, you can find a table below that outlines each of the internal\n    event name constants and their corresponding ID value. Note that these event constants are ","only"," for use with extensions!"," ","Constant"," ","Value"," ","EVENT_OTHER_WEB_IMAGE_LOAD "," ","60"," ","EVENT_OTHER_WEB_SOUND_LOAD "," ","61"," ","EVENT_OTHER_WEB_ASYNC "," ","62"," ","EVENT_OTHER_DIALOG_ASYNC "," ","63"," ","EVENT_OTHER_WEB_IAP "," ","66"," ","EVENT_OTHER_WEB_CLOUD "," ","67"," ","EVENT_OTHER_WEB_NETWORKING "," ","68"," ","EVENT_OTHER_WEB_STEAM "," ","69"," ","EVENT_OTHER_SOCIAL "," ","70"," ","EVENT_OTHER_PUSH_NOTIFICATION "," ","71"," ","EVENT_OTHER_ASYNC_SAVE_LOAD "," ","72"," ","EVENT_OTHER_AUDIO_RECORDING "," ","73"," ","EVENT_OTHER_AUDIO_PLAYBACK "," ","74"," ","EVENT_OTHER_SYSTEM_EVENT "," ","75"," ","EVENT_OTHER_MESSAGE_EVENT "," ","76"," ","Back: ","Object Events"," ","Next: ","Gesture Events"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2595"})