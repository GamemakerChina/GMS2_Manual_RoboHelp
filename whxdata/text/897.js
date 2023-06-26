rh._.exports({"0":[[" ","event_inherited"]],"1":[["event_inherited"]],"2":[[" ","event_inherited"]],"3":[[" ","This function will call the current event of the parent object of the instance. Normally, when an instance has a parent object, it automatically inherits all the same events as the parent, but if (for example) your parent object has a create event and you add one to your child object, all instances of the child object will run the new create event that you have added and ","not"," that which is in the parent object. Should you need to use both the parent object event and the child object event of the same type, you should use this function as it will run the parent object event before continuing with the rest of the code or actions that the child event contains."],[" ","event_inherited();"],[" ","N/A"],[" ","event_inherited();","\n    switch (sprite_index)","\n    {","\n        case spr_Enemy_1: dmg += 2; break;","\n        case spr_Enemy_4: dmg -= 1; break;","\n        case spr_Enemy_10: dmg +=10; break;","\n    }"," ","The above code calls the inherited parent event (in which we initialise the variable \"","dmg","\") and then goes on to modify the \"","dmg","\" variable. If there is no parent specified for the instance running this code, we would get an \"unknown variable\" error as ","dmg"," has not been defined."," ","Back: ","Generating Object Events"," ","Next: ","event_perform"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["event_inherited"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"897"})