rh._.exports({"0":[[" ","physics_fixture_delete"]],"1":[["physics_fixture_delete"]],"2":[["physics_fixture_delete"]],"3":[[" ","physics_fixture_delete"]],"4":[[" ","Since once a fixture has been bound to an instance that instance maintains the fixtures properties, we can remove the fixture from memory with this function, particularly if we no longer plan to use it again. Please note that failure to remove fixtures\n    after they are no longer needed may cause a memory leak which will slow down and eventually crash your game, so you should take care to clean up properly after defining and binding fixtures."],[" ","physics_fixture_delete(fixture)"," ","Argument","Type"," ","Description"," ","fixture","Physics Fixture ID"," ","the fixture that is to be deleted from memory"],[" ","N/A"],[" ","var fix, inst;"," fix = physics_fixture_create();"," physics_fixture_set_circle_shape(fix, 16);"," physics_fixture_set_density(fix, 1.0);"," inst = instance_create_layer(x, y, \"Instances\", genericBodyObject);"," physics_fixture_bind(fix,\n    inst);"," physics_fixture_delete(fix);\n  "," ","The code above will create a fixture and assign its index to the variable \"fix\". It then defines the shape and density of the fixture before binding it to the instance that was created with the index stored in the variable \"inst\".\n    Finally, the fixture is deleted to prevent memory leaks as it is no longer needed."," ","Back: ","Fixtures"," ","Next: ","physics_remove_fixture"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1124"})