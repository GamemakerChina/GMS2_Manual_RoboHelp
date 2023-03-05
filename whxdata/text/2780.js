rh._.exports({"0":[[" ","Bitwise Operators"]],"1":[["Bitwise Operators"]],"2":[["bitwise,bitwise operators"]],"3":[[" ","Bitwise Operators And Binary"]],"4":[[" ","At the beginning of the computer era, ","binary"," and ","hex"," (hexadecimal) were a way of life, probably because high level languages (such as BASIC) were simply too slow to run. For example, multiplying 32 x 32 might have taken various CPU cycles to achieve using BASIC, but with binary it is done as a single operation in a single CPU cycle."," ","These days however, with the power of even a basic PC, you no longer have to worry about this and you can do things the \"long way\", since the speed of the machine and its more complex CPU construction will make up for any short comings this approach has. This is great news of course, since it means that you no longer have to optimise every line of code you write, but if this is the case - should you really care about binary at all?"," ","The answer is definitely \"yes, you should\". While it's true you can still get some speed ups - and sometimes these can be significant - using binary and hex leads to a better understanding of how the CPU operates and can also lead to writing better code, being able to pack data better, and making some tasks a lot simpler. This page is going to explain a bit about what binary is as well as how it can be used when making your games."," ","NOTE"," To write binary literals in GML, prefix them with ","0b"," (e.g. ","0b0010","). See ","Data Types"," for more information."," ","Let's look at the most basic binary theory first - how numbers are created. Take a look at this table:"," ","000 = 0","\n    001 = 1","\n    010 = 2","\n    100 = 4"," ","Each 1 or 0 represents a single ","bit"," of data, and as you can see this means that in binary, 10 equals 2! Each bit is 2 times the previous value with the first bit being equal to 1. So bit 2 = 2, bit 3 = 4, bit 4 = 8 and so on (as shown below in this ","byte"," table):"," ","00000001 = 1","\n    00000010 = 2","\n    00000100 = 4","\n    00001000 = 8","\n    00010000 = 16","\n    00100000 = 32","\n    01000000 = 64","\n    10000000 = 128"," ","That's fine if you want numbers that are a power of 2, but how do we create more complex numbers? Well a single binary number can only store a 0 or 1, and that's it, so for more complex numbers we need to add bits together. If for example we wanted to make 6, we would add 4 and 2 together like so."," ","00000010 = 2","\n    00000100 = 4","\n    00000110 = 6"," ","This is true of ","all ","binary numbers, and how the computer makes up any number internally. Let's take a slightly more complicated number as a further example: 23. The number 23 is actually made up of ","1+2+4+16"," or ","00010111",". How about a much more complex example: 196? Well, that's made from ","128+64+4"," or ","11000100",". So actually it's not that complex really!"," ","If we start doing values outside of the range of a byte (which can store numbers from 0 to 255), it does start to get a little harder to track, however. For example, 217,361 is ","110101000100010001"," in binary. Or, ","1+16+256+etc..."," The rules are the same no matter what the value being expressed is - each number is created from adding multiple bits together."," ","Now, how do we perform mathematical operations on these values? Let's say you want to store ","true"," or ","false"," as a value. Usually compilers will use an ","INT"," (an ","INT"," is usually defined as a signed 32bit number - signed just means it can a positive or negative value, while unsigned means it can only be positive) and then simply assign it to ","0"," or ","1",". Having only 2 states, a ","true"," / ","false"," value is ideal to store in a bit, and if we did this we could store 32 ","true"," / ","false"," bits for each ","INT"," rather than just one, since an ","INT"," is made up of 32 bits."," ","How would we do this? Well pretty easily it turns out:"," ","flags = flags | 1;"," ","The \"","|","\" operator is a bitwise ","OR",", and this means the above instruction ","ORs"," 1 into the value held in the variable ","flags",". If you remember from earlier, using a 1 will set the first bit. If we wanted to set the second bit, we would do this:"," ","flags = flags | 2;"," ","We ","OR"," in 2, because the bit pattern ","00000010"," is equal to 2. So what exactly does the binary ","OR"," operator do? Well, it merges all the bits together into a single value, like this:"," ","010110100 // Value 1","\n    110011001 // value 2","\n    110111101 // Value 1 OR Value 2"," ","Here's what's known as a ","truth table"," for the OR operator:"," ","00 | 00 = 00","\n    00 | 01 = 01","\n    01 | 01 = 01","\n    01 | 00 = 01"," ","So where there is a value with 2 zeros, it'll stay zero. The advantage of using bits like this as a ","true","/","false"," state, is they you can set several bits as \"flags\" in one operation, something you simply couldn't do with a normal boolean value. For example, let's say bit 1 is an \"active\" flag, and bit 3 is a \"visible\" flag. We could set both by doing this:"," ","flags = flags | 5",";"," ","This is because 5 is ","00000101"," in binary, and following the rule above, the variable \"flags\" will get both these 2 bits merged with its own. So even if bit 1 was already set, the operation still works and bit 3 will now also be set."," ","What about clearing flags? Well this is where the bitwise \"","&","\" ","AND"," operation comes in. When you ","AND"," something, the bits that are set in the mask are kept, while the bits that are clear in the mask, are removed - like this:"," ","01110010101 // Value 1","\n    00110000100 // Value 2","\n    00110000100 // Value 1 AND value 2"," ","As you can see, where there is a 1 in each value, the 1 is kept, and where there is a mix or 0's and 1's these are reset to 0. Here's the truth table for ","AND","ing:"," ","00 & 00 = 00","\n    01 & 00 = 00","\n    00 & 01 = 00","\n    01 & 01 = 01"," ","So, only when there is a bit in each place will it be kept. What this means, is that just as you are able to set multiple flags at once, you can also clear multiple flags at once. For example, let's take the case above, but this time clear them. We want to clear bits 1 and 3 (giving us the value 5), but in remembering the truth table above, what we want to do is keep all the other bits, and clear bits 1 and 3. This would be a binary \"mask\" of 11111111111111111111111111111010 (32bits). This mask keeps all bits currently set, but clears the two bits we actually want cleared. So if had a value of 1000111011 and I wanted to clear bits 1 and 3 using the mask above, it would end up as this..."," ","00000000000000000000001000111011 // Value","\n    11111111111111111111111111111010 // Mask","\n    00000000000000000000001000111010 // Value AND Mask"," ","This is great, but if we had to work this out every time we needed to clear flags, it would become tiresome. What we need is a way to flip bits easily (and preferably without CPU cost). Fortunately there is an easy way of doing this by using the \" ","~","\" ","NOT"," operator."," ","The ","NOT"," operator is just what it says - ","not"," those bits. Here's a truth table for ","NOT","."," ","~00 = 11","\n    ~01 = 10","\n    ~10 = 01","\n    ~11 = 00"," ","This operator makes removing flags very simple, and better yet, it's usually a compile time optimisation meaning if you're using a constant number (i.e. not a variable) then the compiler will flip the bits automatically for you. Take this statement where we want to clear bits 1 and 3 again:"," ","a = a & ~5;"," ","This will actually compile down to just \"","a & 11111111111111111111111111111010","\". This makes life pretty simple in terms of clearing flags."," ","The last operator we want to look at is \"","^","\" ","EOR"," (","Exclusive OR",", sometimes called ","XOR","), this operator flips the bits set in both values. Here's the ","EOR"," truth table:"," ","0 ^ 0 = 0","\n    0 ^ 1 = 1","\n    1 ^ 0 = 1","\n    1 ^ 1 = 0"," ","This is a curious one, but incredibly useful. For example, let's say we want a counter that simply counts from 0 to 1 and back to 0 (toggling between 0 and 1), we could add one and do an ","IF"," to see if it's gotten to 2, and then reset it back to 1. Or...we could add 1 and then ","AND"," it with 1 (since ","01+01 = 10",", and ","10 & 01 = 0",") or we can do this:"," ","a = a ^ 1;"," ","What this does the first time it's run is ","0 ^ 1 = 1",", then the second time ","1 ^ 1 = 0",", thereby toggling things back and forth from 0 to 1."," ","So - ","OR"," (","|","), ","AND","(","&","), ","NOT","(","~",") and ","EOR","(","^",") let us manipulate bits with relative ease, allowing us, at the simplest level, to control multiple bits at once. We can obviously use these operations for other things when developing our games, like masking sprites, doing integer ","MOD"," operations (using ","AND",") or doing nice looping counters."," ","So, we can do simply bitwise operations, but let's look at the more complex stuff, starting with the question, how does a computer add? Let's look at a very simple example: ","1+1","."," ","00000001","\n    00000001","\n    00000010"," ","Just like normal additions, we add numbers together and then we overflow into the next column, but unlike a normal decimal addition, we can only go from 0 to 1, not 0 to 9. So adding a ","1+1"," means we overflow into ","10",". So let's look at a more complex example."," ","01011011 = 91","\n    00101101 = 45","\n    10001000 = 136"," ","It's obviously harder to see here, but the overflows ripple along until there are no ones in a column. It's worth noting, that computers can only add (or subtract, multiply or divide) 2 numbers at once. Take ","19 + 19 + 19",". Being human, we can add all the 9's together, carry the 2 and then on we go! But computers can't do that - what they can do is this:"," (19 + 19) + 19",". So they'll do each calculation in blocks of 2."," ","The binary calculations that are of most interest to us as programmers are multiplication and division. Computers only multiply in 2s, and to do more it'll break a number apart, and then add all the results together. Let's take some very simple examples first. ","4 * 2 = 8",". Now to multiply by 2 in binary, we ","shift ","all the bits to the LEFT by one. Like this:"," ","00000100 * 2 = 00001000 = 8"," ","All the bits in this case have moved to the left by one, making it move from the 3rd bit, to the 4th, and changing the value from 4 to 8. How about a larger number?"," ","101 = 01100101 * 2 = 11001010 = 202"," ","Again, all the bits move on one, and that multiples by 2. So, how about a multiple by 4? Easy, we shift everything left by 2, rather than one. So how about 16, or 128? This would require a left shift of 4 bits, or 7 bits respectively. This is incredibly useful; it means we can do simple multiplications by simply moving bits around. To do this, we use the ","left shift"," operator ","<<",". Here are some examples:"," ","00000001 << 1 = 000000010 = 2","\n    00000001 << 2 = 000000100 = 4","\n    00000001 << 3 = 000001000 = 8","\n    00000001 << 4 = 000010000 = 16","\n    00000001 << 5 = 000100000 = 32","\n    00000001 << 6 = 001000000 = 64","\n    00000001 << 7 = 010000000 = 128","\n    00000001 << 8 = 100000000 = 256"," ","Now, aside from being very useful for fast/simple multiplications, it's also very useful for setting specific bits, without having to figure out the bit value. Let's say we wanted to set bit 27, what number is that? (67108864 by the way!), well we can use the syntax above to easily set flags like this:"," ","a = a | (1 << 27)"," ","Okay... so actually this would be bit 26 the way we've been describing things so far (as bits have been starting at one), but actually... bits start at bit 0, and go upwards, not at bit 1. So while there are 32 bits in an INTEGER, the bits range from 0 to 31, not 1 to 32. This is actually pretty useful, as we can now set up constants for bit numbers."," ","So let's say Bit 27 is an active flag, and bit 0 is an exploding flag. How can we set both?"," ","ACTIVE = 27;","\n    BOOM = 0;","\n    A = A | (1 << ACTIVE) | (1 << BOOM);"," ","This may look like a lot of code, but if these numbers are constants, the compiler will pre-compile these operations into a single value so that we end up with this as actual code."," ","A = A | 13421772;"," ","Clearing these bits (as we saw above) is simply a matter of using the NOT modifier, like this:"," ","A = A & ~((1 << ACTIVE) | (1 << BOOM));"," ","So this happily lets us set and clear any bits we'd like, and it also lets us compress out data structures massively. Compressing data structures is a good thing, because if you use less memory, you get less cache misses, and your code just runs faster. Put it this way, what's quicker, copying 32Mb or data, or 4Mb? Well, quite clearly 4 is. So if you can pack all yours flags down into a single memory access, this is good!"," ","Now, let's take a quick look at how you do division, and why it's going to be so useful. Division is done by shifting the bits ","right"," using the ","right shift"," operator ",">>",". Let's take a simple number - 64 - and divide it by 32:"," ","64 / 32 = 01000000 >> 5 = 00000010"," ","So there you shift the single bit down by 5 (which is the number of shifts required for 32 – look above), which gives us 2. But what happens if here are other bits in there? Well let's take a look:"," ","68 / 32 = 01000100 >> 5 = 00000010"," ","So there you go…. It's exactly the same. The bits we shift down are simply lost. This is actually really useful, because when dividing down if we need the remainder, there's an even easier way to get it, which we'll get to in a moment. But first, let's take a practical example. I have an X and Y position, and I want to get the grid cell this falls in, where the grid is 32x32 in size. This method allows is to store objects, collisions, flags – all manner of things, and access them very quickly. So here we go:"," ","var X_index = x >> 5;","\n    var Y_index = y >> 5;","\n    cell_data = mygrid[# X_index,Y_index];"," ","So, what if we wanted the remainder? Perhaps this remainder is used as some kind of order flag or something. Whatever the reason, getting a remainder is as simple as doing an ","AND",":"," ","var remainder = x & 31","\n    var X_Index = x >> 5;"," ","Now, you might have noticed we've used multiple lines of code here (as is so often the case), but this is still only a couple of very fast instructions. But why the 31? Well, as bit 5 is 32, then all the bits below would be 31, and that's the maximum remainder so that's what we ","AND"," with (we could also use ","(1 << 5) - 1"," which would make ","32 - 1 = 31","). Now, if I were to do this without understanding binary, it would look like this:"," ","var r = x mod 32;","\n    var X_Index = floor(x / 32);"," ","So why is this much worse? Well, in order to divide by 32, we have to execute a floating point divide - which obviously takes time, but in order to do the ","mod 32",", you actually have to do another one! If we were doing this in assembler, we actually get BOTH values in one divide, but you don't get this in high level languages (well… not very often), and so you have to do all the work twice. This adds up, especially if you're doing a tight loop with lots of calculations like this. Integer divides using bit shifting as shown above really help optimising your game."," ","Since this can be quite a complex concept to grasp and then apply to real-world programming situations, you can find below a series of short examples that could be applied to any game made with ","GameMaker","."," "," ","Tile Alignment"," "," ","GameMaker"," developers often use the function ","place_free()",", and then when a collision is found, try to slowly move the object out by either looping around an ","x"," or ","y"," position while continuing to execute that function, or by using the ","move_outside_all()"," function."," ","So, what's the faster way to do this? Well, if we use proper power-of-2 tiles, then we have a very simple method that's also lightning fast. If we are moving right, and we've moved into a collision block, then as we know everything is aligned to 32, so we need to also align the sprite to a 32 pixel boundary - preferably the one to the left - so the sprite is moved OUT of the collision. This is really easy, knowing the rules we've used above to get the remainder, and knowing how to get the inverse of bits, we can simply do this:"," ","x = x & ~31;"," ","That's right, that's ALL that it takes to align to a 32 pixel boundary. By changing the 31 we can align to anything we like – as long as it's a power of 2. (This is the equivalent of dividing by 32, then multiplying by 32, thereby removing the lower bits.)"," ","If we wanted to align to the right, then we'd do the above, but then add 32 to move it into the next tile. Simple. All this makes the whole collision code monumentally faster, and lets you spend the CPU time where you really need it."," "," ","Keys And Doors"," "," ","Say you have a level with a few doors, and a key for each. How can you easily mark a key for a specific door? Well, normally you'd just assign an ID to the key and the door. So what if you wanted a key to open 2 or 3 doors? Easy. You use a MASK. The door would have a single bit assigned like so:"," ","door_id = 1; // 0001"," ","The others would be something like:"," ","door_id=2; // 0010","\n      door_id=4; // 0100","\n      door_id=8; // 1000","\n      etc..."," ","If we wanted the key to open door 1 and 3, then the key would have the MASK value of 5 (which is 101 in binary). If we perform an ","AND"," of this, and it comes out \"not zero\", then we know that the key can open the door. You could also have keys that opened nothing by having a MASK of 0. See the code below for the actual check:"," ","if ((key_id & door_id) ! = 0)","\n      {","\n          opendoor();","\n      }"," "," ","Looping Counters"," "," ","Let's say we want a simple animation counter, going from 0 to to 15 (as we have 16 frames of animation). Normally you would do an increment, and then do an ","if"," check to wrap the number, but for this example let's use the ","AND(&)"," operator:"," ","counter = (counter + 1) & 15;"," ","Since 16 is a power of 2, we can reduce that number by 1 and use it as a mask, which we can then use to wrap our counter value. If the counter moves up from 15 to 16, we end up with bit pattern ","10000",", and if we ","AND"," that with 15 (bit pattern ","01111",") we end up with ","00000"," (simply zero). This means that the above code is useful for wrapping values within the range of a power of 2."," "," ","Power Of 2 Check"," "," ","What if you wanted to check to see if something was a power of 2? Well, here's a neat little trick.. This will return ","true"," if the given value is a power of 2:"," ","function is_pow2(_val)","\n      {","\n          return _val & (_val - 1)) == 0;","\n      }"," ","So if we had the number 51 (","110011",") what does this do? Well, we get this... ","110011 & 110010",", which obviously leaves us with ","false",", as there are lots of bits left after the ","AND",". If we had 64 (","1000000","), then it becomes this... ","1000000 & 0111111"," which ","does"," leave us 0, so it's ","true","."," "," ","Index Alignment"," "," ","Here's a quick bit of code to align to power of 2 numbers. (1,2,4,8,16 and so on). This can be very useful for memory allocation, or making sure you write data to proper boundaries. In this example, ","_val1"," needs to be aligned to ","_val2"," bytes, where ","_val2"," is a power of 2 number. This little function rounds UP to the next boundary of the desired number."," ","function align_pow2(_val1, _val2)","\n      {","\n          return _val1 + (_val2 - 1)) & ~(_val2 - 1);","\n      }"," ","Back: ","Additional Information"," ","Next: ","Type Tables"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2780"})