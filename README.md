#  INST 377 - Bus Helper App Final Report & Documentation

[Link to our Project Application](https://inst377group99.herokuapp.com/)  
[Link to User Manual](https://inst377group99.herokuapp.com/doc.html)  
[Link to Developer Manual](#developer-manual)  

<h2>The problem that this app addresses is how confusing it is to navigate the UMD bus system.</h2>

The audience we are looking to satisfy is anyone who needs to use the UMD Bus system. This could be students who are on campus everyday, or visits needing to find their way around campus for the first time. This app will be very helpful for people who do not know the UMD campus very well but still need to go to a specific building.Identified stakeholders/target browsers

<h2>We chose to work with bus data from the UMD.io dataset.</h2>

<h2>Description of target browsers</h2>

For our desktop version of the application, we focused mainly on compatibility with the Google Chrome browser, however, it should work with most modern web browsers including but not limited to Microsoft Edge, Mozilla Firefox, and Opera. For the mobile version of our application, we did not focus on a single mobile operating system, instead we used multiple instances of @media in order to make the application compatible with as many devices as possible. Such devices include those belonging to iOS such as the iPad and different variations of the iPhone, Android devices such as the Galaxy Fold and Pixel 2, as well as other devices like the Galaxy Duo.

<h2>Chosen strategies and solutions for the problem</h2>
  
When it comes to the strategies and solutions that we had for this problem, we thought a good way to help those who might be confused by the UMD bus system is by showing them what are the closest bus options they can take in order to reach their destination. We thought the best way to show this is on a map, which will show the person's location and the closest bus options they can take. By showing these details on a map, it makes it easier to see how far that person is from that bus stop. 

<h2>Technical system decision rationale</h2>

Our final system helps our audience because it helps show where the closest bus stop to their location is. Also, it has the functionality of getting all of the stops in College Park, so if the user wants more than just the stop closest to them and a larger picture, they can do that.

<h2>Challenges faced and impact on final design</h2>
  
One of the challenges that we faced was that we originally wanted to provide turn by turn directions from a person's location to the bus stop they wanted to go to. However this was something that we had issues with and were unable to incorporate it into the final design. The impact of this was that we were unable to put this feature into our website. Therefore in order to get turn by turn directions, the person would have to use another app. We also wanted to put a search bar on the map, that would allow someone to type in the location they want to go to and the the website will provide the directions to go that location. This was something that we also had issues with and the impact of not having this feature is that the person would have to use another app as well. We also wanted a navigation bar that displays when pressing a button however we were unable to add this. Therefore the impact of not having this on the final design is that the navigation bar is now on the top part of the screen when viewing it on a computer and in the bottom when viewing it on mobile. 

One possible next step for this application is to add an SQL database so that we do not need to send a request every time a user wanted to use a feature. We could also allow users to add custom points, and add the ability to instruct users which buses to get on or off and at which stops. Lastly, we could show all available routes from the person's location to the bus stop on the map.


--------------------
# Developer Manual
<h2>Functions:</h2> 
<h2>getStops;</h2> 
This functions takes in no values but using Ajax / XMLHttpRequest it request data from the umd.io/bus API. Then pushing the returned data to the next function the addStops.
<h2>addStops; </h2>
This function takes in the val data from the getStops function. Val is stops json element from the umd.io/bus API. We can then us that data to get the coordinates of each of the stops in the UMD bus system.
<h2>getNear;</h2>
This function uses to collect data used to help a user find the closest bus stop to them. Taking similar elements to the getStops function it collects the coordinates of stops, and the user it loops thru each stop, and measures the distance between these points
getDistance(lat1,long1,lat2,long2):
This function is used to measure the distance between points
<h2>closefirst;</h2>
Is used to get the location/coordinates of a user
<h2>makePoint;</h2>
Is a function that takes in the users location, and the closest point from the getNear(). These points are then user to draw a line from the close point to the users location.
<h2>clearMap;</h2>
This function reloads the page, and clears the map of the elements added by the user
<h2>getlocation;</h2>
The main function used to collect the coordinate position of a user

<h2>Setting up the project</h2>
Elements needed:
Node.js
Leaft.js
Server Deployment (Heroku)

Node.js installation:
1. Install the proper version of Node.js for your system using this link: [>Link<](https://nodejs.org/en/download/)
2. You can now download our current code by either forking our repository, or downloading the code from github itself.
3. Navigator to the folder when our app code is, and enter the command 'npm install'
4. Now you are to enter the command 'npm start' to run our application on your local host (127.0.0.1:8080)
5. Web Deployment: You could also decide to host the application on the web. To do this you will need to have a Heroku,AWS, or anyother webhosting site.
The webhosting site should then take care of updating the site with the latest code from you github or other repository

--------------------
# Data for Buses, and Routes:
"buses":'https://api.umd.io/v1/bus/routes'
"stops":"https://api.umd.io/v1/bus/stops"
'stopID':'https://api.umd.io/v1/bus/stops/{stop_ids}'
'routes':'https://api.umd.io/v1/bus/routes/{route_ids}'
'times':'https://api.umd.io/v1/bus/routes/{route_id}/schedules'
