rh._.exports({"0":[[" ","Nine Slice"]],"1":[["Sprite Editor"]],"2":[["nine slice,nineslice,9slice,9-slice,9 slice"]],"3":[[" ","Nine Slice"]],"4":[[" ","Nine Slicing"," (also known as 9-slicing) is a technique used to scale rectangular images for preserving details, making them retain their original form after scaling."," ","This is achieved by dividing the image into nine separate parts or \"slices\". The corner slices are moved during scaling and drawn at the same scale, then the edge and centre slices are stretched or repeated (depending on your setting) to fill the space."," ","Four ","guides ","are placed on a sprite to divide the image into nine slices. The following visual demonstrates how the guides stay in place after the sprite is scaled using Nine Slice:"," ","The ","Tile Mode"," of a slice determines how that slice is displayed when the sprite is scaled. It can only be set for the edge and centre slices (as corner slices are not scaled)."," ","The following visual demonstrates each Tile Mode when applied to the centre slice:","If ","Nine Slicing"," is enabled for a sprite, it will be used for resizing the sprite wherever it appears, and will work in any existing places where the sprite was used without any other changes being required."," ","NOTE",": Nine Slicing will not work with functions that draw only a part of the sprite or distort it, such as ","draw_sprite_part()"," ","or ","draw_sprite_pos()","."," ","In conjunction with ","Sequences",", this feature can be used to build user interfaces, and can be used, for example, to create rectangular walls in a game level. Texture memory can also be saved using ","Nine Slicing",", as a smaller image can be used to cover a larger area on-screen."," ","Nine Slicing"," can be enabled on Sprites in the IDE. For more information, see ","The Sprite Editor","."," ","For information on the ","Runtime"," functions available for ","Nine Slicing",", see the following page:"," ","Nine Slice Functions"," ","Back: ","The Sprite Editor"," ","Next: ","Strip Images"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2209"})