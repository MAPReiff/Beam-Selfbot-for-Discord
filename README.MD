# M8 Bot Mini
Here is a very simple and easy to use method to announce your beam stream in any server.

After setting up the bot, simply type `beam.live BEAM_NAME` into the discord chat of your choice, and a fancy message will popup with all your stream details preloaded in the message! If you want automatic announcements, go checkout [M8 Bot](https://github.com/MAPReiff/M8-Bot)!

Setup:
* [Download Node JS](https://nodejs.org/en/)
* Download the bot from the releases page
* Get your discord user token by opening beam in your browser, pressing `CTRL+SHIFT+I`. On the new popup, go to the `Aplication` tab. Under `Storage`, then `LoaclStorage` you will see a `token` row. Copy that token, you will need it later.
* In discord, enable developer settings. You can find this in the `Apperance` tab of discord's settings. With this enabled, go to any chat message you sent, right click on your icon, and click `Copy ID`. You will need this later.
* Unzip the file you downloaded, and place the folder anywhere you want (I recomend your desktop).
* In the folder, open the `token.txt` file, and paste your discord token. If its is quote marks, remove them. Save the file.
* Open the `userID.txt` file, and past your discord user ID. If its is quote marks, remove them. Save the file.
* If you are on windows, double click the `start.bat` file, and you will be all ready to go.
* If you are on MacOS or Linux, open up your terminal, navigate to the folder with M8 Bot Mini's `app.js` file, and run the command `node app.js`.
* If all went well, you will see an output like this: ```Logged in as User! Running ComixsYT's M8 Bot Mini version X.X```.

Commands:
* There are only two simple commands for the bot.
* If you do want to tage people with `@here`, type `m8.love.tag beam`, replacing beam with your beam username.
* If you want to send the live message without tagging people (no `@here`), type `m8.live beam`, replacing beam with your beam username.
* The command will be replaced with a message like this (top is tagged, bottom is not tagged):
![](http://i.imgur.com/o6eMVrY.png)

If you want to make any modifications, you are more than welcome to! Simply make a fork, and ask to merge later on.
