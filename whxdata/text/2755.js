rh._.exports({"0":[["GenericTest iOS Source Files"]],"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","GenericTest.h","\n  ","@interface GenericTest : NSObject","\n    {","\n    }","\n    ","\n    - (double) AddTwoNumbers:(double)arg0 Arg2:(double)arg1;","\n    - (NSString *) BuildAString:(char *)arg0 Arg2:(char *)arg1;","\n    - (NSString *) HowManyObjects:(double)arg0 Arg2:(double)arg1 Arg3:(char *)arg2;","\n    - (void)ReturnAsync:(double)arg0 Arg2:(double)arg1;","\n    ","\n    @end\n  ","\n  ","GenericTest.mm","\n  ","#import \"GenericTest.h\"","\n    #include","\n    #include","\n    ","\n    @implementation GenericTest","\n    ","\n    const int EVENT_OTHER_SOCIAL = 70;","\n    extern int CreateDsMap( int _num, ... );","\n    extern void CreateAsynEventWithDSMap(int dsmapindex, int event_index);","\n    ","\n    - (void)ReturnAsync:(double)arg0 Arg2:(double)arg1","\n    {","\n        ","\n        int dsMapIndex = CreateDsMap(3,","\n                        \"type\", 0.0, \"finished\",","\n                        \"argument0\", arg0, (void*)NULL,","\n                        \"argument1\", arg1, (void*)NULL","\n                        );","\n        CreateAsynEventWithDSMap(dsMapIndex, EVENT_OTHER_SOCIAL);","\n    }","\n    ","\n    - (double) AddTwoNumbers:(double)arg0 Arg2:(double)arg1","\n    {","\n        double value = arg0 + arg1;","\n         NSLog(@\"yoyo: %f + %f = %f\", arg0, arg1, value); ","\n    ","\n         return value;","\n    }","\n    ","\n    - (NSString *) BuildAString:(char *)arg0 Arg2:(char *)arg1","\n    {","\n        NSString *value = [NSString stringWithFormat:@\"%s%s\",arg0,arg1];//[arg0 stringByAppendingString:arg1];","\n             NSLog(@\"yoyo: %s + \" \" + %s = %@\", arg0, arg1, value); ","\n    ","\n             return value;","\n    }","\n    ","\n    - (NSString *) HowManyObjects:(double)arg0 Arg2:(double)arg1 Arg3:(char *)arg2","\n    {","\n        double value = arg0 + arg1;","\n        NSLog(@\"yoyo: %f + %f = %f\", arg0, arg1, value); ","\n        NSString *arg2ns = [NSString stringWithFormat:@\"%s\",arg2];","\n    ","\n        NSString *myString = [NSString stringWithFormat:@\"%f %@\", value,arg2ns];","\n            ","\n        ","\n        NSLog(@\"yoyo: %@\", myString); ","\n    ","\n        return myString;","\n    }","\n    ","\n    @end\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["GenericTest iOS Source Files"]],"id":"2755"})