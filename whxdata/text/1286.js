rh._.exports({"0":[[" ","ds_list_create"]],"1":[["ds_list_create"]],"2":[["ds_list_create"]],"3":[[" ","ds_list_create"]],"4":[[" ","This function will create a new list data-structure and return the index value. This value should be stored in a variable and used in all further function calls relating to the list. Note that if you try and access a value in the list ","before"," it has been populated - i.e. the list is \"empty\" - then the return value may be 0 since internally the first few entries in the list are set when created to minimize performance issues when initially adding items to the list (although the ","ds_list_size()"," function will still return 0 on a newly created list). If you wish to ensure that the list is \"truly\" empty on create, then you should call ","ds_list_clear()"," after creating the list, which will then mean that any values returned for unpopulated list slots will be ","undefined","."," ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that data structures of different types can have the ","same"," index value, so if in doubt you should be using the ","ds_exists()"," function before accessing them. Also note that indexes are re-used, so a destroyed data structure index value may be used by a newly created one afterwards."],[" ","ds_list_create();"],[" ","DS List ID"],[" ","list = ds_list_create();"," ","This will create a new list and assign its index id to the instance variable \"list\"."," ","Back: ","DS Lists"," ","Next: ","ds_list_destroy"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1286"})