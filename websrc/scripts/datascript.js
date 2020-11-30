const apiBuses = "https://api.umd.io/v1/bus/routes"
const apiStops = "https://api.umd.io/v1/bus/stops"
const apirouteinfo = "https://api.umd.io/v1/bus/routes/"/*route id*/
const apistopidinfo = 'https://api.umd.io/v1/bus/stops/'/*stop id*/
const apitimesinfo = "https://api.umd.io/v1/bus/routes/{route_id}/schedules"
let routes = new Array();
let stops = new Array();
//s
//
function getStops(){
fetch(apiStops)
    .then(response => response.json())
    .then(data => { 
        for (const val of data){
            fetch(apistopidinfo + val.stop_id)
                .then(info => info.json())
                .then(data => {
                    L.marker([data[0].lat,data[0].long]).addTo(mymap)
                    .bindPopup('Lets Get You Some Where')
                    .openPopup();
                });
        }
    });
}
function getNear(){
    let bestspot = [];
    let bestspot_Dist = 10000;
    let selfLat,selfLong = getlocation();
    fetch(apiStops)
    .then(response => response.json())
    .then(data => { 
        for (const val of data){
            fetch(apistopidinfo + val.stop_id)
                .then(info => info.json())
                .then(data => {
                    let new_dist = getDis(selfLat,selfLong,data[0].lat,data[0].long)
                    console.log(new_dist)
                    if (new_dist < bestspot_Dist){
                        bestspot = [data[0].lat,data[0].long];
                        bestspot_Dist = new_dist;
                    }else{
                        //Pass
                    }})
            }
        })
        console.log(bestspot);
};

//
function getDis(x1,y1,x2,y2){
    var xDiff = x1 - x2; 
    var yDiff = y1 - y2;
    var diff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    return diff
}



/*/
document.body.addEventListener('submit', async (e) => {
    e.preventDefault(); // this stops whatever the browser wanted to do itself.
    const form = $(e.target).serializeArray();
    fetch('/sql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    })
      .then((fromServer) => fromServer.json())
      .then((jsonFromServer) => console.log(jsonFromServer))
      .catch((err) => {
      console.log(err);
      });
  });
/*/