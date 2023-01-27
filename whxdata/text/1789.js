rh._.exports({"0":[[" ","move_towards_point"]],"1":[["move_towards_point"]],"2":[["move_towards_point"]],"3":[[" ","move_towards_point"]],"4":[[" ","This function simply tells the instance running the code to move towards a set point at a set speed. Bear in mind that it is up to you to tell it what to do once it gets there, as it won't just stop by itself. This means that you can get a \"vibrating\" instance as it moves (for example) 3 pixels forward, overshoots the x/y target position by 2, then moves 3 pixels back again, overshooting the target point by one and so on... There are a number of ways that this can be avoided, for example using ","distance_to_point()"," to see how far from the specified location the instance is before moving."," ","NOTE",": this function sets the speed of the instance, so even if you stop using this code, the instance will keep moving in the previous direction, so it is necessary to set the instance ","speed"," to 0 if you wish it to stop. See the code example below."],[" ","move_towards_point( x, y, sp );"," ","Argument"," ","Type"," ","Description"," ","x"," ","Real"," ","The x position of the point to move towards."," ","y"," ","Real"," ","The y position of the point to move towards."," ","sp"," ","Real"," ","The speed to move at in pixels per step."],[" ","N/A"],[" ","if point_distance(x, y, target.x, target.y) > 5","\n    {","\n        move_towards_point(target.x, target.y, 5);","\n    }","\n    else speed = 0;"," ","The above code will move the instance towards the position of the instance indexed in the variable \"target\" at a speed of 5 pixels per step. Once it reaches that position the speed is set to 0."," ","Back: ","Movement"," ","Next: ","move_bounce_all"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1789"})