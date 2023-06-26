rh._.exports({"0":[[" ","Show Virtual Keyboard"]],"1":[["Show Virtual Keyboard"]],"2":[[" "," Show Virtual Keyboard"]],"3":[[" ","This action can be used to show the virtual keyboard on the device running the game. When you call this action you will be asked to provide one of the following constants for each of the first three arguments:"," ","Keyboard type",": This constant is used to set which key-set will be available on the virtual keyboard. The available keyboard types are:\n      "," ","Keyboard Type"," ","Description"," ","kbv_type_default"," ","The default keyboard type for the current system."," ","kbv_type_ascii"," ","An ASCII-only keyboard."," ","kbv_type_url"," ","A normal keyboard optimized for URL entry. Usually features a \".com\" or other domain keys, as well as \"/\" and \".\" keys."," ","kbv_type_email"," ","A normal keyboard optimized for e-mail entry. Usually features \"@\" and \".\" characters."," ","kbv_type_numbers"," ","A numbers-only keyboard, usually displayed as a number pad."," ","kbv_type_phone"," ","A phone pad keyboard. Usually numbers-only with the \"*\" and \"#\" keys."," ","kbv_type_phone_name"," ","A keyboard optimized for entering both a phone number and a name. Usually similar to an ASCII keyboard, but with a limited special characters selection."," ","Return type",": This constant is used to set what is shown on the return/action key of the virtual keyboard. The available return types are:\n      "," ","Return Type"," ","Description"," ","kbv_returnkey_default"," ","The default return key title for the current system."," ","kbv_returnkey_go"," ","Sets the return key title to \"Go\"."," ","kbv_returnkey_google"," ","Sets the return key title to \"Google\", or to a generic search icon in some cases."," ","kbv_returnkey_join"," ","Sets the return key title to \"Go\"."," ","kbv_returnkey_next"," ","Sets the return key title to \"Next\"."," ","kbv_returnkey_route"," ","Sets the return key title to \"Route\"."," ","kbv_returnkey_search"," ","Sets the return key title to \"Search\", or to a generic search icon in some cases."," ","kbv_returnkey_send"," ","Sets the return key title to \"Send\"."," ","kbv_returnkey_yahoo"," ","Sets the return key title to \"Yahoo\", or to a generic search icon in some cases."," ","kbv_returnkey_done"," ","Sets the return key title to \"Done\"."," ","kbv_returnkey_continue"," ","Sets the return key title to \"Continue\"."," ","kbv_returnkey_emergency"," ","Sets the return key title to \"Emergency Call\"."," ","Autocapitalization type",": This constant is used to determine how the words typed via the virtual keyboard should be autocapitalized. The available autocapitalization types are:\n      "," ","Autocapitalization Type"," ","Description"," ","kbv_autocapitalize_none"," ","Autocapitalization is disabled."," ","kbv_autocapitalize_words"," ","Words will be auto-capitalized."," ","kbv_autocapitalize_sentences"," ","Sentences will be auto-capitalized."," ","kbv_autocapitalize_characters"," ","All characters will be capitalized."," ","The last argument is to enable/disable predictive text, and this would be set to ","true"," to permit it, and ","false"," otherwise, but note that just because it is permitted doesn't mean that it will be used as that will depend on the preferences of the user on the device. When in predictive text mode, the virtual keyboard will not generate normal ","GameMaker"," key-press events. Instead, it will only update the ","last"," character pressed and keyboard string variables. This is due to the inability to detect whether a change in the internal text field used for detecting key presses came from an actual virtual keyboard key, or a text suggestion. In these cases you would want to read the ","keyboard_string"," input as opposed to reading any kind of raw key input."," ","It is important to note too that the user will get different keyboards with different capabilities depending on the platform OS, with the following caveats for use per target:"," ","Android / Amazon Fire",": On Android, the keyboard type ","kbv_type_phone_name"," is not supported and will display an ASCII keyboard instead, and the return key type can only be ","kbv_returnkey_go",", ","kbv_returnkey_search",", ","kbv_returnkey_next",", ","kbv_returnkey_send"," or ","kbv_returnkey_done",". If other return key types are used on that platform, the system will default to the replacement return keys listed below:\n      "," ","Unavailable return key"," ","Replacement key"," ","kbv_returnkey_google"," ","kbv_returnkey_yahoo"," ","kbv_returnkey_search"," ","kbv_returnkey_join"," ","kbv_returnkey_route"," ","kbv_returnkey_emergency"," ","kbv_returnkey_go"," ","kbv_returnkey_continue"," ","kbv_returnkey_next"," ","AndroidTV / FireTV",": Custom return key types are ","not"," supported on ASCII keyboards - the default return key will always be displayed."," ","tvOS",": Predictive text and auto-capitalization are not supported on tvOS, and the height of the keyboard returned by system events and the function ","keyboard_virtual_height()"," will default to the screen height due to it spanning the entire screen and due to keyboard rect dimension functions being disabled on tvOS. Also note that physical (Bluetooth) keyboard events will not be broadcast unless the virtual keyboard has been opened."," ","Calling this function will generate a ","System Asynchronous Event",", in which the ","async_load"," ","DS map"," will be populated with the following key/value pairs:"," ","\"","event_type","\" - this will be \"","virtual keyboard status","\" when triggered by virtual keyboard actions."," ","\"","screen_height","\" - the height of the virtual keyboard (in pixels). This will be 0 if the keyboard is invisible."," ","\"","keyboard_status","\" - the current status of the keyboard, returned as one of the following strings:\n      "," ","\"hiding\""," ","\"hidden\""," ","\"showing\""," ","\"visible\""],[" ","Argument"," ","Description"," ","keyboard_type"," ","Determines the key-set available on the virtual keyboard."," ","return_key_type"," ","Determines what is shown on the return/action key of the virtual keyboard."," ","autocapitalization_type"," ","Determines how/if the words typed via the virtual keyboard will be autocapitalized."," ","predictive_text_enabled"," ","Set to ","true","/","false"," to enable/disable predictive text input."],[" ","The above action block code checks for a mouse down action, and if one is detected, then a check is performed to see if the OS virtual keyboard is showing. If it isn't then it is set to show - using a numeric keypad type - and if is already showing then it is hidden."," ","Back: ","Mouse And Keyboard Actions"," ","Next: ","Hide Virtual Keyboard"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Show Virtual Keyboard"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"2661"})