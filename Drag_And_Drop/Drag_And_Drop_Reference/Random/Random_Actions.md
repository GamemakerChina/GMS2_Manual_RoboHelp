# Random Action Library

  
![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/Lib_Mathematics.png)  
The **Random** library has the following actions for dealing with random
number generation and chance operations:

|                                                                                                                                 |                                            |
|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/i_Mathematics_Get_Random_Number.png) | [Get Random Number](Get_Random_Number) |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/i_Mathematics_Randomise.png)         | [Randomise](Randomise)                 |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/i_Mathematics_Choose.png)            | [Choose](Choose)                       |

It is worth noting that GameMaker will use the same seed when generating
random numbers each time you run the game from the IDE. This is to
facilitate debugging and means that you will get the same initial
results when generating random values, but this will *not* occur when
you have compiled the game into an executable (a new seed will be
generated each time the game is run). If you do not wish this behaviour
when testing, then you should call the [Randomise](Randomise) action
once at the start of the game, before generating any random values.
