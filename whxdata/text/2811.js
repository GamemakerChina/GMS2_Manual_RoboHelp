rh._.exports({"0":[[" ","GenericTest.java"]],"3":[[" ","GenericTest.java"]],"4":[[" ","package ${YYAndroidPackageName};"," ","\n    import android.util.Log;","\n    import java.io.File;","\n    import java.io.FileReader;","\n    import java.io.BufferedReader;","\n    import java.io.FileNotFoundException;","\n    import java.io.IOException;","\n    import java.lang.String;"," ","\n    import ${YYAndroidPackageName}.R;","\n    import com.yoyogames.runner.RunnerJNILib;"," ","\n    public class GenericTest","\n    {","\n        private static final int EVENT_OTHER_SOCIAL = 70;"," ","\n        public void ReturnAsync(double arg0, double arg1)","\n        {            ","\n                int dsMapIndex = RunnerJNILib.jCreateDsMap(null, null, null);","\n                RunnerJNILib.DsMapAddString( dsMapIndex, \"type\", \"finished\");","\n                RunnerJNILib.DsMapAddDouble( dsMapIndex, \"argument0\", arg0);","\n                RunnerJNILib.DsMapAddDouble( dsMapIndex, \"argument1\", arg1);","\n                RunnerJNILib.CreateAsynEventWithDSMap(dsMapIndex, EVENT_OTHER_SOCIAL);","\n        }"," ","\n        public double AddTwoNumbers(double arg0, double arg1)","\n        {","\n                double value = arg0 + arg1;","\n                Log.i(\"yoyo\", arg0 + \"+\" + arg1 + \" = \" + value);"," ","\n                return value;","\n        }"," ","\n        public String BuildAString(String arg0, String arg1)","\n        {","\n                String myString = arg0 + \" \" + arg1;","\n                Log.i(\"yoyo\", myString);"," ","\n                return myString;","\n        }"," ","\n        public String HowManyObjects(double arg0, double arg1, String arg2)","\n        {","\n                double value = arg0 + arg1;","\n                Log.i(\"yoyo\", arg0 + \"+\" + arg1 + \" = \" + value);"," ","\n                String myString = String.valueOf(value) + \" \" + arg2;","\n                Log.i(\"yoyo\", myString);"," ","\n                return myString;","\n        }","\n    }\n  "]],"id":"2811"})