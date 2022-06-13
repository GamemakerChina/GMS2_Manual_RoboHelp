# Buffers Action Library

  
![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/Lib_Buffers.png)  
A **buffer** is a region of physical memory used to temporarily hold
data while it is being moved from one place to another or manipulated in
some way, for example you can use a buffer to hold game state data.
GameMaker has a number of specific actions related to creating,
modifying and loading/saving buffers, but before using them please note
the following points:

-   When a buffer is created, it is automatically cleared and filled to
    0.
-   The "size" argument of the buffer functions always refers to the
    size *in bytes* of the buffer.
-   GML Visual buffers are always *1 byte aligned* . The "alignment"
    refers to how data is stored within a buffer and is used when using
    the [GML buffer
    Functions](../../../GameMaker_Language/GML_Reference/Buffers/Buffers)
    , but for GML Visual , it's not relevant.
-   Data in buffers is read and written in a *sequential* manner (ie:
    you call the [Write Buffer](Write_Buffer) action three times,
    then it will write the first data, move forward, right the second
    data, move forward and then write the last data), with something
    called the "seek" value to tell you where in the buffer the next
    read/write will take place.
-   All data is written to the buffer and returned from the buffer as a
    **string** so if you have stored any real numbers you will have to
    use one of the [Data Type
    Actions](../Data_Types/Data_Type_Actions) to convert it from the
    string to the value.

The memory used for creating buffers is system memory so even when the
game doesn't have focus, any data stored in a buffer should be safe,
however if the app is closed or re-started then it will be lost. It is
also worth noting that buffers can also be saved as files then loaded
back into the game using the [file actions](../Files/File_Actions) .
The following page explains in more detail how buffers work within the
context of GameMaker and contain a couple of GML code examples:

-   [Using
    Buffers](../../../Additional_Information/Guide_To_Using_Buffers)

The **Buffer** library has the following actions:

|                                                                                                                                |                                                |
|--------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Create_Buffer.png)       | [Create Buffer](Create_Buffer)             |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Copy_Buffer.png)         | [Copy Buffer](Copy_Buffer)                 |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Delete_Buffer.png)       | [Delete Buffer](Delete_Buffer)             |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Read_Buffer.png)         | [Read Buffer](Read_Buffer)                 |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Write_Buffer.png)        | [Write Buffer](Write_Buffer)               |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Seek_Buffer.png)         | [Seek Buffer](Seek_Buffer)                 |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Get_Buffer_Size.png)     | [Get Buffer Size](Get_Buffer_Size)         |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_Get_Buffer_Position.png) | [Get Buffer Position](Get_Buffer_Position) |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_If_Buffer_Exists.png)    | [If Buffer Exists](If_Buffer_Exists)       |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/i_Buffers_If_End_Of_Buffer.png)    | [If End Of Buffer](If_End_Of_Buffer)       |
