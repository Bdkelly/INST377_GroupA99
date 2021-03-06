#  INST 377 - Bus Helper App Final Report & Documentation

[Link to our Project Application](https://inst377group99.herokuapp.com/)  
[Link to User Manual](https://inst377group99.herokuapp.com/doc.html)  
[Link to Developer Manual](#developer-manual)  

<h2>The problem that this app addresses is how confusing it is to navigate the UMD bus system.</h2>

The audience we are looking to satisfy is anyone who needs to use the UMD Bus system. This could be students who are on campus everyday, or visits needing to find their way around campus for the first time. This app will be very helpful for people who do not know the UMD campus very well but still need to go to a specific building.

<h2>We chose to work with bus data from the UMD.io dataset.</h2>

<h2>Description of target browsers</h2>

For our desktop version of the application, we focused mainly on compatibility with the Google Chrome browser, however, it should work with most modern web browsers including but not limited to Microsoft Edge, Mozilla Firefox, and Opera. For the mobile version of our application, we did not focus on a single mobile operating system, instead we used multiple instances of @media in order to make the application compatible with as many devices as possible. Such devices include those belonging to iOS such as the iPad and different variations of the iPhone, Android devices such as the Galaxy Fold and Pixel 2, as well as other devices like the Galaxy Duo.

--------------------
# Developer Manual
<h2>Functions:</h2> 
<h3>getStops();</h3> 
This functions takes in no values but using Ajax / XMLHttpRequest it request data from the umd.io/bus API. Then pushing the returned data to the next function the addStops.
<h3>addStops(val); </h3>
This function takes in the val data from the getStops function. Val is stops json element from the umd.io/bus API. We can then us that data to get the coordinates of each of the stops in the UMD bus system.
<h3>getNear();</h3>
This function uses to collect data used to help a user find the closest bus stop to them. Taking similar elements to the getStops function it collects the coordinates of stops, and the user it loops thru each stop, and measures the distance between these points.
<h3>getDistance(lat1,long1,lat2,long2):</h3>
This function is used to measure the distance between points.
<h3>closefirst();</h3>
Is used to get the location/coordinates of a user.
<h3>makePoint(lat, lon, mylat, mylon, name);</h3>
Is a function that takes in the users location, and the closest point from the getNear(). These points are then user to draw a line from the close point to the users location.
<h3>clearMap();</h3>
This function reloads the page, and clears the map of the elements added by the user.
<h3>getlocation();</h3>
The main function used to collect the coordinate position of a user.

<h2>Setting up the project</h2>
Elements needed:
-Node.js
-Leaft.js
-Server Deployment (Heroku)

Node.js installation & Web Deployment:
1. Install the proper version of Node.js for your system using this link: [>Link<](https://nodejs.org/en/download/)
2. You can now download our current code by either forking our repository, or downloading the code from github itself.
3. Navigate to the folder where the application code is stored, and enter the command 'npm install'.
4. Now you are to enter the command 'npm start' to run our application on your local host (127.0.0.1:8080).
5. Web Deployment: You could also decide to host the application on the web. To do this you will need to have a Heroku, AWS, or any other webhosting site.
The webhosting site should then take care of updating the site with the latest code from your github or other repository.

<h2>Application Roadmap</h2>
<ul>
  <li>Add an SQL database so that we do not need to send a request every time a user wanted to use a feature.</li>
  <li>Allow users to add custom points, and add the ability for the application to instruct users which buses to get on or off, and at which stops.</li>
  <li>Show all available routes from the person’s location to the bus stop on the map </li>
</ul>

<h2>API endpoint for Buses, Stops and Routes data:</h2>
<ul>
  <li>'buses':'https://api.umd.io/v1/bus/routes' -> Holds {route_ids}</li>
  <li>'stops':'https://api.umd.io/v1/bus/stops' -> Holds {stop_ids}</li>
  <li>'stopID':'https://api.umd.io/v1/bus/stops/{stop_ids}'</li>
  <li>'routes':'https://api.umd.io/v1/bus/routes/{route_ids}'</li>
  <li>'times':'https://api.umd.io/v1/bus/routes/{route_id}/schedules'</li>
</ul>
<h3>API Get Requests</h3>
<p>Our project uses only API GET request recviveing stop, and route information from the our API</p>
<p>Below lists what each API GET returns, and how it should be called</p>
<ul>
  <li>'https://api.umd.io/v1/bus/routes' -> Will return all of the Bus route names/titles in json, or near json format these names must be used in future API calls</li>
  <li>'https://api.umd.io/v1/bus/stops' -> Will return all stop names, and title in json, or near json format these names must be used in future API calls</li>
  <li>'https://api.umd.io/v1/bus/stops/{stop_ids}' -> Will return JSON data of the stop specified using the stop_id from the 'https://api.umd.io/v1/bus/stops'</li>
  <li>'https://api.umd.io/v1/bus/routes/{routes_ids}' -> Will return JSON data of the stop specified using the route_id from the 'https://api.umd.io/v1/bus/routes'</li>
  <li>'https://api.umd.io/v1/bus/routes/{routes_ids}/schedules' -> Will return JSON data of the bus schedule for the route using the route_id from then 'https://api.umd.io/v1/bus/routes'</li>
