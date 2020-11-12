const apiBuses = "https://api.umd.io/v1/bus/routes"
const apiStops = "https://api.umd.io/v1/bus/stops"
const apirouteinfo = "https://api.umd.io/v1/bus/routes/{route_ids}"
const apistopidinfo = 'https://api.umd.io/v1/bus/stops/{stop_ids}'
const apitimesinfo = "https://api.umd.io/v1/bus/routes/{route_id}/schedules"

const routes = [];
const stops = [];

fetch(apiBuses)
    .then(blob => blob.json())
    .then(data => routes.push(...data))
fetch(apiStops)
    .then(blob => blob.json())
    .then(data => stops.push(...data))

console.log(routes)
console.log(stops)
