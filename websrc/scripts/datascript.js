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
    let latLong = closefirst();
    fetch(apiStops)
    .then(response => response.json())
    .then(data => { 
        for (const val of data){ 
            fetch(apistopidinfo + val.stop_id)
                .then(info => info.json())
                .then(data => {
                    console.log(bestspot_Dist)
                    let new_dist = getDistance(latLong[0],latLong[1],data[0].lat,data[0].long)
                    console.log(new_dist)
                    if (new_dist < bestspot_Dist){
                        bestspot[0] = data[0].lat;
                        bestspot[1] = data[0].long;
                        bestspot_Dist = new_dist;
                        makePoint(bestspot)
                    }else{
                        //Pass
                    }
                })
            }
        })
};


function getDistance(lat1,lon1,lat2,lon2){
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c; // in metres
}
function closefirst(){
    let latLong = [];
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            //console.log(typeof position.coords.latitude)
            latLong[0] = position.coords.latitude
            latLong[1] = position.coords.longitude
        });
    } else { 
        /*No get*/
    }
    return latLong
}

function makePoint(latLong){
    L.circleMarker([latLong[0],latLong[1]]).setRadius(50).addTo(mymap)
            .bindPopup('Best Point')
            .openPopup();      
}