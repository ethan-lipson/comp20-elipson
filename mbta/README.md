Ethan Lipson
COMP 20
10/24/18

README

1)
The program properly 
	* plots all redline stations and centers the map on South Station
	* draws a red polyline alone the path of the stations (including the fork)
	* finds the current location, places marker and recenters the map
	* finds nearest station to current location and draws line to said station
	* current location info window gives closest station and distance away
	* when each station is clicked an info window with an accurate schedule appears.
	* handles null direction calls
	* loading message in info window until schedule loads
	* gives accurate southbound message (Ashmont or Braintree) if after at station 
	  south of JFK
	* each station Marker has the same custom icon.

2)
I collaborated with: 
	Tony Goss on fixing bugs related to nearest_station function.
	Conner Walsh on proper reading and formating of JSON file.
	Matt Fiedler, not really, but he asked me for help and I couldn't figure out his
		his problem.

I used a lot of help from the Google's documentation about how to use their API
I used stack overflow for help with javascript syntax.
I used w3c for understanding of javascript object functions.

3)
I probably spent anywhere from 15-20 hours on this project.

This project was very fun because the instant gratification of seeing your code 
properly implemented immediately when you add/fix a function. It was frustrating, 
however, because the fragility of variables and losing data or not reading data
properly. It was hard to know what aspect of the program was not working when a
box came up empty. I did not know if it was the reading in the JSON, the adding to
the variable, the calling of the variable, the returning, the assigning to the 
content section of the window or what. Ultimately, I figured each problem out but
it was frustrating for a while. I am very proud of the product however.