rh._.exports({"0":[[" ","physics_set_restitution"]],"1":[["physics_set_restitution"]],"2":[[" ","physics_set_restitution"]],"3":[[" ","When you bind a fixture to an instance using ","physics_fixture_bind"," this returns an \"id\" for the bound fixture. You can use this id to set the restitution value of the bound fixture, ","not"," the \"base\" fixture, at any time using this function. Restitution is usually set as a value between 0 and 1, but you can use higher values if required, although the results may be unpredictable."," ","NOTE"," To make the physics engine use the new value in all cases, you'll need to deactivate and reactivate the physics instance using ","phy_active",". See ","Updating Existing Contacts","."],[" ","physics_set_restitution(fixture, restitution)"," ","Argument"," ","Type"," ","Description"," ","fixture"," ","Physics Fixture ID"," ","the id of the bound fixture"," ","restitution"," ","Real"," ","the new restitution value to apply"],[" ","N/A"],[" ","var rest = physics_get_restitution(fix_id);","\n    physics_set_restitution(fix_id, rest * 2);"," ","The code above gets the current restitution value for the bound physics properties of the instance and then sets them to a different value."," ","Back: ","Fixtures"," ","Next: ","physics_fixture_create"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_set_restitution"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1450"})