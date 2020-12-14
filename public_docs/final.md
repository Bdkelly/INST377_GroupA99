#  INST 377 - Bus Helper App Final Report & Documentation
Andrew Knox
Jonathan Ha
Benjamin Kelly
Ujwal Gupta
Chris Summers

[Link to our Project Application](https://inst377group99.herokuapp.com/)

<h3>Information problem we are trying to solve</h3>
The problem that this app addresses is how confusing it is to navigate the UMD bus system.

<h3>Our stakeholders</h3>
The audience we are looking to satisfy is anyone who needs to use the UMD Bus system. This could be students who are on campus everyday, or visits needing to find their way around campus for the first time. This app will be very helpful for people who do not know the UMD campus very well but still need to go to a specific building.

<h3>Description of target browsers</h3>
For our desktop version of the application, we focused mainly on compatibility with the Google Chrome browser, however, it should work with most modern web browsers including but not limited to Microsoft Edge, Mozilla Firefox, and Opera. For the mobile version of our application, we did not focus on a single mobile operating system, instead we used multiple instances of @media in order to make the application compatible with as many devices as possible. Such devices include those belonging to iOS such as the iPad and different variations of the iPhone, Android devices such as the Galaxy Fold and Pixel 2, as well as other devices like the Galaxy Duo.

<h3>Data we chose to work with</h3>
We chose to work with bus data from the UMD.io dataset.

<h3>Chosen strategies and solutions for the problem</h3>
When it comes to the strategies and solutions that we had for this problem, we thought a good way to help those who might be confused by the UMD bus system is by showing them what are the closest bus options they can take in order to reach their destination. We thought the best way to show this is on a map, which will show the person's location and the closest bus options they can take. By showing these details on a map, it makes it easier to see how far that person is from that bus stop. 

<h3>Technical system decision rationale</h3>
Our final system helps our audience because it helps show where the closest bus stop to their location is. Also, it has the functionality of getting all of the stops in College Park, so if the user wants more than just the stop closest to them and a larger picture, they can do that.

<h3>Challenges faced and impact on final design</h3>
One of the challenges that we faced was that we originally wanted to provide turn by turn directions from a person's location to the bus stop they wanted to go to. However this was something that we had issues with and were unable to incorporate it into the final design. The impact of this was that we were unable to put this feature into our website. Therefore in order to get turn by turn directions, the person would have to use another app. We also wanted to put a search bar on the map, that would allow someone to type in the location they want to go to and the the website will provide the directions to go that location. This was something that we also had issues with and the impact of not having this feature is that the person would have to use another app as well. We also wanted a navigation bar that displays when pressing a button however we were unable to add this. Therefore the impact of not having this on the final design is that the navigation bar is now on the top part of the screen when viewing it on a computer and in the bottom when viewing it on mobile. 

<h3>Possible future work directions with this problem</h3>
One possible next step for this application is to add an SQL database so that we do not need to send a request every time a user wanted to use a feature. We could also allow users to add custom points, and add the ability to instruct users which buses to get on or off and at which stops. Lastly, we could show all available routes from the person's location to the bus stop on the map.




Documentation needs to be written in Markdown (MD) files, nicely formatted (they are legible on Github in a way PDFs are not on Canvas)

Documentation should be included to each team’s final code submission.

Documentation should be saved in your main project directory under "docs"