rh._.exports({"0":[[" ","layer_sprite_create"]],"1":[["layer_sprite_create"]],"2":[["layer_sprite_create"]],"3":[[" ","layer_sprite_create"]],"4":[[" ","With this function you can assign a sprite resource to a layer to be used in your project. You supply the layer ID (which you get when you create the layer using ","layer_create()"," or when you use the layer name along with ","layer_get_id()","), a position within the room, and a sprite index (which would be the name of the sprite as shown in the Asset Browser), and it will be added to the layer. The function returns the unique ID value for the element, which can then be used in further layer functions for sprites."],[" ","layer_sprite_create(layer_id, x, y, sprite)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to target"," ","x"," ","Real"," ","The x position to use"," ","y"," ","Real"," ","The y position to use"," ","sprite"," ","Sprite Asset"," ","The sprite index to be used"],[" ","Sprite Element ID"],[" ","global.asset_layer = layer_create(10000);","\n    for (var i = 0; i< 10; i++;)","\n    {","\n        var _x = random(room_width);","\n        var _y = room_height - 100;","\n        global.asset_spr_trees[i] = layer_sprite_create(global.asset_layer, _x, _y, spr_Trees);","\n    }"," ","The above code creates a new layer and then adds 10 new sprite elements to it, storing the ID of each element to an array."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_destroy"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1720"})