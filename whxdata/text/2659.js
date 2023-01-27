rh._.exports({"0":[[" ","Command Line Parameters"]],"1":[["Command Line Parameters"]],"2":[["command line,AB testing,command line parameters"]],"3":[[" ","Command Line Parameters"]],"4":[[" ","When creating games it is important that you play test the executable file to make sure that the final compile is correct and has no unforeseen errors or differences. However creating an executable means that, since you have no access to the debug console nor to the compiler window, it can be difficult to pin down and debug any problems that you may find. However there is a fix for this, and that is to use ","command line parameters"," to set certain properties when the executable version of the game is run, in turn permitting you to create output log files and test other special situations."," ","NOTE"," This is available on the standard ","Windows ","target module ","only","."," ","To get this working you must first create a Windows executable of your game and have it installed on your test machine. Once you have that done, you need to create a ","Shortcut ","to the game on the desktop. This is where we will add in the parameters to be passed to the ","*.exe"," (to create a shortcut, right click "," the game executable and then select ","Send to"," > ","Desktop (create shortcut)",") ."," ","Once you have made your shortcut you can then use any of the following parameters in the target path:"," ","-noaudio",": This switches off all audio in your game."," ","-inawindow",": Forces the game to start in a window, even when set to run in fullscreen mode."," ","-output <","filename",">",": Sends console output to the filename, including any debug messages that you have in your code base."," ","-debugoutput <","filename",">",": Sends console output to the filename, excluding any custom debug messages, but including extra information from the runner for bug reporting."," ","-software",": Will force the game to use Software Vertex Processing instead of hardware for rendering the game graphics. This is especially useful for those PCs that are using an on-board Intel GFX chipset or show display issues on older machines."," ","-intel",": This will switch on a fix for bad Intel drivers, no matter what GPU is being used. This work around for those bad drivers will slow things down, giving a noticeable performance hit for your game, so if you do not need the fix do not use it."," ","-vanillaGFX",": Using this switches off any check for driver manufacturer, and can be very useful for testing your game \"as is\"."," ","It's worth noting that the ","<","filename",">"," in ","-output"," and ","-debugoutput"," can be the same one if desired, as the file is opened and closed on each write."," ","You should now go to where you created the shortcut to the game executable, and then right click on it and select Properties."," ","This will open a window similar to the one above. Here you can add into the ","Target"," path your command line. Simply scroll along to the end of the given path, add a space, and then the parameter string. So, for example, to create a debug file output you would have something like:"," ","D:\\Users\\Me\\GameMaker\\CustomLoadBar-Default-1.0.0.0\\CustomLoadBar.exe -debugoutput debug.txt"," ","This will now create a file called \"","debug.txt","\" in the same location as the executable (not the shortcut location, but where the game is installed) with debug and compiler information from your finished game. Click on \"OK\" and then use the shortcut to run your game to have it use these parameters and help with your debugging."," ","For further information on how to debug your game, please see the section of the manual on ","Debugging","."," "," ","A/B Testing Using The Command Line"," "," ","The YoYo runner also benefits from a special command line parameter:"," ","-game <","filename",">",": loads the given game file\n      "," ","Why would you use this? Well, normally you wouldn't, but if you wish to have more than one version of your game running at a time it can be done using this, making A/B comparative tests far easier. With this method you could focus test with someone else or, as the designer, get a better feel for things by doing side-by-side tests."," ","To set this up, you will need to know a couple of things beforehand. To start with you will need the path to the Runner itself. This can be found in the ","Program Data"," folder of your Windows OS (this may be hidden by default so you will need to change the viewing properties to see it), with a typical format like this:\n      "," ","C:\\ProgramData\\GameMaker\\Cache\\runtimes\\<runtime_version>\\windows\\Runner.exe\n      "," ","Note that the runtime_version folder will depend on the runtimes you have installed currently. You will also need the path to the ","<","yourgame",">.win"," file, as this is what we are going to point the runner to. The easiest way to find this is to go to the ","Temp ","folder (typically located at ","%localappdata%\\Temp\\GameMakerStudio\\<game_name>\\",") and just search for ","*.win",", as that will show you all those available and you can simply pick that which you need to get the full path from."," ","Now, we could create a shortcut to the runner like we did for the executable, and then change the parameters as necessary, but that means having to open and edit it between tests, which defeats the purpose of our using this functionality for side-by-side testing. Instead we are going to create a couple of tiny \"batch\" files to handle this."," ","To do this, first create a new text document on your desktop and open it in Notepad (or any other text editor). Add the following:\n      "," ","START C:\\ProgramData\\GameMaker\\Cache\\runtimes\\<runtime_version>\\windows\\Runner.exe -game <LOCAL TEMP PATH>\\<GAMENAME>.win\n      "," ","You need to to set the temp path to point to your game ","*.win"," file, and then save this as \"","GM_Test_1.bat","\" to your desktop (be aware that Notepad will save automatically as a ","*.txt"," file unless you choose \"all files\" from the save dialogue options). An example of how your final command should look would be:\n      "," ","START C:\\ProgramData\\GameMaker\\Cache\\runtimes\\runtime-9.9.1.199\\windows\\Runner.exe -game D:\\Users\\Mark\\AppData\\Local\\Temp\\GameMaker\\AlphaDog_Reboot\\AlphaDog_Reboot.win\n      "," ","Now, create another text file and add the same line, only this time you point it to the path for the second version of the game that you want to do side-by-side testing with, and you would save this as \"","GM_Test_2.bat","\". You can double click "," either of them to bring up the different versions of your game, and having them as batch files means that you can easily open them again to edit them and change the game being tested."," ","Back: ","Runner & Compiler"," ","Next: ","YoYo Compiler"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2659"})