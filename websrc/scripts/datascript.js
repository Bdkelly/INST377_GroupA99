const apiBuses = 'https://api.umd.io/v1/bus/routes';
const apiStops = 'https://api.umd.io/v1/bus/stops';
const apirouteinfo = 'https://api.umd.io/v1/bus/routes/';/* route id */
const apistopidinfo = 'https://api.umd.io/v1/bus/stops/';/* stop id */
const apitimesinfo = 'https://api.umd.io/v1/bus/routes/{route_id}/schedules';
const routes = new Array();
const stops = new Array();
// s
//
function getStops() {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    fetch(apiStops)
        .then(response => response.json())
        .then(data => {
            for (const val of data) {
                fetch(apistopidinfo + val.stop_id)
                    .then(info => info.json())
                    .then(data => {
                        L.marker([data[0].lat, data[0].long]).addTo(mymap)
                            .bindPopup(`${val.title}`)
                            .openPopup();
                    });
            }
        });
}

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
        Promise.all(data).then(val => {
            
        })
    })
    //array.data.json()
    // for (const val of data){ 
    //         fetch(apistopidinfo + val.stop_id)
    //             .then(info => info.json())
    //             .then(data => {
    //                 let new_dist = getDistance(latLong[0],latLong[1],data[0].lat,data[0].long)
    //                 if (new_dist < bestspot_Dist){
    //                     console.log(new_dist)
    //                     bestspot[0] = data[0].lat;
    //                     bestspot[1] = data[0].long;
    //                     bestspot_Dist = new_dist;
    //                     name = val.title;
    //                     makePoint(bestspot[0],bestspot[1],latLong[0],latLong[1],name) 
    //                 }else{
    //                     //Pass
    //                 }
    //             });
    //         }
    //     })
    // };
}

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
function closefirst() {
    let latLong = [];
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            //console.log(typeof position.coords.latitude)
            latLong[0] = position.coords.latitude
            latLong[1] = position.coords.longitude
        });
    } else {
        /*No get*/
    }
    return latLong
}

function makePoint(lat, lon, mylat, mylon, name) {
    L.marker([lat, lon]).addTo(mymap)
        .bindPopup(`Best Point: ${name}`)
        .openPopup();
    L.polyline([[lat, lon], [mylat, mylon]]).addTo(mymap).bindPopup(`Best Point: ${name}`)
        .openPopup();
    getlocation()
}
=======
  fetch(apiStops)
    .then((response) => response.json())
    .then((data) => {
      for (const val of data) {
        fetch(apistopidinfo + val.stop_id)
          .then((info) => info.json())
          .then((data) => {
            L.marker([data[0].lat, data[0].long]).addTo(mymap)
              .bindPopup('Lets Get You Some Where')
              .openPopup();
          });
      }
    });
}

function getNear() {
  let bestspot = [];
  let bestspot_Dist = 10000;
  let selfLat; const selfLong = getlocation();
  fetch(apiStops)
    .then((response) => response.json())
    .then((data) => {
      for (const val of data) {
        fetch(apistopidinfo + val.stop_id)
          .then((info) => info.json())
          .then((data) => {
            const new_dist = getDis(selfLat, selfLong, data[0].lat, data[0].long);
            console.log(new_dist);
            if (new_dist < bestspot_Dist) {
              bestspot = [data[0].lat, data[0].long];
              bestspot_Dist = new_dist;
            } else {
              // Pass
            }
          });
      }
    });
  console.log(bestspot);
}

function getDis(x1, y1, x2, y2) {
  const xDiff = x1 - x2;
  const yDiff = y1 - y2;
  const diff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  return diff;
}

=======
  fetch(apiStops)
    .then((response) => response.json())
    .then((data) => {
      for (const val of data) {
        fetch(apistopidinfo + val.stop_id)
          .then((info) => info.json())
          .then((data) => {
            L.marker([data[0].lat, data[0].long]).addTo(mymap)
              .bindPopup('Lets Get You Some Where')
              .openPopup();
          });
      }
    });
}

function getNear() {
  let bestspot = [];
  let bestspot_Dist = 10000;
  let selfLat; const selfLong = getlocation();
  fetch(apiStops)
    .then((response) => response.json())
    .then((data) => {
      for (const val of data) {
        fetch(apistopidinfo + val.stop_id)
          .then((info) => info.json())
          .then((data) => {
            const new_dist = getDis(selfLat, selfLong, data[0].lat, data[0].long);
            console.log(new_dist);
            if (new_dist < bestspot_Dist) {
              bestspot = [data[0].lat, data[0].long];
              bestspot_Dist = new_dist;
            } else {
              // Pass
            }
          });
      }
    });
  console.log(bestspot);
}

function getDis(x1, y1, x2, y2) {
  const xDiff = x1 - x2;
  const yDiff = y1 - y2;
  const diff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  return diff;
}

>>>>>>> Stashed changes
/* /
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
<<<<<<< Updated upstream
/ */
>>>>>>> Stashed changes
=======
/ */
>>>>>>> Stashed changes
