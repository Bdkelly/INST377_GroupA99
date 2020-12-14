//URL link for API data
const apiBuses = 'https://api.umd.io/v1/bus/routes';
const apiStops = 'https://api.umd.io/v1/bus/stops';
const apirouteinfo = 'https://api.umd.io/v1/bus/routes/';/* route id */
const apistopidinfo = 'https://api.umd.io/v1/bus/stops/';/* stop id */
const apitimesinfo = 'https://api.umd.io/v1/bus/routes/{route_id}/schedules';
//Gets All stop location with the API
function getStops(){
    var firstQuest = new XMLHttpRequest();
    firstQuest.open('Get',apiStops);
    firstQuest.onload = function(){
    var jsondata = JSON.parse(firstQuest.responseText);
    for (const val of jsondata) {
        addStops(val)
        }
    }
    firstQuest.send();
}
//Adds to getStops function
function addStops(val){
    var stopQuest = new XMLHttpRequest();
    stopQuest.open('Get',apistopidinfo + val.stop_id)
    stopQuest.onload = function(){
        var result = JSON.parse(stopQuest.responseText);
        console.log(result[0].lat, result[0].long)
        L.marker([result[0].lat, result[0].long]).addTo(mymap)
            .bindPopup(`${val.title}`)
            .openPopup();
    };
    stopQuest.send();
}
//Get the closest stop to a person's geolocation
async function getNear() {
    let bestspot = [];
    let new_dist = 0.0
    let bestspot_Dist = 10000;
    let latLong = closefirst();
    let name = ''
    console.log(latLong)
    const allStops = await fetch(apiStops)
    const data = await allStops.json()
    const stopCollection = async () => {
        return Promise.all(
            data.map(async (m) => {
                return await fetch(apistopidinfo + m.stop_id)
            })
        )
    }
    stopCollection().then(data => {
        Promise.all(data.map(val => {
            const newJ = val.json()
            newJ.then(function(result){
                stopLat = result[0].lat
                stopLon = result[0].long
                let new_dist = getDistance(latLong[0],latLong[1],stopLat,stopLon)
                     if (new_dist < bestspot_Dist){
                         bestspot[0] = stopLat;
                         bestspot[1] = stopLon;
                         bestspot_Dist = new_dist;
                         name = result[0].title;
                     }else{
                         //Pass
                     }
                if (result[0].stop_id === 'bowiuniv'){
                    makePoint(bestspot[0],bestspot[1],latLong[0],latLong[1],name)
                }
            })
        }))
    })
}
//Measures the distance between the user, and a stop
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    return d
}
//Gets user location for the getNear function
function closefirst() {
    let latLong = [];
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            latLong[0] = position.coords.latitude
            latLong[1] = position.coords.longitude
        });
    }else {
        /*No get*/
    }
    return latLong
}
//Add point, and line for getNear function
function makePoint(lat, lon, mylat, mylon, name) {
    L.marker([lat, lon]).addTo(mymap)
        .bindPopup(`Best Point: ${name}`)
        .openPopup();
    L.polyline([[lat, lon], [mylat, mylon]]).addTo(mymap).bindPopup(`Best Point: ${name}`)
        .openPopup();
    getlocation()
}
//Reloads webpage to clear map
function clearMap(){
    location.reload();
}
