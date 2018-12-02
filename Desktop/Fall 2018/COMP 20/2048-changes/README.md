1) The app can properly do a few things:

	* First, the GET/ properly prints out the entire collection of score documents. It does this by printing them into a nice table of Username, Score, and Date time. This data it gets from the "scores" collection in my mongoDataBase.

	* Second, the GET/scores.json appropriately prints out an empty [] if the username does not exist or there is no submitted username in the query string. It also prints out all of the results for the username if called with the username in the query string.

	* Third, the POST/submitis a little more complicated. It appropriately reads the input from the game and adds the content to the database. The tricky part for me was sending back the content. I could not implement this without reading an error on my 2048 game. Similarly with some iterations of sending the code, my app would crash. because of this I took that code out. I understand how to find the top ten scores I just could not properly integrate the code. The looks like the following:

	collection.find().sort({score:-1}).limit(10).toArray(function(err, results){
          response.set('Content-Type', 'application/json');
          response.send(results);

    This was quite frustrating for me. 


    2)Collaboration:
    	* Margo Urgheim
    		Margo helped me to understand linking the servers and how to build the architecture. She left me to figure out the actual programming
    	* Daeseob Lim
    		Daeseob helped me to fix formatting bugs, like that I was sending the data in the wrong format as well as how to implement headers.
    	*Your Github
    		I used this monumentally for a basic template and reference. I also used it to find syntax often.
    	*Tony Goss
    		I havent actually workd with him on this but we have spoken breifly about it and I plan to talk him through some of my problems as to possibly help him.
    	*One more time MARGO URGHEIM
    		This young woman is a brilliant gift. I would not have been able to figure this out without her help.

    3)Time spent:
    	I spent probably eight or nine hours working on this project. I should have spaced it better but alas that was not in the cards for me this time. 

    I am truly bummed that I could not figure out how to properly send the data back without causing crashes. 

    