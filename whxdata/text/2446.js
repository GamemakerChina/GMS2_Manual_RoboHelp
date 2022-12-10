rh._.exports({"0":[["Android Extensions"]],"1":[["Extensions - Creating Android Extensions"]],"2":[["Android extensions"]],"3":[["\n  ","\n  "],["\n  ","To create an extension for Android you have to do it in two parts. The first part would be to add the extension itself, along with the required files, and the second is to create the functions and macros/constants that the extension requires.","\n  ","The functions and constants are added using ","placeholder ","files to group them together, so you'd add a placeholder and then define the functions and macros as explained in the previous section. To add the rest of the files though you would need to first tick the ","Android ","check-box in the ","Extra Platforms"," section of the editor, which will open up the extension's Android Properties:","\n  ","\n  ","Here you can give the following details:","\n  ","\n    ","Class Name",": Your extension can have multiple classes, with each class having its own functions and constants, so you should give it a name that reflects its purpose.","\n    ","Android Permissions",": Here you can add in any extra permissions that your extension requires. What these permissions are will depend entirely on the use that the extension has, and so you should ","check the documentation supplied by Google"," for the Android platform, or, if you are using a third party SDK, the documentation that comes with the SDK. To add a new permission you need to click on the "," button to add a placeholder permission, and then do a double "," click on that to edit it to what is required. You can remove permissions using the "," button.","\n    ","Code Injection",": Here you can add any code to be injected (added) into your Android application when your game is built for testing or final release. Make sure to revise this (and your permissions) carefully before submitting any games to the store, as incorrect settings will cause your game to be failed for submission. See the section below for more information.","\n  ","\n  "],["\n  ","Any code entered into the \"Code Injection\" window will need to be separated into distinct XML groups, as shown in the screenshot above. The XML tag you use for a group will determine where the code is injected into your application.","\n  ","You can use the following syntax to create code injection groups:","\n  ","<YYTagName>","\n    ","\n    // Code to inject","\n    ","\n    </YYTagName>\n  ","\n  ","The following tags are available for the Android platform:","\n  ","YYAndroidTopLevelGradle","\n    YYAndroidTopLevelGradleBuildscript","\n    YYAndroidTopLevelGradleBuildscriptRepositories","\n    YYAndroidTopLevelGradleBuildscriptDependencies","\n    YYAndroidTopLevelGradleAllprojects","\n    YYAndroidTopLevelGradleAllprojectsRepositories","\n    YYAndroidTopLevelGradleEnd","\n    ","\n    YYAndroidGradle","\n    YYAndroidGradleEnd","\n    YYAndroidGradleAndroid","\n    ","YYAndroidGradleDependencies"," ","\n        YYAndroidGradleProperties","\n    YYAndroidManifestAttributes","\n    YYAndroidManifestApplicationAttributes","\n    YYAndroidManifestActivityAttributes","\n    YYAndroidManifestActivityInject","\n    YYAndroidManifestApplicationInject","\n    YYAndroidStringValuesInjection","\n    YYAndroidLayout","\n    ","YYAndroidProguard","\n  ","\n  ","The runtime location where the code is injected will depend on the type of the tag:","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Tag Type","\n        ","Injection Path","\n      ","\n      ","\n        ","Top Level Gradle","\n        ","{RUNTIME}\\android\\runner\\RootFiles\\build.gradle","\n      ","\n      ","\n        ","Module Level Gradle","\n        ","{RUNTIME}\\android\\runner\\ProjectFiles\\build.gradle","\n      ","\n      ","\n        ","Android Manifest","\n        ","{RUNTIME}\\android\\runner\\ProjectFiles\\src\\main\\AndroidManifest.xml","\n      ","\n      ","\n        ","Strings","\n        ","{RUNTIME}\\android\\runner\\ProjectFiles\\src\\main\\res\\values\\strings.xml","\n      ","\n      ","\n        ","Layout","\n        ","{RUNTIME}\\android\\runner\\ProjectFiles\\src\\main\\res\\layout\\main.xml","\n      ","\n    ","\n  ","\n  ","NOTE"," These paths are only for VM; for YYC, injected code will go into the ","{RUNTIME}\\yyc\\"," directory, where the paths may or may not be equivalent to those for VM.","\n  "],["\n  ","Once you have set this up correctly, you will need to add the files required for your extension package to work. To do this you need to click on the buttons at the bottom, either ","Add SDK"," or ","Add Source"," and then browse to the files you wish to add. Added files will be stored in the ","AndroidSource"," directory along with your extension. You can open this location at any time by right clicking "," on the extension and selecting ","Open in Explorer",".","\n  ","For information on your creating native extensions for Android, see ","Source Examples",".","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Extension Editor","\n        ","Next: ","iOS Extensions","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Android Extensions"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Code Injection"],["Source Files"]],"id":"2446"})