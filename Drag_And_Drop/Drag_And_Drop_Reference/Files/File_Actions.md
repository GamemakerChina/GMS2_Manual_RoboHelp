# Files Action Library

  
![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/Lib_Files.png)  
The **File Actions** deal with two different file types - Buffer files
and Ini files - and also have certain generic file actions to rename or
copy existing files. **Buffer files** are created by saving out the data
from a buffer that you have previously created and this data can then be
loaded into a buffer again at any time in the future. You can find out
more information about buffers here: [Buffer
Actions](../Buffers/Buffer_Actions) . **Ini files** are small,
lightweight files which are compatible with most platforms. They are
ideal for storing small pieces of information, like interface
preferences, local high scores, level data etc... and are very easy to
use. Ini files don't have to have been created previously to use these
actions, and you can read from a non-existent Ini file and you'll simply
get a default return value (which you specify), however we recommend
that you create at least a "base" ini file for opening and modifying
before using the actions. This base ini file can be created by simply
calling the <a href="Open_Ini_File" data-a="">Open Ini File</a>
action followed by the [Close Ini File](Close_Ini_File) , since
closing the file will write it to the disk, or you can include one in
the [Included Files](../../../Settings/Included_Files) of the Asset
Browser. If you are using a file included in the Asset Browser as your
base Ini, you should also read the section of the manual about [how the
File System works](../../../Additional_Information/The_File_System)
. **NOTE** : For games with localizations it is very important that
accented letters can be read from external files. This means that you
should create the ini file in **UTF8 format** first and then add it into
GameMaker as an included file so that it is exported on running the game
and used instead of the default ANSI format ini file that is created by
the ini functions when none has been previously supplied. In this way,
you can read and write to it correctly with all accents and non-roman
letters being maintained. The following actions exist for working with
files:

|                                                                                                                          |                                            |
|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Load_Buffer.png)       | [Load Buffer](Load_Buffer)             |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Save_Buffer.png)       | [Save Buffer](Save_Buffer)             |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Rename_File.png)       | [Rename File](Rename_File)             |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Copy_File.png)         | [Copy File](Copy_File)                 |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Delete_File.png)       | [Delete File](Delete_File)             |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Open_Ini_File.png)     | [Open Ini File](Open_Ini_File)         |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Close_Ini_File.png)    | [Close Ini File](Close_Ini_File)       |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Write_To_Ini_File.png) | [Write To Ini File](Write_To_Ini_File) |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Read_Ini_File.png)     | [Read Ini File](Read_Ini_File)         |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_If_File_Exists.png)    | [If File Exists](If_File_Exists)       |
