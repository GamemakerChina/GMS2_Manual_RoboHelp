rh._.exports({"0":[[" ","Time Source Expiry Types"]],"1":[["Time Source, Time Source Expiry Types, time_source_expire_nearest, time_source_expire_after"]],"2":[["Time Sources, Time Source Expiry Types, time_source_expire_nearest, time_source_expire_after"]],"3":[[" ","Time Source Expiry Types"]],"4":[[" ","Time Source Expiry Constant"," ","Constant"," ","Description"," ","Value"," ","time_source_expire_nearest"," ","The ","Time Source"," will expire on the frame nearest to its expiry time"," ","0"," ","time_source_expire_after"," ","The ","Time Source"," will expire on the first frame after its expiry time"," ","1"," ","Time Sources that use seconds as a ","unit"," may not always expire on a game frame. They may expire after a game frame has been processed but before a new frame can start processing."," ","However, the callback for a ","Time Source"," can only run on a game frame, so the expiry type of a ","Time Source"," controls when its callback runs, in case it expires in the middle of two frames."," ","When using ","time_source_expire_nearest",", the callback for a ","Time Source"," will run on the frame that's nearest to its expiry time, which may be the frame before it, or the frame after it."," ","When using ","time_source_expire_after",", the callback for a ","Time Source"," will always run on the frame ","after"," its expiry time."," ","During a frame, a ","Time Source"," is \"ticked\" (i.e. ","updated",") and its callback is executed between the Begin Step and Step events (see ","Event Order",")."," ","Back: ","Time Sources"," ","Next: ","Time Source States"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2035"})