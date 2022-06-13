# Drawing Action Library

  
![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/Lib_Drawing.png)  
The **Drawing** action library is where you can find the actions
required to draw sprites, text or shapes as well as set certain draw
properties. Most of these actions are **only for use in the various
[Draw
Events](../../../The_Asset_Editors/Object_Properties/Draw_Events)**
of an object, and may not work if used outside of the Draw Event. The
exceptions to this are the *Set* actions, which can be added to any
event and will affect all drawing for all instances afterwards. It is
important to note that if you add any actions into the main **Draw
Event** of an object, then it will *not* draw the sprite that has been
assigned to the instance unless you explicitly tell GameMaker to draw
it, using an action like [Draw Self](Draw_Self) . Basically,
GameMaker will default draw any sprite assigned to an instance, only if
there is *nothing* else in the Draw Event. The Draw actions available
are as follows:

|                                                                                                                                    |                                                        |
|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Self.png)               | [Draw Self](Draw_Self)                             |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Value.png)              | [Draw Value](Draw_Value)                           |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Transformed_Value.png)  | [Draw Transformed Value](Draw_Transformed_Value)   |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Sprite.png)             | [Draw Sprite](Draw_Sprite)                         |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Sprite_Transformed.png) | [Draw Sprite Transformed](Draw_Sprite_Transformed) |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Stacked_Sprites.png)    | [Draw Stacked Sprites](Draw_Stacked_Sprites)       |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Rectangle.png)          | [Draw Rectangle](Draw_Rectangle)                   |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Rectangle_Gradient.png) | [Draw Gradient Rectangle](Draw_Gradient_Rectangle) |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Ellipse.png)            | [Draw Ellipse](Draw_Ellipse)                       |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Ellipse_Gradient.png)   | [Draw Gradient Ellipse](Draw_Gradient_Ellipse)     |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Line.png)               | [Draw Line](Draw_Line)                             |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Healthbar.png)          | [Draw Healthbar](Draw_Healthbar)                   |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Instance_Score.png)     | [Draw Instance Score](Draw_Instance_Score)         |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Instance_Health.png)    | [Draw Instance Health](Draw_Instance_Health)       |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Instance_Lives.png)     | [Draw Instance Lives](Draw_Instance_Lives)         |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Set_Draw_Colour.png)         | [Set Draw Colour](Set_Draw_Colour)                 |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Get_Draw_Colour.png)         | [Get Draw Colour](Get_Draw_Colour)                 |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Set_Draw_Alpha.png)          | [Set Draw Alpha](Set_Draw_Alpha)                   |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Get_Draw_Alpha.png)          | [Get Draw Alpha](Get_Draw_Alpha)                   |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Set_Font.png)                | [Set Font](Set_Font)                               |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Get_Font.png)                | [Get Draw Font](Get_Draw_Font)                     |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Set_Text_Alignment.png)      | [Set Text Alignment](Set_Text_Alignment)           |
| ![](/assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Get_Text_Alignment.png)      | [Get Text Alignment](Get_Text_Alignment)           |
