rh._.exports({"0":[["iOS / tvOS Extensions"]],"1":[["Extensions - Creating iOS / tvOS Extensions"]],"2":[["iOS Extensions,iOS, tvOS Extensions, tvOS"]],"3":[["\n  ","\n  "],["\n  ","To create an extension for iOS or tvOS you have to do it in two parts. The first part would be to add the extension itself, along with the required files, and the second is to create the functions and macros/constants that the extension requires.","\n  ","The functions and constants are added using ","placeholder ","files to group them together, so you'd add a placeholder and then define the functions and macros as explained in the section ","here",". To add the rest of the files though you need to first tick the ","iOS ","and/or the ","tvOS ","check-box in the ","Additional Features"," section of the editor to open up the relevant ","Extension Properties"," window (the image below shows the iOS properties window, but the tvOS window is exactly the same):","\n  ","\n  ","Here you can give the following details:","\n  ","\n    ","Compiler Flags / Linker Flags",": Some frameworks and third party SDKs require the addition of extra linker flags and compiler flags to work, which can be specified here (see the documentation that accompanies the SDK or framework in question for details).","\n    ","Class Name",": Your extension can have multiple classes, with each class having its own functions and constants, so you should give it a name that reflects its purpose.","\n    ","App Delegate Class Name",": The name of your custom app delegate class. Setting this allows the extension to override/extend core app functionality. To use this feature you need to do the following:\n      ","\n        ","Ensure that the delegate source files have the same name as the delegate class (e.g. ","@interface MyCustomAppDelegate"," should be defined in \" ","MyCustomAppDelegate.h","\")","\n        ","Add the ","${YYExtAppDelegateIncludes}"," environment variable at the top of your app delegate header file. This will be replaced at compile-time with the relevant include files for the parent delegate class.","\n        ","Use the ","${YYExtAppDelegateBaseClass}"," environment variable as the base class for your custom app delegate. This will be replaced at compile-time with the correct base delegate class.","\n          ","\n          To ensure your extension works with any other extensions that use custom app delegates, you should call any base class methods from overridden methods in your child class. Before calling the superclass method, you need to make sure it is implemented in the class hierarchy to avoid errors, for e.g.:\n        ","\n      ","\n      ","- (BOOL)application:(UIApplication *)application willFinishLaunchingWithOptions:(NSDictionary *)launchOptions","\n        {","\n            // Check if any superclasses implement this method and call it","\n            if([[self superclass] instancesRespondToSelector:@selector(application:willFinishLaunchingWithOptions:)])","\n              return [super application:application willFinishLaunchingWithOptions:launchOptions];","\n            else","\n                return TRUE;","\n        }","\n    ","\n    ","System Frameworks",": Here you can add in any iOS system ","framework","s"," to your extension. These are added by clicking the "," button which will add a placeholder framework, which you can then edit by double clicking "," on it. You can find out more about available system frameworks ","here",". To remove a system framework, simply select it and then click the "," button.","\n      ","\n      ","You can enable the checkbox for a framework to mark it as a \"","Weak Reference","\". This adds it to \"","Build Phases -> Link Binary with Libraries","\" section of Xcode as an \"","Optional","\" framework, as opposed to a \"","Required","\" framework (which is the default behaviour).\n    ","\n    ","3rd Party Frameworks + Bundles",": This section is for adding third party and SDK bundles. As with system frameworks you click the "," button to add them and then double click "," to edit, and selecting them then clicking "," will remove them (see the documentation that came with your chosen SDK for info on the framework name).","\n      ","\n      Here you can choose to ","Not Embed"," the framework, ","Embed & Sign"," it, or ","Embed it without Signing",":","\n      ","This reflects the same option for a framework added under \"","Frameworks, Libraries and Embedded Content","\" in Xcode.\n    ","\n    ","Enter framework path on Mac",": If you want to add a framework to the extension whose files are present on the Mac that is used to build your project, you can enter the path to that framework (on the build machine) into this field and then click the "," button to add it.","\n      ","\n      The path needs to point to a ",".framework"," file which will be compressed as a ",".zip"," and placed into the ","iOSSourceFromMac"," folder under your extension directory; you can easily open that at any time by right clicking "," on the extension and selecting ","Open in Explorer",".\n    ","\n    ","Add Source",": You can use this to add the source files required for your extension to work. Added files will be stored in the ","iOSSource"," folder inside your extension directory.","\n    ","Code Injection",": Here you can add any code to be injected (added) into your iOS application when your game is built for testing or final release. Make sure to revise this (and your permissions) carefully before submitting any games to the store, as incorrect settings will cause your game to be failed for submission.","\n  ","\n  "],["\n  ","Code Injection can be used for iOS/tvOS extensions in the same way as described on the Android Extensions page: see ","Code Injection",".","\n  ","The following tags are available for the iOS and tvOS platforms:","\n  ","YYIosPlist","\n    YYIosEntitlements","\n    YYIosCocoaPods","\n    YYIosCocoaPodsDependencies","\n    YYIosBuildRules","\n    YYIosBuildSettingsInjection","\n    YYIosScriptPhase","\n    YYIosCFBundleURLSchemesArray","\n    YYIosLSApplicationQueriesSchemesArray","\n    ","\n    YYTvosPlist","\n    YYTvosEntitlements","\n    YYTvosCocoaPods","\n    YYTvosCocoaPodsDependencies","\n    YYTvosBuildRules","\n    YYTvosBuildSettingsInjection","\n    YYTvosScriptPhase","\n    YYTvosCFBundleURLSchemesArray","\n    YYTvosLSApplicationQueriesSchemesArray\n  ","\n  ","The runtime location where the code is injected will depend on the type of the tag:","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Tag Type","\n        ","Injection Path","\n      ","\n      ","\n        ","Entitlements","\n        ","{RUNTIME}\\ios\\TemplateProject\\${YYXCodeProjName}\\","\n          ","${YYXCodeProjName}.entitlements","\n        ","\n      ","\n      ","\n        ","info.plist","\n        ","{RUNTIME}\\ios\\TemplateProject\\${YYXCodeProjName}\\","\n          Supporting Files\\","${YYXCodeProjName}-Info.plist","\n      ","\n      ","\n        ","infoPlist.strings","\n        ","{RUNTIME}\\ios\\TemplateProject\\${YYXCodeProjName}\\","\n          en.lproj\\InfoPlist.strings","\n      ","\n      ","\n        ","project.pbxproj","\n        ","{RUNTIME}\\ios\\TemplateProject\\${YYXCodeProjName}.xcodeproj\\","\n          project.pbxproj","\n      ","\n      ","\n        ","xcscheme","\n        ","{RUNTIME}\\ios\\TemplateProject\\${YYXCodeProjName}.xcodeproj\\","\n          xcshareddata\\xcschemes\\${YYXCodeProjName}.xcscheme","\n      ","\n    ","\n  ","\n  ","NOTE"," These paths are only for VM. For YYC, injected code will go into the ","{RUNTIME}\\yyc\\"," directory, where the paths may or may not be equivalent to those for VM.","\n  ","Note that there is a Game Option ","for iOS"," and ","for tvOS"," to add a ","Podfile.lock"," file to ","GameMaker",", which is required if you are adding CocoaPods Dependencies in this section.","\n  "],["\n  ","If your extension has had any System Frameworks or 3rd Party Frameworks added, these will now be listed in the ","Extension Properties ","window, with each one having a check-box beside it. If you mark the check-box, you are enabling weak linking, which is useful should you need to \"override\" any symbol from the included library with your own value, but it should be noted that doing so will slow linking down.","\n  ","For information on your creating native extensions for iOS, see ","Source Examples","; and for information on using CocoaPods in extensions, see the following guide:","\n  ","\n    ","iOS and tvOS: Using Cocoa Pods","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Extension Editor","\n        ","Next: ","Source Examples","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["iOS / tvOS Extensions"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Code Injection"],["Additional Information"]],"id":"2609"})