rh._.exports({"0":[[" ","GenericTest iOS Source Files"]],"3":[[" ","GenericTest iOS Source Files"]],"4":[[" ","GenericTest.h"," ","@interface GenericTest : NSObject","\n    {","\n    }"," ","\n    - (double) AddTwoNumbers:(double)arg0 Arg2:(double)arg1;","\n    - (NSString *) BuildAString:(char *)arg0 Arg2:(char *)arg1;","\n    - (NSString *) HowManyObjects:(double)arg0 Arg2:(double)arg1 Arg3:(char *)arg2;","\n    - (void)ReturnAsync:(double)arg0 Arg2:(double)arg1;"," ","\n    @end\n  "," ","GenericTest.mm"," ","#import \"GenericTest.h\"","\n    #include","\n    #include"," ","\n    @implementation GenericTest"," ","\n    const int EVENT_OTHER_SOCIAL = 70;","\n    extern int CreateDsMap( int _num, ... );","\n    extern void CreateAsynEventWithDSMap(int dsmapindex, int event_index);"," ","\n    - (void)ReturnAsync:(double)arg0 Arg2:(double)arg1","\n    {"," ","\n        int dsMapIndex = CreateDsMap(3,","\n                        \"type\", 0.0, \"finished\",","\n                        \"argument0\", arg0, (void*)NULL,","\n                        \"argument1\", arg1, (void*)NULL","\n                        );","\n        CreateAsynEventWithDSMap(dsMapIndex, EVENT_OTHER_SOCIAL);","\n    }"," ","\n    - (double) AddTwoNumbers:(double)arg0 Arg2:(double)arg1","\n    {","\n        double value = arg0 + arg1;","\n         NSLog(@\"yoyo: %f + %f = %f\", arg0, arg1, value); "," ","\n         return value;","\n    }"," ","\n    - (NSString *) BuildAString:(char *)arg0 Arg2:(char *)arg1","\n    {","\n        NSString *value = [NSString stringWithFormat:@\"%s%s\",arg0,arg1];//[arg0 stringByAppendingString:arg1];","\n             NSLog(@\"yoyo: %s + \" \" + %s = %@\", arg0, arg1, value); "," ","\n             return value;","\n    }"," ","\n    - (NSString *) HowManyObjects:(double)arg0 Arg2:(double)arg1 Arg3:(char *)arg2","\n    {","\n        double value = arg0 + arg1;","\n        NSLog(@\"yoyo: %f + %f = %f\", arg0, arg1, value); ","\n        NSString *arg2ns = [NSString stringWithFormat:@\"%s\",arg2];"," ","\n        NSString *myString = [NSString stringWithFormat:@\"%f %@\", value,arg2ns];"," ","\n        NSLog(@\"yoyo: %@\", myString); "," ","\n        return myString;","\n    }"," ","\n    @end\n  "]],"id":"2847"})