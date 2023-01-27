rh._.exports({"0":[[" ","Building via Command Line"]],"1":[["Building via Command Line"]],"2":[["build, command line, cli, ci, igor, continuous integration"]],"3":[[" ","Building via Command Line"],[" ","Igor CI Building"],[" ","Igor Runtime"],[" ","Igor Testing"],[" ","Tests.json File"]],"4":[[" ","NOTE"," Building executable packages via command line is only available on specific licences, so please look at ","this page"," to find out whether your licence supports that. For all other licences, you can run and debug your project through a command line without any restrictions."," ","In addition to building your project through the IDE, ","GameMaker"," allows you to build your projects through a command-line interface using the many options and commands described below. You can use this to build your project, test it and deploy it to multiple platforms by running one batch file, and to set up continuous integration through an automation server such as ","Jenkins","."," ","This is done by running the ","Igor.exe"," executable present within your runtime folder and passing in the options and commands listed on this page."," ","By default, Igor can be found in:"," ","Windows: ","C:\\ProgramData\\GameMaker\\Cache\\runtimes\\runtime-[version]\\bin\\igor\\<OS>\\<architecture>\\"," ","macOS: ","/Users/Shared/GameMaker/Cache/runtimes/runtime-[version]/bin/igor/osx/<architecture>/"," ","NOTE"," You must have logged into the IDE with your account at least once before attempting command line building."],[" ","To set up CI building on a machine, you will need to do the following:"," ","Install ","GameMaker"," and the runtimes needed"," ","Build the projects through the IDE for the targets required, to make sure that they work fine"," ","Test building from the command line (see examples below)"," ","Create a batch file that will do the build that you require within the task (test this from the command line)"," ","Set up a CI environment (this depends on how you are going to build your games), like ","Jenkins"," ","Set up your CI task and ensure that all the prerequisites are setup (i.e. source control sync to your project)"," ","Hook the batch file into the CI task and test within the Jenkins environment"],[" ","Some platforms may have issues with the length of your file paths, in which case you will need to ","subst"," virtual drives on your PC before passing them into your commands"," ","Some platforms (notably Android) will automatically ","subst"," a drive while building, so you may need to manually clean this up in the event of an error"],[" ","Here are the options that you can use while running the ","Igor ","executable:"," ","Option"," ","Description"," ","/lf=[licence_plist_file]"," ","The full path to the licence file, either from the IDE or from the ","Access Key"," service"," ","\n          To retrieve the licence from the IDE, the paths are as follows:","\n          Windows: ","%appdata%\\GameMaker\\<user_name>_<number>\\licence.plist","\n          macOS: ","~/.config/GameMaker/<user_name>_<number>/licence.plist"," ","/uf=[user_folder]"," ","The user folder used for retrieving licence information, alternative to ","/lf"," ","\n          On Windows, this will be: ","%appdata%\\GameMaker\\<user_name>_<number>","\n          On macOS, this will be: ","~/.config/GameMaker/<user_name>_<number>"," ","/rp=[runtime_root]"," ","The root folder of the runtime"," ","/project=[project_YYP_file]"," ","The full path to the project's ",".yyp"," file"," ","/cache=[cache_dir_path]"," ","The cache directory to use (defaults to ","\\cache"," in the current directory)"," ","/temp=[temp_dir_path]"," ","The temporary directory to use (defaults to ","c:\\temp",")"," ","/of=[output_folder_filename]"," ","The output directory where the build will be extracted; do not specify just a directory as the trailing entry is always removed (e.g.: specifying ","d:\\game\\output"," will place the game files in ","d:\\game",")"," ","\n          If this is not specified, a directory named ","output"," will be created in the same directory as the ",".bat"," file (or where the command is running from), containing the extracted build files\n        "," ","/tf=[target_file]"," ","The actual file name of the ZIP file or NSIS installer that is created"," ","/config=[configName]"," ","The name of the configuration to use (defaults to ","Default",")"," ","/runtime=YYC|VM"," ","The output type (either YYC or VM), defaults to VM"," ","/j=[NumCPUs]"," ","The number of CPUs to use during the build process"," ","/df=[devices_json_file]"," ","The path to your ","devices.json"," file, required when building to other devices."," ","\n          On Windows, this will be: ","%appdata%\\GameMaker\\<user_name>_<number>\\devices.json","\n          On macOS, this will be: ","~/.config/GameMaker/<user_name>_<number>/devices.json"," ","/device=[device_name_from_IDE]"," ","The name of the target device to build to, as set up in the IDE"],[" ","The ","/lf"," option requires a path to your ","licence.plist"," file, which can be retrieved from your GameMaker installation after you've logged into the IDE, as described in the table above."," ","However, if you don't have access to an IDE installation, you can request an access key from the GameMaker website, and generate a ","licence.plist"," file from it."," ","Go to ","gamemaker.io/account/access_keys",", and log in with an account that has the appropriate licence"," ","Generate a key and copy it to your clipboard"," ","Open a command prompt and navigate to the Igor directory (the path is given at the top of this page)\n      "," ","cd <igor dir>"," ","Generate a licence file using Igor\n      "," ","igor runtime FetchLicences -ak=<KeyFromSite> -of=<OutputFileName>"," ","The ","licence.plist"," file generated to the ","-of"," path can now be used in the ","/lf"," option"],[" ","Here is a step-by-step example for running a game on Windows:"," ","Open a command prompt window\n      "," ","Win+R, write ","cmd",", press Enter"," ","Navigate to the Igor directory given at the top of this page\n      "," ","cd <igor dir>"," ","Write ","igor"," and hit Enter to confirm you are in the correct place. Doing this should give you a list of Igor's commands. If you get a different result, ensure you are in the correct directory."," ","Run a game by supplying the project file, runtime directory, licence file, platform and build type. Enclose each directory in double quotes (","\" \"",") to ensure spaces are handled properly.\n      "," ","igor /project=\"<yourProjectDir>\\projectname.yyp\" /rp=\"<runtime dir>\" /lf=\"<plist dir>\\licence.plist\" Windows Run"," ","Your game should now run!"],[" ","Below you can find examples of build commands for all platforms:"," "," ","GX.games"," "," ","Cleaning GX.games project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- OperaGX Clean"," ","Running GX.games:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- OperaGX Run"," "," ","Windows"," "," ","Cleaning Windows project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- Windows Clean"," ","Building VM for Windows -- ","Run",", ","PackageZip ","and ","PackageNsis",":"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- Windows Run"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] -- Windows PackageZip"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] -- Windows PackageNsis"," ","Building YYC for Windows-- ","Run",", ","PackageZip ","and ","PackageNsis",":"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /platform=YYC -- Windows Run"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC -- Windows PackageZip"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC -- Windows PackageNsis"," "," ","macOS"," "," ","Cleaning macOS project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- Mac Clean"," ","Building VM for macOS while on a Mac:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] -- Mac Package"," ","Note"," that on Mac you will need to use mono to run Igor, so you will need to write ","mono"," before all your commands, e.g.: ","mono Igor.exe [options]"," ","Building VM for macOS while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /device=[device_IDE_Name] -- Mac Package"," ","Building YYC for macOS while on a Mac:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC -- Mac Package"," ","Building YYC for macOS while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC /device=[device_IDE_Name] -- Mac Package"," "," ","Linux / Ubuntu"," "," ","Cleaning Linux project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- Linux Clean"," ","Building VM for Linux while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /device=[device_IDE_Name] -- Linux Package"," ","Building YYC for Linux while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC /device=[device_IDE_Name] -- Linux Package"," "," ","HTML5"," "," ","Cleaning HTML5 project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- HTML5 Clean"," ","Building HTML5 folder (make sure to specify a target folder with ","/tf)",":"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_folder] -- HTML5 folder"," "," ","iOS"," "," ","Building VM for iOS while on a Mac:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] -- ios Package"," ","Building VM for iOS while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /device=[device_IDE_Name] -- ios Package"," ","Building YYC for iOS while on a Mac:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC -- ios Package"," ","Building YYC for iOS while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC /device=[device_IDE_Name] -- ios Package"," "," ","Android"," "," ","Cleaning Android project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- Windows Clean"," ","Building an Android APK using VM:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] -- Android Package"," ","Building an Android APK using YYC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC -- Android Package"," "," ","tvOS"," "," ","Cleaning tvOS project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- tvos Clean"," ","Building VM for tvOS while on a Mac:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] -- tvos Package"," ","Building VM for tvOS while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /device=[device_IDE_Name] -- tvos Package"," ","Building YYC for tvOS while on a Mac:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC -- tvos Package"," ","Building YYC for tvOS while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC /device=[device_IDE_Name] -- tvos Package"," "," ","PS4"," "," ","Cleaning PS4 project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- ps4 Clean"," ","Building VM for PS4 while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /device=[device_IDE_Name] -- ps4 Package"," ","Building YYC for PS4 while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC /device=[device_IDE_Name] -- ps4 Package"," "," ","PS5"," "," ","Cleaning PS5 project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- ps5 Clean"," ","Building VM for PS5 while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /device=[device_IDE_Name] -- ps5 Package"," ","Building YYC for PS5 while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC /device=[device_IDE_Name] -- ps5 Package"," "," ","Xbox One"," "," ","Cleaning Xbox One project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- XBoxOne Clean"," ","Building VM for Xbox One while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /device=[device_IDE_Name] -- XBoxOne Package"," ","Building YYC for Xbox One while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC /device=[device_IDE_Name] -- XBoxOne Package"," "," ","Xbox Series X/S"," "," ","Cleaning Xbox Series X/S project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- XBoxOneSeriesXS Clean"," ","Building VM for Xbox Series X/S:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /device=[device_IDE_Name] -- XBoxOneSeriesXS Package"," ","Building YYC for Xbox Series X/S:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC /device=[device_IDE_Name] -- XBoxOneSeriesXS Package"," "," ","Switch"," "," ","Cleaning Switch project:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] -- Switch Clean"," ","Building VM for Switch while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /device=[device_IDE_Name] -- Switch Package"," ","Building VM for YYC while on a PC:"," ","Igor.exe /uf=[user_folder] /rp=[runtime_path] /project=[project_YYP_file] /cache=[cache_dir_path] /temp=[temp_dir_path] /of=[output_folder_filename] /tf=[target_file] /platform=YYC /device=[device_IDE_Name] -- Switch Package"],[" ","Here are the options that can be used with the Igor runtime:"," ","Option"," ","Description"," ","/uf=[user_folder]"," ","Set the user folder used for retrieving licence information so ","GameMaker"," knows which modules can be installed"," ","/lf=[license_file]"," ","Set the direct path to a licence file, can be used as an alternative to setting a user folder (","/uf",")"," ","/ru=[runtime_url]"," ","Set the URL to fetch runtime information from (defaults to the stable release)"," ","/rp=[runtime_root]"," ","Set the local runtime install folder to list the installed runtimes or install new runtimes"," ","Here are the commands that can be used with the Igor runtime:"],[" ","Igor.exe [command]"," ","Command"," ","Description"," ","Runtime List"," ","Lists the runtimes available on a feed (version number, date/time of build)"," ","Runtime ListInstalled [-directory]"," ","Lists the runtimes available in the current folder (","directory","=full path to the folder)"," ","\n          You can specify a directory to look in, but if it's not specified it will default to the current directory"," ","\n          This also checks whether there is a ","receipt.json"," file and a ","manifest"," folder inside the directory (making sure that it's actually a runtime)\n        "," ","Runtime Info [-version]"," ","Prints out information about the most recent runtime on the given feed; also needs a licence file to show information regarding the modules available for the user"," ","version"," can either by a string used to search through the feed titles (e.g.: ","\"739\""," would show information for all builds containing 739 in their version numbers), or it can be ","all"," to show information for all feeds"," ","\n          It will list the modules with the ",".zip"," file names for each module\n        "," ","Runtime Install [-version]"," ","Installs the latest runtime from the given feed using the given ","version"," as a search filter; if that is not specified, it defaults to the latest version. It will get all the modules that the user has on their licence."," ","Runtime Verify [-folder=.]"," ","Calculates the checksums for all the installed files and compares them to the checksums written into the manifest ","folder",". You can specify a folder to check, however if that is not specified it will default to the current directory."," ","\n          This will flag any files where the checksums don't match, files that are missing and files that should not be there."," ","\n          Do note that the manifest files themselves are not verified and a user can alter the manifest files to match the installed ones.\n        "," ","Runtime FetchLicences [-ak] [-of]"," ","Generates a licence.plist file (","-of",") from an access key (","-ak","), see ","Access Key"],[" ","Here are the options that can be used for testing your builds with Igor:"," ","Option"," ","Description"," ","/uf=[user_folder]"," ","Set the user folder used for retrieving licence information so ","GameMaker"," knows which modules can be installed"," ","/lf=[license_file]"," ","Set a direct path to a licence file, can be used as an alternative to setting a user folder (","/uf",")"," ","/df=[device_file]"," ","Set a direct path to a ","devices.json"," file, can be used as an alternative to setting a user folder (","/uf",")"," ","/timeout=[number_of_seconds_to_wait]"," ","The timeout to use for the test in seconds, defaults to 120 seconds; the test will be stopped after this timeout is over and will be marked as failed"," ","/waittime=[number_of_seconds_to_wait]"," ","Number of seconds to wait in the main loop before declaring the test as passed, defaults to 30 seconds"," ","/device=[device_name]"," ","Used to look up the device name in the user folder's ","devices.json"," file"," ","/target=[list_of_targets]"," ","Comma-separated list of targets in the ","PLATFORM|DEVICE"," format, e.g.: ","/target=\"Windows|Local,HTML|Firefox\""," ","\n          If you specify ","all",", the tests will attempt to run for every device in the ","devices.json"," file\n        "," ","There is one command that you can use to run tests with Igor:"," ","Igor.exe Tests RunTests [test_directory/test_filename]"," ","You must specify either a test directory or a test file name."," ","If it's a directory, Igor will look for a file called ","tests.json"," in the directory\n      "," ","If the file ","is not found",", Igor will recursively search for ",".yyz"," and ",".yyp"," files in the directory\n          "," ","Each project found will be built and run on Windows"," ","It will wait till the runner reaches the main loop\n              "," ","The test passes if the runner is still running after the wait time"," ","The test fails if the project does not compile within the timeout period, or crashes before the wait time is over"," ","If a ","tests.json"," file ","is found",", Igor will run the tests described in the file (see example below)"," ","Alternatively, you can supply a direct path to a ","tests.json"," file instead of a directory"],[" ","The ","tests.json"," file must have the following format:"," ","The JSON file should contain an array of objects"," ","Each object should describe one test\n      "," ","The test object must contain these keys:\n          "," ","name",": A name used to report whether the test has passed or failed"," ","path",": A path to a ",".yyp",", ",".yyz",", ",".gml",", ",".js"," file or folder for the test"," ","command",": The Igor command for the test (","Run",", ","CreatePackage",", etc. as described above)"," ","The test object may also contain these keys:\n          "," ","platform",": Passed directly through to Igor to do the test"," ","device",": The device name from the ","devices.json"," file"," ","target",": The target in a \"","PLATFORM|TARGET\""," format, e.g.: \"","Windows|Local\""," ","timeout",": A timeout for the total test including compile and run; if exceeded the test will be stopped and marked as failed"," ","waittime",": The length of time to wait after entering the main loop before deciding whether the test has passed"," ","owner",": the e-mail address of the user who will be e-mailed if this test fails"],[" ","Here is an example of a ","tests.json"," file:"," ","[","\n     {","\n      \"name\" : \"Game Idea Windows\",","\n      \"path\" : \"C:/scratch/GameIdea.yyz\",","\n      \"platform\" : \"Windows\",","\n      \"command\" : \"Run\",","\n      \"timeout\" : \"500\",","\n      \"waittime\" : \"30\"","\n     },","\n     {","\n      \"name\" : \"Platformer Game Windows\",","\n      \"path\" : \"C:/Users/<MY USERNAME>/Documents/GameMaker/Platformer Game/PlatformerGame.yyp\",","\n      \"target\" : \"Windows|Local,HTML5|selenium:firefox,PS4|Default\",","\n      \"command\" : \"Run\"","\n     },","\n     {","\n      \"name\" : \"Puzzle Game Windows\",","\n      \"path\" : \"C:/Users/<MY USERNAME>/Documents/GameMaker/Puzzle Game/PuzzleGame.yyp\",","\n      \"platform\" : \"HTML5\",","\n      \"command\" : \"Run\",","\n      \"device\" : \"selenium:chrome\"","\n     }","\n    ]"," ","Back: ","Runner & Compiler"," ","Next: ","Compiler Batch Files / Scripts"]],"5":[[" ","Syntax:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"11":[[" ","Setting Up"],[" ","Notes"],[" ","Options"],[" ","Access Key"],[" ","Hello World"],[" ","Platform Examples"],[" ","Format"],[" ","Example"]],"id":"2768"})