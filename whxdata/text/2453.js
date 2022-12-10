rh._.exports({"0":[["Conflicts"]],"1":[["Source Control - Conflicts"]],"2":[["source control conflicts,conflicts tools"]],"3":[["\n  ","\n  "],["\n  ","In this section we are going to look at resolving conflicts between a ","cloned local repository"," and a master repository. Assuming you are now using a local repository we'll need to edit a file and then cause some kind of conflict, so open the test script we've been using and change the \"Hello World\" message to something like this:","\n  ","show_debug_message(\"Hello World, How Are You?\");","\n  ","You should now save the project and commit it to the local repository. Now, since we are linked to a remote master repository (even if it's one we've cloned to the same disk) we need to do a Push to get the changes on to master. For that, go to ","Source Control"," > ","Push Changes",", which will give us a status update in the Source Control ","Output Tab",":","\n  ","We now need to open up our original project (not the cloned one), so browse to where you saved it on disk - or simply check the ","Recent Projects"," in the ","File menu",", as it should be directly under the current one - and load it into ","GameMaker",". An easy way to check you have the right project is to simply check the script you have and if the message is \"Hello World\" then you have the right one, or you can open up the ","View History"," window and check that way.","\n  ","You now need to edit the script again, so make it read something like this:","\n  ","show_debug_message(\"This will cause a conflict.\");","\n  ","This can be saved to disk, and the changes committed, but if you try to push these changes you'll get the following message:","\n  ","Someone has already pushed changes which you don't have yet! This means that you need to do a pull on the repository and see what exactly the issue is, so go to ","Source Control"," > ","Pull Changes",". This will show two windows, the first is a warning about changed files (as with previous actions, you want to choose ","Reload ","here and ","not ","Save","), and the other is the ","Conflicts ","window:","\n  ","This window will show the conflicted files in a list to the left, and you can select the files from that list using the left mouse button "," (or select multiple files using "," / "," or "," along with ","). You have four options for dealing with the conflicted files, available from the buttons on the right:","\n  ","\n    ","Use Theirs"," - This will overwrite the changes you have made with the one from the remote repository.","\n    ","Use Mine"," - This will overrule the changes from the remote repository with the ones you've just made.","\n    ","Merge ","- This will attempt to open an External Merge Tool to handle the conflict.","\n    ","Choose Merge Tool"," - This will let you configure the Merge Tool (see the section on ","External Merge/Diff Tools"," for more details).","\n  ","\n  ","Now, you can use the buttons to sort out the conflict, but before you do, let's just open the conflicted file to see exactly what the issue is. If you open the script that is conflicted it will now look like this:","\n  ","This shows that \"This Will Cause A Conflict\" is on the HEAD (this is what we have pushed to the local repository) and that \"Hello World, How Are You?\" is being pulled from master, the remote repository. You can go back to the Conflicts window now and click on ","Use Theirs"," to pull the changed file and overwrite the current HEAD file. The script will now be flagged as changed and you should do a new commit and push before continuing.","\n  ","Note that we could actually fix this in the ","GameMaker"," IDE. If we remove lines 1, 2, 3 and 5 so we are left with just ","show_debug_message(\"Hello World, How Are You?\")"," and save it, it'll clear the conflict, as Git will assume that you know what you are doing with your own file. However, this is error prone, so it is recommended to install a merge tool, then configure and use that instead of manually trying to merge.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Source Control","\n        ","Next: ","External Merge/Diff Tools","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Conflicts"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2453"})