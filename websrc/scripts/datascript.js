const apiBuses = "https://api.umd.io/v1/bus/routes"
const apiStops = "https://api.umd.io/v1/bus/stops"
const apirouteinfo = "https://api.umd.io/v1/bus/routes/"/*route id*/
const apistopidinfo = 'https://api.umd.io/v1/bus/stops/'/*stop id*/
const apitimesinfo = "https://api.umd.io/v1/bus/routes/{route_id}/schedules"

let routes = new Array();
let stops = new Array();

fetch(apiBuses)
    .then(blob => blob.json())
    .then(data => routes.push(...data))

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



/*
document.getElementById('stops').onclick = function(stops){
    var select = document.createElement('select');
    select.name = "stops"


    var label = document.createElement('label');
    label.innerHTML = "Choose your stop: ";
    label.htmlfor = "stops";

    document.getElementById("main-block").appendChild(label).appendChild(select);  
}
*/