#  INST 377 - Bus Helper App Final Report & Documentation
Andrew Knox
Jonathan Ha
Benjamin Kelly
Ujwal Gupta
Chris Summers

[Link to our Project Application](https://inst377group99.herokuapp.com/)

The problem that this app addresses is how confusing it is to navigate the UMD bus system.

The audience we are looking to satisfy is anyone who needs to use the UMD Bus system. This could be students who are on campus everyday, or visits needing to find their way around campus for the first time. This app will be very helpful for people who do not know the UMD campus very well but still need to go to a specific building.Identified stakeholders/target browsers

We chose to work with bus data from the UMD.io dataset.

Chosen strategies and solutions for the problem

Technical system decision rationale

Our final system helps our audience because it helps show where the closest bus stop to their location is. Also, it has the functionality of getting all of the stops in College Park, so if the user wants more than just the stop closest to them and a larger picture, they can do that.

Challenges faced and impact on final design

One possible next step for this application is to add an SQL database so that we do not need to send a request every time a user wanted to use a feature. We could also allow users to add custom points, and add the ability to instruct users which buses to get on or off and at which stops. Lastly, we could show all available routes from the person's location to the bus stop on the map.


Documentation needs to be written in Markdown (MD) files, nicely formatted (they are legible on Github in a way PDFs are not on Canvas)

Documentation should be included to each team’s final code submission.

Documentation should be saved in your main project directory under "docs"


--------------------
Data for Buses, and Routes:
---
"buses":'https://api.umd.io/v1/bus/routes'
"stops":"https://api.umd.io/v1/bus/stops"
'stopID':'https://api.umd.io/v1/bus/stops/{stop_ids}'
'routes':'https://api.umd.io/v1/bus/routes/{route_ids}'
'times':'https://api.umd.io/v1/bus/routes/{route_id}/schedules'
